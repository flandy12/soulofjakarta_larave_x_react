import logo from "@asset/logo.svg";

import ads_sample_side from "@asset/ads-sample/side-banner.jpg";
import ads_row from "@asset/ads-sample/article-row.jpg";
import headline_banner from "@asset/ads-sample/headline-banner-2.jpg";
import desktop_headline from "@asset/ads-sample/desktop-headline-banner.jpg";
import background_side from "@asset/ads-sample/bg-banner.jpg";
import headline_banner_sample from "@asset/ads-sample/headline-banner.jpg";
import headline_banner_desktop from "@asset/ads-sample/headline-banner-3.jpg";
import bg_ads from "@asset/ads-sample/bg-ads-2.jpg";

import regular1 from "@asset/ads-sample/regular1.jpg";
import regular2 from "@asset/ads-sample/regular2.jpg";
import regular3 from "@asset/ads-sample/regular3.jpg";

import mobile_benner from "@asset/ads-sample/mobile-banner.jpg";
import pop_up from "@asset/ads-sample/pop-up.jpg";

import React, { useEffect, useState } from "react";
import Loading from "../compoments/loading";
import {
    Navbar,
    NavbarMobile,
    getSubNavbar,
    getSubNavbarMobile,
    removeSubNavbar,
} from "../compoments/navbar";
import { removeSpace } from "../helper/helper";
import { Link } from "@inertiajs/inertia-react";
import Layout from "../Pages/layout/layout";

const PlacingAds = ({ Categories_Navbar }) => {
    const [nav_active_ads, setNavActiveAds] = useState("Article Promote");
    const [device_active, setDeviceActive] = useState("icon_desktop");

    const [categories, setcategories] = useState(Categories_Navbar);

    const [loading, setLoading] = useState(true);

    const [sideActive, setSideActive] = useState(true);

    const clikNav = (e) => {
        const getElement = e.target.getAttribute("data-element");
        setNavActiveAds(getElement);
        setDeviceActive("icon_desktop");
    };

    const handleIcon = (e) => {
        const getElement = e.target.getAttribute("data-element");
        setDeviceActive(getElement);
    };

    const handleActiveNav = () => {
        if (sideActive == true) {
            setSideActive(false);
        } else {
            setSideActive(true);
        }
    };

    const ContentWraper = () => {
        return (
            <>
                <Navbar>
                    <div
                        className="w-full relative "
                        id="navbar-dropdown-setting"
                        onMouseLeave={removeSubNavbar}
                        data-target="dropdownNavbar"
                    >
                        <ul
                            className="py-2 text-sm text-gray-400 bg-black w-44 rounded"
                            aria-labelledby="dropdownLargeButton"
                        >
                            {categories.map((value, key) => (
                                // setSubcategories(value.subCategories),cons

                                <li key={key} className="col">
                                    <a
                                        href={`/indeks/semua/${value.name.toLocaleLowerCase()}`}
                                        className="block font-medium px-4 py-2   text-base"
                                        data-target={`${value.name}_wrapper`}
                                        data-element={`${value.nam}_element`}
                                        data-key={key}
                                        onMouseMove={getSubNavbar}
                                    >
                                        {value.name}
                                    </a>
                                    <ul
                                        className={`hidden   bg-black rounded-md px-4 py-2 mt-2 sub-navbar`}
                                        id={`${value.name}_wrapper`}
                                    >
                                        {categories[key].subCategories.map(
                                            (values, keys) => (
                                                <li className="py-2" key={keys}>
                                                    <a
                                                        href={`/indeks/semua/${value.name.toLocaleLowerCase()}/${removeSpace(
                                                            values.name.toLocaleLowerCase()
                                                        )}`}
                                                    >
                                                        <div className="flex items-center space-x-4">
                                                            <span className="text-base">
                                                                {values.name}
                                                            </span>
                                                        </div>
                                                    </a>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Navbar>

                <NavbarMobile>
                    <div
                        className="w-full relative "
                        data-target="dropdownNavbar"
                    >
                        <ul
                            className="py-2 text-sm text-gray-400 w-full font-base p-2 mt-2 space-y-1"
                            aria-labelledby="dropdownLargeButton"
                        >
                            {categories.map((value, key) => (
                                <li
                                    key={key}
                                    className="col border rounded bg-white item-dropdown text-black"
                                    id={`${value.name}_dropdown`}
                                >
                                    <a
                                        href={`/indeks/semua/${value.name.toLocaleLowerCase()}`}
                                    >
                                        <div
                                            className="block font-medium px-4 py-2 cursor-pointer"
                                            data-target={`${value.name}_wrapper_mobile`}
                                            data-element={`${value.name}_dropdown`}
                                            data-key={key}
                                            onClick={getSubNavbarMobile}
                                        >
                                            {value.name}
                                        </div>
                                    </a>
                                    <ul
                                        className={`hidden py-2 px-4 bg-white text-sm text-gray-400 rounded font-base w-full sub-navbar cursor-pointer`}
                                        id={`${value.name}_wrapper_mobile`}
                                    >
                                        {categories[key].subCategories.map(
                                            (values, keys) => (
                                                <li
                                                    className="col py-2"
                                                    key={keys}
                                                >
                                                    <a
                                                        href={`/indeks/semua/${value.name.toLocaleLowerCase()}/${removeSpace(
                                                            values.name.toLocaleLowerCase()
                                                        )}`}
                                                        className="cursor-pointer"
                                                    >
                                                        <div className="flex items-center space-x-4">
                                                            <span className="">
                                                                {values.name}
                                                            </span>
                                                        </div>
                                                    </a>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                </NavbarMobile>

                <div className="container my-5">
                    <div className="block md:hidden wrapper-icon-placinga-ads">
                        <button
                            className={`icon-side mb-5 ${
                                sideActive ? "" : "hidden"
                            }`}
                            id="icon-close"
                            data-element="content-left"
                            onClick={handleActiveNav}
                        >
                            X
                        </button>
                        <button
                            className={`icon-side mb-5 ${
                                sideActive ? "hidden" : ""
                            }`}
                            id="icon-close"
                            data-element="content-left"
                            onClick={handleActiveNav}
                        >
                            =
                        </button>
                    </div>
                    <div className="flex justify-center overflow-hidden  lg:grid grid-cols-3  md:grid-cols-3 gap-0 wrapper-placing-ads">
                        <div
                            className={`col nav-placing-ads bg-white p-5 md:py-10 border-r-2 border mb-5 w-full ${
                                sideActive ? "" : "hidden"
                            } md:block`}
                        >
                            <div
                                className={`content-left w-full xl:w-full lg:full md:w-full`}
                                id="content-left"
                            >
                                <ul
                                    id="nav-list"
                                    className={`relative font-base`}
                                >
                                    <li
                                        className={`list-content-right px-4 py-3 cursor-pointer rounded-lg hover:bg-slate-50 active ${
                                            nav_active_ads === "Article Promote"
                                                ? "bg-master text-center"
                                                : ""
                                        }`}
                                        onClick={clikNav}
                                        data-element="Article Promote"
                                    >
                                        Article Promote
                                    </li>
                                    <li
                                        className={`list-content-right px-4 py-3 cursor-pointer rounded-lg hover:bg-slate-50 ${
                                            nav_active_ads === "Article Row"
                                                ? "bg-master text-center"
                                                : ""
                                        }`}
                                        onClick={clikNav}
                                        data-element="Article Row"
                                    >
                                        Article Row
                                    </li>
                                    <li
                                        className={`list-content-right px-4 py-3 cursor-pointer rounded-lg hover:bg-slate-50 ${
                                            nav_active_ads ===
                                            "Background Banner"
                                                ? "bg-master text-center"
                                                : ""
                                        }`}
                                        onClick={clikNav}
                                        data-element="Background Banner"
                                    >
                                        Background Banner
                                    </li>
                                    <li
                                        className={`list-content-right px-4 py-3 cursor-pointer rounded-lg hover:bg-slate-50 ${
                                            nav_active_ads === "Headline"
                                                ? "bg-master text-center"
                                                : ""
                                        }`}
                                        data-element="Headline"
                                        onClick={clikNav}
                                    >
                                        Headline
                                    </li>
                                    <li
                                        className={`list-content-right px-4 py-3 cursor-pointer rounded-lg hover:bg-slate-50 ${
                                            nav_active_ads === "Pop Up Image"
                                                ? "bg-master text-center"
                                                : ""
                                        }`}
                                        data-element="Pop Up Image"
                                        onClick={clikNav}
                                    >
                                        Pop Up Image
                                    </li>
                                    <li
                                        className={`list-content-right px-4 py-3 cursor-pointer rounded-lg hover:bg-slate-50 ${
                                            nav_active_ads === "Pop Up Video"
                                                ? "bg-master text-center"
                                                : ""
                                        }`}
                                        data-element="Pop Up Video"
                                        onClick={clikNav}
                                    >
                                        Pop Up Video
                                    </li>
                                    <li
                                        className={`list-content-right px-4 py-3 cursor-pointer rounded-lg hover:bg-slate-50 ${
                                            nav_active_ads === "Premium Banner"
                                                ? "bg-master text-center"
                                                : ""
                                        }`}
                                        data-element="Premium Banner"
                                        onClick={clikNav}
                                    >
                                        Premium Banner
                                    </li>
                                    <li
                                        className={`list-content-right px-4 py-3 cursor-pointer rounded-lg hover:bg-slate-50 ${
                                            nav_active_ads === "Regular Banner"
                                                ? "bg-master text-center"
                                                : ""
                                        }`}
                                        data-element="Regular Banner"
                                        onClick={clikNav}
                                    >
                                        Regular Banner
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className={`col-span-2  ${
                                sideActive ? "hidden" : ""
                            } md:block`}
                        >
                            <div className="flex justify-center md:m-5 w-full ">
                                <div className="w-full">
                                    <div className="md:mt-8 w-full">
                                        <div
                                            className={`${
                                                nav_active_ads ===
                                                "Article Promote"
                                                    ? ""
                                                    : "hidden md:hidden"
                                            } justify-content-center justify-center flex-col space-y-5 shadow-md px md:p-6 w-full px-3 py-3`}
                                        >
                                            <div className="leading-relaxed">
                                                <div
                                                    className={`desktop_wrapper mx-auto relative ${
                                                        device_active ===
                                                        "icon_desktop"
                                                            ? ""
                                                            : "hidden"
                                                    }`}
                                                >
                                                    <div className="camera"></div>
                                                    <div className="body relative overflow-scroll">
                                                        <div className="nav-device bg-black py-2">
                                                            <img
                                                                src={logo}
                                                                alt="logo"
                                                                className="w-24"
                                                            />
                                                        </div>

                                                        <div className="grid grid-cols-6">
                                                            <div className="col">
                                                                <img
                                                                    src={
                                                                        ads_sample_side
                                                                    }
                                                                    alt="logo"
                                                                    className="h-full"
                                                                />
                                                            </div>
                                                            <div className="col-span-4">
                                                                <div className="grid grid-cols-2 bg-black text-slate-600">
                                                                    <div className="flex justify-center items-center border border-spacing-2 border-slate-600">
                                                                        <h1>
                                                                            Article
                                                                        </h1>
                                                                    </div>
                                                                    <div className="gap-2 place-content-center text-center">
                                                                        <div className="border border-spacing-2 border-slate-600">
                                                                            Article
                                                                        </div>
                                                                        <div className="border border-spacing-2 border-slate-600">
                                                                            Article
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="grid grid-cols-3 bg-black text-slate-600">
                                                                    <div className="bg-slate-400 border border-spacing-2 border-slate-600 px-2 py-2  text-xs text-center">
                                                                        Article
                                                                        Promote
                                                                    </div>
                                                                    <div className="bg-slate-400  border border-spacing-2 border-slate-600 px-2 py-2 text-xs text-center">
                                                                        Article
                                                                        Promote
                                                                    </div>
                                                                    <div className="bg-slate-400 border border-spacing-2 border-slate-600 px-2 py-2 text-xs text-center">
                                                                        Article
                                                                        Promote
                                                                    </div>
                                                                </div>

                                                                <div className="text-center grid bg-black text-slate-600">
                                                                    <div className="border border-spacing-2 border-slate-600 h-10 flex items-center justify-center">
                                                                        <span>
                                                                            Article
                                                                        </span>
                                                                    </div>

                                                                    <div className="border border-spacing-2 border-slate-600 h-10 flex items-center justify-center">
                                                                        <span>
                                                                            Article
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col">
                                                                <img
                                                                    src={
                                                                        ads_sample_side
                                                                    }
                                                                    alt="logo"
                                                                    className="h-full"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="footer"></div>
                                                </div>
                                                <div
                                                    className={`mobile_wrapper mx-auto ${
                                                        device_active ===
                                                        "icon_mobile"
                                                            ? ""
                                                            : "hidden"
                                                    }`}
                                                >
                                                    <div className="mobile-bg">
                                                        <div className="content">
                                                            <div className="flex justify-between bg-black py-2">
                                                                <img
                                                                    src={logo}
                                                                    alt="logo"
                                                                    className="w-24"
                                                                />
                                                                <div className="hamburger">
                                                                    <span className="mr-2 text-white">
                                                                        ☰
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="">
                                                                <div className="">
                                                                    <img
                                                                        src="https://www.soulofjakarta.id/images/ads-sample/bg-ads-2.jpg"
                                                                        alt=""
                                                                        className="h-full"
                                                                    />
                                                                </div>
                                                                <div className="flex justify-between gap-1 overflow-x-scroll body bg-slate-600">
                                                                    <div className="bg-slate-500 py-2 px-3 text-xs text-center">
                                                                        Article
                                                                        Promote
                                                                    </div>
                                                                    <div className="bg-slate-500 py-2 px-3 text-xs text-center">
                                                                        Article
                                                                        Promote
                                                                    </div>
                                                                    <div className="bg-slate-500 py-2 px-3 text-xs text-center">
                                                                        Article
                                                                        Promote
                                                                    </div>
                                                                </div>
                                                                <div className=" bg-black text-slate-500 overflwo-y-scroll text-center space-y-2 ">
                                                                    <div className="content-premium">
                                                                        <p>
                                                                            Article
                                                                        </p>
                                                                    </div>
                                                                    <div className="content-premium">
                                                                        <p>
                                                                            Article
                                                                        </p>
                                                                    </div>
                                                                    <div className="content-premium">
                                                                        <p>
                                                                            Article
                                                                        </p>
                                                                    </div>
                                                                    <div className="content-premium">
                                                                        <p>
                                                                            Article
                                                                        </p>
                                                                    </div>
                                                                    <div className="content-premium">
                                                                        <p>
                                                                            Article
                                                                        </p>
                                                                    </div>
                                                                </div>

                                                                <div className="p-5 bg-black"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex justify-center mt-4 gap-2">
                                                    <div>
                                                        <svg
                                                            width="25"
                                                            height="25"
                                                            viewBox="0 0 37 34"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            data-element="icon_desktop"
                                                            onClick={handleIcon}
                                                            className="cursor-pointer"
                                                        >
                                                            <path
                                                                d="M11.4286 32C11.4286 32 11.4286 25.4783 18.5 25.4783C25.5714 25.4783 25.5714 32 25.5714 32H11.4286ZM2 2V24.1739H35V2H2Z"
                                                                stroke={`${
                                                                    device_active ===
                                                                    "icon_desktop"
                                                                        ? "#ffc424"
                                                                        : "black"
                                                                }`}
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </div>

                                                    <div>
                                                        <svg
                                                            width="14"
                                                            height="25"
                                                            viewBox="0 0 14 27"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            data-element="icon_mobile"
                                                            onClick={handleIcon}
                                                            className="cursor-pointer"
                                                        >
                                                            <path
                                                                d="M1 3.8302H12.8612M1 23.2942H12.8612M11.1667 1.17603H2.69445C1.84723 1.17603 1 2.06075 1 2.94548V24.1789C1 25.0636 1.84723 25.9484 2.69445 25.9484H11.1667C12.014 25.9484 12.8612 25.0636 12.8612 24.1789V2.94548C12.8612 2.06075 12.014 1.17603 11.1667 1.17603Z"
                                                                stroke={`${
                                                                    device_active ===
                                                                    "icon_mobile"
                                                                        ? "#ffc424"
                                                                        : "black"
                                                                }`}
                                                                strokeWidth="1.1"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="description">
                                                <h1 className="text-xl md:text-3xl font-root mb-2 font-base">
                                                    Article Promote
                                                </h1>
                                                <ul className="space-y-2 list-disc ms-5 font-sm">
                                                    <li>
                                                        Article Header : Image
                                                        1600 x 1160px
                                                    </li>
                                                    <li>Max Size : 500 kb</li>
                                                    <li>
                                                        Banner Format : JPG, PNG
                                                        &amp; GIF
                                                    </li>
                                                    <li>
                                                        Appear : Home Page
                                                        (Never change with new
                                                        article posted)
                                                    </li>
                                                    <li>
                                                        Call to Action : Click
                                                        &amp; Visit Article
                                                    </li>
                                                    <li>Duration : 1 Month</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div
                                            className={`${
                                                nav_active_ads === "Article Row"
                                                    ? ""
                                                    : "hidden md:hidden"
                                            } justify-content-center justify-center flex-col space-y-5 shadow-md px md:p-6 w-full px-3 py-3`}
                                        >
                                            <div className="leading-relaxed">
                                                <div
                                                    className={`desktop_wrapper mx-auto relative ${
                                                        device_active ===
                                                        "icon_desktop"
                                                            ? ""
                                                            : "hidden"
                                                    }`}
                                                >
                                                    <div className="camera"></div>
                                                    <div className="body overflow-scroll">
                                                        <div className="nav-device grid grid-cols-6 bg-black py-2 ">
                                                            <div className="col">
                                                                <img
                                                                    src={logo}
                                                                    alt="logo"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="grid grid-cols-6 wrapper-device">
                                                            <div className="col">
                                                                <img
                                                                    src={
                                                                        ads_sample_side
                                                                    }
                                                                    alt="logo"
                                                                    className="h-full"
                                                                />
                                                            </div>
                                                            <div className="col-span-4">
                                                                <div className="text-center overflow-y-scroll wrapper-device bg-black ">
                                                                    <div className="py-1 text-slate-600 border border-spacing-2 border-slate-600">
                                                                        <span>
                                                                            Article
                                                                        </span>
                                                                    </div>

                                                                    <div className="py-1 text-slate-600 border border-spacing-2 border-slate-600">
                                                                        <span>
                                                                            Article
                                                                        </span>
                                                                    </div>

                                                                    <div className="py-1 text-slate-600 border border-spacing-2 border-slate-600">
                                                                        <img
                                                                            src={
                                                                                ads_row
                                                                            }
                                                                            alt="ads-row"
                                                                        />
                                                                    </div>

                                                                    <div className="py-1 text-slate-600 border border-spacing-2 border-slate-600">
                                                                        <span>
                                                                            Article
                                                                        </span>
                                                                    </div>

                                                                    <div className="py-1 text-slate-600 border border-spacing-2 border-slate-600">
                                                                        <span>
                                                                            Article
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col">
                                                                <img
                                                                    src={
                                                                        ads_sample_side
                                                                    }
                                                                    alt="logo"
                                                                    className="h-full"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="footer"></div>
                                                </div>
                                                <div
                                                    className={`mobile_wrapper mx-auto ${
                                                        device_active ===
                                                        "icon_mobile"
                                                            ? ""
                                                            : "hidden"
                                                    }`}
                                                >
                                                    <div className="mobile-bg">
                                                        <div className="content ">
                                                            <img
                                                                src={
                                                                    headline_banner
                                                                }
                                                                alt=""
                                                            />
                                                            <div className="content">
                                                                <div className="flex justify-between bg-black py-2">
                                                                    <img
                                                                        src={
                                                                            logo
                                                                        }
                                                                        alt="logo"
                                                                        className="w-24"
                                                                    />
                                                                    <div className="hamburger">
                                                                        <span className="mr-2 text-white">
                                                                            ☰
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="">
                                                                    <div className=" bg-black text-slate-500 overflwo-y-scroll text-center space-y-2 ">
                                                                        <div className="content-premium">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                        <div className="content-premium">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                        <div className="py-1 text-slate-300 bg-black">
                                                                            <img
                                                                                src={
                                                                                    ads_row
                                                                                }
                                                                                alt="ads-row"
                                                                            />
                                                                        </div>
                                                                        <div className="content-premium">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>

                                                                        <div className="content-premium">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                        <div className="py-1 text-slate-300 bg-black">
                                                                            <img
                                                                                src={
                                                                                    ads_row
                                                                                }
                                                                                alt="ads-row"
                                                                            />
                                                                        </div>
                                                                        <div className="content-premium">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>

                                                                        <div className="content-premium">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                        <div className="py-1 text-slate-300 bg-black">
                                                                            <img
                                                                                src={
                                                                                    ads_row
                                                                                }
                                                                                alt="ads-row"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="content-premium">
                                                                        <p>
                                                                            Article
                                                                        </p>
                                                                    </div>

                                                                    <div className="p-5 bg-black"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex justify-center mt-4 gap-2">
                                                    <div>
                                                        <svg
                                                            width="25"
                                                            height="25"
                                                            viewBox="0 0 37 34"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            data-element="icon_desktop"
                                                            onClick={handleIcon}
                                                        >
                                                            <path
                                                                d="M11.4286 32C11.4286 32 11.4286 25.4783 18.5 25.4783C25.5714 25.4783 25.5714 32 25.5714 32H11.4286ZM2 2V24.1739H35V2H2Z"
                                                                stroke={`${
                                                                    device_active ===
                                                                    "icon_desktop"
                                                                        ? "#ffc424"
                                                                        : "black"
                                                                }`}
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </div>

                                                    <div>
                                                        <svg
                                                            width="14"
                                                            height="25"
                                                            viewBox="0 0 14 27"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            data-element="icon_mobile"
                                                            onClick={handleIcon}
                                                        >
                                                            <path
                                                                d="M1 3.8302H12.8612M1 23.2942H12.8612M11.1667 1.17603H2.69445C1.84723 1.17603 1 2.06075 1 2.94548V24.1789C1 25.0636 1.84723 25.9484 2.69445 25.9484H11.1667C12.014 25.9484 12.8612 25.0636 12.8612 24.1789V2.94548C12.8612 2.06075 12.014 1.17603 11.1667 1.17603Z"
                                                                stroke={`${
                                                                    device_active ===
                                                                    "icon_mobile"
                                                                        ? "#ffc424"
                                                                        : "black"
                                                                }`}
                                                                strokeWidth="1.1"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="description">
                                                <h1 className="text-xl md:text-3xl font-root mb-2 font-base">
                                                    Article Row
                                                </h1>
                                                <ul className="space-y-2 list-disc ms-5 font-sm">
                                                    <li>
                                                        Banner Spesification :
                                                        700 x 200px (desktop)
                                                        &amp; 400 x 115px
                                                        (Mobile){" "}
                                                    </li>
                                                    <li>
                                                        Banner Format : JPG, PNG
                                                        &amp; GIF
                                                    </li>
                                                    <li>
                                                        Appear : Home Page and
                                                        Category page (One time
                                                        Appear in Home page){" "}
                                                    </li>
                                                    <li>
                                                        Call to Action : Visit
                                                        Link
                                                    </li>
                                                    <li>Duration : 1 Month</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div
                                            className={`${
                                                nav_active_ads ===
                                                "Background Banner"
                                                    ? ""
                                                    : "hidden md:hidden"
                                            } justify-content-center justify-center flex-col space-y-5 shadow-md px md:p-6 w-full px-3 py-3`}
                                        >
                                            <div className="leading-relaxed">
                                                <div
                                                    className={`desktop_wrapper mx-auto relative ${
                                                        device_active ===
                                                        "icon_desktop"
                                                            ? ""
                                                            : "hidden"
                                                    }`}
                                                >
                                                    <div className="camera"></div>
                                                    <div className="body">
                                                        <div className="nav-device grid grid-cols-6 bg-black py-2 ">
                                                            <img
                                                                src={logo}
                                                                alt="logo"
                                                            />
                                                        </div>

                                                        <div className="grid grid-cols-6 wrapper-device">
                                                            <div className="col">
                                                                <img
                                                                    src={
                                                                        background_side
                                                                    }
                                                                    alt="logo"
                                                                    className="h-full"
                                                                />
                                                            </div>
                                                            <div className="col-span-4 bg-black">
                                                                <img
                                                                    src={
                                                                        desktop_headline
                                                                    }
                                                                    alt="desktop_headline"
                                                                />
                                                                <div className="grid grid-cols-2 bg-black text-slate-600">
                                                                    <div className="flex justify-center items-center border border-spacing-2 border-slate-600">
                                                                        <h1>
                                                                            Article
                                                                        </h1>
                                                                    </div>
                                                                    <div className="gap-2 place-content-center text-center">
                                                                        <div className="border border-spacing-2 border-slate-600">
                                                                            Article
                                                                        </div>
                                                                        <div className="border border-spacing-2 border-slate-600">
                                                                            Article
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="text-center grid bg-black text-slate-600">
                                                                    <div className="border border-spacing-2 border-slate-600 h-10 flex items-center justify-center">
                                                                        <span>
                                                                            Article
                                                                        </span>
                                                                    </div>

                                                                    <div className="border border-spacing-2 border-slate-600 h-10 flex items-center justify-center">
                                                                        <span>
                                                                            Article
                                                                        </span>
                                                                    </div>
                                                                    <div className="border border-spacing-2 border-slate-600 h-10 flex items-center justify-center">
                                                                        <span>
                                                                            Article
                                                                        </span>
                                                                    </div>
                                                                    <div className="border border-spacing-2 border-slate-600 h-10 flex items-center justify-center">
                                                                        <span>
                                                                            Article
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col">
                                                                <img
                                                                    src={
                                                                        background_side
                                                                    }
                                                                    alt="logo"
                                                                    className="h-full"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="footer bg-black"></div>
                                                </div>
                                                <div
                                                    className={`mobile_wrapper mx-auto ${
                                                        device_active ===
                                                        "icon_mobile"
                                                            ? ""
                                                            : "hidden"
                                                    }`}
                                                >
                                                    <div className="mobile-bg">
                                                        <div className="content ">
                                                            <img
                                                                src={
                                                                    headline_banner_sample
                                                                }
                                                                alt=""
                                                            />
                                                            <div className="">
                                                                <div className="flex justify-between bg-black py-2">
                                                                    <img
                                                                        src={
                                                                            logo
                                                                        }
                                                                        alt="logo"
                                                                        className="w-24"
                                                                    />
                                                                    <div className="hamburger">
                                                                        <span className="mr-2 text-white">
                                                                            ☰
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <img
                                                                    src={
                                                                        mobile_benner
                                                                    }
                                                                    alt="healine-sample"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex justify-center mt-4 gap-2">
                                                    <div>
                                                        <svg
                                                            width="25"
                                                            height="25"
                                                            viewBox="0 0 37 34"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            data-element="icon_desktop"
                                                            onClick={handleIcon}
                                                        >
                                                            <path
                                                                d="M11.4286 32C11.4286 32 11.4286 25.4783 18.5 25.4783C25.5714 25.4783 25.5714 32 25.5714 32H11.4286ZM2 2V24.1739H35V2H2Z"
                                                                stroke={`${
                                                                    device_active ===
                                                                    "icon_desktop"
                                                                        ? "#ffc424"
                                                                        : "black"
                                                                }`}
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </div>

                                                    <div>
                                                        <svg
                                                            width="14"
                                                            height="25"
                                                            viewBox="0 0 14 27"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            data-element="icon_mobile"
                                                            onClick={handleIcon}
                                                        >
                                                            <path
                                                                d="M1 3.8302H12.8612M1 23.2942H12.8612M11.1667 1.17603H2.69445C1.84723 1.17603 1 2.06075 1 2.94548V24.1789C1 25.0636 1.84723 25.9484 2.69445 25.9484H11.1667C12.014 25.9484 12.8612 25.0636 12.8612 24.1789V2.94548C12.8612 2.06075 12.014 1.17603 11.1667 1.17603Z"
                                                                stroke={`${
                                                                    device_active ===
                                                                    "icon_mobile"
                                                                        ? "#ffc424"
                                                                        : "black"
                                                                }`}
                                                                strokeWidth="1.1"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="description">
                                                <h1 className="text-xl md:text-3xl font-root mb-2 font-base">
                                                    Background Banner
                                                </h1>
                                                <ul className="space-y-2 list-disc ms-5 font-sm">
                                                    <li>
                                                        Banner Spesification :
                                                        160 x 600px (desktop)
                                                        &amp; 300 x 150px
                                                        (Mobile)
                                                    </li>
                                                    <li>Max Size : 200 kb</li>
                                                    <li>
                                                        Banner Format : JPG, PNG
                                                        &amp; GIF
                                                    </li>
                                                    <li>
                                                        Appear : Top of every
                                                        page (One time Appear in
                                                        every page)
                                                    </li>
                                                    <li>
                                                        Call to Action : Visit
                                                        Link
                                                    </li>
                                                    <li>Duration : 1 Month</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div
                                            className={`${
                                                nav_active_ads === "Headline"
                                                    ? ""
                                                    : "hidden md:hidden"
                                            } justify-content-center justify-center flex-col space-y-5 shadow-md px md:p-6 w-full px-3 py-3`}
                                        >
                                            <div className="leading-relaxed">
                                                <div
                                                    className={`desktop_wrapper mx-auto relative ${
                                                        device_active ===
                                                        "icon_desktop"
                                                            ? ""
                                                            : "hidden"
                                                    }`}
                                                >
                                                    <div className="camera"></div>
                                                    <div className="body">
                                                        <div className="nav-device grid grid-cols-6 bg-black py-2 ">
                                                            <img
                                                                src={logo}
                                                                alt="logo"
                                                            />
                                                        </div>

                                                        <div className="grid grid-cols-6 wrapper-device">
                                                            <div className="col">
                                                                <img
                                                                    src={
                                                                        ads_sample_side
                                                                    }
                                                                    alt="logo"
                                                                    className="h-full"
                                                                />
                                                            </div>
                                                            <div className="col-span-4 bg-black">
                                                                <img
                                                                    src={
                                                                        headline_banner_desktop
                                                                    }
                                                                    alt="desktop_headline"
                                                                />
                                                                <div className="grid grid-cols-2 bg-black text-slate-600">
                                                                    <div className="flex justify-center items-center border border-spacing-2 border-slate-600">
                                                                        <h1>
                                                                            Article
                                                                        </h1>
                                                                    </div>
                                                                    <div className="gap-2 place-content-center text-center">
                                                                        <div className="border border-spacing-2 border-slate-600">
                                                                            Article
                                                                        </div>
                                                                        <div className="border border-spacing-2 border-slate-600">
                                                                            Article
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="text-center grid bg-black text-slate-600">
                                                                    <div className="border border-spacing-2 border-slate-600 h-10 flex items-center justify-center">
                                                                        <span>
                                                                            Article
                                                                        </span>
                                                                    </div>

                                                                    <div className="border border-spacing-2 border-slate-600 h-10 flex items-center justify-center">
                                                                        <span>
                                                                            Article
                                                                        </span>
                                                                    </div>
                                                                    <div className="border border-spacing-2 border-slate-600 h-10 flex items-center justify-center">
                                                                        <span>
                                                                            Article
                                                                        </span>
                                                                    </div>
                                                                    <div className="border border-spacing-2 border-slate-600 h-10 flex items-center justify-center">
                                                                        <span>
                                                                            Article
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col">
                                                                <img
                                                                    src={
                                                                        ads_sample_side
                                                                    }
                                                                    alt="logo"
                                                                    className="h-full"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="footer bg-black"></div>
                                                </div>
                                                <div
                                                    className={`mobile_wrapper mx-auto ${
                                                        device_active ===
                                                        "icon_mobile"
                                                            ? ""
                                                            : "hidden"
                                                    }`}
                                                >
                                                    <div className="mobile-bg">
                                                        <div className="content ">
                                                            <img
                                                                src={
                                                                    headline_banner
                                                                }
                                                                alt=""
                                                            />
                                                            <div className="">
                                                                <div className="flex justify-between bg-black py-2">
                                                                    <img
                                                                        src={
                                                                            logo
                                                                        }
                                                                        alt="logo"
                                                                        className="w-24"
                                                                    />
                                                                    <div className="hamburger">
                                                                        <span className="mr-2 text-white">
                                                                            ☰
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <img
                                                                    src={bg_ads}
                                                                    alt="healine-sample"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex justify-center mt-4 gap-2">
                                                    <div>
                                                        <svg
                                                            width="25"
                                                            height="25"
                                                            viewBox="0 0 37 34"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            data-element="icon_desktop"
                                                            onClick={handleIcon}
                                                        >
                                                            <path
                                                                d="M11.4286 32C11.4286 32 11.4286 25.4783 18.5 25.4783C25.5714 25.4783 25.5714 32 25.5714 32H11.4286ZM2 2V24.1739H35V2H2Z"
                                                                stroke={`${
                                                                    device_active ===
                                                                    "icon_desktop"
                                                                        ? "#ffc424"
                                                                        : "black"
                                                                }`}
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </div>

                                                    <div>
                                                        <svg
                                                            width="14"
                                                            height="25"
                                                            viewBox="0 0 14 27"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            data-element="icon_mobile"
                                                            onClick={handleIcon}
                                                        >
                                                            <path
                                                                d="M1 3.8302H12.8612M1 23.2942H12.8612M11.1667 1.17603H2.69445C1.84723 1.17603 1 2.06075 1 2.94548V24.1789C1 25.0636 1.84723 25.9484 2.69445 25.9484H11.1667C12.014 25.9484 12.8612 25.0636 12.8612 24.1789V2.94548C12.8612 2.06075 12.014 1.17603 11.1667 1.17603Z"
                                                                stroke={`${
                                                                    device_active ===
                                                                    "icon_mobile"
                                                                        ? "#ffc424"
                                                                        : "black"
                                                                }`}
                                                                strokeWidth="1.1"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="description">
                                                <h1 className="text-xl md:text-3xl font-root mb-2 font-base">
                                                    Headline
                                                </h1>
                                                <ul className="space-y-2 list-disc ms-5 font-sm">
                                                    <li>
                                                        Banner Spesification :
                                                        1300 x 250px (desktop)
                                                        &amp; 320 x 480px
                                                        (Mobile)
                                                    </li>
                                                    <li>Max Size : 200 kb</li>
                                                    <li>
                                                        Banner Format : JPG, PNG
                                                        &amp; GIF
                                                    </li>
                                                    <li>
                                                        Appear : Top of every
                                                        page (One time Appear in
                                                        every page)
                                                    </li>
                                                    <li>
                                                        Call to Action : Visit
                                                        Link
                                                    </li>
                                                    <li>Duration : 1 Month</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div
                                            className={`${
                                                nav_active_ads ===
                                                "Pop Up Image"
                                                    ? ""
                                                    : "hidden md:hidden"
                                            } justify-content-center justify-center flex-col space-y-5 shadow-md px md:p-6 w-full px-3 py-3`}
                                        >
                                            <div className="leading-relaxed">
                                                <div
                                                    className={`desktop_wrapper mx-auto relative ${
                                                        device_active ===
                                                        "icon_desktop"
                                                            ? ""
                                                            : "hidden"
                                                    }`}
                                                >
                                                    <div className="camera"></div>
                                                    <div className="body">
                                                        <div className="nav-device grid grid-cols-6 bg-black py-2 ">
                                                            <img
                                                                src={logo}
                                                                alt="logo"
                                                            />
                                                        </div>

                                                        <div className=" grid grid-cols-6 relative ">
                                                            <div className="absolute left-0 right-0 top-3 grid place-items-center">
                                                                <img
                                                                    src={pop_up}
                                                                    alt="pop-up"
                                                                    className="w-32 "
                                                                />
                                                            </div>

                                                            <div className="col">
                                                                <img
                                                                    src={
                                                                        ads_sample_side
                                                                    }
                                                                    alt="logo"
                                                                />
                                                            </div>
                                                            <div className="col-span-4 bg-black body ">
                                                                <img
                                                                    src={
                                                                        desktop_headline
                                                                    }
                                                                    alt="desktop_headline"
                                                                />
                                                                <div className="grid grid-cols-2 bg-black text-slate-600">
                                                                    <div className="flex justify-center items-center border border-spacing-2 border-slate-600">
                                                                        <h1>
                                                                            Article
                                                                        </h1>
                                                                    </div>
                                                                    <div className="gap-2 place-content-center text-center">
                                                                        <div className="border border-spacing-2 border-slate-600">
                                                                            Article
                                                                        </div>
                                                                        <div className="border border-spacing-2 border-slate-600">
                                                                            Article
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="text-center grid bg-black text-slate-600">
                                                                    <div className="border border-spacing-2 border-slate-600 h-10 flex items-center justify-center">
                                                                        <span>
                                                                            Article
                                                                        </span>
                                                                    </div>

                                                                    <div className="border border-spacing-2 border-slate-600 h-10 flex items-center justify-center">
                                                                        <span>
                                                                            Article
                                                                        </span>
                                                                    </div>
                                                                    <div className="border border-spacing-2 border-slate-600 h-10 flex items-center justify-center">
                                                                        <span>
                                                                            Article
                                                                        </span>
                                                                    </div>
                                                                    <div className="border border-spacing-2 border-slate-600 h-10 flex items-center justify-center">
                                                                        <span>
                                                                            Article
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col">
                                                                <img
                                                                    src={
                                                                        ads_sample_side
                                                                    }
                                                                    alt="logo"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="footer bg-black"></div>
                                                </div>
                                                <div
                                                    className={`mobile_wrapper mx-auto ${
                                                        device_active ===
                                                        "icon_mobile"
                                                            ? ""
                                                            : "hidden"
                                                    }`}
                                                >
                                                    <div className="mobile-bg">
                                                        <div className="relative">
                                                            <div className="absolute left-0 right-0 top-32 grid place-items-center">
                                                                <img
                                                                    src={pop_up}
                                                                    alt="pop-up"
                                                                    className="w-32 "
                                                                />
                                                            </div>
                                                            <div className="content">
                                                                <img
                                                                    src={
                                                                        headline_banner
                                                                    }
                                                                    alt=""
                                                                />
                                                                <div className="">
                                                                    <div className="flex justify-between bg-black py-2">
                                                                        <img
                                                                            src={
                                                                                logo
                                                                            }
                                                                            alt="logo"
                                                                            className="w-24"
                                                                        />
                                                                        <div className="hamburger">
                                                                            <span className="mr-2 text-white">
                                                                                ☰
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <img
                                                                        src={
                                                                            bg_ads
                                                                        }
                                                                        alt="healine-sample"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex justify-center mt-4 gap-2">
                                                    <div>
                                                        <svg
                                                            width="25"
                                                            height="25"
                                                            viewBox="0 0 37 34"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            data-element="icon_desktop"
                                                            onClick={handleIcon}
                                                        >
                                                            <path
                                                                d="M11.4286 32C11.4286 32 11.4286 25.4783 18.5 25.4783C25.5714 25.4783 25.5714 32 25.5714 32H11.4286ZM2 2V24.1739H35V2H2Z"
                                                                stroke={`${
                                                                    device_active ===
                                                                    "icon_desktop"
                                                                        ? "#ffc424"
                                                                        : "black"
                                                                }`}
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </div>

                                                    <div>
                                                        <svg
                                                            width="14"
                                                            height="25"
                                                            viewBox="0 0 14 27"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            data-element="icon_mobile"
                                                            onClick={handleIcon}
                                                        >
                                                            <path
                                                                d="M1 3.8302H12.8612M1 23.2942H12.8612M11.1667 1.17603H2.69445C1.84723 1.17603 1 2.06075 1 2.94548V24.1789C1 25.0636 1.84723 25.9484 2.69445 25.9484H11.1667C12.014 25.9484 12.8612 25.0636 12.8612 24.1789V2.94548C12.8612 2.06075 12.014 1.17603 11.1667 1.17603Z"
                                                                stroke={`${
                                                                    device_active ===
                                                                    "icon_mobile"
                                                                        ? "#ffc424"
                                                                        : "black"
                                                                }`}
                                                                strokeWidth="1.1"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="description">
                                                <h1 className="text-xl md:text-3xl font-root mb-2 font-base">
                                                    Pop Up Image
                                                </h1>
                                                <ul className="space-y-2 list-disc ms-5 font-sm">
                                                    <li>
                                                        Banner Spesification :
                                                        650 x 480px (desktop)
                                                        &amp; 350 x 280px
                                                        (Mobile){" "}
                                                    </li>
                                                    <li>
                                                        Appear : Home Page
                                                        (Closeable &amp; One
                                                        time Appear in Home
                                                        page)
                                                    </li>
                                                    <li>
                                                        Banner Format : JPG, PNG
                                                        &amp; GIF
                                                    </li>
                                                    <li>
                                                        Appear : Home Page
                                                        (Closeable &amp; One
                                                        time Appear in Home
                                                        page)
                                                    </li>
                                                    <li>
                                                        Call to Action : Visit
                                                        Link
                                                    </li>
                                                    <li>Duration : 1 Month</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div
                                            className={`${
                                                nav_active_ads ===
                                                "Pop Up Video"
                                                    ? ""
                                                    : "hidden md:hidden"
                                            } justify-content-center justify-center flex-col space-y-5 shadow-md px md:p-6 w-full px-3 py-3`}
                                        >
                                            <div className="leading-relaxed">
                                                <div
                                                    className={`desktop_wrapper mx-auto relative ${
                                                        device_active ===
                                                        "icon_desktop"
                                                            ? ""
                                                            : "hidden"
                                                    }`}
                                                >
                                                    <div className="camera"></div>
                                                    <div className="body">
                                                        <div className="relative">
                                                            <div className="absolute right-2 bottom-2 grid place-items-center">
                                                                <div className="w-20 h-20 bg-slate-600 grid place-items-center text-center text-white">
                                                                    Youtube
                                                                    Iframe
                                                                </div>
                                                            </div>
                                                            <div className="nav-device bg-black py-2">
                                                                <img
                                                                    src={logo}
                                                                    alt="logo"
                                                                    className="w-24"
                                                                />
                                                            </div>
                                                            <div className="grid grid-cols-6 wrapper-device ">
                                                                <div className="col">
                                                                    <img
                                                                        src={
                                                                            ads_sample_side
                                                                        }
                                                                        alt="logo"
                                                                        className="h-full"
                                                                    />
                                                                </div>
                                                                <div className="col-span-4 overflow-hidden">
                                                                    <div className="grid grid-cols-2 bg-black text-slate-600">
                                                                        <div className="flex justify-center items-center border border-spacing-2 border-slate-600">
                                                                            <h1>
                                                                                Article
                                                                            </h1>
                                                                        </div>
                                                                        <div className="gap-2 place-content-center text-center">
                                                                            <div className="border border-spacing-2 border-slate-600">
                                                                                Article
                                                                            </div>
                                                                            <div className="border border-spacing-2 border-slate-600">
                                                                                Article
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-center grid bg-black text-slate-600">
                                                                        <div className="border border-spacing-2 border-slate-600 h-10 flex items-center justify-center">
                                                                            <span>
                                                                                Article
                                                                            </span>
                                                                        </div>

                                                                        <div className="border border-spacing-2 border-slate-600 h-10 flex items-center justify-center">
                                                                            <span>
                                                                                Article
                                                                            </span>
                                                                        </div>
                                                                        <div className="border border-spacing-2 border-slate-600 h-10 flex items-center justify-center">
                                                                            <span>
                                                                                Article
                                                                            </span>
                                                                        </div>
                                                                        <div className="border border-spacing-2 border-slate-600 h-10 flex items-center justify-center">
                                                                            <span>
                                                                                Article
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <img
                                                                        src={
                                                                            ads_sample_side
                                                                        }
                                                                        alt="logo"
                                                                        className="h-full"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="footer"></div>
                                                </div>
                                                <div
                                                    className={`mobile_wrapper mx-auto ${
                                                        device_active ===
                                                        "icon_mobile"
                                                            ? ""
                                                            : "hidden"
                                                    }`}
                                                >
                                                    <div className="mobile-bg">
                                                        <div className="relative">
                                                            <div className="absolute right-2 bottom-2 grid place-items-center">
                                                                <div className="w-20 h-12 bg-slate-600 grid place-items-center text-center text-white text-sm">
                                                                    Youtube
                                                                    Iframe
                                                                </div>
                                                            </div>
                                                            <div className="content">
                                                                <img
                                                                    src={
                                                                        headline_banner
                                                                    }
                                                                    alt=""
                                                                />
                                                                <div className="">
                                                                    <div className="flex justify-between bg-black py-2">
                                                                        <img
                                                                            src={
                                                                                logo
                                                                            }
                                                                            alt="logo"
                                                                            className="w-24"
                                                                        />
                                                                        <div className="hamburger">
                                                                            <span className="mr-2 text-white">
                                                                                ☰
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <img
                                                                        src={
                                                                            bg_ads
                                                                        }
                                                                        alt="healine-sample"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex justify-center mt-4 gap-2">
                                                    <div>
                                                        <svg
                                                            width="25"
                                                            height="25"
                                                            viewBox="0 0 37 34"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            data-element="icon_desktop"
                                                            onClick={handleIcon}
                                                        >
                                                            <path
                                                                d="M11.4286 32C11.4286 32 11.4286 25.4783 18.5 25.4783C25.5714 25.4783 25.5714 32 25.5714 32H11.4286ZM2 2V24.1739H35V2H2Z"
                                                                stroke={`${
                                                                    device_active ===
                                                                    "icon_desktop"
                                                                        ? "#ffc424"
                                                                        : "black"
                                                                }`}
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </div>

                                                    <div>
                                                        <svg
                                                            width="14"
                                                            height="25"
                                                            viewBox="0 0 14 27"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            data-element="icon_mobile"
                                                            onClick={handleIcon}
                                                        >
                                                            <path
                                                                d="M1 3.8302H12.8612M1 23.2942H12.8612M11.1667 1.17603H2.69445C1.84723 1.17603 1 2.06075 1 2.94548V24.1789C1 25.0636 1.84723 25.9484 2.69445 25.9484H11.1667C12.014 25.9484 12.8612 25.0636 12.8612 24.1789V2.94548C12.8612 2.06075 12.014 1.17603 11.1667 1.17603Z"
                                                                stroke={`${
                                                                    device_active ===
                                                                    "icon_mobile"
                                                                        ? "#ffc424"
                                                                        : "black"
                                                                }`}
                                                                strokeWidth="1.1"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="description">
                                                <h1 className="text-xl md:text-3xl font-root mb-2 font-base">
                                                    Pop Up Video
                                                </h1>
                                                <ul className="space-y-2 list-disc ms-5 font-sm">
                                                    <li>
                                                        Banner Spesification :
                                                        400 x 220px (desktop)
                                                        &amp; 200 x 100px
                                                        (Mobile)
                                                    </li>
                                                    <li>
                                                        Banner Format : Youtube
                                                        Link
                                                    </li>
                                                    <li>
                                                        Appear : Every Pages
                                                        (Closeable &amp; One
                                                        time appear in every
                                                        pages)
                                                    </li>
                                                    <li>
                                                        Call to Action : Visit
                                                        Link &amp; Views
                                                    </li>
                                                    <li>Duration : 1 Month</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div
                                            className={`${
                                                nav_active_ads ===
                                                "Premium Banner"
                                                    ? ""
                                                    : "hidden md:hidden"
                                            } justify-content-center justify-center flex-col space-y-5 shadow-md px md:p-6 w-full px-3 py-3`}
                                        >
                                            <div className="leading-relaxed">
                                                <div
                                                    className={`desktop_wrapper mx-auto relative ${
                                                        device_active ===
                                                        "icon_desktop"
                                                            ? ""
                                                            : "hidden"
                                                    }`}
                                                >
                                                    <div className="camera"></div>
                                                    <div className="body overflow-scroll">
                                                        <div className="nav-device grid grid-cols-6 bg-black py-2 ">
                                                            <div className="col">
                                                                <img
                                                                    src={logo}
                                                                    alt="logo"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="grid grid-cols-6 wrapper-device">
                                                            <div className="col">
                                                                <img
                                                                    src={
                                                                        ads_sample_side
                                                                    }
                                                                    alt="logo"
                                                                    className="h-full"
                                                                />
                                                            </div>
                                                            <div className="col-span-4 h-full">
                                                                <div className="grid grid-cols-2 text-center bg-black text-slate-600 ">
                                                                    <div className="col">
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col">
                                                                        <div className="content-premium">
                                                                            <img
                                                                                src="/images/ads-sample/premium_benner_1.jpg"
                                                                                alt=""
                                                                                srcSet=""
                                                                            />
                                                                        </div>
                                                                        <div className="content-premium">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <img
                                                                                src="https://www.soulofjakarta.id/images/ads-sample/premium-banner.jpg"
                                                                                alt=""
                                                                                srcSet=""
                                                                            />
                                                                        </div>
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <img
                                                                                src="https://www.soulofjakarta.id/images/ads-sample/premium-banner.jpg"
                                                                                alt=""
                                                                                srcSet=""
                                                                            />
                                                                        </div>
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col">
                                                                <img
                                                                    src={
                                                                        ads_sample_side
                                                                    }
                                                                    alt="logo"
                                                                    className="h-full"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="footer"></div>
                                                </div>
                                                <div
                                                    className={`mobile_wrapper mx-auto ${
                                                        device_active ===
                                                        "icon_mobile"
                                                            ? ""
                                                            : "hidden"
                                                    }`}
                                                >
                                                    <div className="mobile-bg">
                                                        <div className="relative">
                                                            <div className="content">
                                                                <img
                                                                    src={
                                                                        headline_banner
                                                                    }
                                                                    alt=""
                                                                />
                                                                <div className="">
                                                                    <div className="flex justify-between bg-black py-2">
                                                                        <img
                                                                            src={
                                                                                logo
                                                                            }
                                                                            alt="logo"
                                                                            className="w-24"
                                                                        />
                                                                        <div className="hamburger">
                                                                            <span className="mr-2 text-white">
                                                                                ☰
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className="body-content-scroll text-center bg-black text-slate-600">
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <img
                                                                                src="/images/ads-sample/premium_benner_1.jpg"
                                                                                alt=""
                                                                                srcSet=""
                                                                            />
                                                                        </div>
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <img
                                                                                src="https://www.soulofjakarta.id/images/ads-sample/premium-banner.jpg"
                                                                                alt=""
                                                                                srcSet=""
                                                                            />
                                                                        </div>
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <img
                                                                                src="https://www.soulofjakarta.id/images/ads-sample/premium-banner.jpg"
                                                                                alt=""
                                                                                srcSet=""
                                                                            />
                                                                        </div>
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex justify-center mt-4 gap-2">
                                                    <div>
                                                        <svg
                                                            width="25"
                                                            height="25"
                                                            viewBox="0 0 37 34"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            data-element="icon_desktop"
                                                            onClick={handleIcon}
                                                        >
                                                            <path
                                                                d="M11.4286 32C11.4286 32 11.4286 25.4783 18.5 25.4783C25.5714 25.4783 25.5714 32 25.5714 32H11.4286ZM2 2V24.1739H35V2H2Z"
                                                                stroke={`${
                                                                    device_active ===
                                                                    "icon_desktop"
                                                                        ? "#ffc424"
                                                                        : "black"
                                                                }`}
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </div>

                                                    <div>
                                                        <svg
                                                            width="14"
                                                            height="25"
                                                            viewBox="0 0 14 27"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            data-element="icon_mobile"
                                                            onClick={handleIcon}
                                                        >
                                                            <path
                                                                d="M1 3.8302H12.8612M1 23.2942H12.8612M11.1667 1.17603H2.69445C1.84723 1.17603 1 2.06075 1 2.94548V24.1789C1 25.0636 1.84723 25.9484 2.69445 25.9484H11.1667C12.014 25.9484 12.8612 25.0636 12.8612 24.1789V2.94548C12.8612 2.06075 12.014 1.17603 11.1667 1.17603Z"
                                                                stroke={`${
                                                                    device_active ===
                                                                    "icon_mobile"
                                                                        ? "#ffc424"
                                                                        : "black"
                                                                }`}
                                                                strokeWidth="1.1"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="description">
                                                <h1 className="text-xl md:text-3xl font-root mb-2 font-base">
                                                    Premium Banner
                                                </h1>
                                                <ul className="space-y-2 list-disc ms-5 font-sm">
                                                    <li>
                                                        Banner Spesification :
                                                        390 x 200px (desktop)
                                                        &amp; 400 x 200px
                                                        (Mobile)
                                                    </li>
                                                    <li>Max Size : 200 kb</li>
                                                    <li>
                                                        Banner Format : JPG, PNG
                                                        &amp; GIF
                                                    </li>
                                                    <li>
                                                        Appear : Every pages
                                                        (One time Appear in
                                                        every pages)
                                                    </li>
                                                    <li>
                                                        Call to Action : Visit
                                                        Link
                                                    </li>
                                                    <li>Duration : 1 Month</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div
                                            className={`${
                                                nav_active_ads ===
                                                "Regular Banner"
                                                    ? ""
                                                    : "hidden md:hidden"
                                            } justify-content-center justify-center flex-col space-y-5 shadow-md px md:p-6 w-full px-3 py-3`}
                                        >
                                            <div className="leading-relaxed">
                                                <div
                                                    className={`desktop_wrapper mx-auto relative ${
                                                        device_active ===
                                                        "icon_desktop"
                                                            ? ""
                                                            : "hidden"
                                                    }`}
                                                >
                                                    <div className="camera"></div>
                                                    <div className="body overflow-scroll">
                                                        <div className="nav-device grid grid-cols-6 bg-black py-2 ">
                                                            <div className="col">
                                                                <img
                                                                    src={logo}
                                                                    alt="logo"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="grid grid-cols-6 wrapper-device">
                                                            <div className="col">
                                                                <img
                                                                    src={
                                                                        ads_sample_side
                                                                    }
                                                                    alt="logo"
                                                                    className="h-full"
                                                                />
                                                            </div>
                                                            <div className="col-span-4">
                                                                <div className="grid grid-cols-2 bg-black text-slate-600">
                                                                    <div className="flex justify-center items-center border border-spacing-2 border-slate-600">
                                                                        <h1>
                                                                            Article
                                                                        </h1>
                                                                    </div>
                                                                    <div className="gap-2 place-content-center text-center">
                                                                        <div className="border border-spacing-2 border-slate-600">
                                                                            Article
                                                                        </div>
                                                                        <div className="border border-spacing-2 border-slate-600">
                                                                            Article
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="text-center grid bg-black text-slate-600">
                                                                    <div className="border border-spacing-2 border-slate-600 h-10 flex items-center justify-center">
                                                                        <span>
                                                                            Article
                                                                        </span>
                                                                    </div>

                                                                    <div className="border border-spacing-2 border-slate-600 h-10 flex items-center justify-center">
                                                                        <span>
                                                                            Article
                                                                        </span>
                                                                    </div>
                                                                    <div className="border border-spacing-2 border-slate-600 h-10 flex items-center justify-center">
                                                                        <span>
                                                                            Article
                                                                        </span>
                                                                    </div>
                                                                    <div className="border border-spacing-2 border-slate-600 h-10 flex items-center justify-center">
                                                                        <span>
                                                                            Article
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="grid grid-cols-3">
                                                                    <div className="col">
                                                                        <img
                                                                            src={
                                                                                regular1
                                                                            }
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                    <div className="col">
                                                                        <img
                                                                            src={
                                                                                regular2
                                                                            }
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                    <div className="col">
                                                                        <img
                                                                            src={
                                                                                regular3
                                                                            }
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col">
                                                                <img
                                                                    src={
                                                                        ads_sample_side
                                                                    }
                                                                    alt="logo"
                                                                    className="h-full"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="footer"></div>
                                                </div>
                                                <div
                                                    className={`mobile_wrapper mx-auto ${
                                                        device_active ===
                                                        "icon_mobile"
                                                            ? ""
                                                            : "hidden"
                                                    }`}
                                                >
                                                    <div className="mobile-bg">
                                                        <div className="relative">
                                                            <div className="content">
                                                                <div className="">
                                                                    <div className="flex justify-between bg-black py-2">
                                                                        <img
                                                                            src={
                                                                                logo
                                                                            }
                                                                            alt="logo"
                                                                            className="w-24"
                                                                        />
                                                                        <div className="hamburger">
                                                                            <span className="mr-2 text-white">
                                                                                ☰
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className="body-content-scroll text-center bg-black text-slate-600">
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <img
                                                                                src="/images/ads-sample/premium_benner_1.jpg"
                                                                                alt=""
                                                                                srcSet=""
                                                                            />
                                                                        </div>
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>

                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>

                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>
                                                                        <div className="content-premium border-spacing-2 border border-slate-600">
                                                                            <p>
                                                                                Article
                                                                            </p>
                                                                        </div>

                                                                        <div className="grid grid-cols-3">
                                                                            <div className="col">
                                                                                <img
                                                                                    src={
                                                                                        regular1
                                                                                    }
                                                                                    alt=""
                                                                                />
                                                                            </div>
                                                                            <div className="col">
                                                                                <img
                                                                                    src={
                                                                                        regular2
                                                                                    }
                                                                                    alt=""
                                                                                />
                                                                            </div>
                                                                            <div className="col">
                                                                                <img
                                                                                    src={
                                                                                        regular3
                                                                                    }
                                                                                    alt=""
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex justify-center mt-4 gap-2">
                                                    <div>
                                                        <svg
                                                            width="25"
                                                            height="25"
                                                            viewBox="0 0 37 34"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            data-element="icon_desktop"
                                                            onClick={handleIcon}
                                                        >
                                                            <path
                                                                d="M11.4286 32C11.4286 32 11.4286 25.4783 18.5 25.4783C25.5714 25.4783 25.5714 32 25.5714 32H11.4286ZM2 2V24.1739H35V2H2Z"
                                                                stroke={`${
                                                                    device_active ===
                                                                    "icon_desktop"
                                                                        ? "#ffc424"
                                                                        : "black"
                                                                }`}
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </div>

                                                    <div>
                                                        <svg
                                                            width="14"
                                                            height="25"
                                                            viewBox="0 0 14 27"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            data-element="icon_mobile"
                                                            onClick={handleIcon}
                                                        >
                                                            <path
                                                                d="M1 3.8302H12.8612M1 23.2942H12.8612M11.1667 1.17603H2.69445C1.84723 1.17603 1 2.06075 1 2.94548V24.1789C1 25.0636 1.84723 25.9484 2.69445 25.9484H11.1667C12.014 25.9484 12.8612 25.0636 12.8612 24.1789V2.94548C12.8612 2.06075 12.014 1.17603 11.1667 1.17603Z"
                                                                stroke={`${
                                                                    device_active ===
                                                                    "icon_mobile"
                                                                        ? "#ffc424"
                                                                        : "black"
                                                                }`}
                                                                strokeWidth="1.1"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="description">
                                                <h1 className="text-xl md:text-3xl font-root mb-2 font-base">
                                                    Regular Banner
                                                </h1>
                                                <ul className="space-y-2 list-disc ms-5 font-sm">
                                                    <li>
                                                        Banner Spesification :
                                                        320 x 150px (desktop)
                                                        &amp; 320 x 150px
                                                        (Mobile)
                                                    </li>
                                                    <li>Max Size : 200 kb</li>
                                                    <li>
                                                        Banner Format : JPG, PNG
                                                        &amp; GIF
                                                    </li>
                                                    <li>
                                                        Appear : Home page (One
                                                        time Appear in home
                                                        page)
                                                    </li>
                                                    <li>
                                                        Call to Action : Visit
                                                        Link
                                                    </li>
                                                    <li>Duration : 1 Month</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                        <button
                                            data-modal-hide="staticModal"
                                            type="button"
                                            className="text-black rounded-lg text-sm px-5 py-2.5 text-center bg-master font-semibold mx-auto w-28"
                                        >
                                            <a
                                                href="/form-advertise"
                                                target="_blank"
                                            >
                                                Join
                                            </a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    return (
        <Layout>
            <div className="relative block">
                <ContentWraper />
            </div>
        </Layout>
    );
};
export default PlacingAds;
