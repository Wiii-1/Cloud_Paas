const backendUrl = 'https://backend-api-production-68d6.up.railway.app';

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
