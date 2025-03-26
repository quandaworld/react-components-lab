import './WeatherForecast.css'
import WeatherData from '../WeatherData/WeatherData';
import WeatherIcon from '../WeatherIcon/WeatherIcon';

const WeatherForecast = ({ day, img, imgAlt, conditions, time }) => {
  return (
    <div className='weather'>
      <WeatherIcon img={img} imgAlt={imgAlt} />
      <WeatherData day={day} conditions={conditions} time={time} />
    </div>
  );
};

export default WeatherForecast;