const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const first_name = document.querySelector('#firstname-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const last_name = document.querySelector('#lastname-signup').value.trim();
    const address = document.querySelector('#address-signup').value.trim();
    const state = document.querySelector('#state-signup').value.trim();
    const zip = document.querySelector('#zip-signup').value.trim();
    const phone = document.querySelector('#phone-signup').value.trim();
    const city = document.querySelector('#city-signup').value.trim();
    
  
    
        
      const response = await fetch('/api/customer', {
        method: 'POST',
        body: JSON.stringify({ first_name, last_name, email, password,address,state,zip,phone,city}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    
  };


  document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);