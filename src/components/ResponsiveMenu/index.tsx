

import { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import { Toggle } from '@images/icons'
import { Logo } from '@images/logos'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { setLoader } from '../../store/actions'

const ResponsiveMenu = ({ show = 0, method }: any) => {

  const router = useRouter()
  const dispatch = useDispatch()
  const [dropdown, setDropdown] = useState(false);

  const dropdownStatus = () => setDropdown(dropdown => !dropdown)

  const navigation = (route, loader: boolean = false) => {
    if (router.pathname != route) {
      if (loader) dispatch(setLoader(true))
      router.push(route)
      method(2)
    }
  }

  const menuStatus = (show: number) => {
    if (show === 0) return styles._staticMenu
    if (show === 1) return styles._parentShow
    if (show === 2) return styles._parentHide
  }

  return (
    <div className={menuStatus(show)} >
      <div className={styles._menuChild}>
        <div className={styles._toggleParent} onClick={() => method(2)}>
          <Toggle color='#ffffff' />
        </div>

        <div className={styles._content}>
          <div className={styles._links}>
            <ul className={styles._list}>
              <li onClick={dropdownStatus}>Productos
               <img
                  className={styles._arrow}
                  src={!dropdown ? 'images/icons/down-simple-arrow.svg' : 'images/icons/up-simple-arrow.svg'}
                  alt='arrow'>
                </img>

              </li>
              <hr className={styles._separator}></hr>

              {
                dropdown &&
                <>
                  <div className={styles._firstRow}>
                    <div>
                      <ul className={styles._linksList}>
                        <li onClick={() => navigation('/for-you', true)}>Para ti</li>
                        <li>Crytopbuyer</li>
                        <li>Visa</li>
                        <li>Pay</li>
                        <li>ATM</li>
                      </ul>
                    </div>

                    <div className={styles._secondListParent}>
                      <ul className={styles._linksList}>
                        <li onClick={() => navigation('/for-business', true)}>Para tu negocio</li>
                        <li>Pay</li>
                        <li>ATM</li>
                      </ul>
                    </div>
                  </div>

                  <div className={styles._secondRow}>
                    <ul className={styles._linksList}>
                      <li onClick={() => navigation('/for-pro', true)}>Para profesionales</li>
                      <li>Pro</li>
                    </ul>
                  </div>
                </>
              }

              <li onClick={() => navigation('/about-us', true)}>Sobre Nosotros </li>
              <hr className={styles._separator}></hr>
              <li onClick={() => navigation('/blog', true)}>Blog</li>
              <hr className={styles._separator}></hr>
            </ul>
          </div>

          <div>
            <div className={styles._buttonsParent}>
              <a className={styles._signUp}>
                Registrarse
               </a>

              <button className={styles._signInBtn}>
                Iniciar sesión
                </button>

            </div>
            <div className={styles._responsiveFooter}>
              <div className={styles._elements} >
                <div className={styles._logoParent}>
                  <Logo color='#fff' size='100%' />
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
            </div>

            <div className={styles._copyright}>
              <p className={styles._copyrightText}>© 2021, hecho con</p>
              <img src={'images/icons/heart.svg'} className={styles._heart}></img>
              <p className={styles._copyrightText}>por Cryptobuyer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResponsiveMenu
