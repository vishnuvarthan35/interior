import React from "react";
import Header from "../common/header";
import AdminDashboardComponent from "../layout/dashboard/adb";
import Footer from "../common/footer";


function AdminDashboard(){
  return(
    <>
    <Header/>
    <br /><br /><br /><br /><br /><br /><br />
    <AdminDashboardComponent/>
    <br /><br /><br />
    <Footer/>
    </>
  )
}

export default AdminDashboard;