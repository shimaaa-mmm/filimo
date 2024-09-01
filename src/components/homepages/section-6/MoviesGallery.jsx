import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import './index.scss'; // Import the custom CSS file

const MoviesGallery = () => {
  const movies = [
    {
      id: 1,
      name: "شب های مافیای 2 ",
      image:
        "https://static.cdn.asset.filimo.com/flmt/mov_srl_82690_962-b.jpg?width=165&quality=85&secret=zzPDwF-hvHdgEpy62Nqxog",
    },
    {
      id: 2,
      name: " مردم معمولی",
      image:
        "https://static.cdn.asset.filimo.com/flmt/mov_srl_82692_194-b.jpg?width=165&quality=85&secret=XlHlDu3cATALZhmyuhFrXQ",
    },
    {
      id: 3,
      name: "دیرین دیرین ",
      image:
        "https://static.cdn.asset.filimo.com/flmt/mov_37557_162877-b.jpg?width=165&quality=85&secret=2E4zxFfX-JLMEv6RFbekWA",
    },
    {
      id: 4,
      name: " سال های دور از خانه",
      image:
        "https://static.cdn.asset.filimo.com/flmt/mov_srl_26097_1-b.jpg?width=165&quality=85&secret=zKNS5MCO36dP6R20MWmPCA",
    },
    {
      id: 5,
      name: " زهر عسل",
      image:
        "https://static.cdn.asset.filimo.com/flmt/mov_6033_563-b.jpg?width=165&quality=85&secret=pslQCgE55HxG3c3LhyrawQ",
    },
    {
      id: 6,
      name: " پنجه در خاک",
      image:
        "https://static.cdn.asset.filimo.com/flmt/mov_11454_507-b.jpg?width=165&quality=85&secret=D6nLMevZCMRkJN19LqhCTQ",
    },
    {
      id: 7,
      name: " عقرب",
      image:
        "https://static.cdn.asset.filimo.com/flmt/mov_639_995-b.jpg?width=165&quality=85&secret=U80oEojsjv7n8SfJm-7rMQ",
    },
    {
      id: 8,
      name: " ملکه گدایان",
      image:
        "https://static.cdn.asset.filimo.com/flmt/mov_srl_41017_932-b.jpg?width=165&quality=85&secret=iCCdAosM5VpIaQc_eFKHAA",
    },
    {
      id: 9,
      name: " بالشها",
      image:
        "https://static.cdn.asset.filimo.com/flmt/mov_srl_12645_1-b.jpg?width=165&quality=85&secret=T7uBxOIOJlPMJv1V6Ltu7Q",
    },
    {
      id: 10,
      name: " چپ دست",
      image:
        "https://static.cdn.asset.filimo.com/flmt/mov_12003_264-b.jpg?width=165&quality=85&secret=TIaDo6iDGZNR2tkxhOcbzg",
    },
    {
      id: 14,
      name: " پایتخت",
      image:
        "https://static.cdn.asset.filimo.com/flmt/mov_srl_11933_1-b.jpg?width=165&quality=85&secret=TTVEtvEcur7pOH0IgDJRhw",
    },
    {
      id: 15,
      name: " راز دشت تاران",
      image:
        "https://static.cdn.asset.filimo.com/flmt/mov_11388_20029-b.jpg?width=165&quality=85&secret=63cTB6TyuLfmAR5Bqs4pKw",
    },
  ];

  // Split movies into chunks of 6 for carousel slides
  const chunkSize = 6;
  const movieChunks = [];
  for (let i = 0; i < movies.length; i += chunkSize) {
    movieChunks.push(movies.slice(i, i + chunkSize));
  }

  return (
    <div className="parent" style={{marginTop: '46px'}}>
    <div className="container mt-0">
      <div className="row">
        <div
          className="col-12 text-end"
          style={{ marginLeft: "50px", fontSize: "18px", marginTop: "25px" }}
        >
          <h2
            className="text-white"
            style={{ fontSize: "18px", marginBottom: "71px",marginLeft: "41px" }}
          >
            محتواهای رایگان
          </h2>
        </div>
        <div className="col-12" style={{ marginLeft: '68px' }}>
          <Carousel
            nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
            prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
            style={{marginTop: '-46px'}}
          >
            {movieChunks.map((chunk, index) => (
              <Carousel.Item key={index}>
                <div className="row">
                  {chunk.map((movie) => (
                    <div
                      key={movie.id}
                      className="col-6 col-md-4 col-lg-2 text-center mb-4"
                    >
                      <div className="movie-img-wrapper">
                        <img
                          src={movie.image}
                          alt={movie.name}
                          className="img-fluid"
                        />
                        <p className="mt-2 text-white">{movie.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MoviesGallery;
