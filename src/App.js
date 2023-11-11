import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Help from "./Components/Help";
import HowTo from "./Components/HowTo";
import NavBar from "./Components/NavBar";
import Pogs from "./Components/Pogs";
import Token from "./Components/Token";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Header />

      <HowTo/>
      
      <Token />

      <Pogs/>

      <Help/>

      <Footer/>
    </div>
  );
}

export default App;
