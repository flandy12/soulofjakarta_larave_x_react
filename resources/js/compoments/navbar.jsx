import React, { useEffect, useState } from "react";

const getSubNavbar = (e) => {
    const id_element = document.getElementById(
        e.target.getAttribute("data-target")
    );
    const sub_navbar = document.querySelectorAll(".sub-navbar");
    for (let index = 0; index < sub_navbar.length; index++) {
        sub_navbar[index].classList.replace("active", "hidden");
    }
    id_element.classList.replace("hidden", "active");
};

const getSubNavbarMobile = (e) => {
    const id_element = document.getElementById(
        e.target.getAttribute("data-target")
    );
    const id_element_dropdown = document.getElementById(
        e.target.getAttribute("data-element")
    );

    const sub_navbar = document.querySelectorAll(".sub-navbar");
    const item_dropdown = document.querySelectorAll(".item-dropdown");

    for (let index = 0; index < sub_navbar.length; index++) {
        sub_navbar[index].classList.replace("active", "hidden");
    }

    for (let index = 0; index < item_dropdown.length; index++) {
        item_dropdown[index].classList.replace("bg-master", "bg-white");
    }

    id_element.classList.replace("hidden", "active");
    id_element_dropdown.classList.replace("bg-white", "bg-master");
};

const removeSubNavbar = (e) => {
    const id_element = document.getElementById(
        e.target.getAttribute("data-target")
    );
    const sub_navbar = document.querySelectorAll(".sub-navbar");
    for (let index = 0; index < sub_navbar.length; index++) {
        sub_navbar[index].classList.replace("active", "hidden");
    }
    if (id_element) {
        id_element.classList.add("hidden");
    }
};

const Navbar = ({ children }) => {
    const [active_navbar_mobile, setActiveNavbarMobile] = useState("hidden");

    const [statusDropdown, setStatusDropdown] = useState(false);

    const location = window.location;

    const [IconHamburger, setIconHamburger] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(false);

    const dropdownNavbar = (e) => {
        if (activeDropdown === true) {
            setActiveDropdown(false);
        } else {
            setActiveDropdown(true);
        }
    };

    const dropdownMobile = (e) => {
        if (IconHamburger === true) {
            setIconHamburger(false);
        } else {
            setIconHamburger(true);
        }
    };

    const RemoveDropdown = () => {
        setActiveDropdown(false);
        setIconHamburger(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", function (e) {
            RemoveDropdown();
        });
    }, [location]);

    return (
        <>
            <nav
                className="bg-black border-gray-200 py-3 px-0 flex justify-between  md:justify-start md:flex-row xl:px-0 lg:px-0 md:px-0 sticky top-0 left-0 rigfht-0 z-50"
                id="navbar"
            >
                <div className="container mx-auto">
                    <div
                        className={`flex justify-between ${
                            active_navbar_mobile === "" ? "flex-col" : ""
                        } md:justify-start md:flex-row px-0 lg:px-0 md:px-0`}
                    >
                        <div
                            className={`flex justify-between w-full md:w-auto align-content-center `}
                        >
                            <a href="/" className="flex items-start">
                                <picture>
                                    <source
                                        srcSet="/images/icon/SOUJA-LOGO-HITAM.webp"
                                        type="image/webp"
                                    />
                                    <img
                                        src="/images/icon/SOUJA-LOGO-HITAM.png"
                                        alt="soulofjakarta.id"
                                        className="h-20 mr-3 logo-navbar"
                                    />
                                </picture>
                            </a>
                            <button
                                data-collapse-toggle="navbar-default"
                                type="button"
                                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                                aria-controls="navbar-default"
                                aria-expanded="false"
                                onClick={dropdownMobile}
                            >
                                <span className="sr-only">Open main menu </span>
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 17 14"
                                    data-collapse-toggle="navbar-default"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 1h15M1 7h15M1 13h15"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div
                            className={`md:ms-4 w-full flex items-center md:w-auto`}
                            id="navbar-default"
                        >
                            <ul className="font-base flex align-items-center flex-col p-4 md:p-0 mt-4 border text-gray-500 border-gray-300 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 items-center">
                                <li>
                                    <a
                                        href="/"
                                        className={`block py-2 px-0 ${
                                            location.pathname === "/"
                                                ? "text-amber-300"
                                                : "text-gray-500"
                                        } hover:text-master text-base`}
                                        aria-current="page"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <span className="block xl:py-2 lg:py-2 md:py-0 px-0 text-gray-500">
                                        <button
                                            id="dropdownNavbarLink"
                                            data-dropdown-toggle="dropdownNavbar"
                                            className="flex items-center justify-between w-full py-2 px-0  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto fw-sm text-base"
                                            onClick={dropdownNavbar}
                                        >
                                            Category{" "}
                                            <svg
                                                className="w-2.5 h-2.5 ml-2.5"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 10 6"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="m1 1 4 4 4-4"
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                    <div
                                        id="dropdownNavbar"
                                        className={`z-10 xl:absolute lg:absolute md:absolute  ${
                                            activeDropdown ? "" : "hidden"
                                        } font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}
                                    >
                                        {children}
                                    </div>
                                </li>

                                <li>
                                    <a
                                        href={"/media-partner"}
                                        className={`block py-2 px-0 ${
                                            location.pathname ===
                                            "/media-partner"
                                                ? "text-amber-300"
                                                : "text-gray-500"
                                        } hover:text-master text-base`}
                                    >
                                        Media Partner
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={"/give-away"}
                                        className={`block py-2 px-0 ${
                                            location.pathname === "/give-away"
                                                ? "text-amber-300"
                                                : "text-gray-500"
                                        } hover:text-master text-base`}
                                    >
                                        GiveAway
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://tiket.soulofjakarta.id/"
                                        className="block py-2 px-0 rounded text-gray-500 text-base"
                                        target=""
                                    >
                                        Ticket Event
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

const NavbarMobile = ({ children }) => {
    const [active_navbar_mobile, setActiveNavbarMobile] = useState("hidden");
    const [statusDropdown, setStatusDropdown] = useState(false);
    const [navbarDropDown, setNavbarDropDown] = useState("");

    const location = window.location.href;

    const clickHamburgerMobile = (e) => {
        if (active_navbar_mobile === "hidden") {
            setActiveNavbarMobile("");
        } else {
            setActiveNavbarMobile("hidden");
        }
    };

    const DropdownAction = () => {
        if (statusDropdown) {
            setStatusDropdown(false);
        } else {
            setStatusDropdown(true);
        }
    };

    return (
        <>
            <nav
                className="bg-black py-4 sticky top-0 left-0 rigfht-0 z-50 "
                id="navbar-mobile"
            >
                <div className="container mx-auto">
                    <div
                        className={`flex justify-between ${
                            active_navbar_mobile === "" ? "flex-col" : ""
                        } md:justify-start md:flex-row px-0 lg:px-8 md:px-8`}
                    >
                        <div
                            className={`flex justify-between w-full md:w-auto align-content-center `}
                        >
                            <a href="/" className="flex items-start">
                                <picture>
                                    <source
                                        srcSet="/images/icon/SOUJA-LOGO-HITAM.webp"
                                        type="image/webp"
                                    />
                                    <img
                                        src="/images/icon/SOUJA-LOGO-HITAM.png"
                                        alt="soulofjakarta.id"
                                        className="h-8 mr-3 logo-navbar"
                                    />
                                </picture>
                            </a>
                            <button
                                data-collapse-toggle="navbar-default"
                                type="button"
                                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                                aria-controls="navbar-default"
                                aria-expanded="false"
                                onClick={clickHamburgerMobile}
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 17 14"
                                    data-collapse-toggle="navbar-default"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 1h15M1 7h15M1 13h15"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div
                            className={`md:ms-4 ${active_navbar_mobile} w-full md:block md:w-auto`}
                            id="navbar-default"
                        >
                            <ul className="font-base flex flex-col p-4 md:p-0 mt-4  text-gray-500 md:flex-row md:space-x-8 md:mt-0 md:border-0 navbar-dropdown-mobile">
                                <li>
                                    <a
                                        href="/"
                                        className={`block py-2 px-3 ${
                                            location.pathname === "/"
                                                ? "text-amber-300"
                                                : "text-gray-500"
                                        } hover:text-master text-base`}
                                        aria-current="page"
                                    >
                                        Home
                                    </a>
                                </li>

                                <li className="px-3">
                                    <button
                                        id="dropdownNavbarLink"
                                        data-dropdown-toggle="dropdownNavbar"
                                        className={`flex items-center justify-between w-full py-2 px-3 bg-master text-black rounded md:hover:bg-transparent md:border-0 md:p-0 md:w-auto`}
                                        onClick={DropdownAction}
                                    >
                                        Category{" "}
                                        <svg
                                            className="w-2.5 h-2.5 ms-2.5"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 10 6"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="m1 1 4 4 4-4"
                                            />
                                        </svg>
                                    </button>

                                    <div
                                        id="dropdownNavbar"
                                        className={`z-10 ${
                                            statusDropdown ? "" : "hidden"
                                        } font-normal bg-gray-50 divide-y divide-gray-100 rounded shadow `}
                                    >
                                        {children}
                                    </div>
                                </li>

                                <li>
                                    <a
                                        href={"/media-parner"}
                                        className={`block py-2 px-3 ${
                                            location.pathname ===
                                            "/media-parner"
                                                ? "text-amber-300"
                                                : "text-gray-500"
                                        } hover:text-master`}
                                    >
                                        Media Partner
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={"/give-away"}
                                        className={`block py-2 px-3 ${
                                            location.pathname === "/give-away"
                                                ? "text-amber-300"
                                                : "text-gray-500"
                                        } hover:text-master`}
                                    >
                                        GiveAway
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://tiket.soulofjakarta.id/"
                                        className="block py-2 px-3 rounded text-gray-500"
                                        target=""
                                    >
                                        Ticket Event
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export {
    Navbar,
    getSubNavbar,
    removeSubNavbar,
    NavbarMobile,
    getSubNavbarMobile,
};
