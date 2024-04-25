import { useState } from "react";
import { removeSpace } from "../helper/helper";
import { Link } from "@inertiajs/inertia-react";
import React from "react";

const SelectedArticles = ({ hot_event_articles, hot_lifestyle_articles }) => {
    const [navbar_name, setNavbarName] = useState("event");

    const getElementDiv = (e) => {
        const getName = e.target.getAttribute("data-element");
        setNavbarName(getName);
    };

    return (
        <div className="sticky top-28 bg-white z-40 max-md:mt-5">
            <div>
                <div className="flex justify-between mb-6 xl:px-3 md:px-3 ">
                    {hot_event_articles.length > 0 ||
                    hot_lifestyle_articles.length > 0 ? (
                        <h2 className="font-semibold wrapper-title ">
                            Artikel Pilihan
                        </h2>
                    ) : (
                        ""
                    )}
                </div>

                {hot_event_articles.length > 0 ||
                hot_lifestyle_articles.length > 0 ? (
                    <div className="flex flex-row text-center cursor-pointer xl:px-3 md:px-3 ">
                        <div
                            className={`p-2 w-full button-category font-semibold ${
                                navbar_name === "event"
                                    ? "button-category-active"
                                    : ""
                            } `}
                            onClick={getElementDiv}
                            data-element="event"
                        >
                            Event
                        </div>
                        <div
                            className={`p-2 w-full button-category font-semibold ${
                                navbar_name === "lifestyle"
                                    ? "button-category-active"
                                    : ""
                            }`}
                            onClick={getElementDiv}
                            data-element="lifestyle"
                        >
                            Lifestyle
                        </div>
                    </div>
                ) : (
                    ""
                )}

                <div
                    className={`py-3    ${
                        navbar_name === "event" ? "" : "hidden"
                    }`}
                    id="event"
                >
                    {hot_event_articles.map((value, key) =>
                        key <= 5 ? (
                            <div key={key} className="">
                                <a
                                    href={`/${removeSpace(
                                        value.article.category.name.toLocaleLowerCase()
                                    )}/${value.article.sj_code}/${removeSpace(
                                        value.article.title.toLocaleLowerCase()
                                    )}`}
                                    className="flex items-center bg-white hover:bg-gray-100 p-3 "
                                >
                                    <p className="font-root text-2xl me-3 pr-2">
                                        {key + 1}
                                    </p>

                                    <div className="content max-md:m-0">
                                        <h3
                                            className="font-root font-semibold line-height text-sm"
                                            title={value.article.title}
                                        >
                                            {value.article.title}
                                        </h3>
                                        <span className="time ">
                                            <p className="text-black-50 text-gray-800 mt-1 text-sm">
                                                {value.article.publish_date}
                                            </p>
                                        </span>
                                    </div>
                                </a>
                            </div>
                        ) : (
                            ""
                        )
                    )}
                </div>

                <div
                    className={`py-5 ${
                        navbar_name === "lifestyle" ? "" : "hidden"
                    }`}
                    id="lifestyle"
                >
                    {hot_lifestyle_articles.map((value, key) =>
                        key <= 5 ? (
                            <div key={key} className="">
                                <a
                                    href={`/${removeSpace(
                                        value.article.category.name.toLocaleLowerCase()
                                    )}/${value.article.sj_code}/${removeSpace(
                                        value.article.title.toLocaleLowerCase()
                                    )}`}
                                    className="flex items-center bg-white hover:bg-gray-100 p-3"
                                >
                                    <p className="font-root text-2xl me-3 pr-2">
                                        {key + 1}
                                    </p>

                                    <div className="content">
                                        <h3
                                            className="font-root font-semibold line-height text-sm"
                                            title={value.article.title}
                                        >
                                            {value.article.title}
                                        </h3>
                                        <span className="time ">
                                            <p className="text-black-50 text-gray-800 mt-1 text-sm">
                                                {value.article.publish_date}
                                            </p>
                                        </span>
                                    </div>
                                </a>
                            </div>
                        ) : (
                            ""
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default SelectedArticles;
