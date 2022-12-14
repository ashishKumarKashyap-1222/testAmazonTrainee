import React from "react";
import Button from "./components/Button/Button";
import ContextualSaveBar from "./components/ContextualSaveBar/ContextualSaveBar";
import Pagination from "./components/Pagination/Pagination";

import TextField from "./components/Textfield/Textfield";
import Wrapper from "./components/Wrapper/Wrapper";

function App() {
  return (
    <>
      <ContextualSaveBar/>
      <Button variant="contained">Button By Harsh</Button>
      <TextField placeholder="Enter user name.." />
      <br />
      <hr />
      <br />
      <Wrapper sectioned>
        <div>
          <h1>It is a custom wrapper component!</h1>
        </div>
        <Pagination pages={5} />
      </Wrapper>
      <br />
      <hr />
      <br />
    </>
  );
}

export default App;
