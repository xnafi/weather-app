import { useState } from 'react';
import Head from 'next/head';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import LoadingSpinner from '../components/LoadingSpinner';

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `/api/weather?city=${encodeURIComponent(city)}`
      );
      if (!response.ok) throw new Error('City not found');
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <> 
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Search weather by city name" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 p-4">
        <div className="max-w-md mx-auto mt-8">
          <h1 className="text-4xl font-bold text-white text-center mb-8">Weather App</h1>
          <SearchBar onSearch={handleSearch} />
          {loading && <LoadingSpinner />}
          {error && <div className="text-red-500 text-center mt-4">{error}</div>}
          {weather && <WeatherCard weather={weather} />}
        </div>
      </div>
    </>
  );
}