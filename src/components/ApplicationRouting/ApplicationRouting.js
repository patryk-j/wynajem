import React, { useContext } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import BottomNavigationComponent from "../../elements/BottomNavigationComponent"
import BottomNavigationComponentForAdmin from "../../elements/BottomNavigationComponentForAdmin"
import BottomNavigationComponentForUser from "../../elements/BottomNavigationComponentForUser"
import { AuthContext } from "../LoginComponents/AuthProvider"
import Dashboard from "../LoginComponents/Dashboard"
import Home from "../LoginComponents/Home"
import Login from "../LoginComponents/Login"
import PrivateRoute from "../LoginComponents/PrivateRoute"
import Registration from "../LoginComponents/Registration"
import AdminPanel from "../pages/AdminPanel/AdminPanel"
import EditPrice from "../pages/AdminPanel/EditPrice"
import OrderList from "../pages/AdminPanel/OrderList"
import Offer from "../pages/Offer/Offer"
import Price from "../pages/Price"
import StartPage from "../pages/StartPage/StartPage"
import MyOrders from "../pages/UserAccount/MyOrders"
import UserAccount from "../pages/UserAccount/UserAccount"
import "./ApplicationRouting.css"

const ApplicationRouting = () => {
  const { currentUser } = useContext(AuthContext)
  const Navbar = () => {
    if (currentUser) {
      if (currentUser.email === "admin@admin.com") {
        return <BottomNavigationComponentForAdmin />
      } else {
        return <BottomNavigationComponentForUser />
      }
    } else {
      return <BottomNavigationComponent />
    }
  }

  return (
    <Router>
      <div className="bottom-navigation">
        <Navbar />
      </div>
      <Route path="/" exact component={StartPage} />
      <Route path="/offer" component={Offer} />
      <Route path="/price" component={Price} />
      <Route path="/editprice" component={EditPrice} />
      <Route path="/orderlist" component={OrderList} />
      <Route path="/myorders" component={MyOrders} />
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Registration} />
      <PrivateRoute path="/adminpanel" component={AdminPanel} />
      <PrivateRoute path="/useraccount" component={UserAccount} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
    </Router>
  )
}

export default ApplicationRouting
