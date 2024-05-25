import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const paths = [
    { path: '/play', element: <Home /> },
    { path: '/solve', element: <Home /> },
    { path: '/', element: <Home /> },
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
