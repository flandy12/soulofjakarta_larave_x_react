import ImageDefault from "@asset/noImage.png";
import { removeSpace } from "../helper/helper";
import { Link } from "@inertiajs/inertia-react";
import React from "react";
const IdAds = import.meta.env.VITE_ADS_ID;

const PopularArticle = ({ data_value, image_ads, status, url }) => {
    const compoments_ads_row = (
        <ins
            className="adsbygoogle"
            style={{ display: "display:block" }}
            data-ad-format="fluid"
            data-ad-layout-key="-fk+5v+5o-cr+3t"
            data-ad-client={`ca-pub-${IdAds}`}
            data-ad-slot="4425187940"
        ></ins>
    );

    return (
        <div className="">
            {/* ADS */}

            <div className="mx-auto mt-4 rounded-md cursor-pointer">
                {status ? (
                    <a href={url}>
                        <div
                            id="ADOP_V_ewwhYbFLHw"
                            className="bg-slate-400 ads-side mx-auto"
                        >
                            <picture>
                                <source
                                    type="image/webp"
                                    srcSet={`${image_ads}`}
                                />
                                <img
                                    src={image_ads}
                                    alt="premium-ads"
                                    loading="lazy"
                                    fetchpriority="high"
                                />
                            </picture>
                        </div>
                    </a>
                ) : (
                    compoments_ads_row
                )}
            </div>

            {/* END ADS */}

            {data_value.length > 0 ? (
                <div
                    className={`flex justify-between ${
                        status ? "py-5" : "pb-4"
                    } xl:px-3 md:px-3 `}
                >
                    <h2 className="font-semibold wrapper-title xl:text-base lg:text-sm md:text-sm ">
                        Artikel Terpopuler{" "}
                    </h2>
                    <a
                        href={`/artikel/populer`}
                        className="text-sm xl:text-sm lg:text-sm md:text-xs"
                    >
                        Selanjutnya
                    </a>
                </div>
            ) : (
                ""
            )}

            {data_value.map((value, key) =>
                key <= 2 ? (
                    <div key={key} className="mb-2 xl:px-3 md:px-3 ">
                        <a
                            href={`/${value["countVisitorable"]["category"][
                                "name"
                            ].toLowerCase()}/${
                                value["countVisitorable"].sj_code
                            }/${removeSpace(
                                value["countVisitorable"]["title"].toLowerCase()
                            )}`}
                            className="grid grid-cols-2 place-content-start bg-white     text-slate-950 gap-4 "
                            key={key}
                        >
                            <div
                                className={`bg-black h-fit${
                                    value.main_image
                                        ? "h-full xl:h-fit md:h-fit sm:h-full bg-black"
                                        : ""
                                }`}
                                target="_blank"
                            >
                                <picture>
                                    <source
                                        type="image/webp"
                                        srcSet={`${value["countVisitorable"]["webp_image"]}`}
                                    />
                                    <img
                                        alt={value.title}
                                        fetchpriority="high"
                                        loading="lazy"
                                        src={
                                            value["countVisitorable"][
                                                "main_image"
                                            ] !==
                                            `https://c.soulofjakarta.id/images/default/articles/IMAGEDEFAULTARTIKEL.jpg`
                                                ? value["countVisitorable"][
                                                      "main_image"
                                                  ]
                                                : ImageDefault
                                        } // use normal <img> attributes as props
                                        placeholder={ImageDefault}
                                        className="aspect-video bg-slate-300 w-full image-recomendation hover:opacity-75"
                                    />
                                </picture>
                            </div>
                            <div className="leading-normal mt-0">
                                <h3
                                    className="mb-2 font-root font-bold tracking-tight text-gray-900 text-sm xl:text-xs lg:text-xs space-y-4 font-side"
                                    title={value["countVisitorable"]["title"]}
                                >
                                    {value["countVisitorable"]["title"]}
                                </h3>
                                <span className="text-xs font-side-category">
                                    {
                                        value["countVisitorable"]["category"][
                                            "name"
                                        ]
                                    }{" "}
                                    -{" "}
                                    {value["countVisitorable"]["publish_date"]}
                                </span>
                            </div>
                        </a>
                    </div>
                ) : (
                    ""
                )
            )}
        </div>
    );
};

export default PopularArticle;
