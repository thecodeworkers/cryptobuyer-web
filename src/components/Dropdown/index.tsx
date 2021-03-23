import styles from './styles.module.scss';

const Dropdown = ({ show }) => {
  return (
    <div className={show ? styles._main : styles._hidden}> dropdown</div>
  )
};

export default Dropdown;
