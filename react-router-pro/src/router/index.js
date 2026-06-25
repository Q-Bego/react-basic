import Login from '../page/Login'
import Article from '../page/Article'
import Layout from '../page/Layout'
import Board from '../page/Board'
import About from '../page/About'
import { createBrowserRouter, createHashRouter } from 'react-router-dom'
import NotFound from '../page/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        element: <Board></Board>
      },
      {
        path: 'about',
        element: <About></About>
      }
    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/article/:id/:name',
    element: <Article></Article>
  },
  { path: '*', element: <NotFound></NotFound> }
])
export default router
