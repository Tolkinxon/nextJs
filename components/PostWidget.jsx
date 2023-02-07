import React, { useEffect, useState } from 'react'
import moment from 'moment'
import Link from 'next/link'
import getResentPosts from '../services'

const PostWidget = ({categories, slug}) => {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((res) => setRelatedPosts(res))
    } else {
      getResentPosts().then((res) => setRelatedPosts(res))
    }
  }, [])

  return <div>PostWidget</div>
}

export default PostWidget
