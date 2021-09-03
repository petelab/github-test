import logo from "./logo.svg";
import "./App.css";

const mySecret = process.env["testkey"];

function App() {
  const handleGet = async () => {
    const response = await fetch(`https://baconipsum.com/api/?${mySecret}`);
    console.log(response);
  };
  return (
    <div className="App">
      <h1>Hello there</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        repudiandae consequatur optio dicta enim, quibusdam ad, est accusantium
        veritatis iste reprehenderit id 111.
      </p>
      <p>Test</p>
      <p>Test2</p>
      <button onClick={handleGet}>click</button>
    </div>
  );
}

export default App;
