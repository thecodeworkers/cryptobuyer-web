import { memo } from 'react'
import styles from './styles.module.scss'
import { GeneralButton } from '@components'
import { XptAtm } from '@images/logos'

const FourthBanner = ({ data, reference }) => {

  return (
    <div className={styles.main} ref={reference}>
      <div className={styles._container}>
        <div className={styles._content}>
          <div className={styles._leftContainer}>
            <div className={styles._logo}>
            <XptAtm color={'#262833'} />
            </div>
            <p className={styles._title}>{data?.title}</p>
            <p className={styles._subtitle}>{data?.subtitle}</p>
            <div className={styles._buttonContainer}>
            <a href={data?.button?.link} rel={"noopener"} target='_blank'>
              <GeneralButton height={3} backgroundColor='#fff' textColor='#262833' text={data?.button?.title} />
           </a>
            </div>
          </div>
          <div className={styles._rightContainer}>
            <div className={styles._atmContainer}>
              <img className={styles._image} src='images/resource/atm.svg'></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(FourthBanner)
