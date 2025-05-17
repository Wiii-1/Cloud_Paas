const backendUrl = 'https://e9d7-2404-3c00-4e2f-b710-dc48-e99e-3530-1910.ngrok-free.app';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('suggestion-form');
  const responseMessage = document.getElementById('response-message');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const suggestionTextarea = e.target.elements['suggestion'];
    const suggestion = suggestionTextarea.value.trim();

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
        suggestionTextarea.value = ''; // clear textarea
      } else {
        responseMessage.textContent = `Error: ${text}`;
      }

    } catch (err) {
      console.error('Fetch error:', err);
      responseMessage.textContent = 'Failed to send suggestion. Please try again.';
    }
  });
});
