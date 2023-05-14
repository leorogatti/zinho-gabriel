document.addEventListener('DOMContentLoaded', function() {
  var rewardButton = document.getElementById('reward-button');
  var gameDiv = document.getElementById('game');
  var image = document.getElementById('image');
  var title = document.getElementById('title');

  // Criar um contexto de áudio da API Web Audio
  var audioContext = new (window.AudioContext || window.webkitAudioContext)();

  // Criar um elemento de áudio para controlar a reprodução
  var audioElement = new Audio('music/luffy1.mp3');

  // Criar um nó de mídia para conectar o elemento de áudio ao contexto de áudio
  var audioSource = audioContext.createMediaElementSource(audioElement);

  // Criar um nó de ganho para controlar o volume
  var gainNode = audioContext.createGain();
  audioSource.connect(gainNode);
  gainNode.connect(audioContext.destination);

  function handleClick() {
    gameDiv.style.backgroundImage = "url('img/oliveira.png')";

    // Iniciar a reprodução do áudio
    audioElement.play();

    image.src = 'img/zinho.jfif';
    title.textContent = 'Gabriel Zinho';
    gameDiv.style.display = 'flex';
  }

  rewardButton.addEventListener('click', handleClick);
  rewardButton.addEventListener('touchstart', handleClick);

  console.log("Script 'recompensa.js' carregado.");
});