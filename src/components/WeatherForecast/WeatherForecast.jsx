import './WeatherForecast.css'
import WeatherData from '../WeatherData/WeatherData';
import WeatherIcon from '../WeatherIcon/WeatherIcon';

const WeatherForecast = ({ day, img, imgAlt, conditions, time }) => {
  return (
    <div className='weather'>
      <h2>{day}</h2>
      <WeatherData day={day} conditions={conditions} time={time} />
      <WeatherIcon img={img} imgAlt={imgAlt} />
    </div>
  );
};

export default WeatherForecast;