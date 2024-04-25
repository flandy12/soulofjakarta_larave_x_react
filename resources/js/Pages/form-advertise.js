import { useEffect, useState } from "react";
import { fetchData, removeSpace } from "../helper/helper";
import {
  Navbar,
  NavbarMobile,
  getSubNavbar,
  getSubNavbarMobile,
  removeSubNavbar
} from "../compoments/navbar";
import { Link } from "react-router-dom";
import Loading from "../compoments/loading";

const FormAds = () => {
  const [categories, setcategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message_error, setMessageError] = useState("");
  const [click, setClick] = useState(false);

  useEffect(() => {
    setLoading(true);
    eventDashboard();
  }, []);

  //Call API
  const eventDashboard = async () => {
    const ress = await fetchData("main", "POST", "");
    if (ress.success === true) {
      setLoading(false);
      window.scrollTo(0, 0);
      setcategories(ress.results.categories);
    } else {
      alert("gagal");
    }
  };

  const SubmitFormAds = async () => {
    setMessageError("");
    setLoading(true);
    setClick(true);
    let data_checkbox = document.querySelectorAll(
      'input[name="data_ads"]:checked'
    );
    let arr_category_checkbox = [];

    data_checkbox.forEach(e => {
      arr_category_checkbox.push(e.value);
    });

    var data_user = JSON.stringify({
      full_name: document.getElementById("FormControlInputName").value,
      email: document.getElementById("exampleFormEmail").value,
      phone_number: document.getElementById("PhoneNumber").value,
      details: arr_category_checkbox,
      message: document.getElementById("exampleFormControlTextarea1").value
    });

    const ress = await fetch(
      `${
        process.env.REACT_APP_ENVIRONMENT !== "production"
          ? `${process.env.REACT_APP_URL_DEV}`
          : `${process.env.REACT_APP_URL}`
      }ads/contact-us`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            process.env.REACT_APP_ENVIRONMENT !== "production"
              ? `Bearer ${process.env.REACT_APP_KEY_DEV}`
              : `Bearer ${process.env.REACT_APP_KEY}`
        },
        body: data_user // Masukkan data formulir di sini
      }
    );
    const ressponse = ress.json();
    ressponse.then(resss =>
      resss.status === true
        ? (alert("Berhasil Terkirim"), window.scrollTo(0, 0), setClick(false))
        : (setMessageError(resss.errors),
          console.log(message_error),
          setClick(false))
    );
  };

  return (
    <>
      <Navbar>
        <div
          className="w-full relative "
          id="navbar-dropdown-setting"
          onMouseLeave={removeSubNavbar}
          data-target="dropdownNavbar">
          <ul
            className="py-2 text-sm text-gray-400 bg-black w-44 rounded font-base"
            aria-labelledby="dropdownLargeButton">
            {categories.map((value, key) => (
              // setSubcategories(value.subCategories),cons

              <li key={key} className="col">
                <Link
                  to={`/indeks/semua/${value.name.toLocaleLowerCase()}`}
                  className="block text-base font-medium px-4 py-2"
                  data-target={`${value.name}_wrapper`}
                  data-element={`${value.nam}_element`}
                  data-key={key}
                  onMouseMove={getSubNavbar}>
                  {value.name}
                </Link>
                <ul
                  className={`hidden   bg-black rounded-md px-4 py-2 mt-2 sub-navbar font-base`}
                  id={`${value.name}_wrapper`}>
                  {categories[key].subCategories.map((values, keys) => (
                    <li className="py-2" key={keys}>
                      <Link
                        to={`/indeks/semua/${value.name.toLocaleLowerCase()}/${removeSpace(
                          values.name.toLocaleLowerCase()
                        )}`}>
                        <div className="flex items-center space-x-4">
                          <span className="text-base">{values.name}</span>
                        </div>
                      </Link>
                    </li>
                  ))}
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
            aria-labelledby="dropdownLargeButton">
            {categories.map((value, key) => (
              <li
                key={key}
                className="col border rounded bg-white item-dropdown text-black"
                id={`${value.name}_dropdown`}>
                <div
                  className="block font-medium px-4 py-2 cursor-pointer"
                  data-target={`${value.name}_wrapper_mobile`}
                  data-element={`${value.name}_dropdown`}
                  data-key={key}
                  onClick={getSubNavbarMobile}>
                  {value.name}
                </div>
                <ul
                  className={`hidden py-2 px-4 bg-white text-sm text-gray-400 rounded font-base w-full sub-navbar cursor-pointer`}
                  id={`${value.name}_wrapper_mobile`}>
                  {categories[key].subCategories.map((values, keys) => (
                    <li className="col py-2" key={keys}>
                      <Link
                        to={`/indeks/semua/${value.name.toLocaleLowerCase()}/${removeSpace(
                          values.name.toLocaleLowerCase()
                        )}`}
                        className="cursor-pointer">
                        <div className="flex items-center space-x-4">
                          <span className="">{values.name}</span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </NavbarMobile>

      <div className="my-10">
        <div className="w-[600px] max-sm:w-full mx-auto shadow-xl px-5 py-10">
          <img src="/lmage/icon/SOUJA-LOGO-PUTIH.webp" className="h-16 mx-auto mb-5" alt="" />
          <div className="">
            <div className="mb-5">
              <label
                htmlFor="FormControlInputName"
                className="block mb-2 text-sm font-medium text-gray-500 ">
                Nama Lengkap
              </label>

              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Masukan nama lengkap"
                id="FormControlInputName"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-500 ">
                Email
              </label>
              <input
                type="email"
                id="exampleFormEmail"
                placeholder="Masukan Email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>

            <div className="space-y-5">
              <label
                htmlFor="exampleFormControlInput1"
                className="mb-5 font-medium text-gray-500">
                Pilih Advertising dibawah ini :
              </label>
              <div className="space-y-3">
                <div className="flex gap-5">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Article Promote"
                    id="flexCheckDefault"
                    name="data_ads"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault">
                    Article Promote
                  </label>
                </div>
                <div className="flex gap-5">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Article Row"
                    id="flexCheckDefault"
                    name="data_ads"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault">
                    Article Row
                  </label>
                </div>
                <div className="flex gap-5">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Background Banner"
                    id="flexCheckDefault"
                    name="data_ads"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault">
                    Background Banner
                  </label>
                </div>
                <div className="flex gap-5">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Headline"
                    id="flexCheckDefault"
                    name="data_ads"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault">
                    Headline
                  </label>
                </div>
                <div className="flex gap-5">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Pop Up Image"
                    id="flexCheckDefault"
                    name="data_ads"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault">
                    Pop Up Image
                  </label>
                </div>
                <div className="flex gap-5">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Pop Up Video"
                    id="flexCheckDefault"
                    name="data_ads"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault">
                    Pop Up Video
                  </label>
                </div>
                <div className="flex gap-5">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Premium Banner"
                    id="flexCheckDefault"
                    name="data_ads"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault">
                    Premium Banner
                  </label>
                </div>
                <div className="flex gap-5">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Regular Banner"
                    id="flexCheckDefault"
                    name="data_ads"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault">
                    Regular Banner
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-5 mt-5">
              <label
                htmlFor="FormControlInputName"
                className="block mb-2 text-sm font-medium text-gray-500 ">
                Phone Number - (WA)
              </label>

              <div className="number_wrapper relative ">
                <span className="absolute top-2 bottom-3 left-3">+62</span>
                <input
                  type="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-12"
                  id="PhoneNumber"
                  placeholder=""
                  name="phoneNumber"
                />
              </div>
            </div>

            <div className="mb-5">
              <label  htmlFor="FormControlInputName"
                className="block mb-2 text-sm font-medium text-gray-500 ">Pesan (Optional)</label>
              <textarea
                className="form-control w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
                id="exampleFormControlTextarea1"
                placeholder="Pesan"
                rows="3"
                name="pesan"></textarea>
            </div>

            <div
              className={`bg-red-200 p-5 ${
                message_error === `` ? "hidden" : ""
              }`}>
              <ul className="space-y-3">
                {Object.values(message_error).map((val, key) => (
                  <li className="text-red-600">{val}</li>
                ))}
              </ul>
            </div>

            <button
              type="submit"
              className={`${
                click ? "hidden" : ""
              }text-black bg-master focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-5`}
              onClick={SubmitFormAds}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormAds;
