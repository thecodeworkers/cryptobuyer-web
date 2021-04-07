
import { GeneralButton } from '@components';
import styles from './styles.module.scss'

const MiddleBanner = ({ data }) => {

  return (
    <>
      <div className={styles._main}>
        <div className={styles._container}>
          <div className={styles._textContainer}>
            <h2>{data?.title}</h2>
            <p>{data?.subtitle}</p>
            <div className={styles._button}>
              <GeneralButton height={3} backgroundColor='#262833' textColor='#fff' text={data?.button?.title} />
            </div>
          </div>
          <div className={styles._imageContainer}>
            <div className={styles._contentImage}>
              {data.commerces.map((commerce, index) => {
                return (
                  <div className={styles._imageBox} key={index}>
                    {commerce.map((image, index) => <img key={index} src={image.image.mediaItemUrl} alt={image.image.slug} width='auto' height='auto' />)}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MiddleBanner;
