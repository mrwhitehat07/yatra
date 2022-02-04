import "./App.css"; 
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import Mid from "./components/Mid.jsx";

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Mid />
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
