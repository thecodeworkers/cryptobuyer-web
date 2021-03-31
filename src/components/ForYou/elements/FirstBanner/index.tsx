
import styles from './styles.module.scss'
import { GeneralButton } from '@components'
import { scrolling, createMarkup} from '@utils'

const ForYouFirstBanner = ({ data, reference }) => {

  return (
    <>
      <div className='_main'>
        <section className={styles._content}>
          <div className={styles._textContainer}>
            <h1 className={styles._title}>{data?.title}</h1>
            <p className={styles._text}>{data?.subtitle}</p>
            <div className={styles._btnParent}>
              <GeneralButton height={3} backgroundColor='#FFFFFF' textColor='#262833' text={data?.button?.title} />
            </div>
          </div>

          <div className={styles._secondTextParent}>
            <h2 className={styles._subtitle} dangerouslySetInnerHTML={createMarkup(data?.lowTitle)}></h2>
            <div>
              <p className={styles._serviceText}>Conoce todos nuestros servicios para ti</p>
              <div className={styles._arrowParent} onClick={() => scrolling(reference)} >
                <img src='images/icons/complete-arrow-down.svg' />
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
      ._main {
          background-image: url(${data?.background?.mediaItemUrl});
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width:100%;
          height: 100vh;
        }
      `}</style>
    </>
  )
}

export default ForYouFirstBanner;
