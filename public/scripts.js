const backendUrl = 'https://railway.com/project/5c6b88ac-d991-484d-a9e9-a0541104d27b/service/81eb08ba-d4b7-4b8c-894f-7082022672e6?environmentId=e3aefa9e-03d0-4f32-a0d7-a37cc6d999d9';

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
