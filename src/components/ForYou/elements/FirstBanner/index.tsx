
import styles from './styles.module.scss'
import { GeneralButton } from '@components'
import { scrolling, createMarkup } from '@utils'

const ForYouFirstBanner = ({ data, reference, scrollMethod }) => {

  return (
    <>
      <div className='_main'>
        <section className={styles._content}>
          <div className={styles._textContainer}>
            <h1 className={styles._title}>{data?.title}</h1>
            <p className={styles._text}>{data?.subtitle}</p>
            <div className={styles._btnParent}>
            <a href={data?.button?.link} rel={"noopener"} target='_blank'>
              <GeneralButton height={3} backgroundColor='#FFFFFF' textColor='#262833' text={data?.button?.title} />
            </a>
            </div>
          </div>

          <div className={styles._secondTextParent}>
            <div className={styles._subtitle} dangerouslySetInnerHTML={createMarkup(data?.lowTitle)}></div>
            <div>
              <p className={styles._serviceText}>Conoce todos nuestros servicios <b>para ti</b></p>
              <div className={styles._arrowParent} onClick={scrollMethod} >
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
          background-size: cover;
          background-position: center;
          width:100%;
          height: 100vh;
        }
        @media(max-width: 576px) {
        ._main{
          background-image: url(${data?.backgroundResponsive?.mediaItemUrl});
          height: 100vh;
          background-position: center;
         background-size:cover
        }
        }
      `}</style>
    </>
  )
}

export default ForYouFirstBanner
