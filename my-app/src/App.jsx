
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './components/layout/AppLayout'
import Home from './page/Home'
import Services from './page/Services'
import Doctors from './page/Doctors'
import Contact from './page/Contact'
import Blogs from './page/Blogs'


function App() {
const router = createBrowserRouter([
    {
      path : "/",
      element : <AppLayout/>,
      children : [
        {
          path : "/",
          element : <Home/>
        },
        {
          path : "/services",
          element : <Services/>
        },
        {
          path : "/doctors",
          element : <Doctors/>
        },
        {
          path : "/contact",
          element : <Contact/>
        },
        {
          path : "/blogs",
          element : <Blogs/>
        }
      ]
    }
])

  return <RouterProvider  router={router}/>
   
}

export default App
