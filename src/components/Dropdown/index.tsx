import styles from './styles.module.scss'
import { memo } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { setLoader, seletedReference } from '../../store/actions'

const Dropdown = ({ show }) => {
  const { scrollReference } = useSelector((state: any) => state)
  const dispatch = useDispatch()
  const router = useRouter()

  const navigation = (route, loader: boolean = false, reference = null, key = '') => {
    if (router.pathname != route) {
      if (loader) dispatch(setLoader(true))
      if (reference) dispatch(seletedReference({ [key]: { current: reference } }))
      router.push(route)

      return ;
    }

    if (reference) {
      dispatch(seletedReference({
        [key]: {
          current: reference,
          [reference]: !scrollReference.forYouReference[reference]
        }
      }))
    }
  }

  return (
    <div className={show ? styles._main : styles._hidden}>
      <div className={styles._leftSide}>
        <h4 className={styles._greenTitle} onClick={() => navigation('/for-you', true)}> Para ti</h4>

        <div className={styles._link} onClick={() => navigation('/for-you', true)}>
          <h4>Cryptobuyer</h4>
          <p>compra criptos con tu moneda local</p>
        </div>

        <div className={styles._link} onClick={() => navigation('/for-you', true, 'visa', 'forYouReference')}>
          <h4>Visa</h4>
          <p>Afiliate y paga con tu tarjeta a nivel mundial</p>
        </div>

        <div className={styles._link} onClick={() => navigation('/for-you', true, 'pay', 'forYouReference')}>
          <h4>Pay</h4>
          <p>
            Paga rápido y seguro
            desde tu wallet favorita
          </p>
        </div>

        <div className={styles._link} onClick={() => navigation('/for-you', true, 'atm', 'forYouReference')}>
          <h4>ATM</h4>
          <p>
            Compra criptomonedas
            con tu efectivo en segundos
          </p>
        </div>

      </div>

      <div className={styles._line} />

      <div className={styles._rightSide}>
        <h4 className={styles._greenTitle} onClick={() => navigation('/for-business', true)}> Para tu negocio</h4>
        <div className={styles._link} onClick={() => navigation('/for-business', true, 'pay', 'forBusinessReference')}>
          <h4 >Pay</h4>
          <p>
            Recibe tus pagos
            de forma instantánea
          </p>
        </div>

        <div className={styles._link} onClick={() => navigation('/for-business', true, 'atm', 'forBusinessReference')}>
          <h4>ATM</h4>
          <p>
            Habilita un cajero de
            criptos en tu negocio
            y haz crecer tu clientela
          </p>
        </div>

        <h4 className={styles._greenTitle} onClick={() => navigation('/for-pro', true)}>Para traders</h4>

        <div className={styles._link} onClick={() => navigation('/for-pro', true, 'second', 'forProReference')} >
          <h4 >Pro</h4>
          <p>
            Compra, vende e
            intercambia criptos
            de forma rápida y segura
          </p>
        </div>
      </div>
    </div>
  )
}

export default memo(Dropdown)
