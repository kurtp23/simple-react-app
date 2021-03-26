import React from "react";
// import Portfolio from "./components/Portfolio.js";

class NavDiv extends React.Component {
  constructor() {
    super();

    console.log("constructed");
  }

  // myF() {
  //   console.log("test");
  // }
  // //   handlePortfolio = () => {
  // //     console.log("hello");
  // //   };

  // render() {
  //   return <p onclick="myF">HI</p>;
  // }

  render() {
    return (
      <>
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              Kurt Phillips
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li onclick={this.handlePortfolio}>
                <a href="/">Portfolio</a>
              </li>
              <li>
                <a href="badges.html">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default NavDiv;
