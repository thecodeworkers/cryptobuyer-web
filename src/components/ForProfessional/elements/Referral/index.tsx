import styles from './styles.module.scss'
import { createMarkup } from '@utils'

const Referral = ({ data }) => (
  <>
    <section className='_main'>
      <div className={styles._content}>
          <div className={styles._parragraph}>
              <h1> {data?.title} </h1>
              <div dangerouslySetInnerHTML={createMarkup(data?.subtitle)}></div>
              <div dangerouslySetInnerHTML={createMarkup(data?.discount)}></div>
          </div>
      </div>
    </section>

  <style jsx>{`
  ._main {
      background-image: url(${data?.background?.mediaItemUrl});
      background-repeat: no-repeat;
      background-size: 100% 100%;
      width:100%;
      height: 20vw;
    }

    @media (max-width: 996px) {
      ._main {
        background-size: cover;
        height: 30vh;
        background-position: center;
      }
    }
  `}</style>
  </>
)

export default Referral
