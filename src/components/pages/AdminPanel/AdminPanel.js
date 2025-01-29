import React from "react"
import "../styles/AdminPanel.css"
import AdminPanelComponent from "./AdminPanelComponent"

const AdminPanel = () => {
  return (
    <>
      <h1 className="adminpanel-h1">Panel Admina</h1>
      <div>
        <AdminPanelComponent />
      </div>
    </>
  )
}

export default AdminPanel
