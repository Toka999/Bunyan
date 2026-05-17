import "./App.css";
import { Routes, Route} from "react-router-dom"
import StatusPage from "./pages/StatusPage";
import Users from "./pages/Users";
import Projects from "./pages/Projects";
import TableDashboard from "./components/Ui/TableDashboard/TableDashboard";
import FormDashboard from "./components/Ui/FormDashboard/FormDashboard";
import DeveloperPage from "./pages/DeveloperPage";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>

      <Routes>

        <Route path="/"  element={<Dashboard></Dashboard>}>
          <Route index element={<StatusPage/>}/>

          <Route path="users" element={<Users/>}>
              <Route index element={<TableDashboard name="user"/>}/>
              <Route path="add" element={<FormDashboard/>}/>
          </Route>

          <Route path="projects" element={<Projects/>}>
              <Route index element={<TableDashboard name="  project"/>}/>
              <Route path="add" element={<FormDashboard/>}/>
          </Route>

          <Route path="developers" element={<DeveloperPage/>}>
                <Route index element={<TableDashboard name="  developer"/>}/>
                <Route path="add" element={<FormDashboard/>}/>
          </Route>

            
            
        </Route>
      </Routes>

       
          
    </>
  );
}

export default App;
