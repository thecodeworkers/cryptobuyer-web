import styles from './styles.module.scss'
import React from 'react'
import { Logo } from '@images/logos'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { setLoader, seletedReference } from '@store/actions'

const Footer = () => {
  const { scrollReference } = useSelector((state: any) => state)

  const router = useRouter()
  const dispatch = useDispatch()

  const navigation = (...args) => {
    if (router.pathname != args[0]) {
      if (args[1]) dispatch(setLoader(true))
      if (args[2]) dispatch(seletedReference({ [args[3]]: { current: args[2] } }))
      router.push(args[0])

      return ;
    }

    if (args[2]) {
      dispatch(seletedReference({
        [args[3]]: {
          current: args[2],
          [args[2]]: !scrollReference[args[3]][args[2]]
        }
      }))
    }
  }

  const clickOption = (route, loader: boolean = false, reference = null, key = '') => {
    navigation(route, loader, reference, key)
  }

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
                <a onClick={() => clickOption('/for-you', true, 'hero', 'forYouReference')} className={styles._linkBold}>Para ti</a>
                <a className={styles._link} onClick={() => clickOption('/for-you', true, 'hero', 'forYouReference')}>Cryptobuyer</a>
                <a className={styles._link} onClick={() => clickOption('/for-you', true, 'visa', 'forYouReference')}>Visa</a>
                <a className={styles._link} onClick={() => clickOption('/for-you', true, 'pay', 'forYouReference')}>Pay</a>
                <a className={styles._link} onClick={() => clickOption('/for-you', true, 'atm', 'forYouReference')}>ATM</a>
              </div>
              <div className={styles._links}>
                <a onClick={() => clickOption('/for-business', true, 'hero', 'forBusinessReference')} className={styles._linkBold}>Para tu negocio</a>
                <a className={styles._link} onClick={() => clickOption('/for-business', true, 'pay', 'forBusinessReference')}>Pay</a>
                <a className={styles._link} onClick={() => clickOption('/for-business', true, 'atm', 'forBusinessReference')}>ATM</a>
                <p className={styles._link}></p>
                <p className={styles._link}></p>
              </div>
              <div className={styles._links}>
                <a onClick={() => clickOption('/for-pro', true, 'hero', 'forProReference')} className={styles._linkBold}>Para traders</a>
                <a className={styles._link} onClick={() => clickOption('/for-pro', true, 'second', 'forProReference')}>Pro</a>
                <p className={styles._link}> </p>
                <p className={styles._link}> </p>
                <p className={styles._link}> </p>


              </div>
              <div className={styles._links}>
                <a onClick={() => clickOption('/blog', true)} className={styles._linkBold}>Blog</a>
                <p className={styles._link}> </p>
              </div>
            </div>

            <div className={styles._speechMain}>
              {/* <div className={styles._speechTextContainer}>
                <div className={styles._speechContainer}>
                  <a className={styles._speechText}>Prensa</a>
                  <a className={styles._speechText}>Terminos y condiciones</a>
                  <a className={styles._speechText}>Política de privacidad</a>
                </div>
              </div> */}

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
