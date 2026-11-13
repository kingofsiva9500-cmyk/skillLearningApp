import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Template from './components/Template'
import All from './components/All'
import FullStack from './components/FullStack'
import DataScience from './components/DataScience'
import CyberSecurity from './components/CyberSecurity'
import AI from './components/AI'
import Error from './components/Error'
import Blog from './components/Blog'


const App = () => {
  const router =   createBrowserRouter([
        {
          path:"/",
          element:<Template/>,
          children:[
             {
                path:"/",
                element:<All/>
             },
             {
                path:"/fullStack",
                element:<FullStack/>
             },
             {
                path:"/datascience",
                element:<DataScience/>
             },
             {
                path:"/cybersecurity",
                element:<CyberSecurity/>
             },
             {
                path:"/ai",
                element:<AI/>
             },
             {
             path:"/*",
             element:<Error/>
             }
          ]
        }
        ,
        {
         path:"/blog/:id",
         element:<Blog/>
        }
     ])
  return (
    <RouterProvider router={router} />
  )
}

export default App