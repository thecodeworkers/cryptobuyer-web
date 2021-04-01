import { createMarkup } from '@utils'
import { memo } from 'react'
import GeneralButton from 'src/components/GeneralButton'
import styles from './styles.module.scss'


const SecondBanner = ({ data }) => {
  console.log(data)
  return (
    <>
      <div className='_main'>
        <div className={styles._container}>
          <div className={styles._spaceContainer}>

          </div>
          <div className={styles._textContainer}>
            <h2>{data?.title}</h2>
            <p>{data?.subtitle}</p>
            <div className={styles._button}>
              <GeneralButton height={3.5} backgroundColor='#FFFFFF' textColor='#262833' text={data?.button?.title} />
            </div>
            <p className={styles._more} dangerouslySetInnerHTML={createMarkup(data?.counter)} ></p>
          </div>
        </div>
        <div className={styles._coinContent}>
          {data?.currencies.map((currency, index) => {
            return (
              <div className={styles._coin} key={index}>
                <img src={currency.image.mediaItemUrl} alt={currency.image.slug} width='100%' height='100%' />
              </div>
            )
          })}
        </div>
      </div>
      <style jsx>{`
      ._main {
          background-image: url(${data?.background?.mediaItemUrl});
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width:100%;
          height: 45vw;
          position: relative;
        }
      `}</style>
    </>
  )
}

export default memo(SecondBanner)
