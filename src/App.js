
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllRoutes from "./Components/AllRoutes";



function App() {

  return (
    <div className="App">
      <Router>
        <AllRoutes />
      </Router>
    </div>
  );
}

export default App;
