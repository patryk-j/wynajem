import { Button } from "@material-ui/core"
import React, { useState, useContext } from "react"
import firebase from "../../LoginComponents/firebase"
import DialogComponent from "./DialogComponent"
import { AuthContext } from "../../LoginComponents/AuthProvider"

const CarDetails = ({ car }) => {
  const [open, setOpen] = useState(false)
  const [reservedDates, setReservedDates] = useState()
  const { currentUser } = useContext(AuthContext)

  const getReservedDates = (id) => {
    const ref = firebase.firestore().collection("cars").doc(id)
    ref.get().then((doc) => setReservedDates(doc.data()["calendardate"]))
  }

  return (
    <>
      <div key={car.id}>
        <h2 className="offer-h2">{car.name}</h2>
        <div>
          <img className="photo-offer" src={car.image} alt={car.name} />
        </div>
        {currentUser && (
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            onClick={() => {
              setOpen(true)
              getReservedDates(car.id)
            }}
          >
            SPRAWDŹ TERMIN
          </Button>
        )}
      </div>
      <DialogComponent
        open={open}
        setOpen={setOpen}
        car={car}
        reservedDates={reservedDates}
      />
    </>
  )
}

export default CarDetails
