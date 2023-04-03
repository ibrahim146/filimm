import React, {  useContext, useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Carusel.css";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import GlobalContext from "../Context/GlobalContext";


function Carusel() {
  
  const { favorilere_silme_izleneceklere_ekle ,favorilere_ekle } = useContext(GlobalContext);
  const [carusel, setcarusel] = useState("A");
  const [caruseldata, setcaruseldata] = useState([]);
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=b1daa7db24dab8feedb3d1004e6a8a90&language=en-US&page=1&include_adult=false&query=${carusel}`)
      .then((res) => res.json())
      .then((data) => { setcaruseldata(data.results) })
  }, [])

  return (

    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {
          caruseldata.map((itemm) => {
            return <SwiperSlide>
              <img height="700px" width="500px" src={`https://image.tmdb.org/t/p/w500${itemm.poster_path}`} alt={itemm.title} />
              <div className="moviedetail">
                <div className="asd">
                  <h3>FİLİM İSMİ : {itemm.title}</h3>
                  <p className="acıklama">ACIKLAMA :   {itemm.overview}</p>
                  <p>YAPIM TARİHİ : {itemm.release_date.substring(0, 4)}</p>
                  <p>POPÜLERLİK :   {itemm.popularity}</p>
                  <p>OY SAYISI :   {itemm.vote_count}</p>
                  <p style={{ color: "yellow" }}><i className="fas fa-star"></i> IMDB : {itemm.vote_average}</p>
                  <i href="#" onClick={() => favorilere_silme_izleneceklere_ekle(itemm)} className='btnn fa-fw fa fa-play'></i>
                                    <i href="#" onClick={() => favorilere_ekle(itemm)} className='btnn fa-fw far fa-eye'></i>
                </div>
              </div>
            </SwiperSlide>
          })
        }


      </Swiper>
    </>
  );
}
export default Carusel;
