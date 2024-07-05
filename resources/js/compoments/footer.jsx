import { fetchData } from "../helper/helper";
import React from "react";

const Footer = () => {
    let get_years = new Date();
    get_years = get_years.getFullYear();

    const Subscribe = () => {
        let input_email = document.getElementById("email-address-icon").value;

        let alert_success = document.getElementById("alert_success");
        let alert_error = document.getElementById("alert_error");

        let loading = document.getElementById("loading");
        loading.classList.remove("hidden");

        let body = document.getElementById("body");
        body.classList.add("hidden");

        let pars = { email: input_email };

        fetchData("subscribe", "POST", pars).then((ress) => {
            loading.classList.add("hidden");
            body.classList.remove("hidden");

            console.log(ress);
            if (ress.success === true) {
                alert_error.classList.add("hidden");
                alert_success.classList.remove("hidden");
            } else {
                alert_error.classList.remove("hidden");
                alert_success.classList.add("hidden");
                setTimeout(() => {
                    alert_error.classList.add("hidden");
                }, 1500);
            }
        });
    };

    return (
        <footer className="footer-master footer-text py-10 md:py-20">
            <div className="container mx-auto flex flex-col">
                <div className="px-8 py-6 ">
                    <div className="block lg:flex flex-col gap-5 md:flex-row justify-between text-center space-y-5 relative z-40">
                        <div className="mb-6 md:mb-0">
                            <a
                                href="/"
                                className="flex items-center justify-center text-center md:justify-start  mb-4"
                            >
                                <picture>
                                    <source
                                        srcSet="/images/icon/SOUJA-LOGO-HITAM.webp"
                                        type="image/webp"
                                    />
                                    <img
                                        src="/images/icon/SOUJA-LOGO-HITAM.png"
                                        alt="soulofjakarta.id"
                                        className="h-16 mr-3 w-full"
                                    />
                                </picture>
                            </a>
                            <div className="w-100 lg:w-60 footer-text">
                                <p className="text-gray-100 font-semibold mb-2">
                                    Address
                                </p>
                                <p className="text-center font-sm text-gray-400">
                                    Sarinah Building 12th Floor, Jl. M.H.
                                    Thamrin No.11, RT.8/RW.4, Gondangdia, Kec.
                                    Menteng, Kota Jakarta Pusat, Daerah Khusus
                                    Ibukota Jakarta
                                </p>
                            </div>
                            <div className="wrapper-icon mt-10">
                                <p className="font-semibold text-gray-100">
                                    Connect With Us
                                </p>
                                <div className="flex justify-center mt-4">
                                    <a
                                        href="https://www.youtube.com/channel/UC8M0h6Q7HKZXkJds5R9c8pA"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        <picture>
                                            <source
                                                srcSet="/images/icon/yt-footer.webp"
                                                type="image/webp"
                                            />
                                            <img
                                                src="/images/icon/yt-footer.png"
                                                alt="youtube"
                                                className="icon"
                                            />
                                        </picture>
                                    </a>
                                    <a
                                        href="https://www.facebook.com/SoulofJakarta/"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        <picture>
                                            <source
                                                srcSet="/images/icon/fb-footer.webp"
                                                type="image/webp"
                                            />
                                            <img
                                                src="/images/icon/fb-footer.png"
                                                alt="facebook"
                                                className="icon"
                                            />
                                        </picture>
                                    </a>
                                    <a
                                        href="https://www.tiktok.com/@soulofjakarta"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        <picture>
                                            <source
                                                srcSet="/images/icon/tiktok-footer.webp"
                                                type="image/webp"
                                            />
                                            <img
                                                src={`/images/icon/tiktok-footer.png`}
                                                alt="tik-tok"
                                                className="icon"
                                            />
                                        </picture>
                                    </a>
                                    <a
                                        href="https://twitter.com/soulofjakarta"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        <picture>
                                            <source
                                                srcSet="/images/icon/tw-footer.webp"
                                                type="image/webp"
                                            />
                                            <img
                                                src={`/images/icon/tw-footer.png`}
                                                alt="twitter"
                                                className="icon"
                                            />
                                        </picture>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="mb-6 text-sm font-semibold text-gray-100">
                                Media Premium
                            </h4>
                            <ul className="text-gray-300 ">
                                <li>
                                    <a
                                        href={"/media-partner"}
                                        className="hover:text-master"
                                    >
                                        <button className="border-master w-full rounded-lg px-4 py-2 ">
                                            Berlangganan Premium
                                        </button>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="mb-6 text-sm font-semibold text-gray-100">
                                Subscribe Us
                            </h4>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4">
                                    <div className="grid grid-cols-3 lg:flex">
                                        <div className="relative col-span-2">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                                <svg
                                                    className="w-4 h-4 text-gray-500"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 16"
                                                >
                                                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                                </svg>
                                            </div>
                                            <input
                                                type="text"
                                                id="email-address-icon"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2 "
                                                placeholder="Alamat Email..."
                                            />
                                        </div>
                                        <button
                                            className="col ms-2 md:px-4 py-2 bg-master rounded-lg text-black text-sm"
                                            onClick={Subscribe}
                                        >
                                            Subscribe
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-300 sm:mx-autolg:my-8" />
                    <div className="flex flex-col-reverse md:flex-row justify-between gap-5">
                        <span className="text-sm text-gray-400 sm:text-center text-center">
                            © Copyright Soulofjakarta.id {get_years}
                        </span>

                        <div className="flex text-center flex-col md:flex-row gap-2 mt-4 md:space-x-5 sm:justify-center sm:mt-0 footer-group text-gray-400 z-10">
                            <a
                                href="pasang-iklan"
                                target="_blank"
                                rel="noopener"
                            >
                                Pasang Iklan
                            </a>
                            <a
                                href="kebijakan-privasi"
                                target="_blank"
                                rel="noopener"
                            >
                                Kebijakan Privasi
                            </a>
                            <a
                                href="syarat-ketentuan"
                                target="_blank"
                                rel="noopener"
                                className="hover:text-master"
                            >
                                Syarat Dan Ketentuan
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
