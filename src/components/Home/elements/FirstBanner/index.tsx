import styles from './styles.module.scss'
import { createMarkup } from '@utils'
import { GeneralButton } from '@components'

const FirstBanner = ({ data }) => {
  return (
    <>
      <div className='_main'>
        <div className={styles._content}>
          <div className={styles._textParent}>
            <h1 className={styles._title} dangerouslySetInnerHTML={createMarkup(data?.title)}></h1>
            <p className={styles._subtitle} > {data?.subtitle} </p>

            <div className={styles._buttonContainer}>
              <GeneralButton
                height={3}
                backgroundColor='#F7C906'
                textColor='#262833'
                text={data?.button?.title}
              />
            </div>
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
