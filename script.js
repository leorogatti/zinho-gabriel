document.addEventListener('DOMContentLoaded', function() {
  const questions = [
    { question: 'Qual é o resultado de 2 + 2?', answer: 4 },
    { question: 'Qual é o resultado de 64 - 29?', answer: 35 },
    { question: 'Qual é o resultado de 8 x 7?', answer: 56 },
    { question: 'Qual é o resultado de 81 ÷ 9?', answer: 9 },
    { question: 'Qual é o resultado de 6 + 8?', answer: 14 }
  ];

  const questionDiv = document.getElementById('question');
  const gameDiv = document.getElementById('game');
  const questionContainer = document.getElementById('question-container');
  const questionText = document.getElementById('question-text');
  const answerInput = document.getElementById('answer');
  const submitButton = document.getElementById('submit');
  const resultText = document.getElementById('result');

  let currentQuestion = 0;

  function showQuestion() {
    questionText.textContent = questions[currentQuestion].question;
    answerInput.value = '';
    resultText.textContent = '';
  }

  function checkAnswer() {
    const answer = parseInt(answerInput.value);
    if (answer === questions[currentQuestion].answer) {
      resultText.textContent = 'monstro';
      currentQuestion++;
      if (currentQuestion === questions.length) {
        window.location.href = 'recompensa.html';
      } else {
        showQuestion();
      }
    } else {
      resultText.textContent = 'ta errado imbecil';
    }
  }

  submitButton.addEventListener('click', checkAnswer);

  answerInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      checkAnswer();
    }
  });

  showQuestion();
});
