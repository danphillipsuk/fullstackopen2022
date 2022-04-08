const Weather = ({weatherDetail}) => {
  if(weatherDetail.length < 1) {
    return null;
  }
  return (
    <>
    <li>Temperature: {weatherDetail.main.temp} celcius</li>
    <li>Conditions: {weatherDetail.weather[0].description} </li>
    <li><img src={`http://openweathermap.org/img/wn/${weatherDetail.weather[0].icon}@4x.png`} alt="weatherIcon"></img></li>
    <li>Wind Speed: {weatherDetail.wind.speed} m/s</li>
    </>
  )
}

export default Weather