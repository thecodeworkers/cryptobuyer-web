
import { GeneralButton } from '@components';
import styles from './styles.module.scss'

const Customers = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className={styles._main}>
        <div className={styles._container}>
          <div className={styles._textContainer}>
            <h2>{data?.title}</h2>
            <p>{data?.subtitle}</p>
            <div className={styles._button}>
              <GeneralButton height={3} backgroundColor='#262833' textColor='#fff' text={data?.button?.title} />
            </div>
          </div>
          <div className={styles._imageContainer}>
          </div>
        </div>
      </div>
    </>
  )
}

export default Customers;
