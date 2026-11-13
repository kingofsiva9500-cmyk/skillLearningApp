import React from 'react'
import blogs from './Blockdata'
import BlockCard from './BlogCard'


const DataScience = () => {

   const datascience = blogs.filter(
    (blogdata) => blogdata.domain === 'Data Science'
   )
  return (
        <div className='cardcontainer'>
      {datascience.map((blogdata) => (
        <BlockCard key={blogdata.id} id={blogdata.id} blog={blogdata} />
      ))}
    </div>
  )
}

export default DataScience