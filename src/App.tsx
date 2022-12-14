import React from "react";
import Button from "./components/Button/Button";
import Pagination from "./components/Pagination/Pagination";

function App() {
  return (
    <div className="App">
      <Button variant="contained">Button By Harsh</Button>
      <Pagination pages={5}/>
    </div>
  );
}

export default App;
