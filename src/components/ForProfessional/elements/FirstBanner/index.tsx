
import styles from './styles.module.scss'
import { GeneralButton } from '@components'
import { scrolling } from '@utils'

const FirstBanner = ({ reference }) => (
  <>
    <div className='_main'>
      <h1>HELLO!</h1>
      <section className={styles._content}>
        <div className={styles._textContainer}>
          <h1 className={styles._title}>El presente y el futuro de la economía digital</h1>
          <p className={styles._text}> Compra, venta e intercambio de decenas de criptomonedas en una plataforma rápida, segura y regulada. </p>
          <div className={styles._btnParent}>
            <GeneralButton height={3} backgroundColor='#2CACB3' textColor='#FFFFFF' text='Registrarse en Pro' />
          </div>
        </div>

        <div className={styles._secondTextParent}>
          <div className={styles._icons}>
            <img src='images/icons/qr.png' width='120px'></img>

            <div className={styles._logoParent}>
              <p>Escanea para descargar</p>
              <img src='images/icons/android.svg' width='28px'></img>
              <img src='images/icons/apple.svg'  width='28px'></img>
            </div>
          </div>


          <div>
            <p className={styles._serviceText}>Conoce más beneficios de <strong> Pro </strong></p>
            <div className={styles._arrowParent} onClick={() => scrolling(reference)} >
              <img src='images/icons/complete-arrow-down.svg' />
            </div>
          </div>
        </div>
      </section>
    </div>

    <style jsx>{`
  ._main {
      background-image: url('images/banners/banner-pro.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      width:100%;
      height: 100vh;
    }
  `}</style>
  </>
)

export default FirstBanner
