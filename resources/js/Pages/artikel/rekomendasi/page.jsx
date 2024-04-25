import React, { useEffect, useState } from "react";

import Loading from "../../../compoments/loading";
import PopularArticle from "../../../compoments/popular_article";
import ImageDefault from "@asset/noImage.png";
import { removeSpace } from "../../../helper/helper";

import {
    AdsBennerDesktop,
    AdsBennerMobile,
    AdsBennerSideLeft,
    AdsBennerSideRight,
} from "../../../compoments/ads_side";

import { LazyLoadImage } from "react-lazy-load-image-component";

import {
    Navbar,
    NavbarMobile,
    getSubNavbar,
    getSubNavbarMobile,
    removeSubNavbar,
} from "../../../compoments/navbar";
import SelectedArticles from "../../../compoments/sticky_page";
import { Link } from "@inertiajs/inertia-react";
import Layout from "../../layout/layout";

const IndexPageRekomendasi = ({
    Categories_Navbar,
    Articles,
    Popular_Articles,
    Headline_Ads,
    Background_Banner,
    Article_Row_Ads,
    Premium_Banner,
    Hot_Lifestyle,
    Hot_Event,
}) => {
    const [dataApi, setDataApi] = useState(Articles);
    const [loading, setLoading] = useState(true);
    const [popular_article, setPopular_articles] = useState(Popular_Articles);
    const [categories, setCategories] = useState(Categories_Navbar);

    const [headline_ads, setHealineAds] = useState(Headline_Ads);
    const [background_banner_ads, setBackgroundBannerAds] =
        useState(Background_Banner);
    const [articleRow, setArticleRow] = useState(Article_Row_Ads);
    const [premium_ads, setPremiumAds] = useState(Premium_Banner);

    const [hot_lifestyle_articles, setHot_lifestyle_articles] =
        useState(Hot_Lifestyle);
    const [hot_event_articles, setHot_event_articles] = useState(Hot_Event);

    let pars = { sort: ["publish_date", "desc"] };

    const [offset] = useState(1);

    //Detect ImageOnload
    const [image_status, setImageStatus] = useState(true);

    const onLoad = () => {
        setImageStatus(false);
    };

    const DetailRecomendation = () => {
        return (
            <>
                <div className={`${categories ? "hidden" : "block"}`}>
                    <Loading />
                </div>
                <div className={`${categories ? "" : "hidden"}`}>
                    <div className="relative z-40 ">
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

                    <div className="all-ads">
                        <AdsBennerSideLeft
                            image={
                                background_banner_ads &&
                                background_banner_ads.length > 0
                                    ? background_banner_ads[0].desktop_ad_file
                                    : ""
                            }
                            url={
                                background_banner_ads &&
                                background_banner_ads.length > 0
                                    ? background_banner_ads[0].link
                                    : ""
                            }
                            status={
                                background_banner_ads &&
                                background_banner_ads.length > 0
                                    ? true
                                    : false
                            }
                        />

                        <AdsBennerSideRight
                            image={
                                background_banner_ads &&
                                background_banner_ads.length > 0
                                    ? background_banner_ads[0].desktop_ad_file
                                    : ""
                            }
                            url={
                                background_banner_ads &&
                                background_banner_ads.length > 0
                                    ? background_banner_ads[0].link
                                    : ""
                            }
                            status={
                                background_banner_ads &&
                                background_banner_ads.length > 0
                                    ? true
                                    : false
                            }
                        />
                    </div>
                    <div className="container mx-auto">
                        <div className="">
                            <div className="mx-2">
                                <div className="block lg:hidden md:hidden sticky top-16">
                                    <AdsBennerDesktop
                                        image={
                                            background_banner_ads &&
                                            headline_ads.length > 0
                                                ? background_banner_ads[0]
                                                      .mobile_webp_image
                                                : ""
                                        }
                                        url={
                                            background_banner_ads &&
                                            headline_ads.length > 0
                                                ? background_banner_ads[0].link
                                                : ""
                                        }
                                        status={
                                            background_banner_ads !==
                                                undefined &&
                                            headline_ads.length > 0
                                                ? true
                                                : false
                                        }
                                    />
                                </div>

                                <div className="desktop-ads-headline sticky top-16">
                                    <AdsBennerDesktop
                                        image={
                                            headline_ads &&
                                            headline_ads.length > 0
                                                ? headline_ads[0]
                                                      .desktop_webp_image
                                                : ""
                                        }
                                        url={
                                            headline_ads &&
                                            headline_ads.length > 0
                                                ? headline_ads[0].link
                                                : ""
                                        }
                                        status={
                                            headline_ads &&
                                            headline_ads.length > 0
                                                ? true
                                                : false
                                        }
                                    />
                                </div>

                                <div className="md:grid grid-cols-3 my-3 wrapper-content-detail relative z-40 bg-white pt-3 ">
                                    <div className="col-span-2 space-y-5 me-4">
                                        {dataApi.map((value, key) => (
                                            <div
                                                key={key}
                                                className="relative z-50"
                                            >
                                                <a
                                                    href={`/${value.category.name.toLowerCase()}/${
                                                        value.sj_code
                                                    }/${removeSpace(
                                                        value.title.toLowerCase()
                                                    )}`}
                                                    className="grid grid-cols-2 xl:grid-cols-3 md:grid-cols-3 gap-2 bg-white hover:bg-gray-100 article space-y-5"
                                                >
                                                    <div className="col">
                                                        <picture>
                                                            <source
                                                                type="image/webp"
                                                                srcSet={`${value.webp_image}`}
                                                            />
                                                            <LazyLoadImage
                                                                loading="lazy"
                                                                src={
                                                                    value.main_image !==
                                                                        `https://c.soulofjakarta.id/images/default/articles/IMAGEDEFAULTARTIKEL.jpg` ||
                                                                    value.main_image !==
                                                                        `https://cms.soulofjakarta.id/images/default/articles/IMAGEDEFAULTARTIKEL.jpg`
                                                                        ? value.main_image
                                                                        : ImageDefault
                                                                }
                                                                alt={
                                                                    value.title
                                                                }
                                                                className="image-lazy aspect-video object-cover"
                                                                placeholderSrc={
                                                                    value.main_image
                                                                }
                                                            />
                                                        </picture>
                                                    </div>

                                                    <div className="col xl:col-span-2 md:col-span-2 flex flex-col leading-normal">
                                                        <span className="category-span w-fit mb-2 text-sm xl:text-sm md:text-xs">
                                                            {
                                                                value.category
                                                                    .name
                                                            }
                                                        </span>
                                                        <h2 className="mb-2 line-clamp-3 text-sm xl:text-base md:text-xs tracking-tight font-root text-gray-800 font-base">
                                                            {value.title}
                                                        </h2>
                                                        <p className="text-xs  xl:text-base sm:text-xs  text-gray-700">
                                                            {value.publish_date}
                                                        </p>
                                                    </div>
                                                </a>
                                            </div>
                                        ))}
                                    </div>

                                    <aside className="xl:shadow md:shadow xl:ms-5 md:ms-5">
                                        <PopularArticle
                                            data_value={popular_article}
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
                                                    ? premium_ads[1].link
                                                    : ""
                                            }
                                            status={
                                                premium_ads !== undefined &&
                                                premium_ads[0]
                                                    ? true
                                                    : false
                                            }
                                        />

                                        <div className="mx-auto mt-4 rounded-md cursor-pointer">
                                            {premium_ads !== undefined &&
                                            premium_ads[1] ? (
                                                <a
                                                    href={
                                                        premium_ads !==
                                                            undefined &&
                                                        premium_ads[1]
                                                            ? premium_ads[1]
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
                                                                    premium_ads[1]
                                                                        ? premium_ads[1]
                                                                              .desktop_webp_image
                                                                        : ""
                                                                }`}
                                                            />
                                                            <img
                                                                src={
                                                                    premium_ads !==
                                                                        undefined &&
                                                                    premium_ads[1]
                                                                        ? premium_ads[1]
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
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    return (
        <Layout>
            <DetailRecomendation />
        </Layout>
    );
};

export default IndexPageRekomendasi;
