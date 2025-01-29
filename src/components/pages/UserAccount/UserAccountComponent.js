import React from "react"
import { Link } from "react-router-dom"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import ReorderIcon from "@material-ui/icons/Reorder"

const UserAccountComponent = () => {
  const adminElements = [
    {
      path: "/myorders",
      label: "Moje zamówienia",
      icon: <ReorderIcon />,
      value: "orderlist",
    },
  ]

  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = React.useState(0)

  return (
    <BottomNavigation value={value} showLabels>
      {adminElements.map((element, index) => (
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

export default UserAccountComponent
