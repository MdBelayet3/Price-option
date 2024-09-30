import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const NavBar = () => {

    const [open,setOpen] = useState(false)

    const routes = [
        { id: 1, path: "/home", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/profile", name: "Profile" }
    ];

    return (
        <nav>
            <div onClick={() => setOpen(!open)} className="md:hidden text-3xl">
                {
                    open === true ? <IoClose /> : <RiMenu2Fill />
                }
                
            </div>
            <ul className={`md:flex absolute duration-1000 ${open ? 'top-14' : '-top-64'} md:static bg-blue-300 p-3 rounded-3xl`}>
                {
                    routes.map(route => <Link route={route} key={route.id}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;