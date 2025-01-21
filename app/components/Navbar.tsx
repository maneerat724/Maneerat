import Link from "next/link";
import path from "path";

const menus = [
    {name : "home" ,path : "#"} ,
    {name : "About as" ,path : "#"} ,
    {name : "page1" ,path : "/page1"} ,
    {name : "page2" ,path : "/page2"} ,
    {name : "page3" ,path : "/page3"} ,
]


export default function Navbar() {
    return (
        <div className="w-full sticky top-0 flex justify-between bg-emerald-300">
            <div>
                Logo
            </div>
            <div  className="flex justify-between">
            
                <ul className="flex gap-x-6">
                    {menus.map((menu , index) => (
                        <li key={index}><Link href = {menu.path}> {menu.name}</Link></li> 
                         ))}


                <li><Link href = "#"> About us</Link></li> 
                <li><Link href = "\page1"> page1</Link></li> 
                <li><Link href = "\page2"> page2</Link></li> 
                <li><Link href = "\page3"> page3</Link></li> 
                
            </ul>

            </div>







        </div>
    );
}


