// Music Toggle with Persistent Playback
// Works with loading.js for seamless audio across pages
document.addEventListener('DOMContentLoaded', function() {
  // Create music button
  var musicBtn = document.createElement('button');
  musicBtn.className = 'music-toggle';
  musicBtn.innerHTML = '♪';
  musicBtn.setAttribute('aria-label', 'Toggle music');
  document.body.appendChild(musicBtn);

  // Check if audio was started by loading.js
  var audio = window.siteAudio;
  var audioCreatedHere = false;
  
  // If no audio from loading.js, create new one
  if (!audio) {
    audio = new Audio('/audio/kids.mp3');
    audio.loop = true;
    audio.volume = 0.2;
    window.siteAudio = audio;
    audioCreatedHere = true;
  }

  // Check localStorage for music state
  var musicPlaying = localStorage.getItem('musicPlaying') === 'true';
  var savedTime = parseFloat(localStorage.getItem('musicTime')) || 0;

  // Update button state if music is already playing (from loading.js)
  if (!audio.paused) {
    musicBtn.innerHTML = '❚❚';
    musicBtn.classList.add('playing');
  } else if (musicPlaying && audioCreatedHere) {
    // Only auto-resume if we created the audio (not loading.js)
    audio.currentTime = savedTime;
    audio.play().then(function() {
      musicBtn.innerHTML = '❚❚';
      musicBtn.classList.add('playing');
    }).catch(function(e) {
      console.log('Autoplay blocked, user interaction needed');
    });
  }

  // Save time periodically while playing
  setInterval(function() {
    if (!audio.paused) {
      localStorage.setItem('musicTime', audio.currentTime);
    }
  }, 1000);

  // Save state before page unload
  window.addEventListener('beforeunload', function() {
    if (!audio.paused) {
      localStorage.setItem('musicTime', audio.currentTime);
      localStorage.setItem('musicPlaying', 'true');
    }
  });

  // Toggle music on button click
  musicBtn.addEventListener('click', function() {
    if (audio.paused) {
      audio.play().then(function() {
        musicBtn.innerHTML = '❚❚';
        musicBtn.classList.add('playing');
        localStorage.setItem('musicPlaying', 'true');
      });
    } else {
      audio.pause();
      musicBtn.innerHTML = '♪';
      musicBtn.classList.remove('playing');
      localStorage.setItem('musicPlaying', 'false');
    }
  });
});