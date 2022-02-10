import "./App.css"; 
import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import Mid from "./components/Mid.jsx";
import { useState, createContext, useEffect } from "react";
import { profile } from "./data/auth";

const UserContext = createContext();

function App() {

  const [user, setUser] = useState({});
  
  useEffect(() => {
    async function getUser() {
      let prof = await profile();
      setUser(prof);
    }
    getUser();
  }, [])

  return (
    <div>
      <UserContext.Provider value={user}>
        <Router>
          <Navbar user={user} />
          <Mid />
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
