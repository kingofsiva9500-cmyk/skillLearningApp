import React from 'react'
import BlockCard from './BlogCard'
import blogs from './Blockdata'

const FullStack = () => {
    const fullStackBlogs = blogs.filter(
    (blogdata) => blogdata.domain === 'Full Stack Development'
  )
  return (
     <div className='cardcontainer'>
      {fullStackBlogs.map((blogdata) => (
        <BlockCard key={blogdata.id} id={blogdata.id} blog={blogdata} />
      ))}
    </div>
  )
}

export default FullStack