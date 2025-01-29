import { Button, Paper, Typography } from "@material-ui/core"
import React from "react"
import firebase from "./firebase"
import "./LoginStyles/Dashboard.css"

const Dashboard = (props) => {
  const onSignout = async () => {
    await firebase.auth().signOut()
    props.history.push("/login")
  }

  return (
    <main className="main-dashboard">
      <Paper className="paper-dashboard">
        <Typography component="h1" variant="h5">
          {`Użytkownik  ${firebase.auth().currentUser.email}`}
        </Typography>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className="submit-dashboard"
          onClick={onSignout}
        >
          Wyloguj
        </Button>
      </Paper>
    </main>
  )
}

export default Dashboard
