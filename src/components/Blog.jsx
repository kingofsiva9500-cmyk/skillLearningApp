import React from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'
import data from './Blockdata'

const Blog = () => {
    const { id } = useParams()
    const blog = data.find((datas) => datas.id === Number(id))


  return (
      <>
        <Header/>

     
      <h1 className='blog-title'>{blog.title}</h1>
       <div className='blog-hol'>
      <img src={blog.img} alt=""  className='bog-img'/>
   
       <div className='blog-inner'>
        <h3 className='blog-domain'>{blog.domain}</h3>
      <p className='blog-content'>{blog.content}</p>
      <button className='blog-button'>Read more</button>
       </div>
      </div>
    </>
  )
}

export default Blog