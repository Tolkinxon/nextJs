import React, { useEffect, useState } from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getResentPosts, getSimilarPosts } from '../services'

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((res) => setRelatedPosts(res))
    } else {
      getResentPosts().then((res) => setRelatedPosts(res))
    }
  }, [slug])

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4 ">
        {slug ? 'related Posts' : 'resetn posts'}
      </h3>
      {relatedPosts.map((post) => (
        <div className="flex items center w-full mb-4" key={post.title}>
          <div className="w-16 flex-none">
            <img
              src={post.featuredImage.url}
              alt={post.title}
              width="60px"
              height="60px"
              className="align-middle rounded-full"
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
            <Link href={`/post/${post.slug}`} className="text-indigo-500">
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget
