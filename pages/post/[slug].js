import {
  Categories,
  PostWidget,
  PostDetail,
  Comments,
  Author,
  CommentsForm,
} from '@/components'
import { getPostDetails } from '@/services'

import React from 'react'

const postDetails = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
        <div className="col-span-1 lg:col-span-8">
          <PostDetail />
          <Author />
          <CommentsForm />
          <Comments />
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const data = (await getPostDetails(params.slug)) || []

  return {
    props: {
      post: data
    }
  }
}
