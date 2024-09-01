import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";
import {
  faLaptop,
  faMobile,
  faGamepad,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";

const HowToWatch = () => {
  return (
    <section id="how_to_watch" style={{ marginBottom: "75px" }}>
      <div className="container mt-16">
        <div className="row align-items-center">
          <div className="col-md-6" style={{ direction: "rtl" }}>
            <h2
              className="font-bold text-2xl text-white"
              style={{
                fontWeight: "700",
                fontSize: "16px",
                lineHeight: "18px",
                marginTop: "7px",
              }}
            >
              تماشای فیلیمو با همه ی دستگاه ها
            </h2>
            <p
              className=" text-font-100 text-white"
              style={{
                fontWeight: "500",
                fontSize: "13px",
                lineHeight: "25px",
                textAlign: "right",
                color: "#d8d8d8",
                marginTop: "1.25rem",
                marginBottom: "1.25rem",
              }}
            >
              می‌توانید فیلیمو را به صورت هم‌زمان روی 3 دستگاه مختلف مثل موبایل،
              تبلت، لپ‌تاپ، تلویزیون و... تماشا کنید.
            </p>
            <ul
              className="text-font-100 list-unstyled"
              style={{ marginRight: "-40px" }}
            >
              <li className="d-flex gap-2 align-items-start mb-10" style={{  marginTop: '14px'}}>
                <FontAwesomeIcon
                  icon={faLaptop}
                  className="mt-1.5"
                  style={{ marginLeft: "10px" }}
                />
                <div
                  className="d-flex flex-column gap-1"
                  style={{ alignItems: "flex-start", textAlign: "right" }}
                >
                  <h1
                    className="font-bold text-white"
                    style={{
                      fontWeight: "700",
                      fontSize: "16px",
                      lineHeight: "18px",
                    }}
                  >
                    کامپیوتر و لب تاب
                  </h1>
                  <p
                    className="text-sm text-white"
                    style={{
                      fontWeight: "100",
                      fontSize: "13px",
                      lineHeight: "25px",
                      textAlign: "right",
                      color: "#d8d8d8",
                    }}
                  >
                    Windows PC - MacOS - Chrome OS
                  </p>
                </div>
              </li>
              <li className="d-flex gap-2 align-items-start mb-10">
                <FontAwesomeIcon icon={faMobile} className="mt-1.5"  style={{marginLeft: '10px'}}/>
                <div className="d-flex flex-column gap-1" style={{  marginTop: '14px'}}>
                  <h1
                    className="font-bold text-white"
                    style={{
                      fontWeight: "700",
                      fontSize: "16px",
                      lineHeight: "18px",
                    }}
                  >
                    موبایل و تبلت
                  </h1>
                  <h1
                    className="text-sm text-white"
                    style={{
                      fontWeight: "100",
                      fontSize: "13px",
                      lineHeight: "25px",
                      textAlign: "right",
                      color: "#d8d8d8",
                    }}
                  >
                    Android Phone & Tablets - iPhone and iPad - Amazon Fire
                    Tablets
                  </h1>
                </div>
              </li>
              <li className="d-flex gap-2 align-items-start mb-10" style={{  marginTop: '18px'}}>
                <FontAwesomeIcon icon={faGamepad} className="mt-1.5" />
                <div className="d-flex flex-column gap-1">
                  <h1
                    className="font-bold text-white"
                    style={{
                      fontWeight: "700",
                      fontSize: "16px",
                      lineHeight: "18px",
                    }}
                  >
                    کنسول‌های بازی (Browser)
                  </h1>
                  <p
                    className="text-sm text-white"
                    style={{
                      fontWeight: "100",
                      fontSize: "13px",
                      lineHeight: "25px",
                      textAlign: "right",
                      color: "#d8d8d8",
                    }}
                  >
                    Xbox Series S - Xbox Series X - PS5 - PS4
                  </p>
                </div>
              </li>
              <li style={{ marginTop: "16px" }}>
                <a
                  className=" rounded px-2 py-2 mx-auto text-white font-bold text-sm hover:opacity-100 transition-opacity"
                  style={{
                    backgroundColor: "#1cb561",
                    marginLeft: "9px",
                    fontSize: "13px",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faTicket}
                    style={{ marginLeft: "9px" }}
                  />
                  خرید اشتراک و تماشا
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-6 text-center text-md-right">
            <img
              className="img-fluid"
              src="/../public/images/whtch.webp"
              alt="devices"
              style={{ marginLeft: "40px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToWatch;
