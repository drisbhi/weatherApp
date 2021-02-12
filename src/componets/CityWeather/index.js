import React from 'react'

export default function Weather({cityWeather}) {
    console.log(cityWeather);
    return (
        <div>
        
          <div>
          CITY NAME :  {cityWeather.name}
        </div>
    <div> City Weather  :  {cityWeather.weather[0].main}</div>
    <div> Humidity : {cityWeather.main.humidity}</div>
        </div>
    )
}
