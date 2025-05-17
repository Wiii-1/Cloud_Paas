const backendUrl = 'https://backend-api-production-34bc.up.railway.app';

document.getElementById('suggestion-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const suggestion = e.target.suggestion.value;
  
    const response = await fetch(`${backendUrl}/api/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ suggestion })
    });
  
    const data = await response.text(); 
    document.getElementById('response-message').textContent = data;
});
