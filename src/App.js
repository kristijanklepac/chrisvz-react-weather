import React, { Component } from 'react';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import MainWeatherPart from './components/MainWeatherPart'

library.add(faSun);
library.add(faCircleNotch);

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header title=' Weather App - Amadria Park Hotels' />
      <div className="mt-lg-5">
            <div className="col-lg-6 p-0 mx-auto">
               <MainWeatherPart />
            </div>       
        </div>
      </div>
    );
  }
}

export default App;
