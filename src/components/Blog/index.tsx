import React from 'react'
import { Navbar, Footer } from '@components'
import { MainSection } from './elements'
import Head from 'next/head'

const Blog = ({ content }) => {

  return (
    <div>
      <Head>
        <title>CryptoBuyer - Blog</title>
      </Head>
      <Navbar color='#262833' />
      <MainSection data={content} />
      <Footer />
    </div>
  )
}

export default Blog
