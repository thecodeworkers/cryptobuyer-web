import styles from './styles.module.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Partnership = ({ data }) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    autoplay: true
  }

  return (
    <div>
      <div className={styles._sliderContainer}>
        <Slider {...settings}>
          {
            data.map((item, index) => {
              return (
                <div className={styles._slider} key={index} >
                  <img src={item?.image?.mediaItemUrl} className={styles._commerce} />
                </div>
              )
            })
          }
        </Slider>
      </div>
    </div>
  )
}

export default Partnership
