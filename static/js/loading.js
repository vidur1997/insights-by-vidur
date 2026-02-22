// Matrix Rain + Terminal Loading Animation with Music
// Only shows on first visit or page refresh, not on navigation
(function() {
  // Check if this is a navigation (not first visit or refresh)
  const navEntry = performance.getEntriesByType('navigation')[0];
  const isReload = navEntry && navEntry.type === 'reload';
  const isFirstVisit = !sessionStorage.getItem('hasVisited');

  // Start music on first visit during loading animation
  if (isFirstVisit || isReload) {
    var loadingAudio = new Audio('/audio/Kids.mp3');
    loadingAudio.loop = true;
    loadingAudio.volume = 0.2;
    
    // Try to play music
    loadingAudio.play().then(function() {
      // Save to localStorage so music-toggle.js can pick it up
      localStorage.setItem('musicPlaying', 'true');
      localStorage.setItem('musicTime', '0');
      
      // Store audio reference globally for music-toggle.js
      window.siteAudio = loadingAudio;
    }).catch(function(e) {
      console.log('Autoplay blocked during loading');
    });
  }

  // Only show loading screen on first visit or refresh
  if (!isFirstVisit && !isReload) {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) loadingScreen.remove();
    return;
  }

  // Mark as visited
  sessionStorage.setItem('hasVisited', 'true');

  const canvas = document.getElementById('matrixCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const chars = '0123456789ABCDEF<>[]{}=+-*/';
  const charArray = chars.split('');
  const fontSize = 14;
  const columns = canvas.width / fontSize;
  const drops = [];

  for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * -100;
  }

  let matrixOpacity = 0.4;
  let matrixRunning = true;

  function drawMatrix() {
    if (!matrixRunning) return;
    ctx.fillStyle = 'rgba(26, 26, 26, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = `rgba(0, 255, 170, ${matrixOpacity})`;
    ctx.font = fontSize + 'px monospace';
    for (let i = 0; i < drops.length; i++) {
      const text = charArray[Math.floor(Math.random() * charArray.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
    requestAnimationFrame(drawMatrix);
  }

  drawMatrix();

  // Terminal sequence
  function showLine(id, delay) {
    return new Promise(r => setTimeout(() => {
      document.getElementById(id).classList.add('visible');
      r();
    }, delay));
  }

  function animateProgress(dotsId, valId, duration) {
    return new Promise(resolve => {
      const dotsEl = document.getElementById(dotsId);
      const valEl = document.getElementById(valId);
      let current = 0;
      const total = 12;
      const interval = setInterval(() => {
        current++;
        dotsEl.textContent = '.'.repeat(current);
        valEl.textContent = Math.round((current/total)*100) + '%';
        if (current >= total) {
          clearInterval(interval);
          valEl.style.color = '#00ff00';
          resolve();
        }
      }, duration / total);
    });
  }

  async function run() {
    await showLine('line1', 300);
    await showLine('line2', 400);
    await animateProgress('dots1', 'val1', 800);
    await showLine('line3', 250);
    await animateProgress('dots2', 'val2', 700);
    await showLine('line4', 250);
    await animateProgress('dots3', 'val3', 700);
    await showLine('line5', 300);

    setTimeout(() => {
      matrixRunning = false;
      document.getElementById('loadingScreen').classList.add('hidden');
      setTimeout(() => {
        document.getElementById('loadingScreen').remove();
      }, 600);
    }, 800);
  }

  run();

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
})();