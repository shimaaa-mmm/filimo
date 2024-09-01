import Slide from "../../../components/homepages/section-1/slade.jsx";
import FaqAccordion from "../../../components/homepages/section-10/FAQSection.jsx";
import HeroSection from "../../../components/homepages/section-11/HeroSection.jsx";
import MovieSlider from "../../../components/homepages/section-2/MovieSlider.jsx";
import MainSection from "../../../components/homepages/section-3/MainSection.jsx";
import HowToWatch from "../../../components/homepages/section-4/HowToWatch.jsx";
import WatchSection from "../../../components/homepages/section-5/WatchSection.jsx";
import MoviesGallery from "../../../components/homepages/section-6/MoviesGallery.jsx";
import KidsSection from "../../../components/homepages/section-7/KidsSection.jsx";
import CinemaSection from "../../../components/homepages/section-8/CinemaSection.jsx";
import CommentsSection from "../../../components/homepages/section-9/CommentsSection.jsx";


export const Home = () => {

    return (
        <div>
          <Slide/>
          <MovieSlider/>
          <MainSection/>
          <HowToWatch/>
          <WatchSection/>
          <MoviesGallery/>
          <KidsSection/>
          <CinemaSection/>
          <CommentsSection/>
          <FaqAccordion/>
          <HeroSection/>
        </div>
    )
}