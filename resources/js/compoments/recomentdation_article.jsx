import { removeSpace } from "../helper/helper";

import ImageDefault from "@asset/noImage.png";
import { useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import React from "react";
const IdAds = import.meta.env.VITE_ADS_ID;

const RecommendationArticle = ({ data_value, image_ads, status, url }) => {
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

    //Detect ImageOnload
    const [image_status, setImageStatus] = useState(true);

    const onLoad = () => {
        setImageStatus(false);
    };

    return (
        <div className="bg-white z-40 relative">
            {/* ADS */}
            {status ? (
                <a href={url}>
                    <div className="mx-auto rounded-md cursor-pointer">
                        <div
                            id="ADOP_V_ewwhYbFLHw"
                            className={` mx-auto ${
                                image_ads ? "" : "ads-side bg-slate-400"
                            }`}
                        >
                            <picture>
                                <source
                                    type="image/webp"
                                    srcSet={`${image_ads?.image_ads}`}
                                />
                                <img
                                    alt={image_ads?.image_ads}
                                    src={image_ads?.image_ads} // use normal <img> attributes as props
                                    className="lazy"
                                    loading="lazy"
                                    fetchpriority="high"
                                />
                            </picture>
                        </div>
                    </div>
                </a>
            ) : (
                compoments_ads_row
            )}

            {/* END ADS */}

            {data_value.length > 0 ? (
                <div
                    className={`flex justify-between ${
                        status ? "py-5" : "pb-5"
                    } xl:px-3 md:px-3 mt-5`}
                >
                    <h2 className="font-semibold wrapper-title xl:text-base lg:text-sm md:text-sm ">
                        Rekomendasi Terpopuler
                    </h2>
                    <a
                        href={`/artikel/rekomendasi`}
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
                            href={`/${value.category.name.toLowerCase()}/${
                                value.sj_code
                            }/${removeSpace(value.title.toLowerCase())}`}
                            className="grid grid-cols-2 place-content-start bg-white     text-slate-950 gap-4 "
                        >
                            <div
                                className={`bg-black h-fit${
                                    value.main_image
                                        ? " xl:h-fit md:h-fit sm:h-fit bg-black"
                                        : ""
                                }`}
                            >
                                <picture>
                                    <source
                                        type="image/webp"
                                        srcSet={`${value.webp_image}`}
                                    />
                                    <img
                                        alt={value.title}
                                        fetchpriority="high"
                                        loading="lazy"
                                        src={
                                            value.main_image !==
                                            `https://c.soulofjakarta.id/images/default/articles/IMAGEDEFAULTARTIKEL.jpg`
                                                ? value.main_image
                                                : ImageDefault
                                        }
                                        placeholder={ImageDefault}
                                        className="aspect-video object-cover bg-slate-300 image-recomendation hover:opacity-75"
                                    />
                                </picture>
                            </div>

                            <div className="leading-normal mt-0">
                                <h3
                                    className="mb-2 font-root font-bold tracking-tight text-gray-900 text-sm xl:text-xs lg:text-xs space-y-4 font-side"
                                    title={value.title}
                                >
                                    {value.title}
                                </h3>
                                <span className="text-xs font-side-category">
                                    {value.category.name} - {value.publish_date}
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

export default RecommendationArticle;
