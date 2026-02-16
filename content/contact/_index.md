---
title: "Contact"
layout: "single"
---

## Get In Touch

Interested in discussing opportunities, collaborations, or just want to connect? Send me a message.

<form name="contact" method="POST" class="contact-form" id="contactForm">
  <input type="hidden" name="form-name" value="contact">
  <p class="hidden" style="display:none;">
    <label>Don't fill this out: <input name="bot-field"></label>
  </p>
  <p>
    <label>Name<br>
      <input type="text" name="name" required placeholder="Your name">
    </label>
  </p>
  <p>
    <label>Email<br>
      <input type="email" name="email" required placeholder="your@email.com">
    </label>
  </p>
  <p>
    <label>Company/Organisation<br>
      <input type="text" name="company" placeholder="Where do you work?">
    </label>
  </p>
  <p>
    <label>Message<br>
      <textarea name="message" rows="5" required placeholder="How can I help?"></textarea>
    </label>
  </p>
  <p>
    <button type="submit" class="submit-btn">Send Message</button>
  </p>
</form>

---

## Other Ways to Connect

<a href="https://www.linkedin.com/in/vidursharma1997/" target="_blank">LinkedIn</a> | <a href="mailto:vidursharma1997@gmail.com">Email</a>

<div id="formSuccess" style="display:none; color: #00ffaa; margin-top: 20px;">
  <h3>Thank You!</h3>
  <p>Your message has been sent successfully. I will get back to you as soon as possible.</p>
</div>

<script>
document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  
  try {
    await fetch('https://formsubmit.co/vidursharma1997@gmail.com', {
      method: 'POST',
      body: data
    });
    form.style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';
  } catch (error) {
    alert('Sorry, there was an error. Please try again.');
  }
});
</script>
