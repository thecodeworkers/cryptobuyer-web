import styles from './styles.module.scss'
import { LinkedIn } from '@images/icons'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const SecondBanner = ({ data }) => {

  const teamSlider = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    autoplay: true,
    centerMode: true,
    variableWidth: true,
    centerPadding: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          variableWidth: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          variableWidth: false,
        }
      }
    ]
  }

  const investorSlider = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    rows: 2,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          rows: 2
        }
      },
    ]
  }


  return (
    <div className={styles._secondBanner}>
      <div className={styles._teamContainer}>
        <div className={styles._teamSlider}>
          <Slider {...teamSlider}>
            {data?.team?.map((value, index) => {
              return (
                <div className={styles._teamItem} key={index}>
                  <div className={styles._socialNetwork}>{<LinkedIn />}</div>
                  <img src={value?.imagen?.mediaItemUrl} alt={value?.imagen?.slug} width='100px' height='100px' ></img>
                  <p className={styles._name} >{value.name}</p>
                  <p className={styles._title} >{value.jobTitle}</p>
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
      <div className={styles._textContainer}>
        <div className={styles._leftSide}>
          <div className={styles._textContent}>
            <h2>{data?.title1}</h2>
            <p>{data?.content1}</p>
          </div>
          <div className={styles._textContent}>
            <h2>{data?.title2}</h2>
            <p>{data?.content2}</p>
          </div>
        </div>
        <div className={styles._line}></div>
        <div className={styles._rightSide}>
          <div className={styles._textContent}>
            <h2>{data?.title3}</h2>
            <p>{data?.content3}</p>
          </div>
          <div className={styles._investors}>
            <Slider {...investorSlider}>
              {data?.investors?.map((value, index) => {
                return (
                    <img key={index} src={value?.imagen?.mediaItemUrl} alt={value?.imagen?.slug} width='100%' height='100%' />)
              }
              )}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}


export default SecondBanner
