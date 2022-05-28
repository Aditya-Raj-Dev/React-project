import logo from './logo.svg';
import './App.css';
import data from "./data.json"
import Rdetails from './Rdetails';

function App() {
  return (
    <div className="App">
      {data.map((rdata)=>(
        <Rdetails {...rdata}/>
      ))}
    </div>
  );
}

export default App;
