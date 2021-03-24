import { useSelector } from 'react-redux'
import { Navbar } from '../components'
import Head from 'next/head'
import styles from '../../public/styles/about-us.module.scss'

const AboutUs = () => {

  const { page: { aboutPage: { about } } } = useSelector(state => state)

  return (
    <div>
      <Head>
        <title>CryptoBuyer - Quienes Somos</title>
      </Head>
      <Navbar />
      <div style={{ backgroundColor: '#EFEFEF', width: '100%', height: '100vh', margin: 0, padding: 0 }}>
        <div style={{ height: '100px' }}>

        </div>
        <div className={styles._secondBanner}>
          <div className={styles._teamContainer}>
            {about?.secondBanner?.team?.map((value, index) => {

              return (
                <div className={styles._teamItem} key={index}>
                  <img src={value.imagen.mediaItemUrl} alt={value.imagen.slug} width='100px' height='100px' />
                  <p className={styles._name} >{value.name}</p>
                  <p className={styles._title} >{value.jobTitle}</p>
                </div>
              )
            })}
          </div>
          <div className={styles._textContainer}>
            <div className={styles._leftSide}>
              <div className={styles._textContent}>
                <h2>{about?.secondBanner?.title1}</h2>
                <p>{about?.secondBanner?.content1}</p>
              </div>
              <div className={styles._textContent}>
                <h2>{about?.secondBanner?.title2}</h2>
                <p>{about?.secondBanner?.content2}</p>
              </div>
            </div>
            <div className={styles._line}></div>
            <div className={styles._rightSide}>
              <div className={styles._textContent}>
                <h2>{about?.secondBanner?.title3}</h2>
                <p>{about?.secondBanner?.content3}</p>
              </div>
              <div className={styles._investors}>
                {about?.secondBanner?.investors?.map((value, index) => {
                  return (
                    <div className={styles._investBox} key={index}>
                      {value.map((value, index) => <img key={index} src={value.imagen.mediaItemUrl} alt={value.imagen.slug} width='auto' height='auto' />)}
                    </div>
                  )
                }
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
