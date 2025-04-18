import React from 'react'


function Rpeat(props) {
  return (
    <>
      <section class="home3">
        <img src={props.img} alt="" />
        <h1>{props.tittle}</h1>
        <h1>{props.tittle2}</h1>
        {/* <h1>sharm el sheikh & places to stay</h1>
        <p>Search to compare prices and discover great deals with free cancellation</p> */}

        <div class="booking">
            <input type="text" placeholder="Location"/>
            <input type="date" placeholder="Check In"/>
            <input type="date" placeholder="Check Out"/>
            <input type="text" placeholder="Guests"/>
            <button class="search-btn">Search</button>
        </div>
    </section>

    </>
  )
}

export default Rpeat
