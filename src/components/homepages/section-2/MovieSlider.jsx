import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./index.scss"; // Import the SCSS file

const MovieSlider = () => {
  const movies = [
    {
      title: "صداتو - فصل ۱ قسمت ۱۱",
      image:
        "https://static.cdn.asset.filimo.com/flmt/mov_138606_163645-b.jpg?width=300&quality=85&secret=ZwqJWR1LmFq6WehCiuPPig",
    },
    {
      title: "حیثیت گمشده - فصل ۱ قسمت ۹",
      image:
        "https://static.cdn.asset.filimo.com/flmt/mov_138842_163019-b.jpg?width=300&quality=85&secret=mA_96BRRQEhwgB7Xx420TA",
    },
    {
      title: "زخم کاری - فصل ۲ قسمت ۸",
      image:
        "https://static.cdn.asset.filimo.com/flmt/mov_140129_165198-b.jpg?width=300&quality=85&secret=acQEdRx90KJ9mFRaIXeWRg",
    },
    {
      title: "اسکار - فصل ۴ قسمت ۳",
      image:
        "https://static.cdn.asset.filimo.com/flmt/mov_145599_164540-b.jpg?width=300&quality=85&secret=2D1fwUtP8wW6q0Vkn2zdlg",
    },
  ];

  return (
    <div className="parents">
      <div className="container">
        <div className="movie-slider">
          <h2 className="slider-title">به تماشا ادامه دهید...</h2>

          <div
            id="movieCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  {movies.map((movie, index) => (
                    <div key={index} className="col-auto">
                      <img
                        src={movie.image}
                        alt={movie.title}
                        className="d-block movie-image"
                      />
                      <p className="movie-title text-center">{movie.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#movieCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#movieCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieSlider;
