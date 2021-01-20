import './App.css';
import Navbar from "./Components/Navbar.js"
import MainPage from "./Components/MainPage.js"

import { HashRouter as Router, Route} from "react-router-dom";

function App() {
  return (

    <Router>
      <div className="App">
      <Navbar/>

        <Route exact={true} path="/" render={() => (<MainPage/>)}/>
        


      </div>
    </Router>
  );
}

export default App;
