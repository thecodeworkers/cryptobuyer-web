import styles from './styles.module.scss'
import { createMarkup } from '@utils'
 import { XptPay } from '@images/logos'

const SecondBanner = ({ data }) => {

  return (
    <div className={styles.main}>
      <div className={styles._container} >
        <div className={styles._content}>
          <div className={styles._leftContainer}>
            <div className={styles._phoneContainer}>
              <img className={styles._image} src='images/resource/phone.svg'></img>
            </div>
          </div>
          <div className={styles._rightContainer}>
            <div className={styles._logo}>
             <XptPay color={'#262833'} />
            </div>
            <div className={styles._title} dangerouslySetInnerHTML={createMarkup(data?.title)}></div>
            <p className={styles._subtitle}>{data?.subtitle}</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SecondBanner
