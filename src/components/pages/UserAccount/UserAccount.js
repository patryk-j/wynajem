import React from "react"
import "../styles/UserAccount.css"
import UserAccountComponent from "./UserAccountComponent"

const UserAccount = () => {
  return (
    <>
      <h1>Moje Konto</h1>
      <div>
        <UserAccountComponent />
      </div>
    </>
  )
}

export default UserAccount
