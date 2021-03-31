import { useRef } from 'react'
import styles from './styles.module.scss'
import { GeneralButton } from '@components'
import { createMarkup } from '@utils'

const SecondBanner = ({ data, content }) => {

  const publicityBannerRef = useRef();


  return (
      <div className={styles.main}>
      <div className={styles._firstContainer} ref={publicityBannerRef}>
        <div className={styles._firstContent}>
          <div className={styles._firstLeftContainer}>
          <div className={styles._phoneContainer}>
              <img src='images/resource/phone.svg'></img>
            </div>
          </div>
          <div className={styles._firstRightContainer}>
            <p className={styles._firstTitle} dangerouslySetInnerHTML={createMarkup(data?.title)}></p>
            <p className={styles._firstSubtitle}>{ data?.subtitle }</p>
          </div>
        </div>
      </div>

      <div className={styles._secondContainer} ref={publicityBannerRef}>
        <div className={styles._secondContent}>
          <div className={styles._secondLeftContainer}>
          <p className={styles._secondTitle}>{content?.title}</p>
            <p className={styles._secondSubtitle}>{content?.subtitle}</p>
            <div className={styles._secondButtonContainer}>
              <GeneralButton height={3} backgroundColor='#fff' textColor='#262833' text='Más información' />
            </div>
          </div>
          <div className={styles._secondRightContainer}>
            <div className={styles._atmContainer}>
              <img src='images/resource/atm.svg'></img>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default SecondBanner
