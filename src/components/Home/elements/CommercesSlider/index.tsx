import styles from './styles.module.scss'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const CommercesSlider = ({ section }) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
  }

  return (
    <div className={styles._sliderContainer}>
      <Slider {...settings}>
        {
          section.map((item, index) => {
            return (
              <div className={styles._slider} key={index}>
                <img src={item?.image?.mediaItemUrl} className={styles._commerce} />
              </div>
            )
          })
        }
      </Slider>
    </div>
  )
}

export default CommercesSlider
