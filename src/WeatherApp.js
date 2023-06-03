import React, { useEffect, useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";

import Table from "./Table";
import TablePlaceholder from './TablePlaceholder';

const API_KEY = "cda6a15e090c3937b3727e2ebb36a1ed";

const CURRENT = "current";
const HOURS3 = "3hours";
const DAYS5 = "5days";

const TIME_FORMAT_OPTIONS = { hour: "2-digit", minute: "2-digit", hour12: false };

const WeatherApp = (props) => {
  const [input, setInput] = useState("London");
  const [period, setPeriod] = useState("current");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [weatherData, setWeatherData] = useState({
    [CURRENT]: [],
    [HOURS3]: [],
    [DAYS5]: []
  });

  useEffect(() => {
    fetchWeather(); // initial fetch
  }, []);

  const handleInput = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  const handleChangePeriod = (event) => {
    setPeriod(event.target.value);
  };

  return (
    <>
      <fieldset className='period_switcher'>
        <legend>SELECT WEATHER INTERVAL:</legend>
        <div className=' period_switcher-container'>
          <input
            type="radio"
            id={CURRENT}
            name="period"
            value={CURRENT}
            checked={period === CURRENT}
            onChange={handleChangePeriod}
            className='period_switcher-radio'
          />
          <label htmlFor={CURRENT}>CURRENT</label>
        </div>
        <div className='period_switcher-container'>
          <input
            type="radio"
            id={HOURS3}
            name="period"
            value={HOURS3}
            checked={period === HOURS3}
            onChange={handleChangePeriod}
            className='period_switcher-radio'
          />
          <label htmlFor={HOURS3}>3 HOURS</label>
        </div>
        <div className='period_switcher-container'>
          <input
            type="radio"
            id={DAYS5}
            name="period"
            value={DAYS5}
            checked={period === DAYS5}
            onChange={handleChangePeriod}
            className='period_switcher-radio'
          />
          <label htmlFor={DAYS5}>5 DAYS</label>
        </div>
      </fieldset>
      <div>&nbsp;</div>

      <div className='handleInput'>
        <input value={input} onChange={handleInput} className='input' />
        <button onClick={fetchWeather} className='button'>Search</button>
        <div>&nbsp;</div>
      </div>

      {showErrorMessage ? <TablePlaceholder />
        : <Table weatherData={weatherData[period]} />}

      <footer className="footer">
        <p className="text-white mr-1">Made with </p>
        <MdFavoriteBorder className="mr-1 text-red-400" />
        <p className="text-white mr-1">by <a className="underline" href="https://github.com/SofiiaIrfan" target="_blank" rel="noopener noreferrer">Sofiia Irfan Pasha</a></p>
      </footer>
    </>

  );

  function fetchWeather() {
    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${input}&appid=${API_KEY}`
    ) // Promise
      .then((response) => response.json()) // JSON
      .then((direct) => {
        if (direct.length === 0) {
          setShowErrorMessage(true);
          return;
        }

        setShowErrorMessage(false);

        const data = direct[0];
        const lat = data.lat;
        const lon = data.lon;
        fetch(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
        )
          .then((response) => response.json())
          .then(function (weather) {
            const data = {};

            const currentDate = new Date(
              weather.current.dt * 1000
            ).toLocaleTimeString([], TIME_FORMAT_OPTIONS);
            const currentTemperature = weather.current.temp;
            const currentConditions = weather.current.weather[0].main;
            const currentWeatherData = [
              {
                date: currentDate,
                temperature: currentTemperature,
                conditions: currentConditions
              }
            ];
            data[CURRENT] = currentWeatherData;

            const hourlyArray = weather.hourly.slice(0, 3);
            const hourlyWeatherData = hourlyArray.map((hour) => {
              const date = new Date(hour.dt * 1000).toLocaleTimeString([], TIME_FORMAT_OPTIONS);
              const temperature = hour.temp;
              const conditions = hour.weather[0].main;
              return { date, temperature, conditions };
            });
            data[HOURS3] = hourlyWeatherData;

            const dailyArray = weather.daily.slice(0, 5);
            const dailyWeatherData = dailyArray.map((day) => {
              const date = new Date(day.dt * 1000).toDateString();
              const temperature = day.temp.day;
              const conditions = day.weather[0].main;
              return { date, temperature, conditions };
            });
            data[DAYS5] = dailyWeatherData;

            setWeatherData(data);
          });
      });
  }
};

export default WeatherApp;
