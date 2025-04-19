import React from 'react'
import Home1 from "../assets/4.jpg"
import { Link } from "react-router-dom";
function Card() {
  return (
    <div className="card h-100">
      <img src={Home1} className="card-img-top" alt="sora" />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">Sharm El Sheikh</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <Link to="/singel" className="btn btn-primary mt-auto">
          View Hotels
        </Link>
      </div>
    </div>
  )
}

export default Card
