import { memo, useRef } from 'react'
import styles from './styles.module.scss'
import { GeneralButton } from '../../components'

const ThirdForYou = ({ section, content }) => {

  const publicityBannerRef = useRef();


  return (
      <div className={styles.main}>


      <div className={styles._firstContainer} ref={publicityBannerRef}>
        <div className={styles._firstContent}>
          <div className={styles._firstLeftContainer}>
          <div className={styles._cardsContainer}>
              <img src='images/resource/cards.svg'></img>
            </div>
          </div>
          <div className={styles._firstRightContainer}>
            <p className={styles._firstTitle}>Una tarjeta,varias monedas</p>
            <p className={styles._firstSubtitle}>Recarga con tus criptomonedas y úsala en cualquier parte del mundo</p>
            <div className={styles._firstButtonContainer}>
              <GeneralButton height={3} backgroundColor='#2CACB3' textColor='#fff' text='Solicitar mi Visa' />
            </div>
          </div>
        </div>
      </div>

      <div className={styles._secondContainer} ref={publicityBannerRef}>
        <div className={styles._secondContent}>
          <div className={styles._secondLeftContainer}>
          <p className={styles._secondTitle}>Monedas digitales al alcance de tus manos</p>
            <p className={styles._secondSubtitle}>Compra Bitcoin, Dash y Litecoin en efectivo y en segundos gracias a los primeros cajeros automáticos de criptomonedas del mundo.</p>
            <div className={styles._secondButtonContainer}>
              <GeneralButton height={3} backgroundColor='#fff' textColor='#262833' text='¿Dónde están ubicados?' />
            </div>
          </div>
          <div className={styles._secondRightContainer}>
            <div className={styles._atmContainer}>
              <img src='images/resource/atm.svg'></img>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default memo(ThirdForYou)
