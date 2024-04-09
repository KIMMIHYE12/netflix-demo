import { Alert } from "bootstrap";
import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import "./Banner.style.css";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const Banner = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  console.log("ddd", data);

  if (isLoading) {
    <h1>Loading...</h1>;
  }
  if (isError) {
    <Alert varient='danger'>{error.message}</Alert>;
  }
  return (
    // <div
    //   style={{
    //     backgroundImage:
    //       "url(" +
    //       `https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${data?.results[0].backdrop_path}` +
    //       ")",
    //   }}
    //   className='banner'
    // >
    //   <div className='banner-text-area'>
    //     <h1>{data?.results[0].title}</h1>
    //     <p>{data?.results[0].overview}</p>
    //   </div>
    // </div>
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper2'
      >
        <SwiperSlide>
          <div className='slide_items'>
            <img
              src={`https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${data?.results[0].backdrop_path}`}
              alt={`${data?.results[0].title}배경이미지`}
            />
            <div className='banner-text-area'>
              <h1>{data?.results[0].title}</h1>
              <span className='star_rating'>
                <span
                  style={{ width: data?.results[0].vote_average * 10 + "%" }}
                  className='star_yellow'
                ></span>
              </span>
              <span className='rating_average'>
                {data?.results[0].vote_average.toFixed(1)}
              </span>
              <p>{data?.results[0].overview}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slide_items'>
            <img
              src={`https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${data?.results[1].backdrop_path}`}
              alt={`${data?.results[1].title}배경이미지`}
            />
            <div className='banner-text-area'>
              <h1>{data?.results[1].title}</h1>
              <span className='star_rating'>
                <span
                  style={{ width: data?.results[1].vote_average * 10 + "%" }}
                  className='star_yellow'
                ></span>
              </span>
              <span className='rating_average'>
                {data?.results[1].vote_average.toFixed(1)}
              </span>
              <p>{data?.results[1].overview}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slide_items'>
            <img
              src={`https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${data?.results[4].backdrop_path}`}
              alt={`${data?.results[4].title}배경이미지`}
            />
            <div className='banner-text-area'>
              <h1>{data?.results[4].title}</h1>
              <span className='star_rating'>
                <span
                  style={{ width: data?.results[4].vote_average * 10 + "%" }}
                  className='star_yellow'
                ></span>
              </span>
              <span className='rating_average'>
                {data?.results[4].vote_average.toFixed(1)}
              </span>
              <p>{data?.results[4].overview}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slide_items'>
            <img
              src={`https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${data?.results[19].backdrop_path}`}
              alt={`${data?.results[19].title}배경이미지`}
            />
            <div className='banner-text-area'>
              <h1>{data?.results[19].title}</h1>
              <span className='star_rating'>
                <span
                  style={{ width: data?.results[19].vote_average * 10 + "%" }}
                  className='star_yellow'
                ></span>
              </span>
              <span className='rating_average'>
                {data?.results[19].vote_average.toFixed(1)}
              </span>
              <p>{data?.results[19].overview}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper slide_pagination'
      >
        <SwiperSlide className='silde_item'>
          <img
            src={`https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${data?.results[0].poster_path}`}
            alt={`${data?.results[0].title}포스터`}
          />
        </SwiperSlide>
        <SwiperSlide className='silde_item'>
          <img
            src={`https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${data?.results[1].poster_path}`}
            alt={`${data?.results[1].title}포스터`}
          />
        </SwiperSlide>
        <SwiperSlide className='silde_item'>
          <img
            src={`https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${data?.results[4].poster_path}`}
            alt={`${data?.results[4].title}포스터`}
          />
        </SwiperSlide>
        <SwiperSlide className='silde_item'>
          <img
            src={`https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${data?.results[19].poster_path}`}
            alt={`${data?.results[19].title}포스터`}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
