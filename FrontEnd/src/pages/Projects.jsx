import { Outlet,useOutletContext } from "react-router-dom";

function Projects(){
    const inputChange = useOutletContext();

    return(
        <section className="py-4 w-100">
            <Outlet  context={inputChange}></Outlet>

        </section>
        
    );
}

export default Projects;