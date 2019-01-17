import React from "react";

const Titles = () => (
  //class is a reserved keyword in js, must be className
  <div>
    <h1 className="title-container-title">What's the Weather like in...</h1>
    <h3 className="title-container-subtitle">Find out Temperature, conditions and more using ReactJS</h3>
  </div>
);

// class Titles extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Weather Finder</h1>
//         <p>Find out Temperature, conditions and more...</p>
//       </div>
//     )
//   }
// }

//with every file you make you need to export it then import it in the app.js
export default Titles;
