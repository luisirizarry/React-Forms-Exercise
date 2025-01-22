import React, { useState } from "react";
import Box from "./Box";
import { v4 as uuid } from 'uuid';
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
  const INITIAL_STATE = [
    { id: uuid(), color: 'Red', width: '20', height: '20'},
    { id: uuid(), color: 'Blue', width: '20', height: '20'}
  ]

  const [boxes, setBoxes] = useState(INITIAL_STATE);
  
  const addBox = (newBox) => {
    setBoxes( boxes => [ ...boxes, {...newBox, id: uuid()}] )
  }

  const deleteBox = (boxToDeleteId) => {
    setBoxes(boxes => boxes.filter(box => box.id !== boxToDeleteId));
  };

  return (
    <>
      <h3>Box List</h3>
      <NewBoxForm addBox={addBox}/>
      <div>
        {boxes.map((box) => (
          <Box id={box.id} color={box.color} width={box.width} height={box.height} deleteBox={deleteBox} key={box.id} />
        ))}
      </div>
    </>
  );
};

export default BoxList;
