import "../../error.css";
import { Navbar, NavbarMobile, getSubNavbar, getSubNavbarMobile, removeSubNavbar } from "../../compoments/navbar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData, removeSpace } from "../../helper/helper";
import Loading from "../../compoments/loading";
const NoMatch = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    //Call API
  const eventDashboard = async () => {
    const ress = await fetchData("main", "POST", "");
    if (ress.success === true) {
      setLoading(false);
      window.scrollTo(0, 0);
      setCategories(ress.results.categories);
    } else {
      alert("gagal");
    }
  };

  useEffect(() => {
    eventDashboard();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar>
        <div
          className="w-full relative "
          id="navbar-dropdown-setting"
          onMouseLeave={removeSubNavbar}
          data-target="dropdownNavbar">
          <ul
            className="py-2 text-sm text-gray-400 bg-black w-44 rounded"
            aria-labelledby="dropdownLargeButton">
            {categories.map((value, key) => (
              // setSubcategories(value.subCategories),cons

              <li key={key} className="col font-base">
                <Link
                  to={`/indeks/semua/${value.name.toLocaleLowerCase()}`}
                  className="block font-medium px-4 py-2 text-base "
                  data-target={`${value.name}_wrapper`}
                  data-element={`${value.nam}_element`}
                  data-key={key}
                  onMouseMove={getSubNavbar}>
                  {value.name}
                </Link>
                <ul
                  className={`hidden   bg-black rounded-md px-4 py-2 mt-2 sub-navbar`}
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
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-6 offset-lg-3 col-sm-6 offset-sm-3 col-12 p-3 error-main">
            <div className="row">
              <div className="col-lg-8 col-12 col-sm-10 offset-lg-2 offset-sm-1">
                <h1 className="m-0">404</h1>
                <h6>Page not found - soulofjakarta.id</h6>
                <p>
                  This page you are looking for is not found. Please click{" "}
                  <a href="/">
                    <b>Back </b>
                  </a>
                  to previos page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

 
};

export default NoMatch;
