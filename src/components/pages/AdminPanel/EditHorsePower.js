import React, { useState } from "react"
import firebase from "../../LoginComponents/firebase"
import { Button } from "@material-ui/core"

const EditTableOfCars = ({ car }) => {
  const [hp, setHp] = useState(car.hp)

  const onUpdateHp = () => {
    const db = firebase.firestore()
    db.collection("cars")
      .doc(car.id)
      .set({ ...car, hp })
  }

  return (
    <>
      <input
        value={hp}
        onChange={(e) => {
          setHp(e.target.value)
        }}
      />
      <Button onClick={onUpdateHp} color="secondary">
        Edytuj
      </Button>
    </>
  )
}

export default EditTableOfCars
