import { Outlet } from "react-router-dom";
function Users(){
    return(
        <section className="py-4 w-100">
           <Outlet></Outlet>
        
        </section>
    );
}

export default Users;