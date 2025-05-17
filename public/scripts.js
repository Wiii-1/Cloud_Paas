const backendUrl = 'https://ed56-2404-3c00-4e2f-b710-dc48-e99e-3530-1910.ngrok-free.app/';

document.getElementById('suggestion-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const suggestion = e.target.suggestion.value;
  
    const response = await fetch(`${backendUrl}/api/submit`, {
      method: 'POST',
      body: JSON.stringify({ suggestion }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    const data = await response.text(); 
    document.getElementById('response-message').textContent = data;
});
