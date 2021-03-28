import styles from './styles.module.scss';

const Metrics = ({ data }) => (
  <div className={styles._main}>
    <div className={styles._content}>
      <div className={styles._text}>
        <div className={styles._metrics}>
          <p className={styles._count}> +{data[0]?.count} </p>
          <p className={styles._littleText}> {data[0]?.title} </p>
        </div>

        <div className={styles._metrics} >
          <p className={styles._count}> +{data[1]?.count} </p>
          <p className={styles._littleText}> {data[1]?.title} </p>
        </div>
      </div>
    </div>
  </div>
)

export default Metrics;
