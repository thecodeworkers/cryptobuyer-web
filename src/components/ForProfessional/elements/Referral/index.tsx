import styles from './styles.module.scss'

const Referral = () => (
  <>
    <section className='_main'>
      <div className={styles._content}>
          <div className={styles._parragraph}>
              <h1>Crezcamos juntos</h1>
              <p>Invita a tus amigos a Cryptobuyer Pro y obtén <strong> 30% de recompensa </strong> de las comisiones de trading de tus referidos directos</p>
              <p> <strong> 5% de descuento </strong>en tus propias comisiones</p>
          </div>
      </div>
    </section>

  <style jsx>{`
  ._main {
      background-image: url('images/banners/invitation.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      width:100%;
      height: 20vw;
    }
  `}</style>
  </>
)

export default Referral
