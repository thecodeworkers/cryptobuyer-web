import { memo, useRef } from 'react'
import { GeneralButton } from '@components'
import styles from './styles.module.scss'

const SecondBanner = ({ data, content }) => {

  const publicityBannerRef = useRef();


  return (
    <>
      <div className={styles._container} ref={publicityBannerRef}>
        <div className={styles._content}>
          <div className={styles._leftContainer}>
            <p className={styles._title}>{content?.title}</p>
            <p className={styles._subtitle}>{content?.subtitle}</p>
            <div className={styles._buttonContainer}>
              <GeneralButton height={3} backgroundColor='#fff' textColor='#262833' text='Quiero enviar dinero' />
            </div>
          </div>
          <div className={styles._rightContainer}>
            <div className={styles._pointContainer}>
              <img src='images/resource/point-sale.svg'></img>
            </div>
          </div>
        </div>
      </div>
      <div className='_publicity' />
      <style jsx type="scss">{`

      ._publicity{
        background-image: url(${data?.mediaItemUrl});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        width: 100%;
        height: 250px;
      }
    `}</style>
    </>
  )
}

export default memo(SecondBanner)
