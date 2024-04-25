import React from "react";
let image_load = true;

const IdAds = import.meta.env.VITE_ADS_ID;

const AdsBennerSide = () => {
    return (
        <>
            <div className=" mt-2">
                <div className="w-full ads-headline-desktop"></div>
            </div>
        </>
    );
};

const AdsBennerSideLeft = ({ image, url, status }) => {
    const compoments_ads_left = (
        <ins
            className="adsbygoogle"
            style={{ display: "display:block" }}
            data-ad-format="fluid"
            data-ad-layout-key="-fk+5v+5o-cr+3t"
            data-ad-client={`ca-pub-${IdAds}`}
            data-ad-slot="4425187940"
        ></ins>
    );

    return status ? (
        <div
            className={`${
                image_load !== true ? "" : ""
            } ads-side-premium ads-side-premium-left xl:block lg:block md:block sm:hidden`}
        >
            <a href={url}>
                <picture>
                    <source type="image/webp" srcSet={`${image}`} />
                    <img
                        loading="lazy"
                        fetchpriority="high"
                        src={image}
                        alt={"ads-side"}
                        height={image.height}
                        width={image.width}
                        className="w-full xl:block lg:block md:block sm:hidden"
                        srcSet={`${image} 100w,
                            ${image} 120w,
                            ${image} 150w`}
                        sizes="(max-width: 120px) 120vw, (max-width: 150px) 50vw, (max-width: 0px) 33vw, 900px"
                    />
                </picture>
            </a>
        </div>
    ) : (
        compoments_ads_left
    );
};

const AdsBennerSideRight = ({ image, url, status }) => {
    const compoments_ads_right = (
        <ins
            className="adsbygoogle"
            style={{ display: "display:block" }}
            data-ad-format="fluid"
            data-ad-layout-key="-fk+5v+5o-cr+3t"
            data-ad-client={`ca-pub-${IdAds}`}
            data-ad-slot="4425187940"
        ></ins>
    );

    return status ? (
        <div
            className={`${
                image_load !== true ? "" : ""
            } ads-side-premium ads-side-premium-right xl:block lg:block md:block sm:hidden`}
        >
            <a href={url}>
                <picture>
                    <source type="image/webp" srcSet={`${image}`} />
                    <img
                        loading="lazy"
                        fetchpriority="high"
                        src={image}
                        alt={"ads-side"}
                        height={image.height}
                        width={image.width}
                        className="w-full xl:block lg:block md:block sm:hidden"
                        srcSet={`${image} 300w,
                            ${image} 600w,
                            ${image} 900w`}
                        sizes="(max-width: 300px) 100vw, (max-width: 600px) 50vw, (max-width: 900px) 33vw, 900px"
                    />
                </picture>
            </a>
        </div>
    ) : (
        compoments_ads_right
    );
};

const AdsBennerMobile = ({ image, url, status }) => {
    const compoments_ads_left = (
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
        <div className="bg-black  bg-fixed block relative z-40 md:hidden">
            <div className="w-full bg-fixed">
                {status ? (
                    <>
                        <a
                            href={url}
                            target="_blank"
                            className="flex justify-center"
                        >
                            <picture>
                                <source type="image/webp" srcSet={`${image}`} />
                                <img
                                    fetchpriority="high"
                                    loading="lazy"
                                    src={image}
                                    alt={"ads-side"}
                                    height={image.height}
                                    width={image.width}
                                    className="w-full bg-fixed"
                                    srcSet={`${image} 150w,
                                ${image} 300w,
                                ${image} 450w`}
                                />
                            </picture>
                        </a>
                        <div className="bg-master text-center font-semibold py-1">
                            {" "}
                            Scroll To Continue With Content
                        </div>
                    </>
                ) : (
                    compoments_ads_left
                )}
            </div>
        </div>
    );
};

const AdsRow = ({ image, data, url }) => {
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

    return data === true ? (
        <a href={url} target="_blank" className="relative z-40">
            <picture>
                <source type="image/webp" srcSet={`${image}`} />
                <img
                    loading="lazy"
                    src={image}
                    fetchpriority="high"
                    alt={"ads"}
                    height={image.height}
                    width={image.width}
                    className="w-full lazy"
                />
            </picture>
        </a>
    ) : (
        compoments_ads_row
    );
};

const AdsBennerDesktop = ({ image, url, status }) => {
    const compoments_desktop_ads = (
        <ins
            className="adsbygoogle"
            style={{ display: "display:block" }}
            data-ad-format="fluid"
            data-ad-layout-key="-fk+5v+5o-cr+3t"
            data-ad-client={`ca-pub-${IdAds}`}
            data-ad-slot="4425187940"
        ></ins>
    );
    return status ? (
        <div className="xl:block md:block mb-3 z-30">
            <div className="w-full ads-headline-desktop ">
                <a href={url}>
                    <picture>
                        <source type="image/webp" srcSet={`${image}`} />
                        <img
                            loading="lazy"
                            fetchpriority="high"
                            src={image}
                            alt={"ads-headline-desktop"}
                            height={image.height}
                            width={image.width}
                            className="w-full"
                        />
                    </picture>
                </a>
            </div>
        </div>
    ) : (
        compoments_desktop_ads
    );
};

export {
    AdsBennerSide,
    AdsBennerSideLeft,
    AdsBennerSideRight,
    AdsBennerMobile,
    AdsRow,
    AdsBennerDesktop,
};
