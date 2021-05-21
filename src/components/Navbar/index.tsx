import { memo, useState } from 'react'
import { Logo } from '@images/logos'
import { DownArrow } from '@images/icons'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { setLoader } from '@store/actions'
import { NavbarResponsive } from '@components'
import Dropdown from '../Dropdown'
import styles from './styles.module.scss'

const Navbar = ({ color = '#262833' }) => {
  const router = useRouter()
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()

  const showPoint = (route) => {
    if (router.pathname == route) {
      return (
        <div className={styles._pointParent}>
          <div className={styles._point}></div>
        </div>
      )
    }
  }

  const activeColor = (route, products = false) => {
    if (router.pathname == route) return styles._activeColor
    return !products ? styles._paddingLeft : styles._products
  }

  const navigation = (route, loader: boolean = false) => {
    if (router.pathname != route) {
      if (loader) dispatch(setLoader(true))
      router.push(route)
    }
  }
  return (
    <>
      <div className={styles._parent}>
        <div className={styles._main}>
          <div className={styles._leftSide}>
            <div className={styles._logoParent} onClick={() => navigation('/', true)}>
              <Logo color={color} />
            </div>

            <div>
              <ul className='_list'>
                <li className={activeColor('/products', true)}>
                  <span onClick={() => setShow(show => !show)} > Productos
                   <span className={styles._icon}> <DownArrow fill={color} /> </span>
                  </span>
                  {showPoint('/products')}
                  <Dropdown show={show} onPress={() => setShow(show => !show)} />

                </li>
                <li className={activeColor('/about-us')} onClick={() => navigation('/about-us', true)} > Sobre Nosotros
                  {showPoint('/about-us')}
                </li>
                <li className={activeColor('/blog')} onClick={() => navigation('/blog', true)}> Blog
                   {showPoint('/blog')}
                </li>
              </ul>
            </div>
          </div>

          <div>
            <a className={styles._signUp} href='https://cryptobuyer.io/accounts/signup/' target='_blank' rel='noopener'>
              Registrarse
           </a>

            <a href='https://cryptobuyer.io/accounts/login/' target='_blank' rel='noopener'>
              <button className={styles._signInBtn}>
                Iniciar sesión
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className={styles._responsive}>
        <NavbarResponsive />
      </div>

      <style jsx>{`
    ._list {
      padding-left: 4rem;
      display: flex;
      list-style: none;
      font-family: Helvetica-Now-Text, sans-serif;
      font-size: 0.875rem;
    }

    ._list li {
      color: ${color};
      cursor: pointer;
    }

    @media(max-width: 1200px) {
      ._list {
        padding-left: 3rem;
      }
    }
    `}</style>
    </>
  )
};

export default memo(Navbar)
