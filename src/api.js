export const fetchPosts = async () => {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=5696cb3c2341e74a304eaa299a6daef5');
    const data = await response.json();
    return data;
  };
  
  