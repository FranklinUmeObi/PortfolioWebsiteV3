import "./App.css";

import MainPage from "./Components/MainPage.js";
import Navbar from "./Components/Navbar.js";
import Background from "./Components/Background.js";

import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Background />
        <Navbar />
        <Route exact={true} path="/" render={() => <MainPage />} />
      </div>
    </Router>
  );
}

export default App;
