
import styles from './styles.module.scss'
import { GeneralButton } from '@components'
import { scrolling } from '@utils'

const ForYouFirstBanner = ({ reference }) => {

  return (
    <>
      <div className='_main'>
        <section className={styles._content}>
          <div className={styles._textContainer}>
            <h1 className={styles._title}> Tus finanzas digitales cada vez más cerca de ti</h1>
            <p className={styles._text}>Compra, vende y paga con criptomonedas de distintas formas y en distintos lugares. Más de 25 comercios afiliados, una red de cajeros automáticos, tarjetas recargables y mucho más. </p>
            <div className={styles._btnParent}>
              <GeneralButton height={3} backgroundColor='#FFFFFF' textColor='#212121' text='Comprar Criptomonedas' />
            </div>

          </div>

          <div className={styles._secondTextParent}>
            <h2 className={styles._subtitle}>Compra Bitcoin</h2>

            <div>
              <p className={styles._serviceText}>Conoce todos nuestros servicios para ti</p>

              <div className={styles._arrowParent} onClick={() => scrolling(reference)} >
                <img src='images/icons/complete-arrow-down.svg' />
              </div>
            </div>
          </div>

        </section>
      </div>

      <style jsx>{`
      ._main {
          background-image: url('/images/banners/banner-foryou.png');
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width:100%;
          height: 100vh;
        }
      `}</style>
    </>
  )

}

export default ForYouFirstBanner;
