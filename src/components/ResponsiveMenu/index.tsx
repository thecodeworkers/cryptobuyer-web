

import { useState } from 'react';
import styles from './styles.module.scss';

const ResponsiveMenu = ({ show = true }) => {

  return (
    <div className={show ? styles._parentShow : styles._parentHide} >

    </div>
  )
}

export default ResponsiveMenu
