async function fetchData() {
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mangaluru';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'c628d98f44msh9ae6a82f6eed389p12f432jsnec0a45987419',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  
  // Call the async function to fetch data
  fetchData();
  