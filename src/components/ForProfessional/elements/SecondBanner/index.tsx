
import styles from './styles.module.scss'
import { GeneralButton } from '@components'

const SecondBanner = ({ data }) => (
  <>
    <div className={styles._main}>
      <div className={styles._container}>
        <div className={styles._content}>
          <div className={styles._leftContainer}>
            <div className={styles._imageContainer}>
              <img src='images/resource/devices.svg' />
            </div>
          </div>
          <div className={styles._rightContainer}>
              <h2 className={styles._title}>{data?.title}</h2>
              <p className={styles._subtitle}>{data?.subtitle}</p>
              <div className={styles._buttonContainer}>
              <a href={data?.button?.link} rel={"noopener"} target='_blank'>
                <GeneralButton height={3} backgroundColor='#2CACB3' textColor='#FFFFFF' text={data?.button?.title} />
              </a>
              </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default SecondBanner
