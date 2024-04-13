import React from "react";

function TodoItem(props) {
  return (
    <li
      onClick={() => {
        props.deleteAction(props.id);
      }}
      className="text-xl p-1 m-2 bg-slate-500"
    >
      {props.item}
    </li>
  );
}

export default TodoItem;
