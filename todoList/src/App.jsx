import { useState } from "react";
import TodoItem from "./components/TodoItem";
import InputArea from "./components/InputArea";

function App() {
  const [items, setItems] = useState([]);

  function handleSubmit(newInputItem) {
    setItems((prevItems) => {
      return [...prevItems, newInputItem];
    });
  }

  function deleteElement(id) {
    setItems(
      items.filter((todoItem, index) => {
        return id !== index;
      })
    );
  }

  return (
    <>
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold">Todo List</h1>
        <InputArea onAdd={handleSubmit} />
        <ul>
          {items.map((todoItem, index) => {
            return (
              <TodoItem
                key={index}
                id={index}
                item={todoItem}
                deleteAction={deleteElement}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
