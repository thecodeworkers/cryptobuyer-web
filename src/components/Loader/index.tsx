import styles from './styles.module.scss'

const Loader = () => (
  <div className={styles._parent}>
    <div className={styles._circlesParent}>
      {
          Array(8).fill(0).map(item => {
            return <div />
          })
      }
    </div>
  </div>
)

export default Loader;
