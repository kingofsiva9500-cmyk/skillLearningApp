import React from 'react'
import BlockCard from './BlogCard'
import blogs from './Blockdata'


const All = () => {
  return (
    <div className='cardcontainer'>
   
      {blogs.map((blogdata) => (
        <BlockCard
          key={blogdata.id}
          id={blogdata.id}
          blog={blogdata}
        />
      ))}
             
    </div>
  )
}

export default All