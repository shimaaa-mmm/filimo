import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./index.scss"; // Optional: Your custom styles

const KidsSection = () => {
  return (
    <section id="kids" className="bg-primary w-100 h-100 ">
      <div className="parent mt-0">
        <div className="container d-flex flex-column flex-md-row justify-content-center align-items-center mt-md-5 mt-3">
          <div
            className="col-md-6 col-12 d-flex flex-column justify-content-center order-2 order-md-1"
            style={{ direction: "rtl" }}
          >
            <h3 className="h4 font-weight-bold mb-3 text-white">
              دنیایی متنوع از فیلم و کارتون‌های کودکانه
            </h3>
            <p className="text-justify custom-paragraph">
              ساخت فیلیمو کودک این امکان را می‌دهد که با انتخاب سن فرزندتان، یک
              فضای امن برای تماشای کودک بسازید؛ یعنی محتوای مخصوص سن خودش را
              ببیند و به بقیه فیلم و سریال‌ها دسترسی نداشته‌باشد.
            </p>
            <div className="mt-4 d-flex gap-3">
              <button className="btn btn-light font-weight-bold">
                فیلیمو کودک بساز
              </button>
              <button className="btn btn-light font-weight-bold">
                تماشای فیلیمو کودک
              </button>
            </div>
          </div>
          <img
            className="col-md-4 col-12 order-1 order-md-2 kodak"
            src="/public/images/kide.webp"
            alt="Kids Section"
          />
        </div>
      </div>
    </section>
  );
};

export default KidsSection;
