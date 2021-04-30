import styles from './styles.module.scss'
import { GeneralButton } from '@components'
import { XptAtm } from '@images/logos'
const ThirdBanner = ({ data }) => {

  return (
    <div className={styles.main}>
      <div className={styles._container}>
        <div className={styles._content}>
          <div className={styles._leftContainer}>
            <div className={styles._logo}>
            <XptAtm color={'#fff'}/>
            </div>
            <p className={styles._title}>{data?.title}</p>
            <p className={styles._subtitle}>{data?.subtitle}</p>
            <div className={styles._formContainer}>
              <div className={styles._buttonContainer}>
                <GeneralButton height={3} backgroundColor='#fff' textColor='#262833' text={data?.button?.title} />
              </div>
              <input type='string' className={styles._input} />
            </div>

          </div>
          <div className={styles._rightContainer}>
            <div className={styles._atmContainer}>
              <img className={styles._image} src='images/resource/atm-2.svg'></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThirdBanner
