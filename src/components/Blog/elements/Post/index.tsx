import React from 'react'
import styles from './styles.module.scss'
import { Navbar, Footer } from '@components'
import Head from 'next/head'

const Post = () => {
  /*   { image, title = null, subtitle = null, share = true } */

  const title = 'hola'
  const subtitle = 'hello'
  const share = true

  return (
    <>
      <div className={styles._container}>
        <Head>
          <title>CryptoBuyer - Post</title>
        </Head>
        <Navbar color='#262833' />

        <div className={styles._postContainer}>
          <div className={styles._leftContainer}>
            <div className={styles._post}>

            <img className={styles._image} src={'images/banners/banner-pro.png'} />
            <div className={share ? styles._infoContainer : styles._infoContainerRight}>
              <div className={styles._previousInfo}>
                <p className={styles._title}>{title}</p>
                <p className={styles._subtitle}>{subtitle}</p>
                {share ? <a className={styles._link} href="">SHARE</a> : null}
              </div>
            </div>
            </div>
          </div>

          <div className={styles._rightContainer}>
          <div className={styles._textContainer}>
          <p className={styles._date}>Date</p>
          <p className={styles._title}>title</p>
          <p className={styles._content}>contenido</p>
          </div>
          </div>


          {/*  <style jsx>{`
        ._imageCover {
          height: ${title && share ? '50%' :
                    title && !share ? '60%' : '100%'}
        }
        `}
      </style> */}
        </div>


        {/*  <div className={[styles._image, '_imageCover'].join(" ")} style={{backgroundImage:`url(${image})`}}></div>
      {
        title ?
        <div className={ share ? styles._infoContainer : styles._infoContainerRight}>
          <div className={styles._previousInfo}>
            <p className={styles._title}>{title}</p>
            <p className={styles._subtitle}>{subtitle}</p>
            { share ? <a className={styles._link} href="">SHARE</a> : null }
          </div>
        </div> : null
      } */}
        {/*  <style jsx>{`
        ._imageCover {
          height: ${title && share ? '50%' :
                    title && !share ? '60%' : '100%'}
        }
        `}
      </style> */}
        <Footer />
      </div>

    </>
  )
}

export default Post
