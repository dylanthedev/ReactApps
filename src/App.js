// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }
//
// export default App;
//import react object from react package in package.json
import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

//this is my api key
const API_KEY = "47c86db9f4798a79773bbfdb1b6b61f6";
//const API_KEY = "341f92eb4b0f3362758044610e9758b5";
//const API_KEY = "3585775f387b0d0cba6c5b3dc41b8167";
//initalizes component
class App extends React.Component {
  //old way
  //constructor() {
//   this.getWeather = this.getWeather.bind(this);
// }

state = {
  temperature: undefined,
  city: undefined,
  country: undefined,
  humidity: undefined,
  description: undefined,
  error: undefined
}
  //method to get the weather
  //asynx await
  getWeather = async (e) => {
    //stops page refresh when Get Weather button is clicked
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    //async await
    //const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`);
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=imperial`);
    //converts api_call to readable format for program,
    //in this case its json
    const data = await api_call.json();

    //this prevents the user from hitting submit without
    //filling out the form
    if (city && country) {
      console.log(data);
      //set values of state
      this.setState({
        //these values are found from calling the api_call
        //which is the data constant
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    }
    else {
      this.setState({
        //these values are found from calling the api_call
        //which is the data constant
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values!"
      });
    }


  }
  //built in react method that returns jsx
  render() {
    return (
      //babble converts this to html
      //getWeather is a prop that is equal to this.methodName
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather}/>
                  <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};


//makes App.js available for other files to import
export default App;
