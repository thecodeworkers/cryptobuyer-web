import styles from './styles.module.scss';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CommercesSlider = ({ section }) => {

  console.log(section[0].image);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,

  };

  return (
    <div className={styles._sliderContainer}>
      <Slider {...settings}>

        {
          section.map((item, index) => {
            return (
              <div className={styles._slider}>
                <img src={item?.image?.mediaItemUrl} key={index} className={styles._commerce} />
            </div>
            )
          })
        }

      </Slider>
    </div>
  )
}

export default CommercesSlider;
