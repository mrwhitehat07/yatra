import "./App.css"; 
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Mid from "./components/Mid";

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Mid />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
