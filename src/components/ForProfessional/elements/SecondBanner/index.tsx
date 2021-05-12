
import styles from './styles.module.scss'
import { GeneralButton } from '@components'

const SecondBanner = ({ data, reference }) => (
  <>
    <div className={styles._main} ref={reference}>
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
                <GeneralButton height={3} backgroundColor='#ecf0f1' textColor='#FFFFFF' text={data?.button?.title} />  {/* #2CACB3 */}
              </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default SecondBanner
