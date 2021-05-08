import { memo, useRef } from 'react'
import { GeneralButton,  } from '@components'
import styles from './styles.module.scss'
import  CommercesSlider  from '../CommercesSlider'
import { XptAtm, XptPay } from '@images/logos'

const SecondBanner = ({ data, content, slider }) => {

  const publicityBannerRef = useRef()

  return (
    <>
      <div className={styles._container} ref={publicityBannerRef}>
        <div className={styles._content}>
          <div className={styles._leftContainer}>
            <div className={styles._logo}>
            <XptPay color={'#262833'} />
            </div>

            <p className={styles._title}>{content?.title}</p>
            <p className={styles._subtitle}>{content?.subtitle}</p>
            <div className={styles._buttonContainer}>
              <GeneralButton height={3} backgroundColor='#ecf0f1' textColor='#262833' text='Quiero enviar dinero' />  {/* #262833 */}
            </div>
          </div>
          <div className={styles._rightContainer}>
            <div className={styles._pointContainer}>
              <img src='images/resource/point-sale.svg' className={styles._image}></img>
            </div>
          </div>
        </div>
      </div>
      <CommercesSlider data={slider} />
      <div className='_publicity' >
        <div className={styles._textContainer}>
          <div className={styles._textContent}>
            <p className={styles._whiteTitle}>{data?.title}</p>
            <p className={styles._whiteSubtitle}>{data?.subtitle}</p>
          </div>
          <div className={styles._logoContainer}>
            <div className={styles._logo}>
            <XptAtm  color={'#fff'}/>
            </div>
          </div>

        </div>

      </div>
      <style jsx>{`
      ._publicity{
        background-image: url(${data?.publicityImage?.mediaItemUrl});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        width: 100%;
        height: 250px;
        position:relative
      }
    `}</style>
    </>
  )
}

export default memo(SecondBanner)
