import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faGamepad,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss"; // Import custom CSS for grid styling

const WatchSection = () => {
  return (
    <section id="watch" className=" text-light py-5" style={{background:'#000'}}>
      <div className="container">
        <div className="watch-grid">
          {/* Image on the left */}
          <div className="image-section">
            <img
              className="img-fluid"
              src="/public/images/tv.webp"
              alt="Watch on TV"
            />
          </div>

          {/* Text content on the right */}
          <div className="text-section">
            <h2
              className="fw-bold text-end"
              style={{ fontSize: "16px", marginBottom: "25px" }}
            >
              چطور با تلویزیون، فیلیمو تماشا کنم؟
            </h2>
            <p
              className="mt-4 text-end"
              style={{
                fontSize: "11px",
                color: " #d8d8d8",
                maxWidth: "400px",
                marginLeft: "149px",
              }}
            >
              ما برای راحتی شما و تماشای فیلیمو روی تلویزیون‌های مختلف 6 روش را
              فراهم کردیم. هرکدام از این 6 روش یک ویدیو آموزشی دارند که
              می‌توانید از لینک زیر، آن‌ها را تماشا کنید و روشی که با تلویزیون
              شما سازگار است را انتخاب کنید.
            </p>
            <ul
              className="list-unstyled mt-4 text-end"
              style={{ direction: "rtl", marginRight: "-41px" }}
            >
              <li className="d-flex align-items-start mb-4">
                <FontAwesomeIcon icon={faLaptop} className="ms-2 mt-1" />
                <div>
                  <p className="fw-bold mb-1 text-end" style={{
                fontSize: "14px",
                color: " #d8d8d8",
                fontWeight:'700',
                lineHeight:'15px',
                marginRight: '10px'
                
              }}>تلولویزیون </p>
                  <p className="mb-0 text-end" style={{
                fontSize: "11px",
                color: " #a1a1a1",
                fontWeight:'400',
                marginTop: '11px'
              }}>

                    Amazon Fire TV - LG TVs - Chrome Cast - Apple TV - Android
                    TV devices - Samsung
                  </p>
                </div>
              </li>
              <li className="d-flex align-items-start mb-4">
                <FontAwesomeIcon icon={faGamepad} className="ms-2 mt-1" />
                <div>
                  <p className="fw-bold mb-1 text-end"style={{
                fontSize: "14px",
                color: " #d8d8d8",
                fontWeight:'700',
                lineHeight:'15px',
                marginRight: '10px'

              }}>
                    اندروید تی‌وی(Browser)
                  </p>
                  <p className="mb-0 text-end"style={{
                fontSize: "11px",
                color: " #a1a1a1",
                fontWeight:'400',
                marginTop: '11px'
              }}>
                    NVIDIA - amazon - xiaomi - minix - skystream - turewell -
                    ematic - humax - matricom
                  </p>
                </div>
              </li>
            </ul>
            <button
              className="btn btn-dark d-flex align-items-center mt-4"
              style={{
                direction: "rtl",
                marginLeft: "305px",
                border: "solid",
                backgroundColor: "cadetblue",
                fontSize: "13px",
              }}
            >
              <span className="ms-2">ویدیوهای آموزشی تماشا با تلویزیون</span>
              <FontAwesomeIcon
                icon={faChevronLeft}
                style={{ marginTop: "3px" }}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchSection;
