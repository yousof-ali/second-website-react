import { CiMenuFries } from "react-icons/ci";
import Link from "../link/Link";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {
    
    const routes = [
        { id: 1, path: '/', name: 'Home'},
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/contact', name: 'Contact' },
        { id: 4, path: '/services', name: 'Services' },
        { id: 5, path: '*', name: 'NotFound' }
      ];

    const [tog,setTog]=useState(false)
    const  togFun =() =>{
        setTog(!tog)
    }  

    return (
        <nav>
            <div className="md:hidden text-2xl" onClick={togFun}>
                {
                   tog === true ? <RxCross2 /> : <CiMenuFries />
                }
                
            </div>
            <ul className={`md:flex  absolute bg-slate-400 text-white ${tog ? '' : "hidden"} `}>
            {
               routes.map(route=><Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default Navbar;