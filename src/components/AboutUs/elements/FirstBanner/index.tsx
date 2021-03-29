import styles from './styles.module.scss'
import { createMarkup } from '@utils'

const FirstBanner = ({ data, subtitle }) => {
  console.log(data);

  const scrollToNextSection = () => {
		var i = 10;
		var int = setInterval(function () {
			window.scrollTo(0, i);
			i += 10;
			if (i >= document.documentElement.clientHeight) clearInterval(int);
		}, 20);
	}

  return (
    <>
      <div className={styles.main}>
        <div className='_bannerContainer'>
          <div className={styles._content}>
            <div className={styles._textParent}>
              <h1 className={styles._mainTitle}>{data?.title}</h1>
              <p className={styles._subtitle} dangerouslySetInnerHTML={createMarkup(data?.content)}></p>
            </div>
          </div>
          <div className={styles._middleCoin} style={{ backgroundImage:`url(${data?.coin?.mediaItemUrl})` }}></div>
        </div>

        <div className={styles._subtitleContainer}>
          <h2 className={styles._subtitleText} dangerouslySetInnerHTML={createMarkup(subtitle)}></h2>
          <div className={styles._meetOurTeam}>
            <p>Conoce nuestro <strong>equipo</strong></p>
            <img src={'images/icons/complete-arrow-down.svg'} className={styles._downarrow} onClick={scrollToNextSection}></img>
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
      `}</style>
    </>
  )
}

export default FirstBanner;
