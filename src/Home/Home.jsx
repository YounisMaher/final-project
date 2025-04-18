import React from "react";
import "./Home.css"; 
import Rpeat from "../Rpeat/Rpeat";
import Home1 from "../assets/4.jpg"
import Home2 from "../assets/3.jpg"
const Home = () => {
  return (
    <>
     
<Rpeat tittle="where every journey" tittle2=" becomes an adventure" img={Home2}/>

    

      {/* Cards Section 2 */}
     
    <section class="sec2">
      <div class="container">
        <div class="row">
         <div class="cards">

          <div class="card col-4" >
            <img src={Home1} className ="card-img-top" alt="sora"/>
            <div class="card-body">
              <h5 class="card-title">sharm elshaikh</h5>
               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> 
              <a href="sharm .html" class="btn btn-primary">view hotels</a>
            </div>
          </div>

         </div>
        </div>
      </div>
    </section>

    
    </>
  );
};

export default Home;