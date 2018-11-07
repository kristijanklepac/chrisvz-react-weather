import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const getUpdateTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padEnd(2, '0');
    return `${hours}:${minutes}`;
};

const CurrentWeather = (props) => {
    
    const { weather } = props;
    
    return (
        <div style={{position: 'relative'}}>
            <div>{weather.location.name}</div>
            <div>MAX: {weather.temperature.maximum}&deg; | MIN: {weather.temperature.minimum}&deg;</div>
            <div>                
                <span >TEMP: {parseInt(weather.temperature.current)} &deg;&nbsp;<sup>c</sup></span>
            </div>
            <div>
                <img src={weather.icon} />
                <span>{weather.condition}</span>
            </div>            
            <div>Updated at {getUpdateTime(weather.date)}<br />&nbsp;</div>
            <button type="button" className="btn btn-light" onClick={props.onRefresh}><FontAwesomeIcon icon="circle-notch" /> Refresh Data</button>
        </div>
    );
};


CurrentWeather.propTypes = {
    onRefresh: PropTypes.func.isRequired,
    weather: PropTypes.object.isRequired
};


export default CurrentWeather;