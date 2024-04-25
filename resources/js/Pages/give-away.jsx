import React, { useEffect, useState } from "react";

import Loading from "../compoments/loading";
import PopularArticle from "../compoments/popular_article";
import RecommendationArticle from "../compoments/recomentdation_article";

import {
    awarenes,
    defaulString,
    fetchData,
    removeSpace,
} from "../helper/helper";

import {
    AdsBennerDesktop,
    AdsBennerMobile,
    AdsBennerSideLeft,
    AdsBennerSideRight,
} from "../compoments/ads_side";

import ImageDefault from "@asset/noImage.png";

import {
    Navbar,
    NavbarMobile,
    getSubNavbar,
    getSubNavbarMobile,
    removeSubNavbar,
} from "../compoments/navbar";
import SelectedArticles from "../compoments/sticky_page";
import { Link } from "@inertiajs/inertia-react";
import Layout from "./layout/layout";

const GiveAway = ({
    page,
    pages_,
    search,
    Headline_Ads,
    Background_Banner_Ads,
    Premium_Banner_Ads,
    Recommendation_Articles,
    Popular_Articles,
    Categories_Navbar,
    Hot_Event,
    Hot_Lifestyle,
    data_index,
}) => {
    const [dataApi, setDataApi] = useState(data_index);
    const [loading, setLoading] = useState(true);

    const [popular_article, setPopular_articles] = useState(Popular_Articles);
    const [recommendation_articles, setRecommendation_articles] = useState(
        Recommendation_Articles
    );

    const [headline_ads, setHealineAds] = useState(Headline_Ads);
    const [background_banner_ads, setBackgroundBannerAds] = useState(
        Background_Banner_Ads
    );
    const [premium_ads, setPremiumAds] = useState(Premium_Banner_Ads);

    const [hot_lifestyle_articles, setHot_lifestyle_articles] =
        useState(Hot_Event);
    const [hot_event_articles, setHot_event_articles] = useState(Hot_Lifestyle);

    //Categories
    const [categories, setCategories] = useState(Categories_Navbar);

    //DropdownActive
    let [dropdownActive, setDropdownActive] = useState(false);

    //url
    let navigateIndex = "/give-away";

    const [pages, setPages] = useState(pages_);
    // TOtal Page
    const [totalPage, setTotalPage] = useState(0);
    const [offset, setOffset] = useState(page);

    //DropdownActive
    let [searching, setSearching] = useState("");

    //Action pagination
    let PageHandle = () => {
        setOffset(page);
    };

    //Action pagination
    const Previous = () => {
        let offset_ = offset - 1;
        setOffset(offset_);
        if (offset_ > 0) {
            window.location.href = `${navigateIndex}?page=${offset_}`;
        }
        if (offset_ == 1) {
            window.location.href = navigateIndex;
        }
    };

    const Searching = (e) => {
        e.preventDefault();
        var search = e.target.search.value;
        setSearching(search);
        window.location.href = `${navigateIndex}/${removeSpace(
            search.toLowerCase()
        )}`;
    };

    //Action Searching
    const DropdownActive = () => {
        dropdownActive !== true
            ? setDropdownActive(true)
            : setDropdownActive(false);
    };

    // Filter Button
    const Dropdown = () => {
        return (
            <div className="absolute right-3 bottom-2.5">
                <button
                    id="dropdownMenuIconHorizontalButton"
                    data-dropdown-toggle="dropdownDotsHorizontal"
                    className="inline-flex items-center p-2 text-sm font-medium text-center text-black bg-master hover:text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-50 submit-btn"
                    type="button"
                    onClick={DropdownActive}
                >
                    Filter
                </button>
            </div>
        );
    };

    const DataIndex = () => (
        <>
            <div className="mobile-ads-headline">
                <AdsBennerMobile
                    image={
                        headline_ads !== undefined && headline_ads.length > 0
                            ? headline_ads[0].mobile_webp_image
                            : ""
                    }
                    url={
                        headline_ads !== undefined && headline_ads.length > 0
                            ? headline_ads[0].link
                            : ""
                    }
                    status={
                        headline_ads !== undefined && headline_ads.length > 0
                            ? true
                            : false
                    }
                />
            </div>
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
                <div className="w-full relative " data-target="dropdownNavbar">
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
                                            <li className="col py-2" key={keys}>
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

            <div className="all-ads">
                <AdsBennerSideLeft
                    image={
                        background_banner_ads[0]
                            ? background_banner_ads[0].desktop_ad_file
                            : ""
                    }
                    url={
                        background_banner_ads[0]
                            ? background_banner_ads[0].link
                            : ""
                    }
                    status={background_banner_ads[0] ? true : false}
                />
                <AdsBennerSideRight
                    image={
                        background_banner_ads[0]
                            ? background_banner_ads[0].desktop_ad_file
                            : ""
                    }
                    url={
                        background_banner_ads[0]
                            ? background_banner_ads[0].link
                            : ""
                    }
                    status={background_banner_ads[0] ? true : false}
                />
            </div>
            {dataApi.length > 0 ? (
                <div className="container mx-auto bg-white relative z-40">
                    <div className="">
                        <div className="mx-2">
                            <div className="block lg:hidden md:hidden sticky top-16">
                                <AdsBennerDesktop
                                    image={
                                        background_banner_ads[0]
                                            ? background_banner_ads[0]
                                                  .mobile_webp_image
                                            : ""
                                    }
                                    url={
                                        background_banner_ads[0]
                                            ? background_banner_ads[0].link
                                            : ""
                                    }
                                    status={
                                        background_banner_ads !== undefined
                                            ? true
                                            : false
                                    }
                                />
                            </div>

                            <div className="desktop-ads-headline sticky top-16">
                                <AdsBennerDesktop
                                    image={
                                        headline_ads[0]
                                            ? headline_ads[0].desktop_webp_image
                                            : ""
                                    }
                                    url={
                                        headline_ads[0]
                                            ? headline_ads[0].link
                                            : ""
                                    }
                                    status={headline_ads[0] ? true : false}
                                />
                            </div>

                            <div className="md:grid grid-cols-3 my-3 wrapper-content-detail relative z-40 bg-white pt-3">
                                <div className="col-span-2 relative bg-white">
                                    <form className="mb-4" onSubmit={Searching}>
                                        <label className="mb-2 text-sm font-medium text-gray-900 sr-only">
                                            Search
                                        </label>
                                        <div className="relative bg-gray-50 border border-gray-300 rounded-lg ">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg
                                                    className="w-4 h-4 text-gray-500 "
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                                    />
                                                </svg>
                                            </div>
                                            <input
                                                type="text"
                                                id="default-search-2"
                                                className="default-search block p-4 pl-10 text-sm rounded-lg text-gray-900 bg-gray-50  "
                                                placeholder="Cari Artikel..."
                                                name="search"
                                            />

                                            <button
                                                type="submit"
                                                className="text-black absolute right-2 bottom-2.5 bg-master hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 submit-btn"
                                            >
                                                Search
                                            </button>
                                        </div>
                                    </form>

                                    <div className="absolute right-0 top-16">
                                        <div
                                            id="dropdown"
                                            className={`z-10 bg-white border divide-y divide-gray-100 rounded-lg shadow w-44 ${
                                                dropdownActive ? "" : "hidden"
                                            }`}
                                        >
                                            <ul
                                                className="py-2 text-sm text-gray-700"
                                                aria-labelledby="dropdownDefaultButton"
                                            >
                                                {categories.map(
                                                    (value, key) => (
                                                        <div key={key}>
                                                            <li>
                                                                <span className="block px-4 py-2 font-semibold">
                                                                    {value.name}
                                                                </span>
                                                            </li>

                                                            {value.subCategories.map(
                                                                (
                                                                    values,
                                                                    key
                                                                ) => (
                                                                    <li
                                                                        key={
                                                                            key
                                                                        }
                                                                    >
                                                                        <a
                                                                            href={`${navigateIndex}/${
                                                                                search
                                                                                    ? `${search}/`
                                                                                    : "semua/"
                                                                            }${value.name.toLowerCase()}/${removeSpace(
                                                                                values.name.toLowerCase()
                                                                            )}`}
                                                                            className={`block px-4 py-2 hover:bg-gray-100 `}
                                                                        >
                                                                            {
                                                                                values.name
                                                                            }
                                                                        </a>
                                                                    </li>
                                                                )
                                                            )}
                                                        </div>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                    {dataApi.map((value, key) => (
                                        <div key={key} className="mb-4">
                                            <a
                                                href={`/${removeSpace(
                                                    value.category.name.toLowerCase()
                                                )}/${
                                                    value.sj_code
                                                }/${removeSpace(
                                                    defaulString(
                                                        value.title.toLocaleLowerCase()
                                                    )
                                                )}`}
                                                className="grid grid-cols-2 xl:grid-cols-3 md:grid-cols-3 gap-2 bg-white hover:bg-gray-100 article  "
                                            >
                                                <div className="col bg-black ">
                                                    <img
                                                        loading="lazy"
                                                        src={
                                                            value.main_image !==
                                                                `https://c.soulofjakarta.id/images/default/articles/IMAGEDEFAULTARTIKEL.jpg` ||
                                                            "https://cms.soulofjakarta.id/images/default/articles/IMAGEDEFAULTARTIKEL.jpg"
                                                                ? value.main_image
                                                                : ImageDefault
                                                        }
                                                        alt={value.title}
                                                        width={
                                                            value.main_image
                                                                .width
                                                        }
                                                        height={
                                                            value.main_image
                                                                .height
                                                        }
                                                        className="aspect-video h-full object-cover hover:opacity-70"
                                                    />
                                                </div>

                                                <div className="col xl:col-span-2 md:col-span-2 flex flex-col leading-normal">
                                                    <span className="category-span w-fit mb-2 text-sm xl:text-sm md:text-xs">
                                                        {value.category.name}
                                                    </span>
                                                    <h2 className="mb-2 line-clamp-3 text-sm xl:text-base md:text-xs font-root text-gray-800 font-base">
                                                        {value.title}
                                                    </h2>
                                                    <p className="mb-3 text-xs xl:text-sm sm:text-xs text-gray-600">
                                                        {value.publish_date}
                                                    </p>
                                                </div>
                                            </a>
                                        </div>
                                    ))}

                                    <nav
                                        aria-label="Page navigation example"
                                        className="justify-center flex py-3"
                                    >
                                        <ul className="inline-flex -space-x-px text-sm ">
                                            {pages.length >= 5 ? (
                                                <span
                                                    className={`flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer ${
                                                        offset == 1
                                                            ? "disable"
                                                            : ""
                                                    }`}
                                                    onClick={Previous}
                                                >
                                                    Previous
                                                </span>
                                            ) : (
                                                ""
                                            )}

                                            {pages.map((value, key) => (
                                                <li
                                                    key={key}
                                                    className={`cursor-pointer`}
                                                >
                                                    <a
                                                        href={`${
                                                            value > 1
                                                                ? `?page=${value}`
                                                                : `${navigateIndex}`
                                                        }`}
                                                        className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700  ${
                                                            offset == value
                                                                ? "bg-master text-black"
                                                                : ""
                                                        }`}
                                                        onClick={PageHandle}
                                                        page={value}
                                                    >
                                                        {value}
                                                    </a>
                                                </li>
                                            ))}

                                            {pages.length >= 5 ? (
                                                <li>
                                                    <span
                                                        href="#"
                                                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 "
                                                    >
                                                        Next
                                                    </span>
                                                </li>
                                            ) : (
                                                ""
                                            )}
                                        </ul>
                                    </nav>
                                </div>

                                <aside className="bg-white xl:shadow md:shadow xl:ms-5 md:ms-5">
                                    <PopularArticle
                                        data_value={popular_article}
                                        image_ads={
                                            premium_ads[0]
                                                ? premium_ads[0]
                                                      .desktop_webp_image
                                                : " "
                                        }
                                        url={
                                            premium_ads[0]
                                                ? premium_ads[0].link
                                                : ""
                                        }
                                        status={premium_ads[0] ? true : false}
                                    />

                                    <RecommendationArticle
                                        data_value={recommendation_articles}
                                        image_ads={
                                            premium_ads !== undefined &&
                                            premium_ads[1]
                                                ? premium_ads[1]
                                                      .desktop_webp_image
                                                : ""
                                        }
                                        url={
                                            premium_ads !== undefined &&
                                            premium_ads[1]
                                                ? premium_ads[1].link
                                                : ""
                                        }
                                        status={
                                            premium_ads !== undefined &&
                                            premium_ads[1]
                                                ? true
                                                : false
                                        }
                                    />
                                    <div className="mx-auto mt-4 rounded-md cursor-pointer">
                                        {premium_ads !== undefined &&
                                        premium_ads[2] ? (
                                            <a
                                                href={
                                                    premium_ads !== undefined &&
                                                    premium_ads[2]
                                                        ? premium_ads[2].link
                                                        : ""
                                                }
                                            >
                                                <div
                                                    id="ADOP_V_ewwhYbFLHw"
                                                    className="bg-slate-400 ads-side mx-auto"
                                                >
                                                    <picture>
                                                        <source
                                                            type="image/webp"
                                                            srcSet={`${
                                                                premium_ads !==
                                                                    undefined &&
                                                                premium_ads[2]
                                                                    ? premium_ads[2]
                                                                          .desktop_webp_image
                                                                    : ""
                                                            }`}
                                                        />
                                                        <img
                                                            src={
                                                                premium_ads !==
                                                                    undefined &&
                                                                premium_ads[2]
                                                                    ? premium_ads[2]
                                                                          .desktop_webp_image
                                                                    : ""
                                                            }
                                                            alt="premium-ads"
                                                            loading="lazy"
                                                            fetchpriority="high"
                                                        />
                                                    </picture>
                                                </div>
                                            </a>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                    <SelectedArticles
                                        hot_event_articles={hot_event_articles}
                                        hot_lifestyle_articles={
                                            hot_event_articles
                                        }
                                    />
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="container mx-auto ">
                    <picture className="w-full mx-auto text-center">
                        <source
                            srcSet="/images/error/NOT-FOUND.webp"
                            type="image/webp"
                        />
                        <img
                            src="/images/error/NOT-FOUND.png"
                            alt="soulofjakarta.id"
                            className="mx-auto"
                        />
                    </picture>
                    <div className="mx-auto text-center my-10">
                        <a href={"/"}>
                            <button className="bg-master px-10 py-2 font-semibold">
                                Back
                            </button>
                        </a>
                    </div>
                </div>
            )}
        </>
    );

    return (
        <Layout>
            <DataIndex />
        </Layout>
    );
};

export default GiveAway;
