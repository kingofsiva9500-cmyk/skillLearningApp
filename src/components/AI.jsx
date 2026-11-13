import React from 'react'
import BlockCard from './BlogCard'
import blogs from './Blockdata'

const Ai = () => {
      const Ai = blogs.filter(
    (blogdata) => blogdata.domain === 'AI'
  )
  return (
         <div className='cardcontainer'>
      {
      Ai.map((blogdata) => (
        <BlockCard key={blogdata.id} id={blogdata.id} blog={blogdata} />
      ))}
    </div>
  
  )
}

export default Ai