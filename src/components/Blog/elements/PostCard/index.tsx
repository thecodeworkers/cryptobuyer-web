import React from 'react'
import styles from './styles.module.scss'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { getPost } from '../../../../store/actions'

const PostCard = ({ data, preview, outstanding }) => {

  const router = useRouter()
  const dispatch = useDispatch()

  const navigation = (route, loader: boolean = false) => {
    if (router.pathname != route) {
      /* if (loader) dispatch(setLoader(true)) */
      router.push(route)
    }
  }

  return (
    <div className={styles._container}>
      <div onClick={() => navigation('/post', true)} className={[styles._image, '_imageCover'].join(" ")} style={{backgroundImage:`url(${data?.post?.image?.mediaItemUrl})`}}></div>
      {
        preview ?
        <div className={ preview ? styles._infoContainer : styles._infoContainerRight}>
          <div className={styles._previousInfo}>
            <p className={styles._title}>{data.post.title}</p>
            <p className={styles._subtitle}>{data.post.subtitle}</p>
            { preview ? <a className={styles._link} href="">SHARE</a> : null }
          </div>
        </div> : null
      }
      <style jsx>{`
        ._imageCover {
          height: ${preview && !outstanding ? '50%' :
                    preview && outstanding ? '60%' : '100%'}
        }
        `}
      </style>
    </div>
  )
}

export default PostCard
