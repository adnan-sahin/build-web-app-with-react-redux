import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="h-100 p-5 bg-body-tertiary border rounded-3">
    <h1> Administration</h1>
    <p> React , Redux Web App</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);
export default HomePage;
