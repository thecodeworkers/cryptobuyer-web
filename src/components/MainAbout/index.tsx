import styles from './styles.module.scss'

const MainAbout = ({ data }) => {
    function createMarkup() {
        return {__html: data?.mainBanner.content};
    }
    console.log(data)
    return (
    <div  style={{height: '100vh'}}>
        <div className={styles._bannerContainer} style={{ backgroundImage:`url(${data?.mainBanner?.background?.mediaItemUrl})` }}>
            <div className={styles._mainText}>
                <h1 className={styles._mainTitle}>{data?.mainBanner?.title}</h1>
                <div dangerouslySetInnerHTML={createMarkup()}></div>
            </div>
        </div>
        <div className={styles._subtitleContainer}>
            <h2 className={styles._subtitleText}>{data?.subtitle}</h2>
            <p>Conoce a nuestro <strong>equipo</strong></p>
        </div>
    </div>
    )
}


export default MainAbout;
