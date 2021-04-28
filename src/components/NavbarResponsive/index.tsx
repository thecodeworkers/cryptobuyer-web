import styles from './styles.module.scss'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { setLoader } from '../../store/actions'
import { ResponsiveMenu } from '../'

const NavbarResponsive = () => {

  const router = useRouter()
  const dispatch = useDispatch()

  const navigation = (route, loader: boolean = false) => {
    if (router.pathname != route) {
      if (loader) dispatch(setLoader(true))
      router.push(route)
    }
  }

  return (
    <>
    <nav className={styles._parent}>
      <div className={styles._content}>
        <div onClick={() => navigation('/', true)}>
          <img src='images/icons/mini-logo.svg'></img>
        </div>

        <div className={styles._rightItems}>
          <img src='images/icons/user.svg'></img>
          <img src='images/icons/toggle.svg'></img>
        </div>
      </div>
    </nav>

    <ResponsiveMenu />
    </>
  )
};

export default NavbarResponsive;
