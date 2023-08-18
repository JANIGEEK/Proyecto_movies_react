import React from "react";
import "bootswatch/dist/darkly/bootstrap.min.css";
import { MovieDetails} from "./pages/MovieDetails";
import {MovieHome} from "./pages/MovieHome";
import {Header} from "./components/Header";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export function App() {
  return (
    <Router>
      <header>
        <Header/>
      </header>

      <main className="container">
        <Routes>
          <Route path="/details/:Id" element={<MovieDetails/>}/>
          <Route path="/" element={<MovieHome />}/>
        </Routes>
        {/*<div className="container">
        <List />
  </div>*/}
      </main>

      <footer>

      </footer>
    </Router>
  );
}


