import React, { Component } from 'react';
import PropTypes from 'prop-types';

const weekday = new Array(7);
weekday[0] = 'Sun';
weekday[1] = 'Mon';
weekday[2] = 'Tue';
weekday[3] = 'Wed';
weekday[4] = 'Thu';
weekday[5] = 'Fri';
weekday[6] = 'Sat';


const getDate = (date) => {
    return `${weekday[date.getDay()]} ${date.getDate()}`;
};


class DailyWeather extends Component {

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

                   <div style={styles1}><p>Daily temperatures in {this.props.location}</p></div>       
                
                {
                            !!this.props.dailyForecasts && this.props.dailyForecasts.map((fc, i) => (

                                <div style={styles1} key={i} >
                                  <div className="card">
                                    <small>{getDate(fc.date)}</small>
                                    <img className="icon mx-auto" src={fc.icon} alt={fc.condition}/>
                                    <div className="font-weight-bold">
                                        {parseInt(fc.temperature.maximum)}&deg;
                                        &nbsp;<small>{parseInt(fc.temperature.minimum)}&deg;</small>
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


DailyWeather.propTypes = {
    dailyForecasts: PropTypes.array.isRequired
};


export default DailyWeather;