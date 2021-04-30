import styles from './styles.module.scss'
import { GeneralButton } from '@components'
import { XptPro } from '@images/logos'

const ThirdBanner = ({ data }) => (
  <>
    <div className='_main'>
      <div className={styles._content}>
        <div className={styles._textParent}>
          <div className={styles._logo}>
          <XptPro color={'#262833'} />
          </div>

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
      @media(max-width: 678px) {
        ._main{
        height: 150vw;
        background-size: 100% 100%;
        background-position: center;
        background-image: url(../images/resource/home.png)

        }
      }
    `}</style>
  </>
)

export default ThirdBanner
