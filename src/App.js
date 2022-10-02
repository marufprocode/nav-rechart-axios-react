import "./App.css";
import MarksChart from "./components/marksChart/MarksChart";
import Navbar from "./components/navbar/Navbar";
import PhoneChart from "./components/phoneChart/PhoneChart";
import Pricing from "./components/pricing/Pricing";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className="text-3xl font-bold underline">This is header section!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos atque </p>
      <Pricing/>
      <div className="charts flex justify-center flex-wrap">
      <MarksChart/>
      <PhoneChart/>
      </div>
    </div>
  );
}

export default App;
