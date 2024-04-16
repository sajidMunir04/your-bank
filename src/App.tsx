import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Careers from './pages/Careers'
import About from './pages/About'
import Security from './pages/Security'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

function App() {
    const routes = createBrowserRouter([
      {
        element: <Home/>
      },
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/careers",
        element: <Careers/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/security",
        element: <Security/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/signup",
        element: <SignUp/>
      }
    ])
  return (
    <>
    {routes}
    </>
  )
}

export default App;
