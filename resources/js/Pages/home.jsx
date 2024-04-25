import React, { useEffect, useState } from "react";

import Loading from "../compoments/loading";

import PopularArticle from "../compoments/popular_article";
import RecommendationArticle from "../compoments/recomentdation_article";
import YoutubeIframe from "../compoments/youtube_iframe";
import SelectedArticles from "../compoments/sticky_page";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// import "../style";

import {
    AdsBennerDesktop,
    AdsBennerMobile,
    AdsBennerSideLeft,
    AdsBennerSideRight,
    AdsRow,
} from "../compoments/ads_side";

// import Swiper styles;
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import ads_premium from "asset/premium-ads.jpg";
import {
    Navbar,
    NavbarMobile,
    getSubNavbar,
    getSubNavbarMobile,
    removeSubNavbar,
} from "../compoments/navbar";
import {
    awarenes,
    awarenes_article_ads,
    fetchData,
    removeSpace,
} from "../helper/helper";

import createMarkup from "../compoments/htmlTag";
import Layout from "./layout/layout";

const HomePage = ({
    Articles,
    Categories_Navbar,
    Pop_Up_Image,
    Headline_Ads,
    PopUp_Video,
    Background_Banner_Ads,
    Headlines,
    Popular_Articles,
    Recommendation_Articles,
    Hot_Lifestyle_Articles,
    Hot_Event_Articles,
    Regular_Ads,
    Article_Row_Ads,
    Premium_Ads,
}) => {
    const [articles, setarticles] = useState(Articles);
    const [categories, setcategories] = useState(Categories_Navbar);

    const [headlines, setHeadlines] = useState(Headlines);
    const [popular_articles, setPopular_articles] = useState(Popular_Articles);
    const [recommendation_articles, setRecommendation_articles] = useState(
        Recommendation_Articles
    );
    const [hot_lifestyle_articles, setHot_lifestyle_articles] = useState(
        Hot_Lifestyle_Articles
    );
    const [hot_event_articles, setHot_event_articles] =
        useState(Hot_Event_Articles);

    const [regular_ads, setRegularAds] = useState(Regular_Ads);
    const [headline_ads, setHealineAds] = useState(Headline_Ads);
    const [background_banner_ads, setBackgroundBannerAds] = useState(
        Background_Banner_Ads
    );
    const [article_row_ads, setArticleRow] = useState(Article_Row_Ads);
    const [premium_ads, setPremiumAds] = useState(Premium_Ads);
    const [popup_video, setPopupVideo] = useState(PopUp_Video);
    const [popup_image, setPopupImage] = useState(Pop_Up_Image);

    const [loading, setLoading] = useState(true);
    //Detect ImageOnload
    const [image_status, setImageStatus] = useState(true);
    const [isActivePopupImage, setIsActivePopupImage] = useState(false);

    const Headline = () => {
        return (
            <div
                className={`${
                    background_banner_ads !== undefined &&
                    background_banner_ads.length > 0
                        ? ""
                        : " "
                }`}
            >
                <h1 className="hidden">
                    SoulofJakarta - artikel Terkini dan terpoluler
                </h1>
                <div className="headline-wrappers ">
                    <div className="grid mx-auto xl:grid-cols-8 md:grid-cols-8 xl:px-0 md:px-3 mobile-home">
                        <div className="col"></div>
                        <div className="xl:col-span-6 md:col-span-6">
                            <div className="hidden xl:block md:block mobile-home-wrppper">
                                <div className="mobile-ads-headline sticky top-16">
                                    <AdsBennerDesktop
                                        image={
                                            background_banner_ads !==
                                                undefined &&
                                            background_banner_ads.length > 0
                                                ? background_banner_ads[0]
                                                      .mobile_webp_image
                                                : ""
                                        }
                                        url={
                                            background_banner_ads !==
                                                undefined &&
                                            background_banner_ads.length > 0
                                                ? background_banner_ads[0].link
                                                : ""
                                        }
                                        status={
                                            background_banner_ads !==
                                                undefined &&
                                            background_banner_ads.length > 0
                                                ? true
                                                : false
                                        }
                                    />
                                </div>

                                <div
                                    className={` ${
                                        background_banner_ads !== undefined &&
                                        background_banner_ads.length > 0 &&
                                        background_banner_ads[0]
                                            .mobile_webp_image
                                            ? "hidden"
                                            : "desktop-ads-headline"
                                    }`}
                                >
                                    <AdsBennerDesktop
                                        image={
                                            headline_ads !== undefined &&
                                            headline_ads.length > 0
                                                ? headline_ads[0]
                                                      .desktop_webp_image
                                                : ""
                                        }
                                        url={
                                            headline_ads !== undefined &&
                                            headline_ads.length > 0
                                                ? headline_ads[0].link
                                                : ""
                                        }
                                        status={
                                            headline_ads !== undefined &&
                                            headline_ads.length > 0
                                                ? true
                                                : false
                                        }
                                    />
                                </div>

                                <div className="relative z-40 ">
                                    <Swiper
                                        slidesPerView={"auto"}
                                        spaceBetween={30}
                                        centeredSlides={true}
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false,
                                        }}
                                        effect="fade"
                                        modules={[Autoplay]}
                                    >
                                        <SwiperSlide>
                                            <a
                                                key={0}
                                                href={`${
                                                    headlines[0]
                                                        ? `${removeSpace(
                                                              headlines[0].category.name.toLocaleLowerCase()
                                                          )}/${
                                                              headlines[0]
                                                                  .sj_code
                                                          }/${removeSpace(
                                                              headlines[0].title.toLocaleLowerCase()
                                                          )}`
                                                        : ""
                                                }`}
                                                className="relative"
                                            >
                                                <picture>
                                                    <source
                                                        type="image/webp"
                                                        srcSet={`${
                                                            headlines[0]
                                                                ? headlines[0]
                                                                      .webp_image
                                                                : ""
                                                        }`}
                                                    />
                                                    <img
                                                        className="opacity-70 object-cover h-48 w-full swiper-image"
                                                        src={
                                                            headlines[0]
                                                                ? headlines[0]
                                                                      .main_image
                                                                : ""
                                                        }
                                                        alt={
                                                            headlines[1]
                                                                ? headlines[0]
                                                                      .title
                                                                : ""
                                                        }
                                                        loading="lazy"
                                                        fetchpriority="high"
                                                    />
                                                </picture>
                                                <div className="absolute bottom-2 mx-2 text-white swiper-content">
                                                    <span className=" w-fit px-2 mb-3 text-black category-span text-sm xl:text-sm md:text-sm font-sm ">
                                                        {headlines[0]
                                                            ? headlines[0]
                                                                  .category.name
                                                            : ""}
                                                    </span>
                                                    <p className="text-sm mt-2">
                                                        {headlines[0]
                                                            ? headlines[0]
                                                                  .publish_date
                                                            : ""}
                                                    </p>
                                                    <h2 className="text-base  font-root-headline font-base">
                                                        {headlines[0]
                                                            ? headlines[0].title
                                                            : ""}
                                                    </h2>
                                                </div>
                                            </a>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <a
                                                key={1}
                                                href={`${
                                                    headlines[1]
                                                        ? `${headlines[1].category.name.toLocaleLowerCase()}/${
                                                              headlines[1]
                                                                  .sj_code
                                                          }/>${removeSpace(
                                                              headlines[1].title.toLocaleLowerCase()
                                                          )}`
                                                        : ""
                                                }`}
                                                className="relative"
                                            >
                                                <picture>
                                                    <source
                                                        type="image/webp"
                                                        srcSet={`${
                                                            headlines[1]
                                                                ? headlines[1]
                                                                      .webp_image
                                                                : ""
                                                        }`}
                                                    />
                                                    <img
                                                        className="opacity-70 object-cover h-48 w-full swiper-image"
                                                        src={
                                                            headlines[1]
                                                                ? headlines[1]
                                                                      .main_image
                                                                : ""
                                                        }
                                                        alt={
                                                            headlines[1]
                                                                ? headlines[1]
                                                                      .title
                                                                : ""
                                                        }
                                                        loading="lazy"
                                                        fetchpriority="high"
                                                    />
                                                </picture>

                                                <div className="absolute bottom-2 mx-2 text-white swiper-content">
                                                    <span className=" w-fit px-2 mb-3 text-black category-span text-sm xl:text-sm md:text-sm font-sm">
                                                        {headlines[1]
                                                            ? headlines[1]
                                                                  .category.name
                                                            : ""}
                                                    </span>
                                                    <p className="text-sm mt-2">
                                                        {headlines[1]
                                                            ? headlines[1]
                                                                  .publish_date
                                                            : ""}
                                                    </p>
                                                    <p className="text-base  font-root-headline font-base">
                                                        {headlines[1]
                                                            ? headlines[1].title
                                                            : ""}
                                                    </p>
                                                </div>
                                            </a>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <a
                                                key={2}
                                                href={`${
                                                    headlines[2]
                                                        ? `${headlines[2].category.name.toLocaleLowerCase()}/${
                                                              headlines[2]
                                                                  .sj_code
                                                          }/${removeSpace(
                                                              headlines[2].title.toLocaleLowerCase()
                                                          )}`
                                                        : ""
                                                }`}
                                                className="relative"
                                            >
                                                <picture>
                                                    <source
                                                        type="image/webp"
                                                        srcSet={`${
                                                            headlines[2]
                                                                ? headlines[2]
                                                                      .webp_image
                                                                : ""
                                                        }`}
                                                    />
                                                    <img
                                                        className="opacity-70 object-cover xxxx w-full swiper-image"
                                                        src={
                                                            headlines[2]
                                                                ? headlines[2]
                                                                      .main_image
                                                                : ""
                                                        }
                                                        alt={
                                                            headlines[2]
                                                                ? headlines[2]
                                                                      .title
                                                                : ""
                                                        }
                                                        loading="lazy"
                                                        fetchpriority="high"
                                                    />
                                                </picture>

                                                <div className="absolute bottom-2 mx-2 text-white swiper-content">
                                                    <span className=" w-fit px-2 mb-3 text-black category-span text-sm xl:text-sm md:text-sm font-sm">
                                                        {headlines[2]
                                                            ? headlines[2]
                                                                  .category.name
                                                            : ""}
                                                    </span>
                                                    <p className="text-sm mt-2">
                                                        {headlines[2]
                                                            ? headlines[2]
                                                                  .publish_date
                                                            : ""}
                                                    </p>
                                                    <p className="text-base  font-root-headline font-base">
                                                        {headlines[2]
                                                            ? headlines[2].title
                                                            : ""}
                                                    </p>
                                                </div>
                                            </a>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                        <div className="col"></div>
                    </div>
                    <div className="grid gap-2 mx-auto desktop-home ">
                        <div className="xl:col-span-6 md:col-span-6 container">
                            <div className="hidden xl:block md:block relative z-40 ">
                                <div className="desktop-ads-headline sticky top-16">
                                    <AdsBennerDesktop
                                        image={
                                            headline_ads !== undefined &&
                                            headline_ads.length > 0
                                                ? headline_ads[0]
                                                      .desktop_webp_image
                                                : ""
                                        }
                                        url={
                                            headline_ads !== undefined &&
                                            headline_ads.length > 0
                                                ? headline_ads[0].link
                                                : ""
                                        }
                                        status={
                                            headline_ads !== undefined &&
                                            headline_ads.length > 0
                                                ? true
                                                : false
                                        }
                                    />

                                    <div className="grid grid-cols-3 relative z-40 bg-black">
                                        <div className=" col-span-2 relative">
                                            <a
                                                key={0}
                                                href={`${
                                                    headlines[0]
                                                        ? `${removeSpace(
                                                              headlines[0].category.name.toLocaleLowerCase()
                                                          )}/${
                                                              headlines[0]
                                                                  .sj_code
                                                          }/${removeSpace(
                                                              headlines[0].title.toLocaleLowerCase()
                                                          )}`
                                                        : ""
                                                }`}
                                                className="m-0 bg-black hover:opacity-80"
                                            >
                                                <picture>
                                                    <source
                                                        type="image/webp"
                                                        srcSet={`${
                                                            headlines[0]
                                                                ? headlines[0]
                                                                      .webp_image
                                                                : ""
                                                        }`}
                                                    />
                                                    <img
                                                        loading="lazy"
                                                        src={
                                                            headlines[0]
                                                                ? headlines[0]
                                                                      .main_image
                                                                : ""
                                                        }
                                                        alt={
                                                            headlines[0]
                                                                ? headlines[0]
                                                                      .title
                                                                : ""
                                                        }
                                                        height={
                                                            headlines[0]
                                                                ? headlines[0]
                                                                      .main_image
                                                                      .height
                                                                : ""
                                                        }
                                                        width={
                                                            headlines[0]
                                                                ? headlines[0]
                                                                      .main_image
                                                                      .width
                                                                : ""
                                                        }
                                                        className="opacity-50 object-cover h-full"
                                                    />
                                                </picture>

                                                <div className="absolute bottom-0 mx-5 mb-5 text-white">
                                                    <span className="xl:text-base md:text-xs font-semibold category-span font-base">
                                                        {headlines[0]
                                                            ? headlines[0]
                                                                  .category.name
                                                            : ""}
                                                    </span>
                                                    <p className="text-base mt-2 ">
                                                        {headlines[0]
                                                            ? headlines[0]
                                                                  .publish_date
                                                            : ""}
                                                    </p>
                                                    <h1 className="xl:text-xl md:text-xl  font-root-headline mt-2">
                                                        {headlines[0]
                                                            ? headlines[0].title
                                                            : ""}
                                                    </h1>
                                                    <p className="text-base text-gray-100">
                                                        {headlines[0]
                                                            ? headlines[0]
                                                                  .sort_description
                                                            : ""}
                                                    </p>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="col">
                                            <div className="flex flex-wrap bg-black">
                                                <div className="bg-black">
                                                    <a
                                                        key={1}
                                                        href={`${
                                                            headlines[1]
                                                                ? `/${removeSpace(
                                                                      headlines[1].category.name.toLocaleLowerCase()
                                                                  )}/${
                                                                      headlines[1]
                                                                          .sj_code
                                                                  }/${removeSpace(
                                                                      headlines[1].title.toLocaleLowerCase()
                                                                  )}`
                                                                : ""
                                                        }`}
                                                        className="relative w-full hover:opacity-80"
                                                    >
                                                        <picture>
                                                            <source
                                                                type="image/webp"
                                                                srcSet={`${
                                                                    headlines[1]
                                                                        ? headlines[1]
                                                                              .webp_image
                                                                        : ""
                                                                }`}
                                                            />
                                                            <img
                                                                loading="lazy"
                                                                src={
                                                                    headlines[1]
                                                                        ? headlines[1]
                                                                              .main_image
                                                                        : ""
                                                                }
                                                                alt={
                                                                    headlines[1]
                                                                        ? headlines[1]
                                                                              .title
                                                                        : ""
                                                                }
                                                                height={
                                                                    headlines[1]
                                                                        ? headlines[1]
                                                                              .main_image
                                                                              .height
                                                                        : ""
                                                                }
                                                                width={
                                                                    headlines[1]
                                                                        ? headlines[1]
                                                                              .main_image
                                                                              .width
                                                                        : ""
                                                                }
                                                                className="h-full opacity-50 object-cover"
                                                            />
                                                        </picture>

                                                        <div className="absolute bottom-0 ml-2 mr-2 xl:mb-5 md:mb-2 text-white">
                                                            <span
                                                                className="xl:text-base md:text-xs font-semibold category-span mb-5 font-sm 
                                                                "
                                                            >
                                                                {headlines[1]
                                                                    ? headlines[1]
                                                                          .category
                                                                          .name
                                                                    : ""}
                                                            </span>
                                                            <p className="xl:text-sm md:text-xs mt-2 font-semi-publish  mb-2 font-sm">
                                                                {headlines[1]
                                                                    ? headlines[1]
                                                                          .publish_date
                                                                    : ""}
                                                            </p>
                                                            <h1 className="font-semibold xl:text-base md:text-sm font-root-headline font-semi-headline ">
                                                                {headlines[1]
                                                                    ? headlines[1]
                                                                          .title
                                                                    : ""}
                                                            </h1>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="bg-black">
                                                    <a
                                                        key={2}
                                                        href={`${
                                                            headlines[2]
                                                                ? `/${removeSpace(
                                                                      headlines[2].category.name.toLocaleLowerCase()
                                                                  )}/${
                                                                      headlines[2]
                                                                          .sj_code
                                                                  }/${removeSpace(
                                                                      headlines[2].title.toLocaleLowerCase()
                                                                  )}`
                                                                : ""
                                                        }`}
                                                        className="relative bg-black hover:opacity-80"
                                                    >
                                                        <picture>
                                                            <source
                                                                type="image/webp"
                                                                srcSet={`${
                                                                    headlines[2]
                                                                        ? headlines[2]
                                                                              .webp_image
                                                                        : ""
                                                                }`}
                                                            />
                                                            <img
                                                                loading="lazy"
                                                                src={
                                                                    headlines[2]
                                                                        ? headlines[2]
                                                                              .main_image
                                                                        : ""
                                                                }
                                                                alt={
                                                                    headlines[2]
                                                                        ? headlines[2]
                                                                              .title
                                                                        : ""
                                                                }
                                                                height={
                                                                    headlines[2]
                                                                        ? headlines[2]
                                                                              .main_image
                                                                              .height
                                                                        : ""
                                                                }
                                                                width={
                                                                    headlines[2]
                                                                        ? headlines[2]
                                                                              .main_image
                                                                              .width
                                                                        : ""
                                                                }
                                                                className="h-full opacity-50 object-cover"
                                                            />
                                                        </picture>

                                                        <div className="absolute bottom-0 ml-2 mr-2 xl:mb-5 md:mb-2 text-white">
                                                            <span
                                                                className="xl:text-base md:text-xs font-semibold category-span mb-5 font-sm 
                                                                "
                                                            >
                                                                {headlines[2]
                                                                    ? headlines[2]
                                                                          .category
                                                                          .name
                                                                    : ""}
                                                            </span>
                                                            <p className="xl:text-sm md:text-xs mt-2 mb-2 font-semi-publish font-sm">
                                                                {headlines[2]
                                                                    ? headlines[2]
                                                                          .publish_date
                                                                    : ""}
                                                            </p>
                                                            <h1 className="font-semibold xl:text-lg md:text-sm font-root-headline font-semi-headline ">
                                                                {headlines[2]
                                                                    ? headlines[2]
                                                                          .title
                                                                    : ""}
                                                            </h1>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    const onClikClose = () => {
        setIsActivePopupImage(true);
    };

    const DetailArtikelText = (props) => {
        return {
            __html: `${props}`,
        };
    };

    const HomeContaner = () => (
        <>
            <div className={`${categories ? "hidden" : "block"}`}>
                <Loading />
            </div>

            <div className={`${categories ? "" : "hidden"}`}>
                <div
                    className={`w-screen h-screen bg-popupimage ${
                        popup_image !== undefined && popup_image.length > 0
                            ? "fixed "
                            : "hidden"
                    } ${isActivePopupImage ? "hidden" : ""}`}
                >
                    <div
                        className={`mx-auto w-[400px] inset-x-0 top-60 relative flex justify-center`}
                    >
                        <div
                            className="flex  cursor-pointer"
                            onClick={onClikClose}
                        >
                            <span className="absolute bg-red-600 px-2 fw-bold text-white text-right flex justify-center right-0 ">
                                Close
                            </span>
                        </div>
                        <a
                            href={
                                popup_image !== undefined &&
                                popup_image.length > 0
                                    ? popup_image[0].link
                                    : ""
                            }
                        >
                            <picture className="w-full">
                                <source
                                    type="image/webp"
                                    srcSet={
                                        popup_image !== undefined &&
                                        popup_image.length > 0
                                            ? popup_image[0].desktop_ad_file
                                            : ""
                                    }
                                />
                                <img
                                    src={
                                        popup_image !== undefined &&
                                        popup_image.length > 0
                                            ? popup_image[0].desktop_ad_file
                                            : ""
                                    }
                                    className="w-[400px]"
                                    alt="ads-image"
                                />
                            </picture>
                        </a>
                    </div>
                </div>

                <div className="mobile-ads-headline">
                    <AdsBennerMobile
                        image={
                            headline_ads !== undefined &&
                            headline_ads.length > 0
                                ? headline_ads[0].mobile_webp_image
                                : ""
                        }
                        url={
                            headline_ads !== undefined &&
                            headline_ads.length > 0
                                ? headline_ads[0].link
                                : ""
                        }
                        status={
                            headline_ads !== undefined &&
                            headline_ads.length > 0
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

                <div
                    className={`bottom-5 right-5 fixed z-50 ${
                        popup_video !== undefined && popup_video.length > 0
                            ? ""
                            : "hidden"
                    }`}
                >
                    <YoutubeIframe
                        data={
                            popup_video !== undefined && popup_video.length > 0
                                ? popup_video[0].ad_file
                                : ""
                        }
                        status={
                            popup_video !== undefined && popup_video.length > 0
                                ? true
                                : false
                        }
                    />
                </div>
                <div className="relative">
                    <div className="all-ads">
                        <AdsBennerSideLeft
                            image={
                                background_banner_ads !== undefined &&
                                background_banner_ads.length > 0
                                    ? background_banner_ads[0].desktop_ad_file
                                    : ""
                            }
                            url={
                                background_banner_ads !== undefined &&
                                background_banner_ads.length > 0
                                    ? background_banner_ads[0].link
                                    : ""
                            }
                            status={
                                background_banner_ads !== undefined &&
                                background_banner_ads.length > 0
                                    ? true
                                    : false
                            }
                        />

                        <AdsBennerSideRight
                            image={
                                background_banner_ads !== undefined &&
                                background_banner_ads.length > 0
                                    ? background_banner_ads[0].desktop_ad_file
                                    : ""
                            }
                            url={
                                background_banner_ads !== undefined &&
                                background_banner_ads.length > 0
                                    ? background_banner_ads[0].link
                                    : ""
                            }
                            status={
                                background_banner_ads !== undefined &&
                                background_banner_ads.length > 0
                                    ? true
                                    : false
                            }
                        />
                    </div>

                    <div className="bg-headline">
                        <Headline />
                    </div>

                    <div className="container mx-auto p-0">
                        <div className="content mx-2">
                            <div className="grid grid-cols-3 gap-2 xl:px-3 md:px-3 element">
                                <div className="col"></div>
                                <div className="md:col-span-6 sm:col-span-12 relative z-40">
                                    <div className="grid col-span-1 xl:grid-cols-3 md:grid-cols-3 md:px-3 wrapper-content max-md:px-5">
                                        <div className="col-span-2 pe-3 ">
                                            {articles.map((value, key) =>
                                                key % 6 === 0 ? (
                                                    <div
                                                        key={key}
                                                        className="relative text-white bg-slate-500  mb-2 p-0 article element z-50"
                                                    >
                                                        <a
                                                            href={`${value.category.name.toLowerCase()}/${
                                                                value.sj_code
                                                            }/${removeSpace(
                                                                value.title.toLowerCase()
                                                            )}`}
                                                            className="z-10"
                                                        >
                                                            <div className="bg-black">
                                                                <picture>
                                                                    <source
                                                                        type="image/webp"
                                                                        srcSet={`${value.webp_image}`}
                                                                    />
                                                                    <img
                                                                        loading="lazy"
                                                                        fetchpriority="high"
                                                                        src={
                                                                            value.main_image
                                                                        }
                                                                        alt={
                                                                            value.title
                                                                        }
                                                                        className="image-lazy aspect-video h-full m-0 p-0 opacity-50 w-full object-cover"
                                                                        srcSet={`${value.main_image} 300w,
                                                                        ${value.main_image} 600w,
                                                                        ${value.main_image} 900w`}
                                                                        sizes="(max-width: 300px) 100vw, (max-width: 600px) 50vw, (max-width: 900px) 33vw, 900px"
                                                                    />
                                                                </picture>
                                                            </div>
                                                            <div className="absolute bottom-3 md:bottom-5">
                                                                <div className="flex flex-col justify-between px-4 leading-normal">
                                                                    <span className=" w-fit mb-3 text-black category-span text-sm xl:text-lg md:text-sm font-semibold px-5">
                                                                        {
                                                                            value
                                                                                .category
                                                                                .name
                                                                        }
                                                                    </span>
                                                                    <h2 className="mb-2 tracking-extra-wide xl:text-xl md:text-lg max-md:text-base line-clamp-3 tracking-tight font-root text-white">
                                                                        {
                                                                            value.title
                                                                        }
                                                                    </h2>
                                                                    <div
                                                                        dangerouslySetInnerHTML={DetailArtikelText(
                                                                            value.sort_description
                                                                        )}
                                                                        className="xl:text-sm md:text-base  md:block mb-2 hidden font-base line-clamp-2"
                                                                    ></div>
                                                                    <p className="xl:text-sm md:text-sm line-clamp-2 md:block mb-2 hidden max-md:text-sm">
                                                                        {
                                                                            value.publish_date
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                ) : key % 9 === 0 ? (
                                                    <AdsRow
                                                        key={key}
                                                        data={
                                                            article_row_ads !==
                                                                undefined &&
                                                            article_row_ads.length >
                                                                0
                                                                ? true
                                                                : false
                                                        }
                                                        image={
                                                            article_row_ads !==
                                                                undefined &&
                                                            article_row_ads.length >
                                                                0
                                                                ? article_row_ads[0]
                                                                      .desktop_webp_image
                                                                : ""
                                                        }
                                                        url={
                                                            article_row_ads !==
                                                                undefined &&
                                                            article_row_ads.length >
                                                                0
                                                                ? article_row_ads[0]
                                                                      .link
                                                                : ""
                                                        }
                                                    />
                                                ) : (
                                                    <div
                                                        key={key}
                                                        className="mb-2 article relative text-white p-0 article element z-50"
                                                    >
                                                        <a
                                                            href={`${value.category.name.toLowerCase()}/${
                                                                value.sj_code
                                                            }/${removeSpace(
                                                                value.title.toLowerCase()
                                                            )}`}
                                                            className={`grid grid-cols-2 xl:grid-cols-3 md:grid-cols-3 gap-2 bg-white hover:bg-gray-100 my-3 article`}
                                                        >
                                                            <div
                                                                className={`col ${
                                                                    image_status &&
                                                                    value.main_image
                                                                        ? "bg-black"
                                                                        : "bg-black"
                                                                }`}
                                                            >
                                                                <picture>
                                                                    <source
                                                                        type="image/webp"
                                                                        srcSet={`${value.webp_image}`}
                                                                    />
                                                                    <img
                                                                        fetchpriority="high"
                                                                        src={
                                                                            value.main_image
                                                                        }
                                                                        alt={
                                                                            value.title
                                                                        }
                                                                        className={`image-lazy w-fit aspect-video object-cover h-full me-3 hover:opacity-70`}
                                                                        loading="lazy"
                                                                        srcSet={`${value.main_image} 300w,
                                                                    ${value.main_image} 600w,
                                                                    ${value.main_image} 900w`}
                                                                        sizes="(max-width: 300px) 100vw, (max-width: 600px) 50vw, (max-width: 900px) 33vw, 900px"
                                                                    />
                                                                </picture>
                                                            </div>
                                                            <div className="col xl:col-span-2 md:col-span-2 flex flex-col leading-normal">
                                                                <span className="category-span w-fit mb-2 text-sm xl:text-sm md:text-xs ">
                                                                    {
                                                                        value
                                                                            .category
                                                                            .name
                                                                    }
                                                                </span>
                                                                <h2 className="mb-2 line-clamp-3 text-sm xl:text-base md:text-xs font-root text-gray-800 font-base">
                                                                    {
                                                                        value.title
                                                                    }
                                                                </h2>
                                                                <p className="mb-3 text-xs xl:text-sm md:text-sm sm:text-xs max-lg:text-sm max-md:text-sm text-gray-600">
                                                                    {
                                                                        value.publish_date
                                                                    }
                                                                </p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                )
                                            )}

                                            <div className="flex justify-center my-4 relative z-50">
                                                <a href="indeks">
                                                    <button
                                                        type="button"
                                                        className="text-black bg-master hover:text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none relative z-50"
                                                    >
                                                        Indeks Artikel
                                                    </button>
                                                </a>
                                            </div>
                                        </div>

                                        <aside className="xl:shadow md:shadow xl:ms-5 lg:ms-5 md:ms-0 max-md:ms-0 max-lg:ms-5 max-xl:ms-5">
                                            <PopularArticle
                                                data_value={popular_articles}
                                                image_ads={
                                                    premium_ads !== undefined &&
                                                    premium_ads[0]
                                                        ? premium_ads[0]
                                                              .desktop_webp_image
                                                        : " "
                                                }
                                                url={
                                                    premium_ads !== undefined &&
                                                    premium_ads[0]
                                                        ? premium_ads[0].link
                                                        : ""
                                                }
                                                status={
                                                    premium_ads !== undefined &&
                                                    premium_ads[0]
                                                        ? true
                                                        : false
                                                }
                                            />

                                            <RecommendationArticle
                                                data_value={
                                                    recommendation_articles
                                                }
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
                                                            premium_ads !==
                                                                undefined &&
                                                            premium_ads[2]
                                                                ? premium_ads[2]
                                                                      .link
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
                                                hot_event_articles={
                                                    hot_event_articles
                                                }
                                                hot_lifestyle_articles={
                                                    hot_lifestyle_articles
                                                }
                                            />
                                        </aside>
                                    </div>
                                    <div className="mt-4 xl:px-0 lg:px-0 max-md:px-3 md:px-3">
                                        {regular_ads !== undefined ? (
                                            <Swiper
                                                className=""
                                                slidesPerView={1}
                                                spaceBetween={30}
                                                autoplay={{
                                                    delay: 2500,
                                                    disableOnInteraction: false,
                                                }}
                                                effect="fade"
                                                modules={[Autoplay]}
                                                breakpoints={{
                                                    499: {
                                                        slidesPerView: 1,
                                                        spaceBetweenSlides: 30,
                                                    },

                                                    576: {
                                                        // width: 576,
                                                        slidesPerView: 2,
                                                    },
                                                    1200: {
                                                        // width: 768,
                                                        slidesPerView: 3,
                                                    },
                                                }}
                                            >
                                                {regular_ads.map(
                                                    (value, key) => (
                                                        <SwiperSlide key={key}>
                                                            <a
                                                                href={
                                                                    value.link
                                                                }
                                                                target="_blank"
                                                            >
                                                                <picture>
                                                                    <source
                                                                        type="image/webp"
                                                                        srcSet={`${value.ad_file}`}
                                                                    />
                                                                    <img
                                                                        src={
                                                                            value.desktop_ad_file
                                                                        }
                                                                        alt="regular_banner"
                                                                        loading="lazy"
                                                                        width={
                                                                            value
                                                                                .desktop_ad_file
                                                                                .width
                                                                        }
                                                                        height={
                                                                            value
                                                                                .desktop_ad_file
                                                                                .height
                                                                        }
                                                                        srcSet={`${value.desktop_ad_file} 300w,
                                                ${value.desktop_ad_file} 600w,
                                                ${value.desktop_ad_file} 900w`}
                                                                        sizes="(max-width: 300px) 100vw, (max-width: 600px) 50vw, (max-width: 900px) 33vw, 900px"
                                                                        fetchpriority="high"
                                                                    />
                                                                </picture>
                                                            </a>
                                                        </SwiperSlide>
                                                    )
                                                )}
                                            </Swiper>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                </div>
                                <div className="col"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

    return <Layout>{categories ? <HomeContaner /> : <Loading />}</Layout>;
};

// const AdsSideMobile = () => {
//     return <AdsBennerMobile image={ads_premium} />;
// };

export default HomePage;
