import styles from './styles.module.scss'

const MainAbout = ({ data }) => {
    const createMarkup = (text) => {
        return {__html: text};
    }

    const scrollToNextSection = () => {
		var i = 10;
		var int = setInterval(function () {
			window.scrollTo(0, i);
			i += 10;
			if (i >= document.documentElement.clientHeight) clearInterval(int);
		}, 20);
	}
    
    return (
    <div  style={{height: '100vh'}}>
        <div className={styles._bannerContainer} style={{ backgroundImage:`url(${data?.mainBanner?.background?.mediaItemUrl})` }}>
            <div className={styles._mainText}>
                <h1 className={styles._mainTitle}>{data?.mainBanner?.title}</h1>
                <div dangerouslySetInnerHTML={createMarkup(data?.mainBanner.content)}></div>
            </div>
            <div className={styles._middleCoin} style={{ backgroundImage:`url(${data?.mainBanner?.coin?.mediaItemUrl})` }}></div>    
        </div>
        <div className={styles._subtitleContainer}>
            <h2 className={styles._subtitleText} dangerouslySetInnerHTML={createMarkup(data?.subtitle)}></h2>
            <div>
                <p>Conoce nuestro <strong>equipo</strong></p>
                <img src={'images/icons/down-arrow.svg'} className={styles._downarrow} onClick={scrollToNextSection}></img>
            </div>
        </div>
    </div>
    )
}


export default MainAbout;
