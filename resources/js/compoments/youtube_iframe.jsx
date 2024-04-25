import React, { useState } from "react";
import createMarkup from "./htmlTag";

const YoutubeIframe = ({ data, status }) => {
    const [isActive, setIsActive] = useState(false);
    const IdAds = import.meta.env.VITE_ADS_ID;

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

    const onClikClose = () => {
        setIsActive(true);
    };
    return (
        <>
            {status ? (
                <div
                    className={`w-[360px] h-[220px] mx-auto my-4 video-ads ${
                        isActive === true ? "hidden" : ""
                    }`}
                >
                    <div
                        className="flex w-full justify-end cursor-pointer"
                        onClick={onClikClose}
                    >
                        <span className=" bg-red-600 px-2 fw-bold text-white text-right flex justify-center right-0 ">
                            Close
                        </span>
                    </div>
                    <div dangerouslySetInnerHTML={createMarkup(data)} />
                </div>
            ) : (
                ""
            )}
        </>
    );
};

export default YoutubeIframe;
