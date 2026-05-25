// ═══════════════════════════════════════════════════════
//  DM Quiz — Application Logic
//  Features: Quiz engine, performance tracking, weak area detection
// ═══════════════════════════════════════════════════════

(function () {
  "use strict";

  // ─── Storage Keys ───
  const STORAGE_KEY = "dm_quiz_data";

  // ─── State ───
  let state = {
    selectedTopics: [],
    currentQuiz: null,       // { questions, currentIndex, answers, startTime }
    data: loadData(),
  };

  // ─── Data Persistence ───
  function loadData() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        // Ensure structure
        return {
          questionStats: parsed.questionStats || {},
          history: parsed.history || [],
          totalAttempted: parsed.totalAttempted || 0,
          totalCorrect: parsed.totalCorrect || 0,
        };
      }
    } catch (e) {
      console.warn("Failed to load data:", e);
    }
    return { questionStats: {}, history: [], totalAttempted: 0, totalCorrect: 0 };
  }

  function saveData() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.data));
    } catch (e) {
      console.warn("Failed to save data:", e);
    }
  }

  // ─── DOM Refs ───
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  // ─── Navigation ───
  function initNav() {
    $$(".nav-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        const view = tab.dataset.view;
        switchView(view);
      });
    });
  }

  function switchView(viewName) {
    $$(".nav-tab").forEach((t) => t.classList.remove("active"));
    $(`.nav-tab[data-view="${viewName}"]`).classList.add("active");

    $$(".view").forEach((v) => v.classList.remove("active"));
    $(`#view-${viewName}`).classList.add("active");

    if (viewName === "dashboard") renderDashboard();
    if (viewName === "review") renderHistory();
  }

  // ═══════════════════════════════════════════
  //  TOPIC SELECTOR
  // ═══════════════════════════════════════════
  function renderTopicSelector() {
    const grid = $("#topicGrid");
    grid.innerHTML = "";

    // "All Topics" card
    const allCard = document.createElement("div");
    allCard.className = "topic-card all-topics";
    allCard.dataset.topic = "all";
    allCard.innerHTML = `
      <span class="topic-icon">🎯</span>
      <div class="topic-name">All Topics</div>
      <div class="topic-lab">MIXED QUIZ</div>
      <div class="topic-count">${QUESTIONS.length} questions</div>
    `;
    allCard.addEventListener("click", () => toggleTopic("all"));
    grid.appendChild(allCard);

    // Individual topic cards
    Object.entries(TOPICS).forEach(([key, meta]) => {
      const count = QUESTIONS.filter((q) => q.topic === key).length;
      const card = document.createElement("div");
      card.className = "topic-card";
      card.dataset.topic = key;
      card.innerHTML = `
        <span class="topic-icon">${meta.icon}</span>
        <div class="topic-name">${meta.shortLabel}</div>
        <div class="topic-lab">${meta.labSheet}</div>
        <div class="topic-count">${count} questions</div>
      `;
      card.addEventListener("click", () => toggleTopic(key));
      grid.appendChild(card);
    });

    // Check if there are weak questions to show the button
    updateWeakQuizButton();
  }

  function toggleTopic(topic) {
    if (topic === "all") {
      // Select/deselect all
      const allSelected = state.selectedTopics.length === Object.keys(TOPICS).length;
      if (allSelected) {
        state.selectedTopics = [];
      } else {
        state.selectedTopics = Object.keys(TOPICS);
      }
    } else {
      const idx = state.selectedTopics.indexOf(topic);
      if (idx > -1) {
        state.selectedTopics.splice(idx, 1);
      } else {
        state.selectedTopics.push(topic);
      }
    }
    updateTopicUI();
  }

  function updateTopicUI() {
    $$(".topic-card").forEach((card) => {
      const t = card.dataset.topic;
      if (t === "all") {
        card.classList.toggle(
          "selected",
          state.selectedTopics.length === Object.keys(TOPICS).length
        );
      } else {
        card.classList.toggle("selected", state.selectedTopics.includes(t));
      }
    });

    $("#btnStartQuiz").disabled = state.selectedTopics.length === 0;
  }

  function updateWeakQuizButton() {
    const weakQs = getWeakQuestions();
    const btn = $("#btnWeakQuiz");
    // Always show the button, but disable when no weak questions
    btn.style.display = "inline-flex";
    if (weakQs.length >= 1) {
      btn.disabled = false;
      btn.innerHTML = `🔥 Focus on Weak Areas (${weakQs.length})`;
    } else {
      btn.disabled = true;
      btn.innerHTML = `🔥 No Weak Areas Yet`;
    }
    // Update dashboard notification dot
    updateDashboardNotif();
  }

  function updateDashboardNotif() {
    const weakQs = getWeakQuestions();
    const tab = $("#tab-dashboard");
    let dot = tab.querySelector(".notif-dot");
    if (weakQs.length >= 1) {
      if (!dot) {
        dot = document.createElement("span");
        dot.className = "notif-dot";
        tab.appendChild(dot);
      }
    } else {
      if (dot) dot.remove();
    }
  }

  function renderFocusBanner() {
    const weakQs = getWeakQuestions();
    const banner = $("#focusBanner");
    if (!banner) return;

    if (weakQs.length >= 1) {
      banner.style.display = "block";
      const desc = $("#focusBannerDesc");
      const topicCounts = {};
      weakQs.forEach(q => {
        const label = TOPICS[q.topic].shortLabel;
        topicCounts[label] = (topicCounts[label] || 0) + 1;
      });
      const topicSummary = Object.entries(topicCounts)
        .map(([name, count]) => `${count} in ${name}`)
        .join(", ");
      desc.textContent = `${weakQs.length} weak question${weakQs.length > 1 ? 's' : ''} found — ${topicSummary}`;
    } else {
      banner.style.display = "none";
    }
  }

  function startFocusQuizFromDashboard() {
    const weakQs = getWeakQuestions();
    if (weakQs.length < 1) return;
    // Switch to quiz view and start immediately
    switchView("quiz");
    startQuiz(weakQs);
  }

  // ═══════════════════════════════════════════
  //  QUIZ ENGINE
  // ═══════════════════════════════════════════
  function startQuiz(questionPool) {
    const lengthSetting = parseInt($("#quizLength").value);
    const shouldShuffle = $("#shuffleOptions").checked;

    // Prioritize new and wrong questions
    let pool = [...questionPool].sort((a, b) => {
      const statA = state.data.questionStats[a.id];
      const statB = state.data.questionStats[b.id];

      const getPriorityScore = (stat) => {
        // High priority for new/unattempted questions
        if (!stat || stat.attempts === 0) return 1000;
        
        // For attempted questions, prioritize based on how often they get it wrong
        const accuracy = stat.correct / stat.attempts;
        const accuracyScore = (1 - accuracy) * 100; // Lower accuracy = higher score
        
        // Add bonus points for the sheer number of times they got it wrong
        return accuracyScore + (stat.wrong * 5); 
      };

      const scoreA = getPriorityScore(statA);
      const scoreB = getPriorityScore(statB);

      // Sort descending (highest priority first). If same score, randomize slightly.
      if (scoreA === scoreB) return Math.random() - 0.5;
      return scoreB - scoreA;
    });

    // Limit pool to selected length
    if (lengthSetting > 0 && pool.length > lengthSetting) {
      pool = pool.slice(0, lengthSetting);
    }

    // Shuffle the final selected questions so the order isn't completely predictable
    pool = shuffleArray(pool);

    // Optionally shuffle each question's options
    if (shouldShuffle) {
      pool = pool.map((q) => {
        const indices = q.options.map((_, i) => i);
        const shuffled = shuffleArray(indices);
        return {
          ...q,
          _displayOptions: shuffled.map((i) => q.options[i]),
          _correctDisplay: shuffled.indexOf(q.correct),
        };
      });
    } else {
      pool = pool.map((q) => ({
        ...q,
        _displayOptions: [...q.options],
        _correctDisplay: q.correct,
      }));
    }

    state.currentQuiz = {
      questions: pool,
      currentIndex: 0,
      answers: [],
      startTime: Date.now(),
      streak: 0,
      maxStreak: 0,
    };

    // Hide selector, show quiz area
    $("#topicSelector").style.display = "none";
    $("#quizArea").classList.add("active");
    $("#resultsScreen").style.display = "none";

    renderQuestion();
  }

  function renderQuestion() {
    const quiz = state.currentQuiz;
    const q = quiz.questions[quiz.currentIndex];
    const total = quiz.questions.length;
    const idx = quiz.currentIndex;

    // Progress
    const pct = ((idx) / total) * 100;
    $("#progressFill").style.width = pct + "%";
    $("#progressText").textContent = `${idx + 1} / ${total}`;
    const correctSoFar = quiz.answers.filter((a) => a.correct).length;
    $("#scoreLive").textContent = `✓ ${correctSoFar}`;

    // Streak
    if (quiz.streak >= 3) {
      $("#streakIndicator").style.display = "inline-flex";
      $("#streakCount").textContent = quiz.streak;
    } else {
      $("#streakIndicator").style.display = "none";
    }

    // Topic tag class
    const tagClass =
      q.topic === "permutations-combinations" ? "tag-pc" :
      q.topic === "recursion" ? "tag-rc" :
      q.topic === "graphs" ? "tag-gr" : "tag-tr";

    const diffClass =
      q.difficulty === "easy" ? "diff-easy" :
      q.difficulty === "medium" ? "diff-medium" : "diff-hard";

    const container = $("#questionContainer");
    container.innerHTML = `
      <div class="question-card">
        <div class="question-meta">
          <span class="question-topic-tag ${tagClass}">${TOPICS[q.topic].labSheet} · ${TOPICS[q.topic].shortLabel}</span>
          <span class="question-difficulty ${diffClass}">${q.difficulty}</span>
        </div>
        <div class="question-text">${escapeAndFormatCode(q.question)}</div>
        <div class="options-list" id="optionsList">
          ${q._displayOptions
            .map(
              (opt, i) => `
            <button class="option-btn" data-index="${i}" id="opt-${i}">
              <span class="option-letter">${String.fromCharCode(65 + i)}</span>
              <span class="option-text">${escapeAndFormatCode(opt)}</span>
            </button>
          `
            )
            .join("")}
        </div>
        <div id="explanationArea"></div>
        <div class="question-actions" id="questionActions" style="display:none;">
          <button class="btn btn-primary btn-sm" id="btnNextQ">
            ${idx < total - 1 ? "Next →" : "Finish Quiz →"}
          </button>
        </div>
      </div>
    `;

    // Attach option handlers
    $$(".option-btn").forEach((btn) => {
      btn.addEventListener("click", () => handleAnswer(parseInt(btn.dataset.index)));
    });
  }

  function handleAnswer(selectedIndex) {
    const quiz = state.currentQuiz;
    const q = quiz.questions[quiz.currentIndex];
    const isCorrect = selectedIndex === q._correctDisplay;

    // Record answer
    quiz.answers.push({
      questionId: q.id,
      selectedIndex,
      correct: isCorrect,
    });

    // Streak
    if (isCorrect) {
      quiz.streak++;
      if (quiz.streak > quiz.maxStreak) quiz.maxStreak = quiz.streak;
    } else {
      quiz.streak = 0;
    }

    // Update streak display
    if (quiz.streak >= 3) {
      $("#streakIndicator").style.display = "inline-flex";
      $("#streakCount").textContent = quiz.streak;
    } else {
      $("#streakIndicator").style.display = "none";
    }

    // Update stats
    updateQuestionStat(q.id, isCorrect);

    // Visual feedback
    $$(".option-btn").forEach((btn, i) => {
      btn.classList.add("answered");
      if (i === q._correctDisplay) {
        btn.classList.add("correct");
      }
      if (i === selectedIndex && !isCorrect) {
        btn.classList.add("wrong");
      }
    });

    // Show explanation
    const explArea = $("#explanationArea");
    explArea.innerHTML = `
      <div class="explanation-box">
        <span class="explain-label">${isCorrect ? "✓ CORRECT" : "✗ INCORRECT"} — EXPLANATION</span>
        ${q.explanation}
      </div>
    `;

    // Show next button
    const actions = $("#questionActions");
    actions.style.display = "flex";
    const btnNext = $("#btnNextQ");
    btnNext.addEventListener("click", () => {
      quiz.currentIndex++;
      if (quiz.currentIndex < quiz.questions.length) {
        renderQuestion();
      } else {
        finishQuiz();
      }
    });

    // Update live score
    const correctSoFar = quiz.answers.filter((a) => a.correct).length;
    $("#scoreLive").textContent = `✓ ${correctSoFar}`;
    const pct = ((quiz.currentIndex + 1) / quiz.questions.length) * 100;
    $("#progressFill").style.width = pct + "%";
  }

  function updateQuestionStat(questionId, isCorrect) {
    if (!state.data.questionStats[questionId]) {
      state.data.questionStats[questionId] = {
        attempts: 0,
        correct: 0,
        wrong: 0,
        lastAttempt: null,
      };
    }
    const stat = state.data.questionStats[questionId];
    stat.attempts++;
    if (isCorrect) stat.correct++;
    else stat.wrong++;
    stat.lastAttempt = Date.now();

    state.data.totalAttempted++;
    if (isCorrect) state.data.totalCorrect++;
    saveData();
  }

  function finishQuiz() {
    const quiz = state.currentQuiz;
    const total = quiz.questions.length;
    const correct = quiz.answers.filter((a) => a.correct).length;
    const wrong = total - correct;
    const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
    const elapsed = Math.round((Date.now() - quiz.startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;

    // Save to history
    const topicsUsed = [...new Set(quiz.questions.map((q) => q.topic))];
    state.data.history.unshift({
      date: new Date().toISOString(),
      total,
      correct,
      wrong,
      percentage: pct,
      topics: topicsUsed,
      timeSeconds: elapsed,
      maxStreak: quiz.maxStreak,
    });

    // Keep only last 50 entries
    if (state.data.history.length > 50) {
      state.data.history = state.data.history.slice(0, 50);
    }

    saveData();

    // Hide quiz, show results
    $("#quizArea").classList.remove("active");
    const resultsScreen = $("#resultsScreen");
    resultsScreen.style.display = "block";

    // Color based on score
    const scoreColor =
      pct >= 80 ? "var(--accent-green)" :
      pct >= 50 ? "var(--accent-yellow)" : "var(--error)";

    resultsScreen.innerHTML = `
      <div class="score-circle" style="--score-pct:${pct}%; border: 3px solid ${scoreColor}22; background: ${scoreColor}08;">
        <span class="score-pct" style="color:${scoreColor}">${pct}%</span>
        <span class="score-label">Score</span>
      </div>

      <div class="results-summary">
        <div class="result-stat correct-stat">
          <span class="stat-value">${correct}</span>
          <span class="stat-label">Correct</span>
        </div>
        <div class="result-stat wrong-stat">
          <span class="stat-value">${wrong}</span>
          <span class="stat-label">Wrong</span>
        </div>
        <div class="result-stat total-stat">
          <span class="stat-value">${minutes}:${String(seconds).padStart(2, "0")}</span>
          <span class="stat-label">Time</span>
        </div>
      </div>

      ${quiz.maxStreak >= 3 ? `
        <div style="margin-bottom:1.5rem;">
          <span class="streak-indicator" style="font-size:14px;">
            <span class="streak-fire">🔥</span>
            Best streak: ${quiz.maxStreak}
          </span>
        </div>
      ` : ""}

      <div class="results-actions">
        <button class="btn btn-primary" id="btnRetryQuiz">🔄 New Quiz</button>
        <button class="btn btn-secondary" id="btnViewDashboard">📊 Dashboard</button>
        ${getWeakQuestions().length >= 2 ? `
          <button class="btn btn-weak" id="btnRetryWeak">🔥 Focus Weak Areas</button>
        ` : ""}
      </div>
    `;

    // Confetti on good score
    if (pct >= 80) spawnConfetti();

    // Attach result actions
    $("#btnRetryQuiz").addEventListener("click", () => {
      resetQuizView();
    });

    $("#btnViewDashboard").addEventListener("click", () => {
      resetQuizView();
      switchView("dashboard");
    });

    const btnWeak = $("#btnRetryWeak");
    if (btnWeak) {
      btnWeak.addEventListener("click", () => {
        const weakQs = getWeakQuestions();
        resetQuizView();
        startQuiz(weakQs);
      });
    }
  }

  function resetQuizView() {
    state.currentQuiz = null;
    $("#topicSelector").style.display = "block";
    $("#quizArea").classList.remove("active");
    $("#resultsScreen").style.display = "none";
    updateWeakQuizButton();
  }

  // ═══════════════════════════════════════════
  //  WEAK AREA DETECTION
  // ═══════════════════════════════════════════
  function getWeakQuestions() {
    return QUESTIONS.filter((q) => {
      const stat = state.data.questionStats[q.id];
      return stat && stat.wrong >= 2;
    });
  }

  function getTopicStats() {
    const stats = {};
    Object.keys(TOPICS).forEach((topic) => {
      const topicQs = QUESTIONS.filter((q) => q.topic === topic);
      let attempted = 0;
      let correct = 0;
      let wrong = 0;

      topicQs.forEach((q) => {
        const s = state.data.questionStats[q.id];
        if (s) {
          attempted += s.attempts;
          correct += s.correct;
          wrong += s.wrong;
        }
      });

      stats[topic] = {
        totalQuestions: topicQs.length,
        attempted,
        correct,
        wrong,
        accuracy: attempted > 0 ? Math.round((correct / attempted) * 100) : null,
      };
    });
    return stats;
  }

  // ═══════════════════════════════════════════
  //  DASHBOARD
  // ═══════════════════════════════════════════
  function renderDashboard() {
    const data = state.data;
    const totalAccuracy =
      data.totalAttempted > 0
        ? Math.round((data.totalCorrect / data.totalAttempted) * 100)
        : 0;

    // Overview
    const overviewGrid = $("#overviewGrid");
    overviewGrid.innerHTML = `
      <div class="overview-card ov-accuracy">
        <span class="ov-value">${data.totalAttempted > 0 ? totalAccuracy + "%" : "—"}</span>
        <span class="ov-label">Accuracy</span>
      </div>
      <div class="overview-card ov-total">
        <span class="ov-value">${data.totalAttempted}</span>
        <span class="ov-label">Attempted</span>
      </div>
      <div class="overview-card ov-correct">
        <span class="ov-value">${data.totalCorrect}</span>
        <span class="ov-label">Correct</span>
      </div>
      <div class="overview-card ov-wrong">
        <span class="ov-value">${data.totalAttempted - data.totalCorrect}</span>
        <span class="ov-label">Wrong</span>
      </div>
    `;

    // Topic breakdown
    const topicStats = getTopicStats();
    const breakdown = $("#topicBreakdown");
    breakdown.innerHTML = "";

    // Find weakest topic
    let weakestTopic = null;
    let weakestAccuracy = 101;
    Object.entries(topicStats).forEach(([topic, stats]) => {
      if (stats.accuracy !== null && stats.accuracy < weakestAccuracy) {
        weakestAccuracy = stats.accuracy;
        weakestTopic = topic;
      }
    });

    Object.entries(topicStats).forEach(([topic, stats]) => {
      const meta = TOPICS[topic];
      const isWeak = topic === weakestTopic && weakestAccuracy < 70 && stats.attempted > 0;
      const barColor = meta.color;
      const accuracy = stats.accuracy !== null ? stats.accuracy : 0;

      const card = document.createElement("div");
      card.className = `topic-stat-card${isWeak ? " weak-topic" : ""}`;
      card.dataset.topic = topic;
      card.innerHTML = `
        <div class="topic-stat-head">
          <span class="ts-name">
            ${meta.shortLabel}
            ${isWeak ? '<span class="weak-badge">WEAK</span>' : ""}
          </span>
          <span class="ts-icon">${meta.icon}</span>
        </div>
        <div class="topic-stat-bar">
          <div class="topic-stat-bar-fill" style="width:${accuracy}%; background:${barColor};"></div>
        </div>
        <div class="topic-stat-details">
          <span>${stats.correct}/${stats.attempted} correct</span>
          <span class="ts-pct" style="color:${accuracy >= 70 ? "var(--accent-green)" : accuracy >= 40 ? "var(--accent-yellow)" : "var(--error)"}">${stats.accuracy !== null ? accuracy + "%" : "No data"}</span>
        </div>
      `;
      breakdown.appendChild(card);
    });

    // Focus Mode banner
    renderFocusBanner();

    // Weak questions
    renderWeakQuestions();
  }

  function renderWeakQuestions() {
    const weakQs = getWeakQuestions();
    const section = $("#weakQuestionsSection");
    const list = $("#weakQList");

    if (weakQs.length === 0) {
      list.innerHTML = `
        <div class="empty-state" style="padding:2rem;">
          <span class="empty-icon">✨</span>
          <h3>No weak questions yet</h3>
          <p>Questions you answer wrong 2+ times will appear here</p>
        </div>
      `;
      return;
    }

    // Sort by most wrong first
    const sorted = weakQs.sort((a, b) => {
      const sA = state.data.questionStats[a.id];
      const sB = state.data.questionStats[b.id];
      return (sB?.wrong || 0) - (sA?.wrong || 0);
    });

    list.innerHTML = sorted
      .map((q) => {
        const stat = state.data.questionStats[q.id];
        const meta = TOPICS[q.topic];
        return `
        <div class="weak-q-item">
          <span class="weak-q-times">${stat.wrong}× wrong</span>
          <div class="weak-q-text">
            ${escapeAndFormatCode(q.question)}
            <span class="weak-q-topic">${meta.labSheet} · ${meta.shortLabel}</span>
          </div>
        </div>
      `;
      })
      .join("");
  }

  // ═══════════════════════════════════════════
  //  HISTORY / REVIEW
  // ═══════════════════════════════════════════
  function renderHistory() {
    const list = $("#historyList");
    const history = state.data.history;

    if (history.length === 0) {
      list.innerHTML = `
        <div class="empty-state">
          <span class="empty-icon">📝</span>
          <h3>No quiz history yet</h3>
          <p>Complete your first quiz to see results here</p>
        </div>
      `;
      return;
    }

    list.innerHTML = history
      .map((entry, i) => {
        const date = new Date(entry.date);
        const dateStr = date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        });
        const scoreColor =
          entry.percentage >= 80 ? "var(--accent-green)" :
          entry.percentage >= 50 ? "var(--accent-yellow)" : "var(--error)";

        const minutes = Math.floor(entry.timeSeconds / 60);
        const seconds = entry.timeSeconds % 60;

        return `
        <div class="history-item">
          <div class="history-top">
            <span class="history-date">${dateStr}</span>
            <span class="history-score" style="color:${scoreColor}">${entry.percentage}% (${entry.correct}/${entry.total})</span>
          </div>
          <div style="display:flex; align-items:center; justify-content:space-between;">
            <div class="history-topics">
              ${entry.topics
                .map((t) => {
                  const meta = TOPICS[t];
                  return meta
                    ? `<span class="history-topic-chip">${meta.labSheet}</span>`
                    : "";
                })
                .join("")}
            </div>
            <span style="font-size:12px; color:var(--text-muted);">${minutes}:${String(seconds).padStart(2, "0")}</span>
          </div>
        </div>
      `;
      })
      .join("");
  }

  // ═══════════════════════════════════════════
  //  UTILITY FUNCTIONS
  // ═══════════════════════════════════════════
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function escapeAndFormatCode(text) {
    // Wrap backtick-enclosed text in <code> tags
    return text.replace(/`([^`]+)`/g, "<code>$1</code>");
  }

  function spawnConfetti() {
    const colors = ["#4fffb0", "#4db8ff", "#ff7c5c", "#c77dff", "#ffd166", "#ff6b9d"];
    for (let i = 0; i < 40; i++) {
      const piece = document.createElement("div");
      piece.className = "confetti-piece";
      piece.style.left = Math.random() * 100 + "vw";
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDuration = 2 + Math.random() * 2 + "s";
      piece.style.animationDelay = Math.random() * 0.5 + "s";
      document.body.appendChild(piece);
      setTimeout(() => piece.remove(), 4500);
    }
  }

  // ═══════════════════════════════════════════
  //  EVENT BINDINGS
  // ═══════════════════════════════════════════
  function bindEvents() {
    // Start quiz
    $("#btnStartQuiz").addEventListener("click", () => {
      if (state.selectedTopics.length === 0) return;
      const pool = QUESTIONS.filter((q) =>
        state.selectedTopics.includes(q.topic)
      );
      if (pool.length === 0) return;
      startQuiz(pool);
    });

    // Weak quiz from Quiz page
    $("#btnWeakQuiz").addEventListener("click", () => {
      const weakQs = getWeakQuestions();
      if (weakQs.length < 1) return;
      startQuiz(weakQs);
    });

    // Weak quiz from Dashboard Focus banner
    $("#btnDashboardFocus").addEventListener("click", () => {
      startFocusQuizFromDashboard();
    });

    // Settings toggle
    $("#btnQuizSettings").addEventListener("click", () => {
      const panel = $("#settingsPanel");
      panel.style.display = panel.style.display === "none" ? "block" : "none";
    });

    // Reset data
    $("#btnResetData").addEventListener("click", () => {
      if (confirm("Are you sure? This will clear ALL your quiz history and performance data.")) {
        localStorage.removeItem(STORAGE_KEY);
        state.data = loadData();
        renderDashboard();
        renderHistory();
        updateWeakQuizButton();
        alert("All data has been reset.");
      }
    });
  }

  // ═══════════════════════════════════════════
  //  INITIALIZATION
  // ═══════════════════════════════════════════
  function init() {
    initNav();
    renderTopicSelector();
    bindEvents();
  }

  // Boot
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
