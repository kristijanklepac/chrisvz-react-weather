import React, { Component } from 'react';
import PropTypes from 'prop-types';

const getTime = (date) => {
    return `${date.getHours()}:00`;
};

const getDate = (date) => {
    return `${weekday[date.getDay()]} ${date.getDate()}`;
};
const weekday = new Array(7);
weekday[0] = 'Sun';
weekday[1] = 'Mon';
weekday[2] = 'Tue';
weekday[3] = 'Wed';
weekday[4] = 'Thu';
weekday[5] = 'Fri';
weekday[6] = 'Sat';


class WeatherByHour extends Component {

    constructor(props){
        super(props);
    }

    

    render() {
        let styles1 = {
            width: "12rem",
            padding: "1rem"
          };
        
        return (
            <div className="d-flex align-content-center flex-wrap">

                   <div style={styles1}><p>Hourly temperatures in {this.props.location}</p></div>       
                
                {
                            !!this.props.hourlyForecasts && this.props.hourlyForecasts.map((fc, i) => (

                                <div style={styles1} key={"h"+i} >
                                  <div className="card">
                                  <small>{getDate(fc.date)} | {getTime(fc.date)}</small>
                                    <img className="icon mx-auto" src={fc.icon} />
                                    <div className="font-weight-bold">
                                        {parseInt(fc.temperature.current)}&deg;
                                    </div>
                                    <div className="text-capitalize">
                                        <small>{fc.condition}</small>
                                    </div>
                                  </div>
                                </div>

                            ))
                }
                
            </div>
        );
    }
}


WeatherByHour.propTypes = {
    hourlyForecasts: PropTypes.array.isRequired
};


export default WeatherByHour;