import TextField from './components/Textfield/Textfield';
import Wrapper from './components/Wrapper/Wrapper';

function App() {
  return (
    <>
      <TextField placeholder='Enter user name..' />
      <br />
      <hr />
      <br />
      <Wrapper sectioned>
        <div>
          <h1>
            It is a custom wrapper component!
          </h1>
        </div>
      </Wrapper>

      <br />
      <hr />
      <br />
      
    </>
  );
}

export default App;
