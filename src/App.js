import { Link, Outlet } from "react-router-dom";
import Component from "./Components";
import Hooks from "./Hooks";
import "./App.css";
import Redux from "./Redux-Framework/Index";
function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/home" className="mr">
          home
        </Link>
        <Link to="/about" className="mr">
          about
        </Link>
        <Link to="category/food" className="mr">
          Food
        </Link>
        <Link to="category/tech" className="mr">
          Tech
        </Link>
      </nav>
      <Outlet />
      <br />
      <Redux />
      <br />
      <hr />
      <h1>Hooks</h1>
      <Hooks />
      <br />
      <hr />
      <h1>Component</h1>
      <Component />
    </div>
  );
}

export default App;
