import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import MainContext from "../context/mainContext";

export default function Days() {
  const values = useContext(MainContext);
  const [icon, setIcon] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  // buraya  values'e dönen 3 günün verilerini bir obje halinde toplayıp günlerin tamamını render edeceğim bir fonksiyon hazırlamalıyım şuan sadece 1. günün iconunu gösterdiğim bir fonksiyonu hazırladım
  useEffect(() => {
    if (values.weather && values.weather[0] && values.weather[0].day) {
      setWeatherData(values.weather);
    }

    console.log("weatherdata", weatherData);
  }, [values]);

  return (
    <>
      <div className="days">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {weatherData.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <p className="swiper-slide-degree">{item.day.avgtemp_c}°</p>
                <img src={item.day.condition.icon} alt="" />
                <p className="swiper-slide-date">{item.date}</p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
