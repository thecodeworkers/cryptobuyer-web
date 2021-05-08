import { useState } from 'react'
import styles from './styles.module.scss'
import { GeneralButton } from '@components'
import { XptAtm } from '@images/logos'
import { useDispatch } from 'react-redux'
import { subscribeUser } from '../../../../store/actions'
import Swal from 'sweetalert2'

const ThirdBanner = ({ data }) => {

  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  const [isValid, setIsValid] = useState(0)

  const inputHandler = (event: any) => {
    const value = event.target.value
    setInput(value)
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const result = regex.test(input)
    result ? setIsValid(1) : setIsValid(2)
    if(!value.length) setIsValid(0)
  }

  const fetch = () => {
    if(isValid === 1) {
      dispatch(subscribeUser(input))
      setInput('');
      Swal.fire({
        icon: 'success',
        title: 'Gracias por suscribirte',
        confirmButtonText: 'Ok',
      })
    }
  }

  return (
    <div className={styles.main}>
      <div className={styles._container}>
        <div className={styles._content}>
          <div className={styles._leftContainer}>
            <div className={styles._logo}>
            <XptAtm color={'#fff'}/>
            </div>
            <p className={styles._title}>{data?.title}</p>
            <p className={styles._subtitle}>{data?.subtitle}</p>
            <div className={styles._formContainer}>
              <div className={styles._buttonContainer}>
                <GeneralButton height={3} backgroundColor='#fff' textColor='#262833' text={data?.button?.title} method={fetch}/>
              </div>
              <input type='string' className={isValid === 0 || isValid === 1 ? styles._input : styles._inputError} onChange={inputHandler} value={input} />
            </div>

          </div>
          <div className={styles._rightContainer}>
            <div className={styles._atmContainer}>
              <img className={styles._image} src='images/resource/atm-2.svg'></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThirdBanner
