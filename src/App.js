import { Link, Outlet } from "react-router-dom";
import Component from "./Components";
import Hooks from "./Hooks";
import "./App.css";

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
    </div>
  );
}

export default App;
