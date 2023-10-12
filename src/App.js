import axios from "axios";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

const App = () => {
  const [data, setData] = useState({});
  const [city, setCity] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=797b5842eaae5e2e0ee74f0790ddbefe`;

  const searchCity = () => {
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
    setCity("");
  };

  return (
    <div
      className={`max-w[1520px] w-full h-[100vh] text-white relative bg-black bg-opacity-40 before:bg-[url('./assets/sunset.jpg')]  before:content-'' before:absolute before:w-[100%] before:h-[100%] before:z-[-1] before:bg-cover before:bg-center before:inset-0`}
    >
      <div className="text-center p-[1rem] flex justify-center items-center gap-5">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter City of Interest . . ."
          className="focus:outline-none pl-[0.7rem] pr-[3rem] py-[0.5rem] text-[1rem] border-[1px] border-solid rounded-full border-white border-opacity-80 bg-white bg-opacity-20 placeholder:text-white"
        />
        <BsSearch size={25} onClick={searchCity} />
      </div>
      <div className="w-[320px] sm:w-[550px] md:w-[700px] h-[75%] m-auto px-0 py-[1rem] relative top-[10%] flex flex-col justify-between">
        <div className="w-[100%] mx-[1rem] my-auto">
          <div className="location">
            <p className="text-[1.4rem]">{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? (
              <h1 className="text-[5rem]">{data.main.temp.toFixed()}℉</h1>
            ) : null}
          </div>
          <div className="relative right-[-93%] transform origin-top-left rotate-[269.9deg]">
            {data.weather ? (
              <p className="text-[1.5rem]">{data.weather[0].main}</p>
            ) : null}
          </div>
        </div>
        {data.name !== undefined && (
          <div className="flex justify-evenly text-center w-full mx-[1rem] my-auto rounded-full py-[0.7rem] bg-white bg-opacity-20">
            <div className="feels">
              {data.main ? (
                <p className="text-[1.3rem] font-semibold">
                  {data.main.feels_like} ℉
                </p>
              ) : null}
              <p className="text-[1.3rem]">Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? (
                <p className="text-[1.3rem] font-semibold">
                  {data.main.humidity} %
                </p>
              ) : null}
              <p className="text-[1.3rem]">Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? (
                <p className="text-[1.3rem] font-semibold">
                  {data.wind.speed} MPH
                </p>
              ) : null}
              <p className="text-[1.3rem]">Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
