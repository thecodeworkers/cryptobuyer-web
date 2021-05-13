import styles from './styles.module.scss'

const Toast = ({ status = 0 }) => {

  const currentClass = (status: number) => {
    if(status === 0) return styles._toast
    if(status === 1) return styles._toastIn
    if(status === 2) return styles._toastOut
  }

  return (
    <div className={currentClass(status)}>
      <div className={styles._content}>
        <img src='images/icons/check.svg' width='20px' height='20px' alt='check'></img>
        <p>¡Gracias por suscribirte!</p>
      </div>
    </div>
  )
}

export default Toast;
