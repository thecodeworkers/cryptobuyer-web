import React from 'react'
import styles from './styles.module.scss'

const PostCard = ({ image, title = null, subtitle = null, share = true }) => {

  return (
    <div className={styles._container}>
      <div className={[styles._image, '_imageCover'].join(" ")} style={{backgroundImage:`url(${image})`}}></div>
      {
        title ?
        <div className={ share ? styles._infoContainer : styles._infoContainerRight}>
          <div className={styles._previousInfo}>
            <p className={styles._title}>{title}</p>
            <p className={styles._subtitle}>{subtitle}</p>
            { share ? <a className={styles._link} href="">SHARE</a> : null }
          </div>
        </div> : null
      }
      <style jsx>{`
        ._imageCover {
          height: ${title && share ? '50%' :
                    title && !share ? '60%' : '100%'}
        }
        `}
      </style>
    </div>
  )
}

export default PostCard
