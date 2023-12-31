import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Search from "./Search";

export function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand mx-3" to="/">
          Movie-Look
        </Link>
        
        <Search/>
      </div>
    </nav>
  );
};

