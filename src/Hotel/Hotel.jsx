import React from 'react'

function Hotel() {
  return (
    <>
      <div class="card2">
        <div class="main-image">
            <img src="images/hurghada.jpg" alt="Hotel Image"/>
            <div class="small-images">
                <div> 
                    <img src="images/1_15897_02.jpg" alt="Small Image 1"/>
                    <img src="images/1_18749_02.jpg" alt="Small Image 2"/>
                    <img src="images/1_2199_02.jpg" alt="Small Image 3"/></div>
               <div><img src="images/banner.jpg" alt="Small Image 4"/>
                <img src="images/download (1).jpeg" alt="Small Image 5"/>
                <img src="images/1_7923_02.jpg" alt="Small Image 6"/></div>
                
            </div>
        </div>
        
        <div class="card-content">
            <h2>Lamera Hotel</h2>
            <div class="stars">★★★</div>
            <a href="#" class="location">📍 Hurghada, Egypt - View on map</a>
            <div class="features">
                <div class="feature">Private beach</div>
                <div class="feature">Free Wi-Fi</div>
                <div class="feature">Free parking</div>
                <div class="feature">Spa</div>
            </div>
            <p class="quote">"Most importantly it's clean."</p>
        </div>
    
        <div class="price-section">
            <div>Excellent</div>
            <div class="rating">8.2</div>
            <div>Avg price per night</div>
            <div class="price">USD 18</div>
            <a href="#" class="btn">Check availability</a>
        </div>
    </div>
    </>
  )
}

export default Hotel
