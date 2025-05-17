const backendUrl = 'https://f012-2404-3c00-4e2f-b710-dc48-e99e-3530-1910.ngrok-free.app';

document.addEventListener('DOMContentLoaded', () => {
  console.log("scripts.js loaded");

  const form = document.getElementById('suggestion-form');
  const responseMessage = document.getElementById('response-message');

  if (!form || !responseMessage) {
    console.error('Form or response message element not found.');
    return;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const suggestionTextarea = form.querySelector('textarea[name="suggestion"]');
    const suggestion = suggestionTextarea?.value.trim();

    if (!suggestion) {
      responseMessage.textContent = 'Please enter a suggestion.';
      return;
    }

    try {
      const response = await fetch(`${backendUrl}/api/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ suggestion }),
      });

      const text = await response.text();

      if (response.ok) {
        responseMessage.textContent = text;
        suggestionTextarea.value = '';
      } else {
        responseMessage.textContent = `Error: ${response.status} ${text}`;
      }

    } catch (err) {
      console.error('Fetch error:', err);
      responseMessage.textContent = 'Failed to send suggestion. Please try again.';
    }
  });
});
