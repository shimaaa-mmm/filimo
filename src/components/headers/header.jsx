import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFire,
  faHorse,
  faSearch,
  faShoppingCart,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss"; 

const CustomHeader = () => (
  <header className="bg-dark text-light header-sticky">
    <div className="container" style={{ direction: "rtl" }}>
      <div className="d-flex justify-content-between align-items-center ">
        <Link to="/">
          <img
            src="/public/images/fa-filimo-dark-logo.webp"
            alt="لوگو"
            className="img-fluid custom-border-start"
            style={{ maxWidth: "126px", height: "auto", marginRight:'-20px' }}
          />
        </Link>
        <nav className="navbar navbar-expand-lg navbar-dark flex-grow-1 " style={{marginRight:'20px'}} >
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav d-flex flex-row align-items-center mb-0">
              <li className="nav-item">
                <Link
                  className="nav-link d-flex align-items-center"
                  to="/filimotor"
                >
                  <FontAwesomeIcon
                    className="me-1"
                    icon={faFire}
                    style={{ marginLeft: "7px" }}
                  />
                  فیلیموتور
                </Link>
              </li>
              <li className="nav-item dropdown hover-dropdown">
                <Link
                  className="nav-link dropdown-toggle d-flex align-items-center "
                  to="/movies"
                  id="moviesDropdown"
                  role="button"
                >
                  فیلم‌ها
                </Link>
                <ul className="dropdown-menu" aria-labelledby="moviesDropdown">
                  <li>
                    <Link className="dropdown-item" to="/western">
                      وسترن
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/sports">
                      ورزشی
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/documentary">
                      مستند
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/historical">
                      تاریخی
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown hover-dropdown">
                <Link
                  className="nav-link dropdown-toggle d-flex align-items-center"
                  to="/series"
                  id="seriesDropdown"
                  role="button"
                >
                  سریال‌ها
                </Link>
                <ul className="dropdown-menu" aria-labelledby="seriesDropdown">
                  <li>
                    <Link className="dropdown-item" to="/western">
                      وسترن
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/sports">
                      ورزشی
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/documentary">
                      مستند
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/historical">
                      تاریخی
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown hover-dropdown">
                <Link
                  className="nav-link dropdown-toggle d-flex align-items-center"
                  to="/collections"
                  id="collectionsDropdown"
                  role="button"
                >
                  مجموعه‌ها
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="collectionsDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/western">
                      وسترن
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/sports">
                      ورزشی
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/documentary">
                      مستند
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/historical">
                      تاریخی
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link d-flex align-items-center"
                  to="/iranian"
                >
                  ایرانی
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link d-flex align-items-center"
                  to="/foreign"
                >
                  خارجی
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link d-flex align-items-center"
                  to="/filimoschool"
                >
                  <FontAwesomeIcon
                    className="me-2"
                    icon={faHorse}
                    style={{ marginLeft: "7px" }}
                  />
                  فیلیمومدرسه
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link d-flex align-items-center"
                  to="/search"
                >
                  <FontAwesomeIcon
                    className="me-2"
                    icon={faSearch}
                    style={{ marginLeft: "7px" }}
                  />
                  جستجو
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="d-flex align-items-center">
          <Link
            className="btn btn-custom-subscription ui-btn-purchase me-2 d-flex align-items-center text-size-14 bg-success text-white"
            to="/subscription"
          >
            <FontAwesomeIcon className="me-2" icon={faShoppingCart} />
            خرید اشتراک
          </Link>
          <Link
            className="btn btn-custom-login d-flex align-items-center text-size-14 bg-secondary text-white"
            to="/login"
          >
            ورود
          </Link>
        </div>
      </div>
    </div>
  </header>
);

export default CustomHeader;
