import styles from './styles.module.scss'
import { LinkedIn } from '@images/icons'

const SecondBanner = ({ data }) => (
  <div className={styles._secondBanner}>
    <div className={styles._teamContainer}>
      {data?.team?.map((value, index) => {

        return (
          <div className={styles._teamItem} key={index}>
            <div className={styles._socialNetwork}>{<LinkedIn />}</div>
            <img src={value.imagen.mediaItemUrl} alt={value.imagen.slug} width='100px' height='100px' />
            <p className={styles._name} >{value.name}</p>
            <p className={styles._title} >{value.jobTitle}</p>
          </div>
        )
      })}
    </div>
    <div className={styles._textContainer}>
      <div className={styles._leftSide}>
        <div className={styles._textContent}>
          <h2>{data?.title1}</h2>
          <p>{data?.content1}</p>
        </div>
        <div className={styles._textContent}>
          <h2>{data?.title2}</h2>
          <p>{data?.content2}</p>
        </div>
      </div>
      <div className={styles._line}></div>
      <div className={styles._rightSide}>
        <div className={styles._textContent}>
          <h2>{data?.title3}</h2>
          <p>{data?.content3}</p>
        </div>
        <div className={styles._investors}>
          {data?.investors?.map((value, index) => {
            return (
              <div className={styles._investBox} key={index}>
                {value.map((value, index) => <img key={index} src={value.imagen.mediaItemUrl} alt={value.imagen.slug} width='auto' height='auto' />)}
              </div>
            )
          }
          )}
        </div>
      </div>
    </div>
  </div>
)


export default SecondBanner;
