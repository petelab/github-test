import logo from "./logo.svg";
import "./App.css";
import {useState,useEffect} from "react"



function App() {
  const [value,setValue] = useState(()=>{
    return localStorage.getItem("lorem") || ""
  })
  const [loading,setLoading] = useState(false)
  const handleGet = async () => {
    setLoading(true)
    const response = await fetch(`https://baconipsum.com/api/?type=meat-and-filler&paras=1`);
    const data = await response.json();
    const [first] = data
    
    setValue(first)
    console.log(first);
    setLoading(false)
  };
  const handleClear = ()=>{
    setValue("")
  }
  useEffect(()=>{
    localStorage.setItem("lorem",value)
  },[value])
  return (
    <div className="App">
      <h1>Hello there</h1>
      <div className="box">
      {value !== "" ? <p>{value}</p>: <p>no value</p>}
</div>
      <button onClick={handleGet} disabled={loading}>click</button>
      <button onClick={handleClear}>Clear Local Storage</button>
    </div>
  );
}

export default App;
