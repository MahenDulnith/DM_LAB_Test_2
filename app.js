// ═══════════════════════════════════════════════════════
//  Learning Hub — Application Logic
//  Features: Multi-subject quiz engine, performance tracking, weak area detection
// ═══════════════════════════════════════════════════════

(function () {
  "use strict";

  // ─── Storage Keys ───
  const STORAGE_KEY = "learning_hub_data";

  // ─── State ───
  let state = {
    selectedSubject: null,
    selectedTopics: [],
    currentQuiz: null,       // { questions, currentIndex, answers, startTime }
    data: loadData(),
  };

  // ─── Data Persistence ───
  function loadData() {
    try {
      // Try new key first, then fall back to old key for migration
      let raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        raw = localStorage.getItem("dm_quiz_data");
        if (raw) {
          // Migrate old data to new key
          localStorage.setItem(STORAGE_KEY, raw);
          localStorage.removeItem("dm_quiz_data");
        }
      }
      if (raw) {
        const parsed = JSON.parse(raw);
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

  // ─── Helper: Get topics for a subject ───
  function getTopicsForSubject(subjectKey) {
    return Object.entries(TOPICS).filter(([, meta]) => meta.subject === subjectKey);
  }

  // ─── Helper: Get questions for a subject ───
  function getQuestionsForSubject(subjectKey) {
    const topicKeys = getTopicsForSubject(subjectKey).map(([key]) => key);
    return QUESTIONS.filter((q) => topicKeys.includes(q.topic));
  }

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
  //  SUBJECT SELECTOR
  // ═══════════════════════════════════════════
  function renderSubjectSelector() {
    const grid = $("#subjectGrid");
    grid.innerHTML = "";

    Object.entries(SUBJECTS).forEach(([key, meta]) => {
      const questionCount = getQuestionsForSubject(key).length;
      const topicCount = getTopicsForSubject(key).length;

      const card = document.createElement("div");
      card.className = "subject-card";
      card.style.setProperty("--subject-color", meta.color);
      card.innerHTML = `
        <div class="subject-card-icon">${meta.icon}</div>
        <div class="subject-card-body">
          <div class="subject-card-code">${meta.code}</div>
          <div class="subject-card-name">${meta.label}</div>
          <div class="subject-card-desc">${meta.description}</div>
          <div class="subject-card-stats">
            <span>${questionCount} questions</span>
            <span>·</span>
            <span>${topicCount} topics</span>
          </div>
        </div>
      `;
      card.addEventListener("click", () => selectSubject(key));
      grid.appendChild(card);
    });
  }

  function selectSubject(subjectKey) {
    state.selectedSubject = subjectKey;
    state.selectedTopics = [];

    const meta = SUBJECTS[subjectKey];

    // Update header
    $("#headerBadge").textContent = `${meta.code} · ${meta.shortLabel}`;
    $("#headerSubtitle").textContent = meta.description;

    // Hide subject selector, show topic selector
    $("#subjectSelector").style.display = "none";
    $("#topicSelector").style.display = "block";
    $("#topicSelectorTitle").textContent = `${meta.label} — Choose Topics`;

    renderTopicSelector();
  }

  function backToSubjects() {
    state.selectedSubject = null;
    state.selectedTopics = [];

    // Update header
    $("#headerBadge").textContent = "LEARNING HUB";
    $("#headerSubtitle").textContent = "Multi-Subject MCQ Practice with Performance Tracking";

    // Show subject selector, hide topic selector
    $("#subjectSelector").style.display = "block";
    $("#topicSelector").style.display = "none";

    renderSubjectSelector();
  }

  // ═══════════════════════════════════════════
  //  TOPIC SELECTOR
  // ═══════════════════════════════════════════
  function renderTopicSelector() {
    const grid = $("#topicGrid");
    grid.innerHTML = "";

    // Get topics for the selected subject
    const subjectTopics = getTopicsForSubject(state.selectedSubject);
    const subjectQuestions = getQuestionsForSubject(state.selectedSubject);

    // "All Topics" card
    const allCard = document.createElement("div");
    allCard.className = "topic-card all-topics";
    allCard.dataset.topic = "all";
    allCard.innerHTML = `
      <span class="topic-icon">🎯</span>
      <div class="topic-name">All Topics</div>
      <div class="topic-lab">MIXED QUIZ</div>
      <div class="topic-count">${subjectQuestions.length} questions</div>
    `;
    allCard.addEventListener("click", () => toggleTopic("all"));
    grid.appendChild(allCard);

    // Individual topic cards
    subjectTopics.forEach(([key, meta]) => {
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
    const subjectTopicKeys = getTopicsForSubject(state.selectedSubject).map(([k]) => k);

    if (topic === "all") {
      const allSelected = state.selectedTopics.length === subjectTopicKeys.length;
      if (allSelected) {
        state.selectedTopics = [];
      } else {
        state.selectedTopics = [...subjectTopicKeys];
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
    const subjectTopicKeys = getTopicsForSubject(state.selectedSubject).map(([k]) => k);

    $$(".topic-card").forEach((card) => {
      const t = card.dataset.topic;
      if (t === "all") {
        card.classList.toggle(
          "selected",
          state.selectedTopics.length === subjectTopicKeys.length
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
    btn.style.display = "inline-flex";
    if (weakQs.length >= 1) {
      btn.disabled = false;
      btn.innerHTML = `🔥 Focus on Weak Areas (${weakQs.length})`;
    } else {
      btn.disabled = true;
      btn.innerHTML = `🔥 No Weak Areas Yet`;
    }
    updateDashboardNotif();
  }

  function updateDashboardNotif() {
    const weakQs = getWeakQuestionsGlobal();
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
    const weakQs = getWeakQuestionsGlobal();
    const banner = $("#focusBanner");
    if (!banner) return;

    if (weakQs.length >= 1) {
      banner.style.display = "block";
      const desc = $("#focusBannerDesc");
      const topicCounts = {};
      weakQs.forEach(q => {
        const meta = TOPICS[q.topic];
        if (meta) {
          const label = meta.shortLabel;
          topicCounts[label] = (topicCounts[label] || 0) + 1;
        }
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
    const weakQs = getWeakQuestionsGlobal();
    if (weakQs.length < 1) return;
    switchView("quiz");
    // Set subject context if possible
    if (weakQs.length > 0) {
      const firstTopic = weakQs[0].topic;
      const topicMeta = TOPICS[firstTopic];
      if (topicMeta) {
        state.selectedSubject = topicMeta.subject;
      }
    }
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
        if (!stat || stat.attempts === 0) return 1000;
        const accuracy = stat.correct / stat.attempts;
        const accuracyScore = (1 - accuracy) * 100;
        return accuracyScore + (stat.wrong * 5); 
      };

      const scoreA = getPriorityScore(statA);
      const scoreB = getPriorityScore(statB);

      if (scoreA === scoreB) return Math.random() - 0.5;
      return scoreB - scoreA;
    });

    if (lengthSetting > 0 && pool.length > lengthSetting) {
      pool = pool.slice(0, lengthSetting);
    }

    pool = shuffleArray(pool);

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

    // Hide selectors, show quiz area
    $("#subjectSelector").style.display = "none";
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

    // Topic tag — dynamic based on topic metadata
    const topicMeta = TOPICS[q.topic];
    const tagStyle = topicMeta ? `background:${topicMeta.color}18; color:${topicMeta.color}; border-color:${topicMeta.color}33` : "";
    const tagLabel = topicMeta ? `${topicMeta.labSheet} · ${topicMeta.shortLabel}` : q.topic;

    const diffClass =
      q.difficulty === "easy" ? "diff-easy" :
      q.difficulty === "medium" ? "diff-medium" : "diff-hard";

    const container = $("#questionContainer");
    container.innerHTML = `
      <div class="question-card">
        <div class="question-meta">
          <span class="question-topic-tag" style="${tagStyle}">${tagLabel}</span>
          <span class="question-difficulty ${diffClass}">${q.difficulty}</span>
          ${q.source ? `<span class="question-source source-${q.source.toLowerCase()}"><i class="${q.source === 'Recording' ? 'fas fa-video' : 'fas fa-file-pdf'}"></i> ${q.source === 'Recording' ? 'Lecture Recording' : 'PDF Slides'}</span>` : ''}
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

    quiz.answers.push({
      questionId: q.id,
      selectedIndex,
      correct: isCorrect,
    });

    if (isCorrect) {
      quiz.streak++;
      if (quiz.streak > quiz.maxStreak) quiz.maxStreak = quiz.streak;
    } else {
      quiz.streak = 0;
    }

    if (quiz.streak >= 3) {
      $("#streakIndicator").style.display = "inline-flex";
      $("#streakCount").textContent = quiz.streak;
    } else {
      $("#streakIndicator").style.display = "none";
    }

    updateQuestionStat(q.id, isCorrect);

    $$(".option-btn").forEach((btn, i) => {
      btn.classList.add("answered");
      if (i === q._correctDisplay) {
        btn.classList.add("correct");
      }
      if (i === selectedIndex && !isCorrect) {
        btn.classList.add("wrong");
      }
    });

    const explArea = $("#explanationArea");
    if (q.explanation) {
      explArea.innerHTML = `
        <div class="explanation-box">
          <span class="explain-label">${isCorrect ? "✓ CORRECT" : "✗ INCORRECT"} — EXPLANATION</span>
          ${q.explanation}
        </div>
      `;
    } else {
      explArea.innerHTML = `
        <div class="explanation-box">
          <span class="explain-label">${isCorrect ? "✓ CORRECT" : "✗ INCORRECT"}</span>
          ${isCorrect ? "Well done!" : `The correct answer was: ${String.fromCharCode(65 + q._correctDisplay)}`}
        </div>
      `;
    }

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

    const correctSoFar = quiz.answers.filter((a) => a.correct).length;
    $("#scoreLive").textContent = `✓ ${correctSoFar}`;
    const progressPct = ((quiz.currentIndex + 1) / quiz.questions.length) * 100;
    $("#progressFill").style.width = progressPct + "%";
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

    // Determine subject from quiz questions
    const topicsUsed = [...new Set(quiz.questions.map((q) => q.topic))];
    const subjectsUsed = [...new Set(topicsUsed.map(t => TOPICS[t]?.subject).filter(Boolean))];
    
    state.data.history.unshift({
      date: new Date().toISOString(),
      total,
      correct,
      wrong,
      percentage: pct,
      topics: topicsUsed,
      subjects: subjectsUsed,
      timeSeconds: elapsed,
      maxStreak: quiz.maxStreak,
    });

    if (state.data.history.length > 50) {
      state.data.history = state.data.history.slice(0, 50);
    }

    saveData();

    $("#quizArea").classList.remove("active");
    const resultsScreen = $("#resultsScreen");
    resultsScreen.style.display = "block";

    const scoreColor =
      pct >= 80 ? "var(--accent-green)" :
      pct >= 50 ? "var(--accent-yellow)" : "var(--error)";

    const subjectLabel = subjectsUsed.length === 1 && SUBJECTS[subjectsUsed[0]]
      ? SUBJECTS[subjectsUsed[0]].label
      : "Mixed Subjects";

    resultsScreen.innerHTML = `
      <div class="score-circle" style="--score-pct:${pct}%; border: 3px solid ${scoreColor}22; background: ${scoreColor}08;">
        <span class="score-pct" style="color:${scoreColor}">${pct}%</span>
        <span class="score-label">Score</span>
      </div>

      <div style="text-align:center; margin-bottom:1rem;">
        <span style="font-size:13px; color:var(--text-muted);">${subjectLabel}</span>
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
        ${getWeakQuestionsGlobal().length >= 2 ? `
          <button class="btn btn-weak" id="btnRetryWeak">🔥 Focus Weak Areas</button>
        ` : ""}
      </div>
    `;

    if (pct >= 80) spawnConfetti();

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
        const weakQs = getWeakQuestionsGlobal();
        resetQuizView();
        startQuiz(weakQs);
      });
    }
  }

  function resetQuizView() {
    state.currentQuiz = null;
    
    if (state.selectedSubject) {
      // Go back to topic selector for the current subject
      $("#subjectSelector").style.display = "none";
      $("#topicSelector").style.display = "block";
    } else {
      // Go back to subject selector
      $("#subjectSelector").style.display = "block";
      $("#topicSelector").style.display = "none";
    }
    
    $("#quizArea").classList.remove("active");
    $("#resultsScreen").style.display = "none";
    updateWeakQuizButton();
  }

  // ═══════════════════════════════════════════
  //  WEAK AREA DETECTION
  // ═══════════════════════════════════════════
  // Get weak questions for the currently selected subject
  function getWeakQuestions() {
    const subjectQuestions = state.selectedSubject
      ? getQuestionsForSubject(state.selectedSubject)
      : QUESTIONS;
    
    return subjectQuestions.filter((q) => {
      const stat = state.data.questionStats[q.id];
      return stat && stat.wrong >= 2;
    });
  }

  // Get ALL weak questions across all subjects
  function getWeakQuestionsGlobal() {
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

    // Topic breakdown — grouped by subject
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

    // Group by subject
    Object.entries(SUBJECTS).forEach(([subjectKey, subjectMeta]) => {
      const subjectTopics = getTopicsForSubject(subjectKey);
      const hasAnyData = subjectTopics.some(([key]) => {
        const stats = topicStats[key];
        return stats && stats.attempted > 0;
      });

      // Subject header
      const header = document.createElement("div");
      header.className = "topic-breakdown-subject-header";
      header.innerHTML = `
        <span>${subjectMeta.icon} ${subjectMeta.shortLabel}</span>
      `;
      breakdown.appendChild(header);

      subjectTopics.forEach(([topic, meta]) => {
        const stats = topicStats[topic];
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
    });

    // Focus Mode banner
    renderFocusBanner();

    // Weak questions
    renderWeakQuestions();
  }

  function renderWeakQuestions() {
    const weakQs = getWeakQuestionsGlobal();
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

    const sorted = weakQs.sort((a, b) => {
      const sA = state.data.questionStats[a.id];
      const sB = state.data.questionStats[b.id];
      return (sB?.wrong || 0) - (sA?.wrong || 0);
    });

    list.innerHTML = sorted
      .map((q) => {
        const stat = state.data.questionStats[q.id];
        const meta = TOPICS[q.topic];
        const subjectMeta = meta ? SUBJECTS[meta.subject] : null;
        return `
        <div class="weak-q-item">
          <span class="weak-q-times">${stat.wrong}× wrong</span>
          <div class="weak-q-text">
            ${escapeAndFormatCode(q.question)}
            <span class="weak-q-topic">${meta ? `${meta.labSheet} · ${meta.shortLabel}` : q.topic}${subjectMeta ? ` — ${subjectMeta.shortLabel}` : ""}</span>
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

        // Show subject info
        const subjectLabels = (entry.subjects || [])
          .map(s => SUBJECTS[s]?.icon || "")
          .filter(Boolean)
          .join(" ");

        return `
        <div class="history-item">
          <div class="history-top">
            <span class="history-date">${dateStr}</span>
            <span class="history-score" style="color:${scoreColor}">${entry.percentage}% (${entry.correct}/${entry.total})</span>
          </div>
          <div style="display:flex; align-items:center; justify-content:space-between;">
            <div class="history-topics">
              ${subjectLabels ? `<span class="history-subject-icons">${subjectLabels}</span>` : ""}
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

    // Back to subjects
    $("#btnBackToSubjects").addEventListener("click", () => {
      backToSubjects();
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
    renderSubjectSelector();
    bindEvents();
  }

  // Boot
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
