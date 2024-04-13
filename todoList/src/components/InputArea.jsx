import React from "react";
import { useState } from "react";

function InputArea(props) {
  const [newInputItem, setNewInputItem] = useState([]);

  function handleInput(e) {
    const newValue = e.target.value;
    setNewInputItem(newValue);
  }

  return (
    <div>
      <input
        className="text-black m-5"
        onChange={handleInput}
        type="text"
        placeholder="Enter todo"
        value={newInputItem}
      />
      <button
        className="bg-blue-700 p-1 rounded-md"
        onClick={() => {
          props.onAdd(newInputItem);
          setNewInputItem("");
        }}
      >
        Add Item
      </button>
    </div>
  );
}

export default InputArea;
