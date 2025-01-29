import React from "react"
import { Link } from "react-router-dom"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import HomeIcon from "@material-ui/icons/Home"
import LockIcon from "@material-ui/icons/Lock"
import AttachMoneyIcon from "@material-ui/icons/AttachMoney"
import LocalOfferIcon from "@material-ui/icons/LocalOffer"

const BottomNavigationComponent = () => {
  const navElements = [
    {
      path: "/",
      label: "Start",
      icon: <HomeIcon />,
      value: "start",
    },
    {
      path: "/offer",
      label: "Oferta",
      icon: <LocalOfferIcon />,
      value: "offer",
    },
    {
      path: "/price",
      label: "Cennik",
      icon: <AttachMoneyIcon />,
      value: "price",
    },
    {
      path: "/home",
      label: "Logowanie",
      icon: <LockIcon />,
      value: "home",
    },
  ]
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = React.useState(0)

  return (
    <BottomNavigation value={value} showLabels>
      {navElements.map((element, index) => (
        <BottomNavigationAction
          to={element.path}
          label={element.label}
          icon={element.icon}
          key={index}
          value={element.value}
          component={Link}
        />
      ))}
    </BottomNavigation>
  )
}

export default BottomNavigationComponent
