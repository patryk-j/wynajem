import React, { useState, useEffect, useContext } from "react"
import "../styles/Offer.css"
import { Button } from "@material-ui/core"
import firebase from "../../LoginComponents/firebase"
import CarDetails from "./CarDetails"
import { AuthContext } from "../../LoginComponents/AuthProvider"

const Offer = () => {
  const [cars, setCars] = useState([])
  const { currentUser } = useContext(AuthContext)

  const getCars = () => {
    firebase
      .firestore()
      .collection("cars")
      .get()
      .then((snapshot) => {
        let listOfCars = []
        snapshot.forEach((doc) => {
          listOfCars.push(doc.data())
        })
        setCars(listOfCars)
      })
  }

  useEffect(() => {
    getCars()
  }, [])

  const Cuser = () => {
    if (currentUser) {
      return null
    } else {
      return (
        <div>
          <h2 className="h2-alert">Zaloguj się, by dokonać rezerwacji!</h2>
        </div>
      )
    }
  }

  return (
    <>
      <h1>Oferta</h1>
      <div className="button-price">
        <Button href="/price" variant="contained" color="primary">
          Cennik
        </Button>
      </div>
      <Cuser />

      <div className="offer">
        {cars.map((car) => (
          <CarDetails car={car} key={car.id} />
        ))}
      </div>
    </>
  )
}

export default Offer
