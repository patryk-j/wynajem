import React, { useState } from "react"
import firebase from "../../LoginComponents/firebase"
import { Button } from "@material-ui/core"

const DeleteOrderList = ({ order }) => {
  // eslint-disable-next-line no-unused-vars
  const [username, setUsername] = useState(order.username)
  const onDelete = () => {
    let arrayOfDates = []
    const ref = firebase.firestore().collection("cars").doc(order.carId)
    const db = firebase.firestore()
    db.collection("orderlist").doc(order.reservationId).delete()
    db.collection("cars")
      .doc(order.carId)
      .get()
      .then((doc) => {
        arrayOfDates = doc.data()["calendardate"]
        let data = doc.data()
        data = {
          ...data,
          calendardate: arrayOfDates.filter((date) => date !== order.date),
        }
        ref.update(data)
      })
  }

  return (
    <>
      <Button onClick={onDelete} color="secondary">
        Usuń
      </Button>
    </>
  )
}

export default DeleteOrderList
