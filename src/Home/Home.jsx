// Home.js
import React from "react";
import "./Home.css"; 
import Rpeat from "../Rpeat/Rpeat";
import Home2 from "../assets/18.jpg";
import { Link } from "react-router-dom";
import non from "../assets/1.jpg"

export const places = [
  { 
    name: "Sunrise Hurghada Resort", 
    location: "Hurghada",
    hotels: [
      {
        name: "hawae",
        id: 23,
        reat: [1, 2, 3, 4, 5],
        imgs: [
          {non},
          "https://images.pexels.com/photos/2553799/pexels-photo-2553799.jpeg",
          "https://images.pexels.com/photos/2662119/pexels-photo-2662119.jpeg",
          "https://images.pexels.com/photos/2397662/pexels-photo-2397662.jpeg",
          "https://images.pexels.com/photos/2662097/pexels-photo-2662097.jpeg"
        ],
        description: 'This is the best hotel'
      },
      {
        name: "Baron Palace Sahl Hasheesh",
        id: 24,
        reat: [1, 2, 3, 4, 5],
        imgs: [
          "https://images.pexels.com/photos/1223379/pexels-photo-1223379.jpeg",
          "https://images.pexels.com/photos/2397680/pexels-photo-2397680.jpeg",
          "https://images.pexels.com/photos/1258745/pexels-photo-1258745.jpeg",
          "https://images.pexels.com/photos/3251543/pexels-photo-3251543.jpeg",
          "https://images.pexels.com/photos/1200442/pexels-photo-1200442.jpeg"
        ],
        description: 'A five-star resort with fantastic ocean views'
      },
      {
        name: "Jaz Aquamarine Resort",
        id: 25,
        reat: [1, 2, 3, 4, 5],
        imgs: [
          "https://images.pexels.com/photos/2415709/pexels-photo-2415709.jpeg",
          "https://images.pexels.com/photos/2907496/pexels-photo-2907496.jpeg",
          "https://images.pexels.com/photos/2661182/pexels-photo-2661182.jpeg",
          "https://images.pexels.com/photos/2612288/pexels-photo-2612288.jpeg",
          "https://images.pexels.com/photos/2823279/pexels-photo-2823279.jpeg"
        ],
        description: 'All-inclusive family resort with multiple amenities'
      },
      {
        name: "Steigenberger Al Dau Beach",
        id: 26,
        reat: [1, 2, 3, 4, 5],
        imgs: [
          "https://images.pexels.com/photos/2397678/pexels-photo-2397678.jpeg",
          "https://images.pexels.com/photos/3272061/pexels-photo-3272061.jpeg",
          "https://images.pexels.com/photos/2663433/pexels-photo-2663433.jpeg",
          "https://images.pexels.com/photos/2630970/pexels-photo-2630970.jpeg",
          "https://images.pexels.com/photos/2630983/pexels-photo-2630983.jpeg"
        ],
        description: 'An elegant beach resort with top-notch amenities'
      },
      {
        name: "The Oberoi Beach Resort",
        id: 27,
        reat: [1, 2, 3, 4, 5],
        imgs: [
          "https://images.pexels.com/photos/2473439/pexels-photo-2473439.jpeg",
          "https://images.pexels.com/photos/2081789/pexels-photo-2081789.jpeg",
          "https://images.pexels.com/photos/2612203/pexels-photo-2612203.jpeg",
          "https://images.pexels.com/photos/2630981/pexels-photo-2630981.jpeg",
          "https://images.pexels.com/photos/2533271/pexels-photo-2533271.jpeg"
        ],
        description: 'Luxury beach resort with world-class service'
      }
    ],
    img: "images/hurghada.jpg", 
    page: "hurghada.html" 
  },
  { 
    name: "Rixos Sharm El Sheikh", 
    location: "Sharm El Sheikh", 
    hotels: [
      {
        name: "Rixos",
        id: 28,
        reat: [1, 2, 3, 4, 5],
        imgs: [
          "https://images.pexels.com/photos/2081757/pexels-photo-2081757.jpeg",
          "https://images.pexels.com/photos/2661182/pexels-photo-2661182.jpeg",
          "https://images.pexels.com/photos/2877605/pexels-photo-2877605.jpeg",
          "https://images.pexels.com/photos/2198930/pexels-photo-2198930.jpeg",
          "https://images.pexels.com/photos/2397775/pexels-photo-2397775.jpeg"
        ],
        description: 'A luxury hotel offering amazing sea views'
      },
      {
        name: "Sharm El Sheikh Marriott Resort",
        id: 29,
        reat: [1, 2, 3, 4, 5],
        imgs: [
          "https://images.pexels.com/photos/2081887/pexels-photo-2081887.jpeg",
          "https://images.pexels.com/photos/2141347/pexels-photo-2141347.jpeg",
          "https://images.pexels.com/photos/2259030/pexels-photo-2259030.jpeg",
          "https://images.pexels.com/photos/2769191/pexels-photo-2769191.jpeg",
          "https://images.pexels.com/photos/2907459/pexels-photo-2907459.jpeg"
        ],
        description: 'A lavish beachfront resort with diverse facilities'
      },
      {
        name: "Hilton Sharm Waterfalls Resort",
        id: 30,
        reat: [1, 2, 3, 4, 5],
        imgs: [
          "https://images.pexels.com/photos/2661187/pexels-photo-2661187.jpeg",
          "https://images.pexels.com/photos/2486998/pexels-photo-2486998.jpeg",
          "https://images.pexels.com/photos/2974614/pexels-photo-2974614.jpeg",
          "https://images.pexels.com/photos/2598094/pexels-photo-2598094.jpeg",
          "https://images.pexels.com/photos/2631472/pexels-photo-2631472.jpeg"
        ],
        description: 'A stunning resort located by the Red Sea'
      },
      {
        name: "Four Seasons Sharm El Sheikh",
        id: 31,
        reat: [1, 2, 3, 4, 5],
        imgs: [
          "https://images.pexels.com/photos/2548559/pexels-photo-2548559.jpeg",
          "https://images.pexels.com/photos/2712300/pexels-photo-2712300.jpeg",
          "https://images.pexels.com/photos/2397673/pexels-photo-2397673.jpeg",
          "https://images.pexels.com/photos/2604121/pexels-photo-2604121.jpeg",
          "https://images.pexels.com/photos/2136734/pexels-photo-2136734.jpeg"
        ],
        description: 'A luxurious resort offering world-class amenities'
      },
      {
        name: "Noria Resort",
        id: 32,
        reat: [1, 2, 3, 4, 5],
        imgs: [
          "https://images.pexels.com/photos/2977302/pexels-photo-2977302.jpeg",
          "https://images.pexels.com/photos/2397715/pexels-photo-2397715.jpeg",
          "https://images.pexels.com/photos/2598120/pexels-photo-2598120.jpeg",
          "https://images.pexels.com/photos/2872267/pexels-photo-2872267.jpeg",
          "https://images.pexels.com/photos/2357652/pexels-photo-2357652.jpeg"
        ],
        description: 'A beautiful resort with amazing views of the Red Sea'
      }
    ],
    img: "images/Sharm elshaikh.jpeg", 
    page: "sharm.html" 
  }, 
  { 
    name: "Tolip North Coast Hotel", 
    location: "New Alamein", 
    hotels: [
      {
        name: "Tolip",
        id: 38,
        reat: [1, 2, 3, 4, 5],
        imgs: [
          "https://images.pexels.com/photos/2794727/pexels-photo-2794727.jpeg",
          "https://images.pexels.com/photos/2800339/pexels-photo-2800339.jpeg",
          "https://images.pexels.com/photos/2541981/pexels-photo-2541981.jpeg",
          "https://images.pexels.com/photos/2582982/pexels-photo-2582982.jpeg",
          "https://images.pexels.com/photos/2559733/pexels-photo-2559733.jpeg"
        ],
        description: 'Perfect getaway with amazing coastal views'
      },
      {
        name: "Marina Beach Resort",
        id: 39,
        reat: [1, 2, 3, 4, 5],
        imgs: [
          "https://images.pexels.com/photos/3125057/pexels-photo-3125057.jpeg",
          "https://images.pexels.com/photos/2571011/pexels-photo-2571011.jpeg",
          "https://images.pexels.com/photos/2430406/pexels-photo-2430406.jpeg",
          "https://images.pexels.com/photos/2825105/pexels-photo-2825105.jpeg",
          "https://images.pexels.com/photos/3200419/pexels-photo-3200419.jpeg"
        ],
        description: 'A relaxing resort with beachfront access'
      },
      {
        name: "Coral Sea Resort",
        id: 40,
        reat: [1, 2, 3, 4, 5],
        imgs: [
          "https://images.pexels.com/photos/2630981/pexels-photo-2630981.jpeg",
          "https://images.pexels.com/photos/2389641/pexels-photo-2389641.jpeg",
          "https://images.pexels.com/photos/2319737/pexels-photo-2319737.jpeg",
          "https://images.pexels.com/photos/2377036/pexels-photo-2377036.jpeg",
          "https://images.pexels.com/photos/2796823/pexels-photo-2796823.jpeg"
        ],
        description: 'A charming resort with stunning sea views'
      },
      {
        name: "Cascades Resort",
        id: 41,
        reat: [1, 2, 3, 4, 5],
        imgs: [
          "https://images.pexels.com/photos/2582883/pexels-photo-2582883.jpeg",
          "https://images.pexels.com/photos/2498887/pexels-photo-2498887.jpeg",
          "https://images.pexels.com/photos/2320931/pexels-photo-2320931.jpeg",
          "https://images.pexels.com/photos/2449770/pexels-photo-2449770.jpeg",
          "https://images.pexels.com/photos/2389862/pexels-photo-2389862.jpeg"
        ],
        description: 'A luxury retreat offering breathtaking views'
      },
      {
        name: "North Coast Luxury Resort",
        id: 42,
        reat: [1, 2, 3, 4, 5],
        imgs: [
          "https://images.pexels.com/photos/2832438/pexels-photo-2832438.jpeg",
          "https://images.pexels.com/photos/2283510/pexels-photo-2283510.jpeg",
          "https://images.pexels.com/photos/2391062/pexels-photo-2391062.jpeg",
          "https://images.pexels.com/photos/2322269/pexels-photo-2322269.jpeg",
          "https://images.pexels.com/photos/2235675/pexels-photo-2235675.jpeg"
        ],
        description: 'A private luxury resort for a perfect vacation'
      }
    ],
    img: "images/new Alamein.jpg", 
    page: "alamein.html" 
  },
  { 
    name: "Stella Di Mare", 
    location: "Elsokhna", 
    hotels: [
      {
        name: "Stella Di Mare",
        id: 43,
        reat: [1, 2, 3, 4, 5],
        imgs: [
          "https://images.pexels.com/photos/2502916/pexels-photo-2502916.jpeg",
          "https://images.pexels.com/photos/2584679/pexels-photo-2584679.jpeg",
          "https://images.pexels.com/photos/2609241/pexels-photo-2609241.jpeg",
          "https://images.pexels.com/photos/2786091/pexels-photo-2786091.jpeg",
          "https://images.pexels.com/photos/2590921/pexels-photo-2590921.jpeg"
        ],
        description: 'A serene beachfront hotel with excellent service'
      },
      {
        name: "Sokhna Beach Resort",
        id: 44,
        reat: [1, 2, 3, 4, 5],
        imgs: [
          "https://images.pexels.com/photos/2120970/pexels-photo-2120970.jpeg",
          "https://images.pexels.com/photos/2318473/pexels-photo-2318473.jpeg",
          "https://images.pexels.com/photos/2682992/pexels-photo-2682992.jpeg",
          "https://images.pexels.com/photos/2801286/pexels-photo-2801286.jpeg",
          "https://images.pexels.com/photos/2205781/pexels-photo-2205781.jpeg"
        ],
        description: 'A luxury beach resort with all the amenities'
      },
      {
        name: "Jaz Little Venice Golf Resort",
        id: 45,
        reat: [1, 2, 3, 4, 5],
        imgs: [
          "https://images.pexels.com/photos/2825130/pexels-photo-2825130.jpeg",
          "https://images.pexels.com/photos/2660960/pexels-photo-2660960.jpeg",
          "https://images.pexels.com/photos/2397661/pexels-photo-2397661.jpeg",
          "https://images.pexels.com/photos/2631472/pexels-photo-2631472.jpeg",
          "https://images.pexels.com/photos/2900127/pexels-photo-2900127.jpeg"
        ],
        description: 'Golf resort with an amazing view of the Red Sea'
      },
      {
        name: "Movenpick Resort El Sokhna",
        id: 46,
        reat: [1, 2, 3, 4, 5],
        imgs: [
          "https://images.pexels.com/photos/2376713/pexels-photo-2376713.jpeg",
          "https://images.pexels.com/photos/2464731/pexels-photo-2464731.jpeg",
          "https://images.pexels.com/photos/2603483/pexels-photo-2603483.jpeg",
          "https://images.pexels.com/photos/2683103/pexels-photo-2683103.jpeg",
          "https://images.pexels.com/photos/2761769/pexels-photo-2761769.jpeg"
        ],
        description: 'A five-star resort with a private beach'
      },
      {
        name: "Royal Tulip Resort",
        id: 47,
        reat: [1, 2, 3, 4, 5],
        imgs: [
          "https://images.pexels.com/photos/2972269/pexels-photo-2972269.jpeg",
          "https://images.pexels.com/photos/2416394/pexels-photo-2416394.jpeg",
          "https://images.pexels.com/photos/2597781/pexels-photo-2597781.jpeg",
          "https://images.pexels.com/photos/2680992/pexels-photo-2680992.jpeg",
          "https://images.pexels.com/photos/2321194/pexels-photo-2321194.jpeg"
        ],
        description: 'A quiet resort offering the best in relaxation'
      }
    ],
    img: "images/elsokhna.jpg", 
    page: "elsokhna.html" 
  },
  { 
    name: "La Maison Bleue El Gouna", 
    location: "El Gouna", 
    hotels: [
      {
        name: "La Maison Bleue",
        id: 48,
        reat: [1, 2, 3, 4, 5],
        imgs: [
          "https://images.pexels.com/photos/3195279/pexels-photo-3195279.jpeg",
          "https://images.pexels.com/photos/3086485/pexels-photo-3086485.jpeg",
          "https://images.pexels.com/photos/2334989/pexels-photo-2334989.jpeg",
          "https://images.pexels.com/photos/2427322/pexels-photo-2427322.jpeg",
          "https://images.pexels.com/photos/2086893/pexels-photo-2086893.jpeg"
        ],
        description: 'A charming boutique hotel in the heart of El Gouna'
      },
      {
        name: "El Gouna Resort",
        id: 49,
        reat: [1, 2, 3, 4, 5],
        imgs: [
          "https://images.pexels.com/photos/2847616/pexels-photo-2847616.jpeg",
          "https://images.pexels.com/photos/2320300/pexels-photo-2320300.jpeg",
          "https://images.pexels.com/photos/2868749/pexels-photo-2868749.jpeg",
          "https://images.pexels.com/photos/2822069/pexels-photo-2822069.jpeg",
          "https://images.pexels.com/photos/2857403/pexels-photo-2857403.jpeg"
        ],
        description: 'A luxurious retreat in the heart of El Gouna'
      },
      {
        name: "Sheraton Miramar Resort",
        id: 50,
        reat: [1, 2, 3, 4, 5],
        imgs: [
          "https://images.pexels.com/photos/3195280/pexels-photo-3195280.jpeg",
          "https://images.pexels.com/photos/3098903/pexels-photo-3098903.jpeg",
          "https://images.pexels.com/photos/2377349/pexels-photo-2377349.jpeg",
          "https://images.pexels.com/photos/2551843/pexels-photo-2551843.jpeg",
          "https://images.pexels.com/photos/2506784/pexels-photo-2506784.jpeg"
        ],
        description: 'A stunning resort with world-class services'
      }
    ],
    img: "images/Elgouna.jpg", 
    page: "elgouna.html" 
  }
];


const Home = () => {
  return (
    <>
      <Rpeat tittle="where every journey" tittle2=" becomes an adventure" img={Home2} />








      <section className="sec2 py-4">
        <div className="container">
          <div className="row">
            {places.map(place => (
              <div key={place.name} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="card h-100">
                  <img src={place.img} className="card-img-top" alt={place.name} />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{place.name}</h5>
                    <p className="card-text">{place.hotels.description}</p>
                    <Link to={`/hotels/${place.location}`} className="btn btn-primary mt-auto">
                      View Hotels in {place.location}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
