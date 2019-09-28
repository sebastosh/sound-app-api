import React, { Component } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  withRouter
} from "react-router-dom";
import NewSessionForm from "./NewSessionForm";


export class NavBar extends Component {
  state = {
    newClick: false,
    help: false
  };

  resetState = () => {
    this.setState({ newClick: false });
  };
  newSessionClick = () => {
    this.setState({ newClick: !this.state.newClick });
  };

  showHelp = e => {
    this.setState({ help: !this.state.help });
  };

  render() {
    return (
      <div className="navbar">
       
        <NavLink to="/">
          <span role="img" aria-label="sessions" alt="session">
          Synth Sessions 🎛
          </span>
        </NavLink>
        {localStorage.token && !this.state.newClick ? (
          <span className="newButton" onClick={this.newSessionClick} role="img" aria-label="new session" alt="new session">
            🎹
          </span>
        ) : null}

        {this.state.newClick ? (
          <NewSessionForm
            {...this.props}
            sessionUser={this.props.sessionUser}
            addSession={this.props.addSession}
            newClick={this.newSessionClick}
          />
        ) : null}

        {localStorage.token ? (
          <div className="navuser">
                       {this.state.help ? (
              <div className="key-ui">
                <img onClick={this.showHelp} src="/Piano.png" alt="piano keyboard mapping" />
              </div>
            ) : null}
            <span
              onClick={this.showHelp}
              className="help-button"
              role="img"
              aria-label="chat"
              alt="Help"
            >
              ？
            </span>
            <div className="nav-rotate">
           
              <NavLink onClick={this.resetState} to="/profile">
                <span role="img" aria-label="profile" alt="Profile">
                  ⏀
                </span>
              </NavLink>
            </div>
            <div className="nav-rotate">
              <NavLink onClick={this.resetState} to="/signout">
                <span role="img" aria-label="Sign Out" alt="Sign Out">
                ⏅
                </span>
              </NavLink>
            </div>
          </div>
        ) : (
          <div className="navuser">
             {this.state.help ? (
              <div className="key-ui">
                <img onClick={this.showHelp} src="/Piano.png" alt="piano keyboard mapping" />
              </div>
            ) : null}
              <span
              onClick={this.showHelp}
              className="help-button"
              role="img"
              aria-label="chat"
              alt="Help"
            >
              ？
            </span>
            <NavLink onClick={this.resetState} to="/login">
              <span role="img" aria-label="Login" alt="Log in">
                ⏀
              </span>
            </NavLink>
            <div className="nav-rotate">
            <NavLink onClick={this.resetState} to="/signup">
              <span role="img" aria-label="Sign Up" alt="Sign Up">
              ⏄
              </span>
            </NavLink>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(NavBar);
