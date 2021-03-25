import { useState } from 'react'
import styles from './styles.module.scss';
import { Dropdown } from '../';
import { Logo } from '../../../public/images/logos'

const Navbar = () => {

  const [show, setShow] = useState(false)

  return (
    <div className={styles._parent}>
      <div className={styles._main}>
        <div className={styles._leftSide}>
          <div>
            <Logo color='#262833' />
          </div>
          <div>
            <ul className={styles._list}>
              <li className={styles._products}>
                <span onClick={() => setShow(show => !show)} className={styles._products}> Productos <img className={styles._icon} src='images/icons/down-arrow.svg' /></span>
                <Dropdown show={show} />

              </li>
              <li className={styles._paddingLeft}> Sobre Nosotros </li>
              <li className={styles._paddingLeft}> Blog </li>
            </ul>
          </div>
        </div>

        <div>
          <a className={styles._signUp}>
            Registrarse
          </a>

          <button className={styles._signInBtn}>
            Iniciar sesión
          </button>
        </div>
      </div>
    </div>
  )
};

export default Navbar;
