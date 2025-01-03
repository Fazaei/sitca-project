import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./screen/Layout"
import Landing from "./screen/landing/Landing"
import Profile from "./screen/profile/Profile"


function App() {

  const myRouter = createBrowserRouter([
    {
      path:'',
      element:<Layout/>,
      children:[
        {
          path:'',
          element:<Landing/>
        },
        {
          path:'profile',
          element:<Profile/>
        },  
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={myRouter}/>
    </>
  )
}

export default App
