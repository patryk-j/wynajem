import React, { useState, useEffect } from "react"
import firebase from "../../LoginComponents/firebase"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import "./OrderList.css"
import DeleteOrderList from "./DeleteOrderList"

const OrderList = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore()
      const data = await db.collection("orderlist").get()
      setOrders(data.docs.map((doc) => doc.data()))
    }
    fetchData()
  }, [])

  return (
    <>
      <h1>Lista zamówień</h1>
      <div className="tableContainer">
        <TableContainer component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Klient</TableCell>
                <TableCell align="center">Samochód</TableCell>
                <TableCell align="center">Miesiąc/Dzień/Rok</TableCell>
                <TableCell align="center">ID rezerwacji</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order, index) => (
                <TableRow key={index}>
                  <TableCell align="center">
                    {order.username}
                    <DeleteOrderList order={order} />
                  </TableCell>
                  <TableCell align="center"> {order.car}</TableCell>
                  <TableCell align="center"> {order.date}</TableCell>
                  <TableCell align="center">{order.reservationId}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  )
}

export default OrderList
