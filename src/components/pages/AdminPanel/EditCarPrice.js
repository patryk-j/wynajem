import React, { useState } from "react"
import firebase from "../../LoginComponents/firebase"
import { Button } from "@material-ui/core"

const EditTableOfCars = ({ car }) => {
  const [price, setPrice] = useState(car.price)

  const onUpdatePrice = () => {
    const db = firebase.firestore()
    db.collection("cars")
      .doc(car.id)
      .set({ ...car, price })
  }

  return (
    <>
      <input
        value={price}
        onChange={(e) => {
          setPrice(e.target.value)
        }}
      />
      <Button onClick={onUpdatePrice} color="secondary">
        Edytuj
      </Button>
    </>
  )
}

export default EditTableOfCars
