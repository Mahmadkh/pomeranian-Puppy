import "./App.css";
import Home from "./components/home/Home";
import Buttons from "./components/buttons/Buttons";
import Features from "./components/features/Features";
import Form from "./components/form/Form";

function App() {
  return (
    <div className="App">
      < Home/>

      <div className="buttonsAndFeaturesContainer">
        <div className="buttonsAndFeatures">
          < Buttons />
          < Features />
        </div>
        <div className="formContain">
< Form />
        </div>
      </div>
      

    </div>
  );
}

export default App;
