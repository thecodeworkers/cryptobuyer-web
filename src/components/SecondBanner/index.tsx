import { memo, useRef } from 'react'
import styles from './styles.module.scss'

const SecondBanner = ({ section, content }) => {

  const publicityBannerRef = useRef();


  return (
    <>
      <div className={styles._container} ref={publicityBannerRef}>
      <div className={styles._leftContainer}>
        <p className={styles._title}>{content?.title}</p>
        <p className={styles._subtitle}>{content?.subtitle}</p>
      </div>
      <div className={styles._rightContainer}>
        <div className={styles._pointContainer}>
        <img src='images/resource/point-sale.svg'></img>
        </div>

      </div>
       </div>
       <style jsx type="scss">{`

      ._publicity{
        background-image: url(${section?.mediaItemUrl});
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center;
        width: 100%;
        height: 42vw;
      }
    `}</style>
   </>
  )
}

export default memo(SecondBanner)
