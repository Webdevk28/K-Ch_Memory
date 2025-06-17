import React, {useEffect, useState} from "react";
import Navbar from "./Navbar";
import { MdMenu, MdClose } from 'react-icons/md'


function Header () {

    const [menuOpened, setMenuOpened] = useState(false)
    const toggleMenu = () => setMenuOpened(!menuOpened)

    return (
        <section className="p-3 z-50">
            <div className="header p-4 rounded-lg shadow-md">
                <div className="max-w-6xl m-auto flex justify-between items-center text-slate-800">
                    <div className="w-full p-10 absolute top-0 left-0 z-20 bg-slate-700 md:hidden"></div>
                    <div className="text-3xl z-50">Google</div>
                    
                    <div className="z-50"><Navbar NavbarStyle={"hidden md:flex gap-8"} /></div>
                    <div className="z-10 medium-16 text-slate-100​ shadow-md md:hidden"> 
                        <Navbar NavbarStyle={`${menuOpened ? "flex flex-col gap-y-5 fixed top-16 left-0 p-10 bg-slate-700 w-full duration-300" : "flex flex-col gap-y-5 fixed -top-[100%] left-0 p-10 bg-slate-700 w-full duration-300"}`} />
                    </div>

                    <div className="inline-flex gap-2 z-50 md:hidden">
                        <div className=' cursor-pointer text-2xl text-slate-100'>
                            {(!menuOpened ? (<MdMenu onClick={toggleMenu} />) : (<MdClose onClick={toggleMenu} />))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Header