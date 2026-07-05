import "./Navbar.css";

import { Link, useLocation} from "react-router-dom";

import {
    FaChevronDown,
    FaSearch,
    FaBars,
    FaTimes,
} from "react-icons/fa";

import { useState, useEffect } from "react";

import useScroll from "../../hooks/useScroll";

import logo from "../../assets/logos/ssw-logo.png";

import navigation from "../../data/navigation";

import SearchModal from "../SearchModal/SearchModal";

function Navbar() {

    const scrolled = useScroll();

    const [mobileMenu, setMobileMenu] = useState(false);

    const [searchOpen, setSearchOpen] = useState(false);

    const location = useLocation();

const handleLogoClick = () => {

    if (location.pathname === "/") {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    }

};

    useEffect(() => {

        const handleShortcut = (e) => {

            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {

                e.preventDefault();

                setSearchOpen(true);

            }

        };

        document.addEventListener("keydown", handleShortcut);

        return () =>
            document.removeEventListener("keydown", handleShortcut);

    }, []);

    return (

        <>

            <nav className={scrolled ? "navbar scrolled" : "navbar"}>

               <Link
    to="/"
    className="logo"
    onClick={handleLogoClick}
>
    <img
        src={logo}
        alt="Special and Safety Work - Nisreen Factory"
    />
</Link>

                <ul className={mobileMenu ? "nav-links active" : "nav-links"}>

                    {navigation.map((item, index) => (

                        <li
                            key={index}
                            className={item.children ? "dropdown" : ""}
                        >

                            {item.children ? (

                                <>

                                    <span>

                                        {item.title}

                                        <FaChevronDown className="arrow" />

                                    </span>

                                    <div className="mega-menu">

                                        {item.children.map((child, childIndex) => (

                                            <Link
                                                key={childIndex}
                                                to={child.link}
                                            >
                                                {child.title}
                                            </Link>

                                        ))}

                                    </div>

                                </>

                            ) : (

                                <Link to={item.link}>
                                    {item.title}
                                </Link>

                            )}

                        </li>

                    ))}

                </ul>

                <div className="navbar-right">

                    <FaSearch
                        className="search-icon"
                        onClick={() => setSearchOpen(true)}
                    />

                    <div
                        className="mobile-icon"
                        onClick={() => setMobileMenu(!mobileMenu)}
                    >

                        {mobileMenu ? <FaTimes /> : <FaBars />}

                    </div>

                </div>

            </nav>

            <SearchModal
                open={searchOpen}
                onClose={() => setSearchOpen(false)}
            />

        </>

    );

}

export default Navbar;

