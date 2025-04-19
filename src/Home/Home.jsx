import React from "react";
import "./Home.css"; 
import Rpeat from "../Rpeat/Rpeat";

import Home2 from "../assets/18.jpg"
import Card from "../Card/Card";
const Home = () => {
  return (
    <>
     
<Rpeat tittle="where every journey" tittle2=" becomes an adventure" img={Home2}/>

    

      {/* Cards Section 2 */}
      <section className="sec2 py-4">
  <div className="container">
    <div className="row">
      {/* كل كرت لازم يكون داخل col */}
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
        <Card />
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
        <Card />
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
        <Card />
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
        <Card />
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
        <Card />
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
        <Card />
      </div>
    </div>
  </div>
</section>

    
    </>
  );
};

export default Home;