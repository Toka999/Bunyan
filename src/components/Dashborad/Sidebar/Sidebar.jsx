import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css"



function Sidebar ({inputChange}){

    const links=[
        {icon:"fa-chart-bar", title:"Status", path:"/"},
        {icon:"fa-users", title:"Users Mangement", path:"/users"},
        {icon:"fa-building", title:"Project Mangement", path:"/projects"},
        {icon:"fa-building", title:"Developer Mangement", path:"/developers"}, 
        {icon:"fa-chart-bar", title:"cms", path:"/cms"},
        {icon:"fa-message", title:"Live chat", path:"/chat"}
    ];
    return (
        <aside className={`${styles.sidebar} min-vh-100 py-4 `}>
            <div className="fw-semibold px-4 mb-3 fs-4 opacity-50">Dashboard</div>
            
            <nav>
                <div className={``}>
                    {links.map((item,index)=>(
                        <NavLink 
                         to={item.path}
                         key={index} 
                         className={`${styles.navItem} 
                         ps-4 d-flex align-items-center gap-3 py-4`}>
                            {
                                ({isActive})=>(
                                    <>
                                        <i className={`fa-solid  ${item.icon} fs-5`}></i>
                                        <span>{item.title}</span>
                                        {(inputChange===true && isActive) ?(
                                            <span>
                                                Pending...
                                            </span>

                                            ): <span></span>
                                        }
                                    </>
                                )
                            }
                            
                         
                        </NavLink>
                ))}
                
               
                
                </div>
            </nav>
        </aside>
    );
}
export default Sidebar;