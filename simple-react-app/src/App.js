import React from "react";
// import HelloDiv from "./components/HomePage.js";
import MainDiv from "./components/MainDiv.js";
// import NavDiv from "./components/Nav.js";

class App extends React.Component {
  constructor() {
    super();

    console.log("constructed");
  }

  myF() {
    console.log("test");
  }
  render() {
    return (
      <>
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              Kurt Phillips
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <select>
                <option value="Selected">Portfolio </option>
              </select>
            </ul>
          </div>
        </nav>
        <MainDiv
        // data={
        //buttonname
        //  }
        ></MainDiv>
      </>
    );
  }
}

export default App;
