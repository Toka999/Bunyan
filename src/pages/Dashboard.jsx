import {Routes, Route} from "react-router-dom"
import Footer from "../components/Dashborad/Footer/Footer";
import Navbar from "../components/Dashborad/Navbar/Navbar";
import Sidebar from "../components/Dashborad/Sidebar/Sidebar";
import StatusPage from "./StatusPage";
import Users from "./users";
import Projects from "./Projects";
import TableDashboard from "../components/Ui/TableDashboard/TableDashboard";
import FormDashboard from "../components/Ui/FormDashboard/FormDashboard";
import DeveloperPage from "./DeveloperPage";
function Dashboard() {
  return (
    <>
      <Navbar adminName="mohamed" />
      <div className="d-flex ">
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/" element={<StatusPage/>}/>
          <Route path="/users" element={<Users/>}>
            <Route index element={<TableDashboard name="user"/>}/>
            <Route path="add" element={<FormDashboard/>}/>
          </Route>

          <Route path="/projects" element={<Projects/>}>
            <Route index element={<TableDashboard name="  project"/>}/>
            <Route path="add" element={<FormDashboard/>}/></Route>
        

        <Route path="/developers" element={<DeveloperPage/>}>
            <Route index element={<TableDashboard name="  developer"/>}/>
            <Route path="add" element={<FormDashboard/>}/></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
