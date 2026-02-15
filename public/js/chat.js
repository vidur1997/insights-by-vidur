document.addEventListener('DOMContentLoaded', function() {
  // Create chat button with label
  const chatContainer = document.createElement('div');
  chatContainer.className = 'chat-container';
  chatContainer.innerHTML = `
    <div class="chat-label">Chat with Vidur's AI</div>
    <button class="chat-button">
      <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>
    </button>
  `;
  
  // Create chat window
  const chatWindow = document.createElement('div');
  chatWindow.className = 'chat-window';
  chatWindow.innerHTML = `
    <div class="chat-header">
      <h3>Vidur's AI Assistant</h3>
      <p>Ask me anything about Vidur's experience, skills, and projects</p>
    </div>
    <div class="chat-messages">
      <div class="chat-message bot">Hi! I'm Vidur's AI assistant. I can tell you about his experience, skills, projects, or career background. What would you like to know?</div>
    </div>
    <div class="chat-input-area">
      <input type="text" placeholder="e.g. What's Vidur's experience with SQL?" id="chat-input">
      <button id="chat-send">Send</button>
    </div>
  `;
  
  document.body.appendChild(chatContainer);
  document.body.appendChild(chatWindow);
  
  // Toggle chat window
  const chatButton = chatContainer.querySelector('.chat-button');
  const chatLabel = chatContainer.querySelector('.chat-label');
  
  chatButton.addEventListener('click', function() {
    chatWindow.classList.toggle('open');
    chatLabel.classList.toggle('hidden');
  });
  
  // Send message
  const input = document.getElementById('chat-input');
  const sendBtn = document.getElementById('chat-send');
  const messages = chatWindow.querySelector('.chat-messages');
  
  async function sendMessage() {
    const message = input.value.trim();
    if (!message) return;
    
    // Add user message
    messages.innerHTML += `<div class="chat-message user">${message}</div>`;
    input.value = '';
    sendBtn.disabled = true;
    
    // Add typing indicator
    messages.innerHTML += `<div class="chat-message bot typing">Thinking...</div>`;
    messages.scrollTop = messages.scrollHeight;
    
    try {
      const response = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
      });
      
      const data = await response.json();
      
      // Remove typing indicator
      const typing = messages.querySelector('.typing');
      if (typing) typing.remove();
      
      // Add bot response
      messages.innerHTML += `<div class="chat-message bot">${data.reply || data.error || 'Sorry, something went wrong.'}</div>`;
    } catch (error) {
      const typing = messages.querySelector('.typing');
      if (typing) typing.remove();
      messages.innerHTML += `<div class="chat-message bot">Sorry, I couldn't connect. Please try again.</div>`;
    }
    
    sendBtn.disabled = false;
    messages.scrollTop = messages.scrollHeight;
  }
  
  sendBtn.addEventListener('click', sendMessage);
  input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') sendMessage();
  });
});