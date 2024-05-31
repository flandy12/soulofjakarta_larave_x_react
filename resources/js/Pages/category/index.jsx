import React, { useEffect, useState } from "react";
import Loading from "../../compoments/loading";
import PopularArticle from "../../compoments/popular_article";
import RecommendationArticle from "../../compoments/recomentdation_article";
import { awarenes, fetchData, getData, removeSpace } from "../../helper/helper";
import {
    AdsBennerDesktop,
    AdsBennerMobile,
    AdsBennerSideLeft,
    AdsBennerSideRight,
} from "../../compoments/ads_side";

import facebook from "@asset/icon/facebook.svg";
import WhatsApp from "@asset/icon/WhatsApp.svg";
import Twitter from "@asset/icon/Twitter.svg";
import LinkIcon from "@asset/icon/Link.svg";

import {
    Navbar,
    NavbarMobile,
    getSubNavbar,
    getSubNavbarMobile,
    removeSubNavbar,
} from "../../compoments/navbar";
import SelectedArticles from "../../compoments/sticky_page";
import Layout from "../layout/layout";

function DetailArtikel({
    Categories_Navbar,
    Detail_Article,
    Related_Article,
    Recommendation_Articles,
    Popular_Articles,
    Premium_Banner,
    Headline_Ads,
    Background_Banner,
    Article_Row_Ads,
    Tag,
    Hot_Lifestyle,
    Hot_Event,
}) {
    const [dataDetail, setDataDetail] = useState(Detail_Article);
    const [relatedArticle, setRelatedArticle] = useState(Related_Article);
    const [recommendation_articles, setRecommendationArticles] = useState(
        Recommendation_Articles
    );
    const [popular_articles, setPopularArticles] = useState(Popular_Articles);
    const [tag, setTag] = useState(Tag);
    const [categories, setcategories] = useState(Categories_Navbar);

    const [headline_ads, setHealineAds] = useState(Headline_Ads);
    const [background_banner_ads, setBackgroundBannerAds] =
        useState(Background_Banner);
    const [article_row_ads, setArticleRow] = useState(Article_Row_Ads);
    const [premium_ads, setPremiumAds] = useState(Premium_Banner);

    const [hot_lifestyle_articles, setHot_lifestyle_articles] =
        useState(Hot_Lifestyle);
    const [hot_event_articles, setHot_event_articles] = useState(Hot_Event);

    const [loading, setLoading] = useState(true);

    //Detect ImageOnload
    const [image_status, setImageStatus] = useState(true);
    const [ip, setIP] = useState("");

    const title_url = window.location.href;

    // Image OnLoad
    const onLoad = () => {
        setImageStatus(false);
    };

    const getUrl = (e) => {
        const getId = document.getElementById(
            e.target.getAttribute("date-element")
        );
        if (getId) {
            getId.classList.remove("hidden");
        }
    };

    const removeUrl = (e) => {
        const getId = document.getElementById(
            e.target.getAttribute("date-element")
        );
        if (getId) {
            getId.innerHTML = "Copy";
            getId.classList.add("hidden");
        }
    };

    const getElement = (event) => {
        const tooltip = document.getElementById(
            event.currentTarget.getAttribute("date-element")
        );
        const getTitle = document.getElementById(
            "title-detail-article"
        ).innerText;
        tooltip.innerHTML = "Copied";

        const url = title_url;
        const domain = new URL(url).hostname;
        const text = `"${getTitle}". Lihat Artikel Selengkapnya di ${domain} : ${title_url}`;

        /* Copy the text inside the text field */
        navigator.clipboard.writeText(text);
    };

    function DetailArtikelText(props, ads) {
        if (props) {
            let text = props;

            let element = `${
                ads !== "undefined"
                    ? `<img src="${ads}" alt="ads-row" className="my-3" />`
                    : ""
            }`;
            let googleAds = `<div class="ads-count">
                            <ins className="adsbygoogle"
                            style={{display: 'display:block'}}
                            data-ad-format="fluid"
                            data-ad-layout-key="-fk+5v+5o-cr+3t"
                            data-ad-client="ca-pub-4305678118629151"
                            data-ad-slot="4425187940"></ins>
                        </div>`;

            // Replace [IKLAN] with the specified HTML element
            let main_text = text.replaceAll(
                "[IKLAN]",
                ads === "undefined" ? element : googleAds
            );

            return {
                __html: `${main_text}`,
            };
        }
    }

    const DetailPage = () => (
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

                <div className="container mx-auto">
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

                    <div className="relative z-50 detail-artikel-content">
                        <div className="block lg:hidden md:hidden sticky top-16">
                            <AdsBennerDesktop
                                image={
                                    background_banner_ads !== undefined &&
                                    background_banner_ads.length > 0
                                        ? background_banner_ads[0]
                                              .mobile_webp_image
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

                        <div
                            className={`sticky top-16  ${
                                background_banner_ads !== undefined &&
                                background_banner_ads.length > 0 &&
                                background_banner_ads[0].mobile_webp_image
                                    ? ""
                                    : ""
                            }`}
                        >
                            <div className="ads-headline-desktop-wrapp">
                                <AdsBennerDesktop
                                    image={
                                        headline_ads !== undefined &&
                                        headline_ads.length > 0
                                            ? headline_ads[0].desktop_webp_image
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
                        </div>

                        <div className="md:grid grid-cols-3 my-3 wrapper-content-detail bg-white relative z-40 pt-3">
                            <div className="col-span-2">
                                <div className="">
                                    <h1
                                        className="text-xl lg:text-2xl text-center font-bold my-3 font-root-headline px-3"
                                        id="title-detail-article"
                                    >
                                        {dataDetail.title}
                                    </h1>

                                    <p className="text-center ">
                                        {dataDetail.publish_date}
                                    </p>

                                    <div className="flex justify-center mt-4 mb-5">
                                        <div className="flex w-28 gap-2 md:w-36 justify-between text-center">
                                            <a
                                                target="_blank"
                                                rel="noreferrer"
                                                href={`https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&u=${title_url.toLocaleLowerCase()}plugins%2F&display=popup&ref=plugin&src=share_button`}
                                            >
                                                <img
                                                    src={facebook}
                                                    alt="facebook"
                                                />
                                            </a>

                                            <a
                                                target="_blank"
                                                rel="noreferrer"
                                                href={`https://wa.me/?text=${title_url}`}
                                                data-action="share/whatsapp/share"
                                            >
                                                <img
                                                    src={WhatsApp}
                                                    alt="WhatsApp"
                                                />
                                            </a>

                                            <a
                                                target="_blank"
                                                rel="noreferrer"
                                                href={`https://twitter.com/intent/tweet?text=${dataDetail.title} ${title_url}`}
                                            >
                                                <img
                                                    src={Twitter}
                                                    alt="Twitter"
                                                />
                                            </a>

                                            <div className="cursor-pointer relative">
                                                <span
                                                    className="absolute -top-1 px-4 py-1 ml-4 bg-slate-300 font-semibold rounded-md hidden"
                                                    id="tooltip"
                                                >
                                                    Copy
                                                </span>
                                                <img
                                                    src={LinkIcon}
                                                    alt="Link"
                                                    onMouseOver={(e) =>
                                                        getUrl(e)
                                                    }
                                                    onMouseLeave={(e) =>
                                                        removeUrl(e)
                                                    }
                                                    date-element="tooltip"
                                                    onClick={(e) =>
                                                        getElement(e)
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-slate-300 aspect-video ">
                                        <picture>
                                            <source
                                                type="image/webp"
                                                srcSet={`${dataDetail.webp_image}`}
                                            />
                                            <img
                                                className="aspect-video w-full object-cover"
                                                src={dataDetail.main_image}
                                                alt="description"
                                                loading="lazy"
                                            />
                                        </picture>
                                    </div>

                                    <div
                                        dangerouslySetInnerHTML={DetailArtikelText(
                                            dataDetail.wording,
                                            article_row_ads
                                        )}
                                        className="mt-3 detail-article pe-3"
                                    />

                                    <div className="w-full ">
                                        {tag.length > 0 ? (
                                            <h6 className="text-lg font-semibold my-4">
                                                Tags
                                            </h6>
                                        ) : (
                                            ""
                                        )}
                                        <div className="">
                                            <div className="flex flex-wrap gap-2 my-7">
                                                {tag.map((value, key) => (
                                                    <button
                                                        className="bg-white border px-3 mr-2 rounded text-slate-900 border-black"
                                                        key={key}
                                                    >
                                                        {value.tag}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className={`flex items-center ${
                                            tag.length > 0 ? "mt-10" : "mt-5"
                                        }`}
                                    >
                                        <img
                                            src={`${
                                                dataDetail.author_picture
                                                    ? dataDetail.author_picture
                                                    : `https://ui-avatars.com/api/?name=${dataDetail.avatar_name}&color=7F9CF5&background=EBF4FF`
                                            }`}
                                            alt={dataDetail.author}
                                            className="rounded-full h-12"
                                        />
                                        <div>
                                            <p className="ms-3 text-sm">
                                                Penulis
                                            </p>
                                            <h6 className="ms-3 font-semibold text-lg">
                                                {dataDetail.author}{" "}
                                            </h6>
                                        </div>
                                    </div>

                                    <div className="my-5 xl:my-9 lg:my-10 md:my-10">
                                        <p className="text-lg font-semibold mb-4 wrapper-title ">
                                            Artikel Terkait
                                        </p>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                            {relatedArticle.map(
                                                (value, key) => (
                                                    <a
                                                        href={`/${value.category.name.toLowerCase()}/${
                                                            value.sj_code
                                                        }/${removeSpace(
                                                            value.title.toLocaleLowerCase()
                                                        )}`}
                                                        key={key}
                                                    >
                                                        <div>
                                                            <div
                                                                className={`${
                                                                    image_status !==
                                                                    true
                                                                        ? "bg-black"
                                                                        : "bg-slate-300"
                                                                }`}
                                                            >
                                                                <picture>
                                                                    <source
                                                                        type="image/webp"
                                                                        srcSet={`${value.webp_image}`}
                                                                    />
                                                                    <img
                                                                        src={
                                                                            value.main_image
                                                                        }
                                                                        alt={
                                                                            value.title
                                                                        }
                                                                        className={`aspect-video lg:h-32 w-full object-cover hover:opacity-80 `}
                                                                        onLoad={
                                                                            onLoad
                                                                        }
                                                                    />
                                                                </picture>
                                                            </div>
                                                            <h3
                                                                className="mt-3 text-sm font-root font-side"
                                                                title={
                                                                    value.title
                                                                }
                                                            >
                                                                {value.title}
                                                            </h3>
                                                        </div>
                                                    </a>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    <div className="my-5 xl:my-9 lg:my-10 md:my-10">
                                        <p className="text-lg font-semibold mb-4 wrapper-title ">
                                            Rekomendasi Artikel
                                        </p>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                            {recommendation_articles.map(
                                                (value, key) => (
                                                    <a
                                                        href={`/${value.category.name.toLowerCase()}/${
                                                            value.sj_code
                                                        }/${removeSpace(
                                                            value.title.toLocaleLowerCase()
                                                        )}`}
                                                        key={key}
                                                    >
                                                        <div>
                                                            <div
                                                                className={`${
                                                                    image_status !==
                                                                    true
                                                                        ? "bg-black"
                                                                        : "bg-slate-300"
                                                                }`}
                                                            >
                                                                <picture>
                                                                    <source
                                                                        type="image/webp"
                                                                        srcSet={`${value.webp_image}`}
                                                                    />
                                                                    <img
                                                                        src={
                                                                            value.main_image
                                                                        }
                                                                        alt={
                                                                            value.title
                                                                        }
                                                                        className={`aspect-video lg:h-32 w-full object-cover hover:opacity-80 `}
                                                                        onLoad={
                                                                            onLoad
                                                                        }
                                                                    />
                                                                </picture>
                                                            </div>
                                                            <h3
                                                                className="mt-3 text-sm font-root font-side"
                                                                title={
                                                                    value.title
                                                                }
                                                            >
                                                                {value.title}
                                                            </h3>
                                                        </div>
                                                    </a>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <aside className="xl:shadow md:shadow xl:ms-5 md:ms-0">
                                <PopularArticle
                                    data_value={popular_articles}
                                    image_ads={
                                        premium_ads !== undefined &&
                                        premium_ads[0]
                                            ? premium_ads[0].desktop_webp_image
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
                                    data_value={recommendation_articles}
                                    image_ads={
                                        premium_ads !== undefined &&
                                        premium_ads[1]
                                            ? premium_ads[1].desktop_webp_image
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
                                        hot_lifestyle_articles
                                    }
                                />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

    return (
        <Layout>
            <DetailPage />
        </Layout>
    );
}

export default DetailArtikel;
