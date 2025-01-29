import React from "react"
import "../styles/StartPage.css"
import startlogo from "../../images/wynajemlogo.PNG"
import Carousel from "./Carousel"

const StartPage = () => {
  return (
    <>
      <div className="startlogo">
        <img src={startlogo} alt="logo" />
      </div>
      <h1 className="startpage-h1">Chcesz zarezerwować pojazd?</h1>
      <h2 className="startpage-h2">
        Przejdź do zakładki Oferta i wybierz swój termin!
      </h2>
      <Carousel />
    </>
  )
}

export default StartPage
