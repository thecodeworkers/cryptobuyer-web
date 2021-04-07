import styles from './styles.module.scss'
import { scrolling, createMarkup } from '@utils'

const RightSection = ({ }) => {
  return (
    <>
      <div className={styles._main}>
        <section className={styles._content}>
          <div className={styles._postsContainer}>
            <div>
              <div className={[styles._one, "_background"].join(" ")}></div>
              <h3>Title</h3>
              <p>Description</p>
            </div>
            <div>
              <div className={[styles._two, "_background"].join(" ")}></div>
              <h3>Title</h3>
              <p>Description</p>
            </div>
            <div>
              <div className={[styles._three, "_background"].join(" ")}></div>
              <h3>Title</h3>
              <p>Description</p>
            </div>
          </div>
        </section>
      </div>
      <style jsx>{`
      ._background {
          background-image: url(https://picsum.photos/400/200);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width:100%;
          height: 15vh;
        }
      `}</style>
    </>
  )
}

export default RightSection
