const getReservation = async (event) => {
    event.preventDefault();
  
    const id = document.querySelector('#resnumber').value.trim();
    
  
        
      const response = await fetch("/api/reservation/"+id, {
        method: 'GET',
      });
      console.log(result)
      } ;


  document
  .querySelector('.searchbar')
  .addEventListener('submit', getReservation);