import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Stream = [
  { id: "Netflix" },
  { id: "HBO" },
  { id: "Hulu" },
  { id: "Prime" },
];

export default function App() {
  //Insert router, links here
  return (
    <Router>
      <div>
        <Link to="/netflix">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg"
            alt="Netflix"
          />
        </Link>
        <Link to="/hbo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg"
            alt="HBO"
          />
        </Link>
        <Link to="/hulu">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg"
            alt="Hulu"
          />
        </Link>
        <Link to="prime">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png"
            alt="Prime"
          />
        </Link>
      </div>
      <Routes>
        <Route path=":id" element={<Child />}></Route>
      </Routes>
    </Router>
  );
}

function Child() {
  // Below this comment, there's one major key script missing
  const { id } = useParams();
  const stream = Stream[id];
  return (
    <div>
      <h3>
        You Selected:<span>{id}</span>
      </h3>
    </div>
  );
}
