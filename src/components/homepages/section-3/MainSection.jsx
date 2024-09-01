import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss"; // Ensure your SCSS file is imported

const MainSection = () => {
  const filmImages = [
    "https://static.cdn.asset.filimo.com/flmt/mov_148098_181296-b.jpg?width=165&quality=85&secret=gzDK5yWc42l_tg4BxJ9G2w", // اولین عکس
    "https://static.cdn.asset.filimo.com/flmt/mov_147944_175967-b.jpg?width=165&quality=85&secret=8afsYdnys9IB6bnAzosnIA", // Image to trigger "پالتو شتری"
    "https://static.cdn.asset.filimo.com/flmt/mov_147582_169763-b.jpg?width=165&quality=85&secret=IQOO3rv0j00djITmVhr_zA",
    "https://static.cdn.asset.filimo.com/flmt/mov_147067_158271-b.jpg?width=165&quality=85&secret=vmDbX95YdDXTYfCGMk0O5g",
    "https://static.cdn.asset.filimo.com/flmt/mov_146927_169518-b.jpg?width=165&quality=85&secret=RDqxFV3mtqqlrlze3obYZQ",
    "https://static.cdn.asset.filimo.com/flmt/mov_17534_163713-b.jpg?width=165&quality=85&secret=DRZANmb1O6U-lF1Tdno23w",
  ];

  const [activeCategory, setActiveCategory] = useState("serial");
  const [selectedImage, setSelectedImage] = useState(null); // State for selected image

  const serialImages = [
    "https://static.cdn.asset.filimo.com/flmt/mov_149311_185433-b.jpg?width=165&quality=85&secret=LRtV-V8-DlVQHjlzT1NkGA",
    "https://static.cdn.asset.filimo.com/flmt/mov_149252_185425-b.jpg?width=165&quality=85&secret=6r55ujy5AAo6fsDAZN-Bfg",
    "https://static.cdn.asset.filimo.com/flmt/mov_149058_184625-b.jpg?width=165&quality=85&secret=lU8fYzqz5susvgZOWsLjTA",
    "https://static.cdn.asset.filimo.com/flmt/mov_149310_185431-b.jpg?width=165&quality=85&secret=cpcSzDiCiprTI5RV3ZJg1Q",
    "https://static.cdn.asset.filimo.com/flmt/mov_149096_185050-b.jpg?width=165&quality=85&secret=WV09PA_zs2xWSwn2n_5wAA",
    "https://static.cdn.asset.filimo.com/flmt/mov_149249_185276-b.jpg?width=165&quality=85&secret=fDjtJ67xTIbVg--Bvyhgvw",
  ];

  const displayedImages = activeCategory === "film" ? filmImages : serialImages;

  return (
    <section className="section" id="main_section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="d-flex align-items-center mb-4"
              style={{ direction: "rtl", marginTop: "47px" }}
            >
              <div
                className="d-flex flex-grow-0 text-white"
                style={{ marginLeft: "28px" }}
              >
                <div
                  className="flex-grow-1 text-end"
                  style={{ fontSize: "22px" }}
                >
                  محبوب‌ترین‌های فیلیمو
                </div>
              </div>
              <div className="js__switch_cat border rounded-pill d-flex ms-3">
                <a
                  href="#main_section"
                  className={`btn btn-link text-center category-btn ${
                    activeCategory === "serial" ? "active_s" : ""
                  }`}
                  onClick={() => setActiveCategory("serial")}
                >
                  سریال
                </a>
                <a
                  href="#main_section"
                  className={`btn btn-link text-center category-btn ${
                    activeCategory === "film" ? "active_s" : ""
                  }`}
                  onClick={() => setActiveCategory("film")}
                >
                  فیلم
                </a>
              </div>
            </div>

            <div className="position-relative" style={{ marginBottom: "67px" }}>
              <div
                className="d-flex justify-content-between align-items-center"
                style={{ gap: "38px", marginRight: "-35px", direction: "rtl" }}
              >
                {displayedImages.map((url, index) => (
                  <div
                    key={index}
                    className="image-container"
                    onClick={() => setSelectedImage(url)} // Set selected image when clicked
                  >
                    <img
                      src={url}
                      alt={`Placeholder ${index + 1}`}
                      className="img-fluid rounded bg-secondary"
                      style={{
                        width: "190px",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                    <div className="gradient-overlay"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Display "ستون 14" section if the first image is clicked */}
            {selectedImage ===
              "https://static.cdn.asset.filimo.com/flmt/mov_148098_181296-b.jpg?width=165&quality=85&secret=gzDK5yWc42l_tg4BxJ9G2w" && (
              <section className="main-section inner-wrapper">
                <div className="movie-gradient d-overlay"></div>
                <div className="movie-gradient2 d-overlay"></div>
                <div className="movie-detail ps-relative">
                  <div className="container d-flex justify-content-between align-items-center">
                    <div className="logo-movie">
                      <img src="https://static.cdn.asset.filimo.com/flmt/mov_logo_148098_610.png?width=400&quality=85&secret=FkIlWP3F5cp3Kr8c7XExKQ" />
                    </div>

                    <div className="right-section" style={{ direction: "rtl" }}>
                      <h2 className="movie-title">ستون 14</h2>
                      <p className="director">کارگردان: امیرحسین همتی</p>
                      <div className="tags-imdb d-flex align-items-center">
                        <span
                          className="imdb-rating tag-item"
                          style={{
                            marginLeft: "5px",
                            color: "#fdc13c",
                            fontSize: "12px",
                          }}
                        >
                          4.5 IMDb
                        </span>
                        <span
                          className="tag tag-item"
                          style={{ marginLeft: "5px", fontSize: "12px" }}
                        >
                          درام
                        </span>
                        <span
                          className="tag tag-item"
                          style={{ fontSize: "12px" }}
                        >
                          هیجان انگیز
                        </span>
                      </div>

                      <p className="discription ui-mb-6x truncate">
                        ساناز و یاشار وقتی می‌ترسند، بازی می‌کنند. این بار با
                        زندگی جلال.
                      </p>

                      <a className="BTN_sub ui-btn d-flex ui-mb-6x ui-ai-c ui-jc-c">
                        خرید اشتراک و تماشا
                      </a>

                      <p className="additional-info">
                        بالای 15 سال - یک ساعت و 35 دقیقه - محصول ایران - 1400 -
                        کیفیت HD
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Display "پالتو شتری" section if the second image is clicked */}
            {selectedImage ===
              "https://static.cdn.asset.filimo.com/flmt/mov_147944_175967-b.jpg?width=165&quality=85&secret=8afsYdnys9IB6bnAzosnIA" && (
              <section className="palto-section inner-wrapper">
                <div className="movie-gradient d-overlay"></div>
                <div className="movie-gradient2 d-overlay"></div>
                <div className="movie-detail ps-relative">
                  <div className="container d-flex justify-content-between align-items-center">
                    <div className="logo-movie">
                      <img src="https://static.cdn.asset.filimo.com/flmt/mov_logo_147944_566.png?width=400&quality=85&secret=_u6ENpUidNkGbnOr3BsJlQ" />
                    </div>

                    <div className="right-section" style={{ direction: "rtl" }}>
                      <h2 className="movie-title">پالتو شتری</h2>
                      <p className="director">کارگردان: مهدی علی میرزایی</p>
                      <div className="tags-imdb d-flex align-items-center">
                        <span
                          className="imdb-rating tag-item"
                          style={{
                            marginLeft: "5px",
                            color: "#fdc13c",
                            fontSize: "12px",
                          }}
                        >
                          6.3 IMDb
                        </span>
                        <span
                          className="tag tag-item"
                          style={{ marginLeft: "5px", fontSize: "12px" }}
                        >
                          کمدی
                        </span>
                        <span
                          className="tag tag-item"
                          style={{ fontSize: "12px" }}
                        >
                          اجتماعی
                        </span>
                      </div>

                      <p className="discription ui-mb-6x truncate">
                        «پالتو شتری» داستان جوانی است به نام «محسن» که در دوران
                        دانشجویی با پوشیدن یک پالتو خود را متفاوت از بقیه
                        می‌بیند.
                      </p>

                      <a className="BTN_sub ui-btn d-flex ui-mb-6x ui-ai-c ui-jc-c">
                        خرید اشتراک و تماشا
                      </a>

                      <p className="additional-info">
                        مناسب همه سنین - یک ساعت و 25 دقیقه - محصول ایران - 1398
                        - کیفیت HD
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            )}
            {selectedImage ===
              "https://static.cdn.asset.filimo.com/flmt/mov_147582_169763-b.jpg?width=165&quality=85&secret=IQOO3rv0j00djITmVhr_zA" && (
              <section className="sheshom-section inner-wrapper">
                <div className="movie-gradient d-overlay"></div>
                <div className="movie-gradient2 d-overlay"></div>
                <div className="movie-detail ps-relative">
                  <div className="container d-flex justify-content-between align-items-center">
                    <div className="logo-movie">
                      <img src="https://static.cdn.asset.filimo.com/flmt/mov_logo_147582_964.png?width=400&quality=85&secret=MYgwzZTA6PI6C4SjLv2FxQ" />
                    </div>

                    <div className="right-section" style={{ direction: "rtl" }}>
                      <h2 className="movie-title"> روز ششم</h2>
                      <p className="director">کارگردان: حجت قاسم زاده اصل</p>
                      <div className="tags-imdb d-flex align-items-center">
                        <span
                          className="imdb-rating tag-item"
                          style={{
                            marginLeft: "5px",
                            color: "#fdc13c",
                            fontSize: "12px",
                          }}
                        >
                          4.5 IMDb
                        </span>
                        <span
                          className="tag tag-item"
                          style={{ marginLeft: "5px", fontSize: "12px" }}
                        >
                          جنایی
                        </span>
                        <span
                          className="tag tag-item"
                          style={{ fontSize: "12px" }}
                        >
                          رازالود
                        </span>
                      </div>

                      <p className="discription ui-mb-6x truncate">
                        احمد پس از آزادی از زندان فقط پنج روز فرصت دارد پاسخ چند
                        معما را که به وقایع گذشته مربوط است، پیدا کند و اگر موفق
                        نشود.
                      </p>

                      <a className="BTN_sub ui-btn d-flex ui-mb-6x ui-ai-c ui-jc-c">
                        خرید اشتراک و تماشا
                      </a>

                      <p className="additional-info">
                        بالای 15 سال - یک ساعت و 35 دقیقه - محصول ایران - 1400 -
                        کیفیت HD
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
