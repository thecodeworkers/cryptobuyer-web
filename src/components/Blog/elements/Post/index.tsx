import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { Navbar, Footer } from '@components'
import Head from 'next/head'
import { useSelector } from 'react-redux'

const Post = () => {

  const { post: { post } } = useSelector((state: any) => state)
    console.log(post);

    const [postDate, setPostDate]= useState(null)

  useEffect(() => {
    if(post.date != []){
      let date = post?.date ? new Date(post?.date) : new Date()
      let day = date?.getDate()
      let month = new Intl.DateTimeFormat('es-ES', { month: 'long' }).format(new Date(date));
      let year = date?.getFullYear()
      setPostDate( day + ' ' + month + ' ' + year)
    }
    if(post.date == []){
      setPostDate('')
    }
  }, [post.date])

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
            height
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
