import React, { useEffect, useState } from "react";
import Loading from "../compoments/loading";

import icon from "@asset/icon/closecircle.png";
import {
    Navbar,
    NavbarMobile,
    getSubNavbar,
    getSubNavbarMobile,
    removeSubNavbar,
} from "../compoments/navbar";

import { removeSpace } from "../helper/helper";
import Layout from "./layout/layout";

const MediaParners = ({
    Categories_Navbar,
    Regular_Banner,
    Premium_Banner,
}) => {
    const [premium_benner, setPremiumBenner] = useState(Premium_Banner);
    const [regular, setRegulars] = useState(Regular_Banner);

    const [categories, setcategories] = useState(Categories_Navbar);

    return (
        <Layout>
            <div className="relative block ">
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
                                                    <li
                                                        className="py-2"
                                                        key={keys}
                                                    >
                                                        <a
                                                            href={`/indeks/semua/${value.name.toLocaleLowerCase()}/${removeSpace(
                                                                values.name.toLocaleLowerCase()
                                                            )}`}
                                                        >
                                                            <div className="flex items-center space-x-4">
                                                                <span className="text-base">
                                                                    {
                                                                        values.name
                                                                    }
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
                                                                    {
                                                                        values.name
                                                                    }
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

                    <div className="container mx-auto">
                        <div className="my-10 rounded-lg ">
                            <div className="py-3 px-5 shadow-lg">
                                <div className="">
                                    <div className="text-center font-root mb-10 space-y-5">
                                        <h1 className="text-base md:text-3xl font-semibold">
                                            Ingin Join Media Partner di Soul of
                                            Jakarta?
                                        </h1>
                                        <p className="text-sm font-thin">
                                            Kami siap membantu event/brandmu
                                            untuk menjangkau lebih banyak orang
                                        </p>
                                    </div>

                                    <div className="wrapper-list">
                                        <div className="relative overflow-x-auto">
                                            <table className="w-full text-sm text-left text-slate-900">
                                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 w-full">
                                                    <tr>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 font-root text-left text-sm md:text-base"
                                                        >
                                                            Media Partner at
                                                            SoulofJakarta.id
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 font-root text-center text-sm md:text-base"
                                                        >
                                                            Full Barter <br />
                                                            Media Partner
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 font-root text-center text-sm md:text-base"
                                                        >
                                                            Premium <br />
                                                            Media Partner
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="font-root">
                                                    <tr className="bg-white border-b py-5">
                                                        <th
                                                            scope="row"
                                                            className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap font-sm"
                                                        >
                                                            Publikasi Kegiatan
                                                            Event di Media
                                                            sosial (Feed & FB
                                                            Fans Page)
                                                        </th>
                                                        <td className="px-6 py-4 text-center font-sm">
                                                            3 Post
                                                        </td>
                                                        <td className="px-6 py-4 text-center font-sm">
                                                            6 Post
                                                        </td>
                                                    </tr>
                                                    <tr className="bg-white border-b text-slate-900 py-5">
                                                        <th
                                                            scope="row"
                                                            className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap font-sm"
                                                        >
                                                            Publikasi Kegiatan
                                                            Event di Media
                                                            sosial (Story /
                                                            Shorts / Reels)
                                                        </th>
                                                        <td className="px-6 py-4 text-center font-sm">
                                                            3 Post
                                                        </td>
                                                        <td className="px-6 py-4 text-center font-sm">
                                                            6 Post
                                                        </td>
                                                    </tr>
                                                    <tr className="bg-white border-b text-slate-900 py-5">
                                                        <th
                                                            scope="row"
                                                            className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap font-sm"
                                                        >
                                                            Posting Artikel
                                                            Event di Soul of
                                                            Jakarta Website
                                                        </th>
                                                        <td className="px-6 py-4 text-center font-sm">
                                                            2 Artikel
                                                        </td>
                                                        <td className="px-6 py-4 text-center font-sm">
                                                            4 Artikel
                                                        </td>
                                                    </tr>
                                                    <tr className="bg-white border-b text-slate-900 py-5">
                                                        <th
                                                            scope="row"
                                                            className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap font-sm"
                                                        >
                                                            Slot Regular Banner
                                                        </th>
                                                        <td className="px-6 py-4 text-center font-sm">
                                                            14 Hari
                                                        </td>
                                                        <td className="px-6 py-4 text-center font-sm">
                                                            30 Hari
                                                        </td>
                                                    </tr>
                                                    <tr className="bg-white border-b text-slate-900 py-5">
                                                        <th
                                                            scope="row"
                                                            className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap font-sm"
                                                        >
                                                            Slot Premium Banner
                                                        </th>
                                                        <td className="px-6 py-4">
                                                            <img
                                                                src={icon}
                                                                alt=""
                                                                srcSet=""
                                                                className="mx-auto"
                                                            />
                                                        </td>
                                                        <td className="px-6 py-4 text-center font-sm">
                                                            30 Hari
                                                        </td>
                                                    </tr>
                                                    <tr className="bg-white border-b text-slate-900 py-5">
                                                        <th
                                                            scope="row"
                                                            className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap font-sm"
                                                        >
                                                            Slot Artikel Inside
                                                            Banner
                                                        </th>
                                                        <td className="px-6 py-4">
                                                            <img
                                                                src={icon}
                                                                alt=""
                                                                srcSet=""
                                                                className="mx-auto"
                                                            />
                                                        </td>
                                                        <td className="px-6 py-4 text-center font-sm">
                                                            30 Hari
                                                        </td>
                                                    </tr>
                                                    <tr className="bg-white border-b text-slate-900 py-5">
                                                        <th
                                                            scope="row"
                                                            className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap font-sm"
                                                        >
                                                            Promoted Artikel
                                                        </th>
                                                        <td className="px-6 py-4">
                                                            <img
                                                                src={icon}
                                                                alt=""
                                                                srcSet=""
                                                                className="mx-auto"
                                                            />
                                                        </td>
                                                        <td className="px-6 py-4 text-center font-sm">
                                                            1 Artikel ( 30 hari
                                                            )
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div
                                        className="mt-9 py-5 mx-auto flex justify-center"
                                        id="btn-join"
                                    >
                                        <a
                                            href="http://medpar.soulofjakarta.id/login"
                                            target="_blank"
                                            rel="no"
                                        >
                                            <button
                                                data-modal-hide="staticModal"
                                                type="button"
                                                className="text-black rounded-lg px-5 py-2.5 text-center bg-master font-semibold mx-auto text-base"
                                            >
                                                Join Media Partner
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {premium_benner.length > 1 ? (
                                <div className="lg:my-20 md:my-10">
                                    <div className="ps-5 mb-3 mt-5 border-l-3-master">
                                        <h1 className="text-2xl font-semibold">
                                            Premium Banner
                                        </h1>
                                    </div>
                                    <div className="grid grid-cols-3 gap-3">
                                        {premium_benner.map((value, key) => (
                                            <img
                                                src={value.desktop_ad_file}
                                                key={key}
                                                alt="ads-premium"
                                            />
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                ""
                            )}

                            {regular.length > 1 ? (
                                <div className="lg:my-20 md:my-10">
                                    <div className="ps-5 mb-3 mt-5 border-l-3-master">
                                        <h1 className="text-2xl font-semibold">
                                            Regular Benner
                                        </h1>
                                    </div>
                                    <div className="grid grid-cols-3 gap-3">
                                        {regular.map((value, key) => (
                                            <img
                                                src={value.desktop_ad_file}
                                                key={key}
                                                alt="ads-regular"
                                            />
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                </>
            </div>
        </Layout>
    );
};
export default MediaParners;
