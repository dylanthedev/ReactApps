import React from "react";

//v2 no longer uses a Weather class
//so no need for this. on each value
// const Weather = (props) => {
//   return (
//     <div>
//       {props.city && props.country &&
//         <p>Location: {props.city}, {props.country}</p>}
//       {props.temperature && <p>Temperature: {props.temperature}</p>}
//       {props.humidity && <p>Humidity: {props.humidity}</p>}
//       {props.description && <p>Description: {props.description}</p>}
//       {props.error && <p>{this.props.error}</p>}
//     </div>
//   );
// }
//v3 - explicitely returning values
const Weather = (props) => (
  <div className="weather-info">
    {
      props.city && props.country &&
      <p className="weather-key">Location: <span className="weather-value"> {props.city}, {props.country}</span></p>
    }
    {
      props.temperature &&
      <p className="weather-key">Temperature: <span className="weather-value"> {props.temperature}&#176;</span></p>
    }
    {
      props.humidity &&
      <p className="weather-key">Humidity: <span className="weather-value"> {props.humidity}%</span></p>
    }
    {
      props.description &&
      <p className="weather-key">Description: <span className="weather-value"> {props.description}</span></p>
    }
    {
      //<p className="weather-error">test</p>
      props.error &&
      <p className="weather-error">{props.error}</p>
    }
  </div>
);

//v1 a little more code
// class Weather extends React.Component {
//   render() {
//     //if city and country is defined, display p tag
//     return (
//       <div>
//         {this.props.city && this.props.country &&
//           <p>Location: {this.props.city}, {this.props.country}</p>}
//         {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
//         {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
//         {this.props.description && <p>Description: {this.props.description}</p>}
//         {this.props.error && <p>{this.props.error}</p>}
//       </div>
//     )
//   }
// }

export default Weather;
