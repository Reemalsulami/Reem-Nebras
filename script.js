// script.js
document.addEventListener('DOMContentLoaded', function () {
  // تفعيل أزرار قائمة الجوال في كل صفحة (توجد أزواج IDs مختلفة)
  const menus = [
    {btnId: 'menuBtn', navId: 'siteNav'},
    {btnId: 'menuBtn2', navId: 'siteNav2'},
    {btnId: 'menuBtn3', navId: 'siteNav3'},
    {btnId: 'menuBtn4', navId: 'siteNav4'}
  ];

  menus.forEach(m => {
    const btn = document.getElementById(m.btnId);
    const nav = document.getElementById(m.navId);
    if (btn && nav) {
      btn.addEventListener('click', () => {
        nav.style.display = nav.style.display === 'block' ? '' : 'block';
      });
    }
  });

  // إعداد الاختبار في activities.html
  const answers = { q1: 'c', q2: 'b', q3: 'c' }; // الإجابات الصحيحة
  const quizForm = document.getElementById('quizForm');
  const submitBtn = document.getElementById('submitQuiz');
  const quizResult = document.getElementById('quizResult');
  const scoreText = document.getElementById('scoreText');
  const showAnswersBtn = document.getElementById('showAnswers');

  if (submitBtn && quizForm) {
    submitBtn.addEventListener('click', () => {
      let score = 0;
      const total = Object.keys(answers).length;
      for (const q of Object.keys(answers)) {
        const checked = quizForm.querySelector(`[name="${q}"]:checked`);
        if (checked && checked.value === answers[q]) score++;
      }
      quizResult.hidden = false;
      scoreText.textContent = `نتيجتك: ${score} من ${total} — ${feedback(score, total)}`;
      if (window.sessionStorage) {
        sessionStorage.setItem('digitalSafetyScore', `${score}/${total}`);
      }
    });
  }

  if (showAnswersBtn) {
    showAnswersBtn.addEventListener('click', () => {
      alert('الإجابات الصحيحة:\n1) !G7#xP9@kL (مثال على كلمة مرور قوية)\n2) أتحقق من الرابط والمصدر\n3) رقم الهاتف الخاص');
    });
  }

  function feedback(score, total) {
    const pct = (score / total) * 100;
    if (pct === 100) return 'ممتاز — فهم تام!';
    if (pct >= 66) return 'جيد — فهم جيد، راجع نقاط بسيطة.';
    if (pct >= 33) return 'متوسط — يحتاج مراجعة.';
    return 'ضعيف — يحتاج مراجعة وممارسة.';
  }
});
