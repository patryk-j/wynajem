import React, { useState, useEffect } from "react"
import firebase from "../LoginComponents/firebase"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"

const TableOfCars = () => {
  const [cars, setCars] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore()
      const data = await db.collection("cars").get()
      setCars(data.docs.map((doc) => doc.data()))
    }
    fetchData()
  }, [])

  return (
    <>
      <h1>Cennik</h1>
      <div className="tableContainer">
        <TableContainer component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Samochód</TableCell>
                <TableCell align="center">Rok</TableCell>
                <TableCell align="center">KM</TableCell>
                <TableCell align="center">Miejsca</TableCell>
                <TableCell align="center">Cena za dzień</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cars.map((car, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {car.name}
                  </TableCell>
                  <TableCell align="center"> {car.year}</TableCell>
                  <TableCell align="center">{car.hp}</TableCell>
                  <TableCell align="center">{car.seats}</TableCell>
                  <TableCell align="center">{car.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  )
}

export default TableOfCars
