// <a href="https://www.flaticon.com/free-icons/play" title="play icons">Play icons created by Freepik - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/stop-button" title="stop button icons">Stop button icons created by Pixel perfect - Flaticon</a>
import React, { useEffect, useState, Component } from "react";
import Coffee from "./Coffee";

export class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      audio: props.audio,
      play: false,
    };
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a
            className="btn btn-ghost normal-case text-xl"
            onClick={() => {
              this.setState({
                play: !this.state.play,
              });
              this.state.play
                ? this.state.audio.stop()
                : this.state.audio.play();
            }}
          >
            {this.state.play ? (
              <div className="avatar">
                <div className="w-8 rounded">
                  <img src="stop-button.png" alt="stop button" />
                </div>
              </div>
            ) : (
              <div className="avatar">
                <div className="w-8 rounded">
                  <img src="play-button-arrowhead.png" alt="play button" />
                </div>
              </div>
            )}
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                //TODO: Replace image with Reddit sub image
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
             
              <li>
                {/* //TODO: Set a refresh button here */}

                <a className="justify-between">Refresh
                <span className="badge">⎋</span></a>
              </li>
              <li>
                <Coffee />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
