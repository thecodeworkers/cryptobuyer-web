import styles from './styles.module.scss'
import { createMarkup } from '@utils'

const Referral = ({ data }) => (
  <>
    <section className='_main'>
    </section>

  <style jsx>{`
  ._main {
      background-image: url(${data?.background?.mediaItemUrl});
      background-repeat: no-repeat;
      background-size: 100% 100%;
      width:100%;
      height: 20vw;
    }

    @media (max-width: 768px) {
      ._main {
        background-image: url(${data?.backgroundResponsive?.mediaItemUrl});
        background-size: cover;
        height: 30vh;
        background-position: center;
      }
    }
  `}</style>
  </>
)

export default Referral
