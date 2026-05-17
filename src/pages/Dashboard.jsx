import {Outlet} from "react-router-dom"
import Footer from "../components/Dashborad/Footer/Footer";
import Navbar from "../components/Dashborad/Navbar/Navbar";
import Sidebar from "../components/Dashborad/Sidebar/Sidebar";
import { useState } from "react";

function Dashboard() {
  const [inputChange, setInputChange]=useState(false);

  return (
    <>
      <Navbar adminName="mohamed" />
      <div className="d-flex ">
        <Sidebar inputChange={inputChange}>
          
        </Sidebar>
        <Outlet context={[setInputChange]}/>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
