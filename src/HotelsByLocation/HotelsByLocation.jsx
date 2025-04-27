// HotelsByLocation.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { places } from '../Home/Home'; // استيراد places من Home.js
import "./style.css"

const HotelsByLocation = () => {
  const { location } = useParams(); // جلب الموقع من الرابط

  // فلترة الأماكن بناءً على الموقع
  const filteredPlaces = places.filter(place => place.location.toLowerCase() === location.toLowerCase());

  return (
    <div className="container">
      <h2>Hotels in {location}</h2>
      <div className="">
        {filteredPlaces.map(place => (
          <div key={place.name} className="">
            {place.hotels.map(hotel => (
              <div key={hotel.id} className="card2">
                <div className="main-image">
                  <img src={hotel.imgs[0]} alt={`${hotel.name} Main Image`} />
                  <div className="small-images">
                    {hotel.imgs.slice(1, 4).map((img, index) => (
                      <img key={index} src={img} alt={`Small Image ${index + 1}`} />
                    ))}
                  </div>
                </div>
                
                <div className="card-content">
                  <h2>{hotel.name}</h2>
                  <div className="stars">{"★".repeat(hotel.reat[0])}</div>
                  <a href="#" className="location">📍 {place.location} - View on map</a>
                  <div className="features">
                    <div className="feature">Private beach</div>
                    <div className="feature">Free Wi-Fi</div>
                    <div className="feature">Free parking</div>
                    <div className="feature">Spa</div>
                  </div>
                  <p className="quote">"Most importantly it's clean."</p>
                </div>
            
                <div className="price-section">
                  <div>Excellent</div>
                  <div className="rating">8.2</div>
                  <div>Avg price per night</div>
                  <div className="price">USD 18</div>
                  <a href={place.page} className="btn">Check availability</a>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelsByLocation;
