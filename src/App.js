import logo from './logo.svg';
import './App.css';
import {Greeting} from './Greeting';

const App = () => {

  const styles = {
    container: {
      padding: 20,
      backgroundColor: new Date().getSeconds() % 2 ? "lightblue" : "pink"
    }
    , heading: {
      textTransform: "uppercase"
    }
  };
  return (
    // Looks like html but it is JSX
      // JSX Fragment, don't need a needless div
      // Elements need a parent element
    <div
      style={styles.container}
    >
      <h1
        style={styles.heading}
      >Hello React</h1>
      
      <Greeting name="Sherman" favoriteNumber={26} favoriteColors={["green", "orange", "purple"]}/>
    </div>
  );
}

export default App;
