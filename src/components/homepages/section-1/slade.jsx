import React, { useState, useEffect } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faFilm, faGift } from "@fortawesome/free-solid-svg-icons";

const Slide = () => {
  const images = [
    "/public/images/m76ft_desktop_1_v6.webp",
    "/public/images/1upx4_desktop_1_v1.webp",
    "/public/images/dhcu7_desktop_1_v1.webp",
    "/public/images/tkdah_desktop_1_v1.webp",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change the image every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div
      className="container-fluid position-relative text-white hero-section"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        // height: "100%",
        position: "absolute",
        top:'0',
        left: 0,
        right: 0,
        zIndex: 2,
        transition: "background-image 1s ease-in-out", // Smooth transition between images
      }}
    >
      {/* Radial Gradient Overlay */}
      <div className="radial-overlay"></div>

      {/* Linear Gradient Overlay */}
      <div className="linear-overlay"></div>

      <div className="row h-100 align-items-center justify-content-center text-center">
        <div className="col-10">
          {/* متن جدید */}
          <div className="display-4 mb-1 fs-6 text-warning">
            با فیلیمو بی‌وقفه فیلم ببین
          </div>

          {/* متن قبلی */}
          <h1 className="display-3 fs-1">کنترل همیشه دست توست!</h1>

          {/* سه تایتل در یک ردیف */}
          <div
            className="row mt-4"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              marginRight:' -67px',
              alignItems: "center",
              direction: "rtl",
            }}
          >
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faCheckCircle} className="me-2" />
              <h4
                className="text-white mb-0"
                style={{ fontSize: "15px", width: "272px" }}
              >
                95 هزار اپیزود فیلم و سریال برای تماشا داری
              </h4>
            </div>
            <div className="d-flex align-items-center" style={{marginRight: '-27px'}}>
              <FontAwesomeIcon icon={faCheckCircle} className="me-2" />
              <h4
                className="text-white mb-0"
                style={{ fontSize: "15px", width: "300px" }}
              >
                می‌تونی دانلود کنی بعد بدون اینترنت تماشا کنی
              </h4>
            </div>
            <div
              className="d-flex align-items-center"
              style={{ marginRight: " -19px" }}
            >
              <FontAwesomeIcon icon={faCheckCircle} />
              <h4
                className="text-white mb-0"
                style={{ fontSize: "15px", width: "351px", marginLeft: "-5px" }}
              >
                می‌تونی یک عضو، مخصوص تماشای کودک بسازی
              </h4>
            </div>
          </div>

          <button
            className="btn btn-success btn-lg fs-6"
            style={{ marginTop: "72px" }}
          >
            خرید اشتراک و تماشا
            <FontAwesomeIcon icon={faFilm} style={{ marginLeft: "9px" }} />
          </button>
          <div className="div ">
            <p
              className="span fw-light"
              style={{ fontSize: "12px", marginTop: "10px" }}
            >
              تخفیف ویژه برای کاربران جدید
              <FontAwesomeIcon icon={faGift} style={{ marginLeft: "9px" }} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
