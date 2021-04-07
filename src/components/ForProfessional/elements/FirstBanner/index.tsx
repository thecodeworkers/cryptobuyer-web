
import styles from './styles.module.scss'
import { GeneralButton } from '@components'
import { scrolling } from '@utils'
import { createMarkup } from '@utils'

const FirstBanner = ({ reference, data }) => (
  <>
    <div className='_main'>
      <h1>HELLO!</h1>
      <section className={styles._content}>
        <div className={styles._textContainer}>
          <h1 className={styles._title}> {data?.title} </h1>
          <p className={styles._text}> {data?.subtitle} </p>
          <div className={styles._btnParent}>
            <GeneralButton height={3} backgroundColor='#2CACB3' textColor='#FFFFFF' text={data?.button?.title} />
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
            <p className={styles._serviceText} dangerouslySetInnerHTML={createMarkup(data?.lowTitle)}></p>
            <div className={styles._arrowParent} onClick={() => scrolling(reference)} >
              <img src='images/icons/complete-arrow-down.svg' />
            </div>
          </div>
        </div>
      </section>
    </div>

    <style jsx>{`
  ._main {
      background-image: url(${data?.background?.mediaItemUrl});
      background-repeat: no-repeat;
      background-size: 100% 100%;
      width:100%;
      height: 100vh;
    }
  `}</style>
  </>
)

export default FirstBanner
