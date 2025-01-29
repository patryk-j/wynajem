import React, { useState } from "react"
import firebase from "../../LoginComponents/firebase"
import { Button } from "@material-ui/core"

const EditTableOfCars = ({ car }) => {
  // eslint-disable-next-line no-unused-vars
  const [name, setName] = useState(car.name)

  const onDelete = () => {
    const db = firebase.firestore()
    db.collection("cars").doc(car.id).delete()
  }

  return (
    <>
      {name}
      <Button onClick={onDelete} color="secondary">
        Usuń
      </Button>
    </>
  )
}

export default EditTableOfCars
