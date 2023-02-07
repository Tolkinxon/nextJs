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
      <h3>{slug ? 'related Posts' : 'resetn posts'}</h3>
    </div>
  )
}

export default PostWidget
