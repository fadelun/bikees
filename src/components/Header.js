import { NavLink } from "react-router-dom";
import ImageLogo from '../image/logo.png';
import { ReactComponent as Hamburger } from "../image/hamburger.svg";
import { useEffect, useState } from 'react';

function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}

const Header = () => {
    const [showNav, setShowNav] = useState(false)
    const [windowSize, setWindowSize] = useState(getWindowSize())

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }
        if (windowSize.innerWidth > 768) setShowNav(false)

        window.addEventListener('resize', handleWindowResize);


        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [windowSize]);


    function handleNavbar() {
        setShowNav(!showNav)
    }


    return (

        <header className={`${windowSize.innerWidth > 768 ? "absolute" : "static"} container mx-auto flex px-4  md:px-0 justify-between items-center inset-x-0 z-20`}>

            <div id="logo" className='w-1/2'>
                <img src={ImageLogo} alt="logo" />
            </div>

            <nav className={`${(!showNav) ? "hidden" : "flex flex-col pt-16 items-center absolute inset-0 bg-[#181818] z-[1000]"}  md:flex md:justify-between w-auto md:w-1/2 text-white list-none `}>
                {showNav && <p onClick={handleNavbar} className="absolute top-1 right-1 hover:cursor-pointer">X</p>}

                <li className={showNav && "basis-28 "}>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-primary" : " "

                        }
                    >
                        Overview
                    </NavLink>

                </li>
                <li className={showNav && "basis-28 "}>
                    <NavLink
                        to="/collection"
                        className={({ isActive }) =>
                            isActive ? "text-primary" : " "

                        }
                    >
                        Collection
                    </NavLink>


                </li>
                <li className={showNav && "basis-28 "}><a href='' >About</a></li>
                <li className={showNav && "basis-28 "}><a href='' >Contact</a></li>

            </nav>
            <button onClick={handleNavbar} className='block md:hidden' >
                <Hamburger />
            </button>
        </header>
    )
}

export default Header;