import styles from './styles.module.scss';

const FirstBanner = ({ data }) => {
  return (
    <>
      <div className='_main'>
        <div className={styles._content}>
          <div className={styles._textParent}>
            <h1 className={styles._title}> {data.title} </h1>
            <p className={styles._subtitle} > {data.subtitle} </p>
            <button className={styles._button}> {data?.button?.title} </button>
          </div>
        </div>
      </div>

      <style jsx>{`
      ._main {
        background-image: url(${data?.background?.mediaItemUrl});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width:100%;
        height: 100vh;
      }
    `}</style>
    </>
  )
}

export default FirstBanner;
