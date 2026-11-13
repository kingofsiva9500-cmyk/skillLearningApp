import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'

const BlogCard = ({blog,id }) => {
  const navigate = useNavigate()
  return (
    <div className='container'>
        <div onClick={()=>{navigate(`/blog/${id}`)}}>
           <img src={blog.img} alt=""  className='images'/>
           <p className='title'>{blog.title}</p>
        </div>
    </div>
  )
}

export default BlogCard 