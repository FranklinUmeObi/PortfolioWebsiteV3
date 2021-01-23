import "./App.css";

import MainPage from "./Components/MainPage.js";

import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact={true} path="/" render={() => <MainPage />} />
      </div>
    </Router>
  );
}

export default App;
