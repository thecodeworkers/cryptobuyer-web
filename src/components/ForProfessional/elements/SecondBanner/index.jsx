
import styles from './styles.module.scss'
import { GeneralButton } from '@components'
import { scrolling } from '@utils'

const SecondBanner = ({ data }) => (
  <>
    <div className={styles._main}>
      <div className={styles._container}>
        <div className={styles._content}>
          <div className={styles._leftContainer}>
            {/* <div className={styles._deviceContainer}> */}
              <img src='images/resource/devices.png' />
            {/* </div> */}
          </div>
          <div className={styles._rightContainer}>
              <h2 className={styles._title}>{data?.title}</h2>
              <p className={styles._subtitle}>{data?.subtitle}</p>
              <div className={styles._buttonContainer}>
                <GeneralButton height={3} backgroundColor='#2CACB3' textColor='#FFFFFF' text='Registrarse en Pro' />
              </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default SecondBanner
