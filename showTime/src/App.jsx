import React from "react";
import { Time } from "./components/Time";

function App() {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div>
          <h1 className="text-3xl font-bold block">Welcome To Show Time</h1>
          <Time />
        </div>
      </div>
    </>
  );
}

export default App;
