const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const firstname = document.querySelector('#firstname-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const lastname = document.querySelector('#lastname-signup').value.trim();
    console.log(firstname)
    if (firstname && email && password) {
        
      const response = await fetch('/api/customer', {
        method: 'POST',
        body: JSON.stringify({ firstname, lastname, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };


  document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);