import styles from './styles.module.scss'
import { scrolling, createMarkup } from '@utils'

const FirstBanner = ({ data, reference }) => {
  return (
    <>
      <div className={styles._main}>
        <div className='_bannerContainer'>
          <div className={styles._content}>
            <div className={styles._textParent}>
              <h1 className={styles._mainTitle}>{data?.title}</h1>
              <div className={styles._subtitle} dangerouslySetInnerHTML={createMarkup(data?.content)}></div>
            </div>
          </div>
          <div className={styles._middleCoin} style={{ backgroundImage: `url(${data?.coin?.mediaItemUrl})` }}></div>
        </div>

        <div className={styles._subtitleContainer}>
          <h2 className={styles._subtitleText} dangerouslySetInnerHTML={createMarkup(data?.subtitle)}></h2>
          <div className={styles._meetOurTeam}>
            <p>Conoce nuestro <strong>equipo</strong></p>
            <img src={'images/icons/complete-arrow-down.svg'} className={styles._downarrow} onClick={() => scrolling(reference)}></img>
          </div>
        </div>
      </div>

      <style jsx>{`
        ._bannerContainer {
          background-image: url(${data?.background?.mediaItemUrl});
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width:100%;
          height: 70vh;
        }
        @media(max-width: 576px) {
          ._bannerContainer {
            background-image: url(${data?.backgroundResponsive?.mediaItemUrl});
         }
          }
        }
      `}</style>
    </>
  )
}

export default FirstBanner
