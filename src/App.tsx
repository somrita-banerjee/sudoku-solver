import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Play from './components/Play'
import Solve from './components/Solve'

const paths = [
    { path: '/play', element: <Play /> },
    { path: '/solve', element: <Solve /> },
    { path: '*', element: <Home /> },
]

const router = createBrowserRouter(paths);

function App() {

  return (
    <div>
        <Header />
        <RouterProvider router={router}></RouterProvider>
        <Footer />
    </div>
  )
}

export default App
