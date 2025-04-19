document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('suggestion-form');
  const responseMsg = document.getElementById('response-message');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();  

      const suggestion = form.suggestion.value;  

      try {
       
        const response = await fetch('/api/submit', {
          method: 'POST',  
          headers: {
            'Content-Type': 'application/json',  
          },
          body: JSON.stringify({ suggestion })  
        });

        
        const result = await response.json();

        if (result.success) {
         
          responseMsg.textContent = '✅ Thanks for your suggestion!';
          responseMsg.style.color = 'green';
          form.reset(); 
        } else {
          
          responseMsg.textContent = '❌ ' + result.message;
          responseMsg.style.color = 'red';
        }
      } catch (err) {
        
        console.error(err);
        responseMsg.textContent = '❌ Something went wrong. Try again later.';
        responseMsg.style.color = 'red';
      }
    });
  }
});
