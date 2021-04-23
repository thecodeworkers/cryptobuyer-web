import { useState } from 'react'
import styles from './styles.module.scss'
import { paginate } from '../../../../utils'
import {Pagination} from '@components'
import PostCard from '../PostCard'

const perPage = 5

const MainSection = ({ data }) => {
  const [page, setPage] = useState(1)
  const {blogPage, outstanding, posts} = data

  return (
    <>
      <div className={styles._main}>
        <section className={styles._leftContainer}>
          <div className={styles._titlesContainer}>
            <h1 className={styles._mainTitle}>{blogPage?.blog?.title}</h1>
            <p className={styles._description}>{blogPage?.blog?.subtitle}</p>
          </div>
          <div className={styles._postsContainer}>
            {
              paginate(posts, page, perPage).map((post, index) => {
                index++
                return (
                  <div key={index} className={[styles[`_item${index}`], styles._item].join(" ")}>
                    <PostCard
                      data={post}
                      preview={index == 2 ? false : true}
                      outstanding={false}
                    />
                  </div>
                )
              })
            }
          </div>
          <div className={styles._paginationContainer}>
            {
              posts.length ? (
                <Pagination color='#707070' currentPage={page} items={posts} perPage={perPage} changePage={setPage}/>
              ) : null
            }
          </div>
        </section>
        <section className={styles._rightContainer}>
          {
            outstanding?.slice(0, 3).map((item, index) => {
              return (
                <div key={index} className={styles._famousContainer}>
                  <PostCard
                    data={item}
                    preview={true}
                    outstanding={true}
                  />
                </div>
              )
            })
          }
        </section>
      </div>
      <style jsx>{`
      ._background {
          background-image: url(https://picsum.photos/400/200);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width:100%;
        }

      ._height {
        height: 20vh;
      }
      `}</style>
    </>
  )
}

export default MainSection
