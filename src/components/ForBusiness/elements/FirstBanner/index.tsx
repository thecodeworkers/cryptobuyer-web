import styles from './styles.module.scss'
import { GeneralButton } from '@components'

const FirstBanner = ({ data }) => {

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
                                <input type='string' className={styles._input} />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    Button
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
