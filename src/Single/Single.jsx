import React from 'react'
import Rpeat from '../Rpeat/Rpeat'
import Singel from "../assets/Alex hotels.jpg"
import Hotel from '../Hotel/Hotel'
function Single() {
  return (
    <>
      <Rpeat tittle="alexandria hotels& places to stay" img={Singel} />
      <Hotel/>
    </>
  )
}

export default Single
