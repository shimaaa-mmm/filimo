import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Swiper from "swiper";
import "/node_modules/swiper/swiper-bundle.min.css"; // Import Swiper styles
import "./index.scss"; // Assuming you have a CSS file where the styles are defined

const CommentsSection = () => {
  useEffect(() => {
    const swiperInstance = new Swiper(".swiper", {
      slidesPerView: 3,
      spaceBetween: 5,
      autoplay: {
        delay: 5000,
      },
      loop: true,
    });

    // Set event listeners for manual next and prev buttons
    document.querySelector(".btn-next").addEventListener("click", () => {
      swiperInstance.slideNext();
    });
    document.querySelector(".btn-prev").addEventListener("click", () => {
      swiperInstance.slidePrev();
    });
  }, []);

  const comments = [
    { id: 1, username: "شیما", comment: "فیلیمو عالی من از فیلیمو رازی هستم❤❤😍🤩😘❤🍓" },
    { id: 2, username: "علی", comment: "خدمات فیلیمو خیلی خوبه. همیشه فیلم‌های جدید دارن." },
    { id: 3, username: "مریم", comment: "کیفیت فیلم‌ها فوق‌العادست! حتماً امتحان کنید." },
    { id: 4, username: "رضا", comment: "از سرویس فیلیمو خیلی راضی‌ام، سرعت عالی." },
    { id: 5, username: "فاطمه", comment: "تنوع محتوای فیلیمو خیلی خوبه." },
    { id: 6, username: "محمد", comment: "خیلی راضیم، پیشنهاد میکنم به همه!" },
  ];

  return (
    <section id="comments">
      <div className="max-w-7xl mx-auto mt-10 overflow-hidden py-16">
        {/* Title of the section with navigation buttons */}
        <div className="flex justify-between items-center mb-6" style={{  marginRight: '32px'}}>
          <h2 className="section-title">نظر کاربران بعد از تماشای فیلیمو</h2>
          <div className="flex items-center gap-3" style={{marginLeft: '54px', marginTop:' -23px'}}>
            <a className="btn-prev swiper-custom">
              <FontAwesomeIcon icon={faChevronLeft} />
            </a>
            <a className="btn-next swiper-custom">
              <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </div>
        </div>
        <div className="comments-container">
          <div className="swiper overflow-visible relative comment_swiper">
            <div className="swiper-wrapper overflow-y-visible" id="comment_swiper">
              {/* Map through the comments array */}
              {comments.map((comment) => (
                <div key={comment.id} className="swiper-slide custom-slide">
                  <div
                    className="flex flex-col border-gray-500 w-full h-[190px] rounded-xl shadow bg-dark-150 p-2"
                    style={{ color: "aqua", height: "200px", direction: "rtl" }}
                  >
                    {/* Username and virgol section */}
                    <div
                      className="flex justify-between gap-3 items-center"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "18px",
                        marginLeft: "11px",
                        marginRight: "12px",
                        alignItems: "center",
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <img src="/public/images/yiz.webp" alt="User Avatar" />
                        <span className="username-text " style={{  marginRight: '12px'}}>
                          {comment.username}
                        </span>
                      </div>
                      <div>
                        <img src="/public/images/virgol.webp" alt="Virgol" />
                      </div>
                    </div>
                    {/* Comment text */}
                    <p className="mt-8 text-sm text-center" style={{ marginTop: "25px", color:'#fff' }}>
                      {comment.comment}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommentsSection;
