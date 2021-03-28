import styles from './styles.module.scss'
import { GeneralButton } from '@components'

const ThirdBanner = ({ data }) => (
  <>
    <div className='_main'>
      <div className={styles._content}>
        <div className={styles._textParent}>
          <h1 className={styles._title}> {data?.title} </h1>
          <p className={styles._subtitle}> {data?.subtitle} </p>

          <div className={styles._buttonParent}>
            <GeneralButton height={3} backgroundColor='#262833' textColor='#fff' text={data?.button?.title} />
          </div>
        </div>
      </div>
    </div>

    <style jsx>{`
      ._main {
        background-image: url(${data?.background?.mediaItemUrl});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width:100%;
        height: 40vw;
      }
    `}</style>
  </>
)

export default ThirdBanner
