import { Button } from "@material-ui/core"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import { format, parseISO } from "date-fns"
import React, { useState, useContext } from "react"
import Calendar from "react-calendar"
import "./DialogComponent.css"
import firebase from "../../LoginComponents/firebase"
import { AuthContext } from "../../LoginComponents/AuthProvider"

const DialogComponent = ({ car, open, setOpen, reservedDates }) => {
  const [value, onChange] = useState(new Date())
  const { currentUser } = useContext(AuthContext)

  const addReservationToCalendar = (id, value) => {
    const ref = firebase.firestore().collection("cars").doc(id)

    ref.get().then((doc) => {
      let data = doc.data()

      data = {
        ...data,
        calendardate: [
          ...data.calendardate,
          format(parseISO(value.toISOString()), "MM/d/yyyy"),
        ],
      }
      ref.update(data)
    })
  }

  const tileContent = ({ date }) => {
    if (reservedDates) {
      if (
        reservedDates.find(
          (resDate) =>
            resDate === format(parseISO(date.toISOString()), "MM/d/yyyy")
        )
      ) {
        return <div className="busy">Zajęty</div>
      }
    } else {
      return null
    }
  }

  const test = () => {
    if (
      reservedDates.find(
        (date) => date === format(parseISO(value.toISOString()), "MM/d/yyyy")
      )
    ) {
      return true
    } else {
      return false
    }
  }

  const makeReservation = () => {
    const ref = firebase.firestore().collection("orderlist").doc()
    const data = {
      car: car.name,
      date: format(parseISO(value.toISOString()), "MM/d/yyyy"),
      userId: currentUser.uid,
      reservationId: ref.id,
      username: firebase.auth().currentUser.email,
      carId: car.id,
    }
    ref.set(data)
  }

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-describedby="alert-dialog-description"
    >
      <h2 className="h2-modal">{car.name}</h2>
      <DialogContent>
        <Calendar
          onChange={onChange}
          value={value}
          tileContent={tileContent}
          onClickDay={test}
        />
        <div className="calendar-button">
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              addReservationToCalendar(car.id, value)
              makeReservation()
              setOpen(false)
            }}
            disabled={reservedDates && test()}
          >
            ZAREZERWUJ
          </Button>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)} color="primary" autoFocus>
          Zamknij
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DialogComponent
