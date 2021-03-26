import React from "react";

class MainDiv extends React.Component {
  render() {
    return (
      <div className=" container col s12 m7">
        <div className="card " col s12 m7>
          <div className="card-content center-align">
            <h1>
              <i className="medium material-icons">BIO</i>
            </h1>
            <img
              id="placeholder"
              alt="Kurt Phillips"
              //src="https://i.postimg.cc/02PT7VbS/kurtpic.jpg"
              stlye={{ width: "50px" }}
            />
            <p>
              Kurt Phillips is a student at the University of Oregon, studying fullstack web
              development. With a history in sales, Kurt brings a unique insight on how to
              understand users and how to reach them through UI design and user interactions. With
              each project Kurt works on, he aims to create a simple and convenient design that
              engage the user and creates a unique space on the web.
            </p>
          </div>

          <div className="card-content center-align">
            <span className="card-title activator grey-text text-darken-4"> </span>
          </div>
        </div>
      </div>
    );
  }
}

export default MainDiv;
