import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CobaAxios() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current_weather=true');
        setWeather(response.data.current_weather);
      } catch (error) {
        console.error('Terjadi kesalahan saat mengambil data cuaca:', error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div>
      {weather ? (
        <div>
          <p>Suhu di London: {weather.temperature} °C</p>
          <p>Kecepatan angin: {weather.windspeed} m/s</p>
        </div>
      ) : (
        <p>Sedang mengambil data cuaca...</p>
      )}
    </div>
  );
}

export default CobaAxios;