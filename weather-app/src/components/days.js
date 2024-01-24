import { Swiper, SwiperSlide } from "swiper/react";

import { useSelector } from "react-redux";

export default function Days() {
  const weatherData = useSelector((state) => state.weatherReducer.citiesData);

  if (!weatherData.location || !weatherData.current || !weatherData.forecast) {
    return <p>Yükleniyor...</p>;
  }

  const forecastday = weatherData.forecast.forecastday;

  // Eğer forecastday bir dizi değilse
  if (!Array.isArray(forecastday)) {
    return <p>Hava durumu verileri geçerli değil.</p>;
  }

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
          className="swiper"
        >
          {forecastday.map((item) => (
            <SwiperSlide key={item.date}>
              <p className="swiper-slide-degree">{item.day.avgtemp_c}°</p>
              <img src={item.day.condition.icon} alt="" />
              <p className="swiper-slide-date">{item.date}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
