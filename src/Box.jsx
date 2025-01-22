import React from "react";
import "./Box.css";

const Box = ({ id, color, width, height, deleteBox }) => {
  return (
    <div
      className="Box"
      style={{
        backgroundColor: color,
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <button className="Box-delete" onClick={() => deleteBox(id)}>
        X
      </button>
    </div>
  );
};

export default Box;
