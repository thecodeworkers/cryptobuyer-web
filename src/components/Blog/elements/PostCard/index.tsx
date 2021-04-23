import React from 'react'
import styles from './styles.module.scss'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { setLoader } from '../../../../store/actions'
import { getPost } from '@store/actions'

const PostCard = ({ image, title = null, subtitle = null, share = true }) => {

  const router = useRouter()
  const dispatch = useDispatch()

  const navigation = (route, loader: boolean = false) => {


    if (router.pathname != route) {

       dispatch(getPost({image, title, subtitle,}))
      /* if (loader) dispatch(setLoader(true)) */
      router.push(route)
    }
  }

  return (
    <div className={styles._container}>
      <div onClick={() => navigation('/post', true)} className={[styles._image, '_imageCover'].join(" ")} style={{backgroundImage:`url(${image})`}}></div>
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
