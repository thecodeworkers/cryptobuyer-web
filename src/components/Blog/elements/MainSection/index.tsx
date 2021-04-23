import { useState } from 'react'
import styles from './styles.module.scss'
import { paginate } from '../../../../utils'
import {Pagination} from '@components'
import PostCard from '../PostCard'

const perPage = 5

const MainSection = ({ data }) => {
  const [page, setPage] = useState(1)
  const {blogPage, outstanding, posts} = data
  console.log(posts);

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
                      image={post.post.image.mediaItemUrl}
                      title={index == 2 ? null : post.post.title}
                      subtitle={index == 2 ? null : post.post.subtitle}
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
                    image={item.post.image.mediaItemUrl}
                    title={item.post.title}
                    subtitle={item.post.subtitle}
                    share={false}
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
