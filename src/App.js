import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';

const App = () => {
  return (
    // Looks like html but it is JSX
      // JSX Fragment, don't need a needless div
      // Elements need a parent element
    <>
      <h1>Hello React</h1>
      <h2>Hello Sherman</h2>
      <h2>Hello Doug</h2>

      
      <Greeting />
    </>
  );
}

export default App;
