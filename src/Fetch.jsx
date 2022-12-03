import React, { useRef, useState } from "react";
import { MathUtils } from "three";
import Cube from "./Cube";

function setRandomPositions() {
  return [
    MathUtils.randFloat(-10, 10),
    MathUtils.randFloat(-10, 10),
    MathUtils.randFloat(-10, 10),
  ];
}

async function Fetch() {
  const [rows, setRows] = useState([]);
  // setMyArray(oldArray => [...oldArray, newElement]);

  const response = await fetch(
    `https://www.reddit.com/r/AskReddit/comments.json?limit=10`
  )
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(response);
  response.data.children.map((children, index) => {
    console.log(children.data.link_title);
    const p = setRandomPositions();
    setRows((rows) => [...rows, <Cube position={p} key={index} />]);
  });
  return <>{rows}</>;
}

export default Fetch;
