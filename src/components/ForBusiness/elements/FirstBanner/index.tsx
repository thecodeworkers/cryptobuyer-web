import styles from './styles.module.scss'
import { GeneralButton } from '@components'

const FirstBanner = ({ data, content}) => {
    const scrollToNextSection = () => {
		var i = 10;
		var int = setInterval(function () {
			window.scrollTo(0, i);
			i += 10;
			if (i >= document.documentElement.clientHeight) clearInterval(int);
		}, 20);
	}

    console.log(data)
    return (
        <>
        <div className={styles.main}>
            <div className='_bannerContainer'>
                <div className={styles._content}>
                    <div className={styles._textParent}>
                        <h1 className={styles._mainTitle}>{data?.title}</h1>
                        <p className={styles._subtitle}>{data?.subtitle}</p>
                        <div className={styles._basicForm}>
                            <div className={styles._buttonContainer}>
                                <GeneralButton height={3} backgroundColor='#2CACB3' textColor='#262833' text={data?.button?.title} />
                            </div>
                            <input type='string' className={styles._input} />
                        </div>
                    </div>
                    <div className={styles._services}> 
                        <p className={styles._servicesText}>{data?.lowTitle}</p>
                        <img src={'images/icons/complete-arrow-down.svg'} className={styles._downarrow} onClick={scrollToNextSection}></img>
                    </div>
                </div>
            </div>
            <div className={styles._customerContainer}>
                <div>
                    <h2 className={styles._customerTitle}>{content?.title}</h2>
                    <p className={styles._customerSubtitles}>{content?.subtitle}</p>
                </div>
                <div className={styles._commercesContainer}>
                    <div className={styles._commercesLogo} style={{backgroundImage: `url(${content?.commerces[0]?.image?.mediaItemUrl})`}}></div>
                    <div className={styles._commercesLogo} style={{backgroundImage: `url(${content?.commerces[1]?.image?.mediaItemUrl})`}}></div>
                    <div className={styles._commercesLogo} style={{backgroundImage: `url(${content?.commerces[2]?.image?.mediaItemUrl})`}}></div>
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

export default FirstBanner