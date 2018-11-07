import React, { Component } from 'react';

import CurrentWeather from './CurrentWeather';
import DailyWeather from './DailyWeather';
import WeatherByHour from './WeatherByHour';

import { OpenWeatherService } from '../services/OpenWeatherService';
import { GeolocationService } from '../services/GeoLocationService';

const WeatherService = new OpenWeatherService();
const GeoLocationService = new GeolocationService();


class MainWeatherPart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showCurrentWeather: false,
            showDailyWeather: false,
            showHourlyWeather: false,
            weather: null,
            dailyForecasts: null,
            hourlyForecasts: null
        };

        this.handleOnRefresh = this.handleOnRefresh.bind(this);
    }


    componentDidMount() {
        GeoLocationService
            .getCurrentPosition()
            .then(position => { console.log(position);
                this.getMeCurrWeatherByPos(position);
                this.getMeDailyWeatherByPos(position);
                this.getMeHourlyWeatherByPos(position);
            })
            .catch(error => console.log(error));      
    }


    getMeCurrWeatherByPos(position) {
        
        if (!position) {
            throw Error('A valid position must be specified');
        }

        WeatherService
            .getOpenCurrentWeatherByPosition(position)
            .then(weather => { console.log(weather);
                this.setState(() => ({ weather: weather, showCurrentWeather: true }));
            })
            .catch(error => console.log(error));
    }


    getMeDailyWeatherByPos(position) {
        
        if (!position) {
            throw Error('A valid position must be specified');
        }

        WeatherService
            .getOpenDailyWeatherByPosition(position)
            .then(dailyForecasts => { console.log(dailyForecasts);
                this.setState(() => ({ dailyForecasts: dailyForecasts, showDailyWeather: true }));
            })
            .catch(error => console.log(error));
    }


    getMeHourlyWeatherByPos(position) {
        
        if (!position) {
            throw Error('A valid position must be specified');
        }

        WeatherService
            .getOpenHourlyWeatherByPosition(position)
            .then(hourlyForecasts => { console.log(hourlyForecasts);
                this.setState(() => ({ hourlyForecasts: hourlyForecasts, showHourlyWeather: true }));
            })
            .catch(error => console.log(error));
    }


    handleOnRefresh() {
        this.setState(() => ({
            showCurrentWeather: false,
            showDailyWeather: false,            
            showHourlyWeather: false
        }));

        GeoLocationService
            .getCurrentPosition()
            .then(position => {
                this.getMeCurrWeatherByPos(position);
                this.getMeDailyWeatherByPos(position);
                this.getMeHourlyWeatherByPos(position);
            })
            .catch(error => console.log(error));
    }


    showWeather() {
        return this.state.showCurrentWeather 
            && this.state.showDailyWeather 
            && this.state.showHourlyWeather;
            
    }


    render() {
        return (
            <div>
                {
                    this.showWeather() &&
                    <div>
                        <CurrentWeather weather={this.state.weather} onRefresh={this.handleOnRefresh} />
                        <p>&nbsp;</p>
                        <WeatherByHour hourlyForecasts={this.state.hourlyForecasts} location={this.state.weather.location.name} />
                        <p>&nbsp;</p>
                        <DailyWeather dailyForecasts={this.state.dailyForecasts} location={this.state.weather.location.name}/>
                    </div>
                }
                
            </div>
        );
    }
}


export default MainWeatherPart;