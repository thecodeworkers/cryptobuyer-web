import styles from './styles.module.scss'
import React from 'react'
import { Logo } from '@images/logos'

const Footer = () => {

  return (
    <>
      <footer className={styles._footerContainer}>
        <div className={styles._footer}>

          <div className={styles._logoMain} >
            <Logo color='#fff' />
          </div>

          <div className={styles._content}>
            <div className={styles._linksContainer}>
              <div className={styles._links}>
                <a className={styles._linkBold}>Pro</a>
                <a className={styles._link}>Go to</a>
                <a className={styles._link}>Beneficios</a>
                <a className={styles._link}>Servicios</a>
              </div>
              <div className={styles._links}>
                <a className={styles._linkBold}>Pay</a>
                <a className={styles._link}>Comienza</a>
                <a className={styles._link}>Beneficios</a>
                <a className={styles._link}>Servicio</a>
              </div>
              <div className={styles._links}>
                <a className={styles._linkBold}>ATM</a>
                <a className={styles._link}>Qué es ATM</a>
                <a className={styles._link}>Beneficios</a>
                <a className={styles._link}>Noticias</a>
              </div>
              <div className={styles._links}>
                <a className={styles._linkBold}>Blog</a>
                <a className={styles._link}>Destacados</a>
                <a className={styles._link}>Noticias</a>
                <p className={styles._link}></p>
              </div>
            </div>

            <div className={styles._speechMain}>
              <div className={styles._speechTextContainer}>
                <div className={styles._speechContainer}>
                  <a className={styles._speechText}>Prensa</a>
                  <a className={styles._speechText}>Terminos y condiciones</a>
                  <a className={styles._speechText}>Política de privacidad</a>
                </div>
              </div>

              <div className={styles._speechContainer}>
                <p className={styles._speech}>Llevo usando la plataforma desde sus inicios,
                Cryptobuyer me brinda seguridad y rapidez
                para manejar mis criptomonedas,
                cada día mejoran sus servicios,
                siempre dando nuevas opciones,
              simplemente la mejor opción del mercado.</p>
              </div>

              <div className={styles._logos}>
                <div className={styles._logo}>
                  <a href='https://www.thecodeworkers.com' >
                    <img src='images/logos/tcw-logo.svg' />
                  </a>
                </div>

                <div className={styles._logo}>
                  <img src='images/logos/banana-logo.svg' />
                </div>
              </div>
            </div>

          </div>
          <div className={styles._copyright}>
            <p className={styles._copyrightText}>© 2021, hecho con</p>
            <img src={'images/icons/heart.svg'} className={styles._heart}></img>
            <p className={styles._copyrightText}>por Cryptobuyer</p>
          </div>
        </div>
      </footer>

      <footer className={styles._responsiveFooter}>
        <div className={styles._elements} >
          <div className={styles._logoParent}>
            <Logo color='#fff' size='100%'/>
          </div>

          <div className={styles._logosParent}>
            <div className={styles._logo}>
              <a href='https://www.thecodeworkers.com' >
                <img src='images/logos/tcw-logo.svg' />
              </a>
            </div>

            <div className={styles._logo}>
              <img src='images/logos/banana-logo.svg' />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
