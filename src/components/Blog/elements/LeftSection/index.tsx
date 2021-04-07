import styles from './styles.module.scss'
import { scrolling, createMarkup } from '@utils'

const LeftSection = ({ }) => {
  return (
    <>
      <div className={styles._main}>
        <section className={styles._leftContainer}>
          <div className={styles._titlesContainer}>
            <h1 className={styles._mainTitle}>Conoce lo mas relevante en el mundo de los activos digitales</h1>
            <p className={styles._description}>En nuestro blog encontraras las noticias mas importantes de economia, tecnologia y finanzas</p>
          </div>
          <div className={styles._postsContainer}>
            <div className={[styles._one, "_background"].join(" ")}></div>
            <div className={[styles._two, "_background"].join(" ")}></div>
            <div className={[styles._three, "_background"].join(" ")}></div>
            <div className={[styles._four, "_background"].join(" ")}></div>
            <div className={[styles._five, "_background"].join(" ")}></div>
          </div>
        </section>
        <section className={styles._rightContainer}>
          <div className={styles._famousContainer}>
            <div className={["_background", "_height"].join(" ")}></div>
            <h3 className={styles._famousTitle}>Excepteur sint occaecat.</h3>
            <p className={styles._famousDescription}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
          </div>
          <div className={styles._famousContainer}>
            <div className={["_background", "_height"].join(" ")}></div>
            <h3 className={styles._famousTitle}>Excepteur sint occaecat.</h3>
            <p className={styles._famousDescription}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
          </div>
          <div className={styles._famousContainer}>
            <div className={["_background", "_height"].join(" ")}></div>
            <h3 className={styles._famousTitle}>Excepteur sint occaecat.</h3>
            <p className={styles._famousDescription}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
          </div>
        </section>
      </div>
      <style jsx>{`
      ._background {
          background-image: url(https://picsum.photos/400/200);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width:100%;
        }

      ._height {
        height: 20vh;
      }
      `}</style>
    </>
  )
}

export default LeftSection
