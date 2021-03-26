import React from "react";
class Portfolio extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-content center-align">
            <div className="col-8">
              <div className="constainer bg-light center-align">
                <div className="card s4 m7">
                  <img
                    width="600px"
                    id="placeholder"
                    src="https://i.postimg.cc/wjTJBgW3/screencapture-arcane-peak-55315-herokuapp-view-2021-03-10-13-12-42.png"
                    alt="Recipe Book"
                  />
                  <p>
                    This is an online application to create/view recipes
                    <a href="https://arcane-peak-55315.herokuapp.com/login">
                      {" "}
                      RecipeBook live link
                    </a>
                  </p>
                  <p>
                    GitHub Link:<a href="https://github.com/kurtp23/recipe-book"> RecipeBook</a>
                  </p>
                </div>
                <div className="card s12 m7">
                  <img
                    width="600px"
                    id="placeholder"
                    src="https://i.postimg.cc/0yXkjT5Z/screencapture-kurtp23-github-io-entertainment-lists-2021-01-11-15-44-44.png"
                    alt="eLists"
                  />

                  <p>
                    eLists is a project created to store new entertainment suggestions{" "}
                    <a href="https://kurtp23.github.io/entertainment-lists/">elists live link</a>
                  </p>
                  <p>
                    GitHub Link:<a href="https://github.com/kurtp23/entertainment-lists"> eLists</a>
                  </p>
                </div>
                <div className="card s12 m7">
                  <img
                    width="600px"
                    id="placeholder"
                    src="https://i.postimg.cc/PqgJ2gwK/screencapture-kurtp23-github-io-javascript-quiz-2021-01-11-16-25-57.png"
                    alt="javascript quiz"
                  />

                  <p>
                    This quiz was created to test people on their knowledge of javascript
                    <a href="https://kurtp23.github.io/javascript-quiz/"> Quiz live link</a>
                  </p>
                  <p>
                    GitHub Link:<a href="https://github.com/kurtp23/javascript-quiz"> Quiz</a>
                  </p>
                </div>
                <div className="card s12 m7">
                  <img
                    width="600px"
                    id="placeholder"
                    src="https://i.postimg.cc/RVHPYfyR/weatherdboardpic.png"
                    alt="weather dashboard"
                  />

                  <p>
                    This is a weather dahsboard that uses an api to display weather info
                    <a href="https://kurtp23.github.io/weather-dashboard/">
                      {" "}
                      Weather dashboard live link
                    </a>
                  </p>
                  <p>
                    GitHub Link:
                    <a href="https://github.com/kurtp23/weather-dashboard"> Weather Dashboard</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
