import React from 'react';

const WeatherCard = ({ weatherData }) => {
  const { temperature, humidity, windSpeed, pressure } = weatherData;

  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4">
      <h2 className="text-2xl font-bold mb-2">Weather Information</h2>
      <div className="flex flex-col">
        <p className="text-lg">Temperature: <span className="font-semibold">{temperature} °C</span></p>
        <p className="text-lg">Humidity: <span className="font-semibold">{humidity} %</span></p>
        <p className="text-lg">Wind Speed: <span className="font-semibold">{windSpeed} m/s</span></p>
        <p className="text-lg">Pressure: <span className="font-semibold">{pressure} hPa</span></p>
      </div>
    </div>
  );
};

export default WeatherCard;