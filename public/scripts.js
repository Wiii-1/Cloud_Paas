const backendUrl = 'https://<your-ngrok-url>'; // <- Replace this with your actual Ngrok URL (no trailing slash)

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('suggestion-form');
  const responseBox = document.getElementById('response-message');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const suggestion = form.elements['suggestion'].value.trim();

    if (!suggestion) {
      responseBox.textContent = 'Suggestion cannot be empty.';
      return;
    }

    try {
      const res = await fetch(`${backendUrl}/api/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ suggestion })
      });

      const text = await res.text();
      responseBox.textContent = res.ok ? text : `Error: ${text}`;
      if (res.ok) form.reset();
    } catch (err) {
      console.error('Request failed:', err);
      responseBox.textContent = 'Failed to send suggestion. Try again later.';
    }
  });
});
