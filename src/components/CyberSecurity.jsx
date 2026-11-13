import React from 'react'
import BlockCard from './BlogCard'
import blogs from './Blockdata'

const CyberSecurity = () => {
  const cyberSecurityBlogs = blogs.filter(
    (blogdata) => blogdata.domain === 'Cyber Security'
  )

  return (
     <div className='cardcontainer'>
      {cyberSecurityBlogs.map((blogdata) => (
        <BlockCard key={blogdata.id} id={blogdata.id} blog={blogdata} />
      ))}
    </div>
  )
}

export default CyberSecurity