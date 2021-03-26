import React from "react";
class Contact extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="center-align">
            <h1>Contact Form</h1>
          </div>
          <div class="row">
            <form class="col s12">
              <div class="row">
                <div class="input-field col s6">
                  <input id="first_name" type="text" class="validate" />
                  <label for="first_name">First Name</label>
                </div>
                <div class="input-field col s6">
                  <input id="last_name" type="text" class="validate" />
                  <label for="last_name">Last Name</label>
                </div>
              </div>

              <div class="row">
                <div class="input-field col s12">
                  <input id="email" type="email" class="validate" />
                  <label for="email">Email</label>
                </div>
                <div class="center-align">
                  <form class="col s12">
                    <div class="row">
                      <div class="input-field col s12">
                        <i class="material-icons prefix">mode_edit</i>
                        <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
                        <label for="icon_prefix2">Message</label>
                      </div>
                    </div>
                  </form>
                  <button
                    class="btn waves-effect waves-light center-align"
                    type="submit"
                    name="action"
                  >
                    Submit
                    <i class="material-icons right">send</i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
