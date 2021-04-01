
import { GeneralButton } from '@components';
import styles from './styles.module.scss'

const PayCriptos = ({ data }) => {
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
            <p className={styles._more}>{data?.counter}</p>
          </div>
        </div>
      </div>

      <style jsx>{`
      ._main {
          background-image: url(${data?.background?.mediaItemUrl});
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width:100%;
          height: 45vw;
        }
      `}</style>
    </>
  )
}

export default PayCriptos;
