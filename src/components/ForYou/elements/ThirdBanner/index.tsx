import { memo, useRef } from 'react'
import styles from './styles.module.scss'
import { GeneralButton } from '@components'

const ThirdBanner = ({ data }) => {

  return (
    <div className={styles.main}>
      <div className={styles._container} >
        <div className={styles._content}>
          <div className={styles._leftContainer}>
            <div className={styles._cardsContainer}>
              <img className={styles._image} src='images/resource/cards.svg'></img>
            </div>
          </div>
          <div className={styles._rightContainer}>
            <p className={styles._title}>{data?.title}</p>
            <p className={styles._subtitle}>{data?.subtitle}</p>
            <div className={styles._buttonContainer}>
            <a href={data?.button?.link} rel={"noopener"} target='_blank'>
              <GeneralButton height={3} backgroundColor='#2CACB3' textColor='#fff' text={data?.button?.title} />
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(ThirdBanner)
