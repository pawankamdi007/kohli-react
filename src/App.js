import TestApp1 from './TestApp1';
import {BrowserRouter} from 'react-router-dom';
import Home from './Myapp/home';
import Controller from './Myapp/controller';

function App() {
  return (
    <>
      <BrowserRouter>
          <Controller />
      </BrowserRouter>
    </>
  );
}

export default App;
