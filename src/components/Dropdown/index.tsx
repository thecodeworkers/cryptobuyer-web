import styles from './styles.module.scss';
import { memo } from 'react';

const Dropdown = ({ show }) => {
  return (
    <div className={show ? styles._main : styles._hidden}>
      <div className={styles._leftSide}>
        <h4 className={styles._greenTitle}> Para ti</h4>

        <div className={styles._link}>
          <h4>Cryptobuyer</h4>
          <p>compra criptos con tu moneda local</p>
        </div>

        <div className={styles._link}>
          <h4>Visa</h4>
          <p>Afiliate y paga con tu tarjeta a nivel mundial</p>
        </div>

        <div className={styles._link}>
          <h4>Pay</h4>
          <p>
            Paga rápido y seguro
            desde tu wallet favorita
          </p>
        </div>

        <div className={styles._link}>
          <h4>ATM</h4>
          <p>
            Compra criptomonedas
            con tu efectivo en segundos
          </p>
        </div>

      </div>

      <div className={styles._line} />

      <div className={styles._rightSide}>
        <h4 className={styles._greenTitle}>Para tu negocio</h4>
        <div className={styles._link}>
          <h4>Pay</h4>
          <p>
            Recibe tus pagos
            de forma instantánea
          </p>
        </div>

        <div className={styles._link}>
          <h4>ATM</h4>
          <p>
            Habilita un cajero de
            criptos en tu negocio
            y haz crecer tu clientela
          </p>
        </div>

        <h4 className={styles._greenTitle}>Para tu Profesionales</h4>

        <div className={styles._link}>
          <h4>Pro</h4>
          <p>
            Compra, vende e
            intercambia criptos
            de forma rápida y segura
          </p>
        </div>
      </div>
    </div>
  )
};

export default memo(Dropdown);
