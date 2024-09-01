import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faTicket } from "@fortawesome/free-solid-svg-icons";
import "./index .scss"
const CinemaSection = () => {
  return (
    <div className="movie-container">
      <div className="content-wrapper">
        <h1 className="movie-title">سینما آنلاین فیلیمو</h1>
        <ul className="movie-features">
          <li className="feature-item">
            <FontAwesomeIcon className="icon" icon={faCircleCheck} />
            فیلم‌های روز سینمای ایران
          </li>
          <li className="feature-item">
            <FontAwesomeIcon className="icon" icon={faCircleCheck} />۸ ساعت زمان
            برای مشاهده فیلم در هر کجا
          </li>
          <li className="feature-item">
            <FontAwesomeIcon className="icon" icon={faCircleCheck} />
            خرید یک بلیت برای تماشا همراه با همه خانواده
          </li>
        </ul>

        <div className="movie-card">
          <img
            src="https://static.cdn.asset.filimo.com/flmt/mov_148573_183474-b.jpg?width=165&quality=85&secret=ooqiWNxhFkZeIcVGSuqb-g"
            className="movie-poster"
            alt="Movie Poster"
          />
          <div className="card-body online-box_detail d-flex ui-fd-c ui-jc-sb">
            <div className="movie-info d-flex ui-jc-sb ui-ai-center">
              <h5 className="movie-name">بی‌ بدن</h5>
              <div className="movie-status d-flex align-items-center">
                <FontAwesomeIcon className="ticket-icon" icon={faTicket} style={{padding: '6px'}} / >
                <span>اکران آنلاین</span>
              </div>
            </div>
            <p className="movie-director">
              کارگردان: <span>کارگردان فیلم</span>
            </p>
            <div className="movie-genres d-flex ui-mb-6x">
              <span className="category-name ui-ml-2x">جنایی</span>
              <span className="category-name ui-ml-2x">درام</span>
            </div>
            <div className="buy sm-d-none ui-br-8">
              <a href="#" className="sm-d-none ui-ml-3x">
                خرید بلیت
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CinemaSection;
