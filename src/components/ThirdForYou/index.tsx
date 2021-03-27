import { memo, useRef } from 'react'
import styles from './styles.module.scss'
import { GeneralButton } from '../../components'

const ThirdForYou = ({ section, content }) => {

  const publicityBannerRef = useRef();


  return (
    <>
      <div className={styles._container} ref={publicityBannerRef}>
        <div className={styles._content}>
          <div className={styles._leftContainer}>
          <div className={styles._pointContainer}>
              <img src='images/resource/cards.svg'></img>
            </div>
          </div>
          <div className={styles._rightContainer}>
            <p className={styles._title}>{content?.title}</p>
            <p className={styles._subtitle}>{content?.subtitle}</p>
            <div className={styles._buttonContainer}>
              <GeneralButton height={3} backgroundColor='#fff' textColor='#262833' text='Quiero enviar dinero' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(ThirdForYou)
