import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Dashbord from './components/Dashbord'

import {createBrowserRouter,RouterProvider} from "react-router-dom";
const router = createBrowserRouter(
  [
    { 
      path:"/",
      element:<div>
        <Home/>
        <Navbar/>
      </div>
    },
    {
      path:"/about",
      element:<div>
        <About/>
        <Navbar/>
      </div>
    },
    {
      path:"/dashbord",
      element:<div>
        <Dashbord/>
        <Navbar/>
      </div>
    }
  ]
)

function App() {
  

  return (
    <>
      <div>
        <RouterProvider router={router} /> 
      </div>
      
    </>
  )
}

export default App
