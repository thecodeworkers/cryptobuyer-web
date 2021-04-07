import styles from './styles.module.scss'
import { createMarkup } from '@utils'

const Referral = ({ data }) => (
  <>
    <section className='_main'>
      <div className={styles._content}>
          <div className={styles._parragraph}>
              <h1> {data?.title} </h1>
              <p dangerouslySetInnerHTML={createMarkup(data?.subtitle)}></p>
              <p dangerouslySetInnerHTML={createMarkup(data?.discount)}></p>
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
  `}</style>
  </>
)

export default Referral
