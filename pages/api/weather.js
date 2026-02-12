export default async function handler(req, res) {
  const { city } = req.query;
  if (!city) {
    return res.status(400).json({ error: 'City parameter is required' });
  }
  try {
    const apiKey = process.env.WEATHER_API_KEY || 'demo';
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    if (!response.ok) {
      return res.status(404).json({ error: 'City not found' });
    }
    const data = await response.json();
    return res.status(200).json({
      city: data.name,
      country: data.sys.country,
      temperature: Math.round(data.main.temp),
      feels_like: Math.round(data.main.feels_like),
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      windSpeed: data.wind.speed,
    });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch weather data' });
  }
}