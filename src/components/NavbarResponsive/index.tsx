import { useState } from 'react'
import styles from './styles.module.scss'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { setLoader } from '../../store/actions'
import { ResponsiveMenu } from '../'
import { Toggle } from '../../../public/images/icons'

const NavbarResponsive = () => {

  const router = useRouter()
  const dispatch = useDispatch()
  const [menu, setMenu] = useState(0);

  const navigation = (route, loader: boolean = false) => {
    if (router.pathname != route) {
      if (loader) dispatch(setLoader(true))
      router.push(route)
    }
  }

  const showOrHideMenu = (status: number) => setMenu(status)

  return (
    <>
    <nav className={styles._parent}>
      <div className={styles._content}>
        <div onClick={() => navigation('/', true)}>
          <img src='images/icons/mini-logo.svg'></img>
        </div>

        <div className={styles._rightItems}>
          <img src='images/icons/user.svg'></img>

          <div onClick={() => showOrHideMenu(1)} className={styles._toggleParent}>
           <Toggle/>
          </div>
        </div>
      </div>
    </nav>

    <ResponsiveMenu show={menu} method={showOrHideMenu} />
    </>
  )
};

export default NavbarResponsive;
