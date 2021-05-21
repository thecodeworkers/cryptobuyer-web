import styles from './styles.module.scss'
import { scrolling, createMarkup } from '@utils'

const FirstBanner = ({ data, reference }) => {
  const background = data?.background?.mediaItemUrl
  const backgroundResponsive = data?.backgroundResponsive?.mediaItemUrl
  const coin = data?.coin?.mediaItemUrl

  return (
    <>
      <div className={styles._main}>
        <div className='_bannerContainer'>
          <div className={styles._content}>
            <div className={styles._textParent}>
              <h1 className={styles._mainTitle}>{data?.title}</h1>
              <div className={styles._subtitle} dangerouslySetInnerHTML={createMarkup(data?.content)}></div>
              <div className={styles._middleCoin} style={{ backgroundImage: `url(${coin ? coin : ''})` }}></div>
            </div>
          </div>

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
          background-image: url(${background ? background : ''});
          background-repeat: no-repeat;
          background-size: cover;
          width:100%;
          height: 70vh;
        }
        @media(max-width: 576px) {
          ._bannerContainer {
            background-image: url(${backgroundResponsive ? backgroundResponsive : ''});
            background-size: cover;
            height: 100vh;
            background-position: center
         }
          }
        }
      `}</style>
    </>
  )
}

export default FirstBanner
