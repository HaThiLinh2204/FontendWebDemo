import "./HomePage.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/swiper.min.css";

export default function HomePage() {
  return (
    <div className="main-container">
      <div className="main">
        <div className="slider-main">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              style={{ width: "1496px" }}
              src="https://pos.nvncdn.net/8073c5-83109/bn/20230531_J48fpT5l.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{ width: "1496px" }}
              src="https://pos.nvncdn.net/8073c5-83109/bn/20230516_z0V9Q64z.jpeg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{ width: "1496px" }}
              src="https://pos.nvncdn.net/8073c5-83109/bn/20230330_SpSkMr9B.jpeg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{ width: "1496px" }}
              src="https://pos.nvncdn.net/8073c5-83109/bn/20230516_z0V9Q64z.jpeg"
            />
          </SwiperSlide>
        </Swiper>
        </div>
        <div className="container-item">
          <div className="item-title">
            Sản phẩm mới
          </div>
        </div>
      </div>
    </div>
  );
}
