import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { Navbar, Footer } from '@components'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { setLoader } from '../../../../store/actions'

const Post = ({ post }) => {

  const router = useRouter()
  const dispatch = useDispatch()
  const [postDate, setPostDate] = useState(null)

  const setDate = () => {
    const date = post?.date ? new Date(post?.date) : new Date()
    const day = date?.getDate()
    const month = new Intl.DateTimeFormat('es-ES', { month: 'long' }).format(new Date(date));
    const year = date?.getFullYear()
    setPostDate(day + ' ' + month + ' ' + year)
  }

  useEffect(() => {
    if (post?.date != []) setDate()
    if (post?.date == []) setPostDate('')
  }, [post?.date])

  const navigation = (route, loader: boolean = false) => {
    if (router.pathname != route) {
      if (loader) dispatch(setLoader(true))
      router.push(route)
    }
  }

  return (
    <>
      <div className={styles._container}>
        <Head>
          <title>CryptoBuyer - Post</title>
        </Head>
        <Navbar color='#262833' />
        {post ? (<>
          <div className={styles._postContainer}>
            <div className={styles._leftContainer}>

              <img src='images/icons/back-arrow.svg' className={styles._arrowBack} onClick={() => navigation('blog', true)}></img>
              <div className={styles._post}>

                <div className={[styles._image, '_imageCover'].join(" ")} style={{ backgroundImage: `url(${post?.post?.image?.mediaItemUrl})` }}></div>

                <div className={styles._infoContainer}>
                  <div className={styles._previousInfo}>
                    <p className={styles._title}>{post?.post?.title}</p>
                    <p className={styles._subtitle}>{post?.post?.subtitle}</p>
                    <a className={styles._link} href="">SHARE</a>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles._rightContainer}>
              <div className={styles._textContainer}>
                <p className={styles._date}>{postDate}</p>
                <p className={styles._title}>{post?.post?.title}</p>
                <p className={styles._content}>{post?.post?.content}</p>
              </div>
            </div>
            <style jsx>{`
        ._imageCover {
            background-image:${`url(${post?.post?.image?.mediaItemUrl})`}
        `}
            </style>
          </div>
        </>) : null}
        <Footer />
      </div>
    </>
  )
}

export default Post
