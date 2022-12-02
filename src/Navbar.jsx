import React from "react";
import Coffee from "./Coffee";

function Navbar({ audio }) {
  return (
    <>
      <div className="navbar bg-base-100 shadow-md">
        <div className="flex-1">
          <a
            className="btn btn-ghost normal-case text-xl"
            onClick={() => {
              audio.play();
            }}
          >
            Hello
          </a>
        </div>
        <div className="">
          <Coffee />
        </div>
      </div>
    </>
  );
}

export default Navbar;
