import React from "react";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="glow-text">404</h1>
        <p className="subheading">You’ve drifted off course.</p>
        <p className="description">
          The page you're looking for has vanished into a black hole or never
          existed.
        </p>
        <a href="/" className="btn">
          Return to Base
        </a>
      </div>
    </div>
  );
};

export default NotFound;
