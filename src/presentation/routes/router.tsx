import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login } from '@/presentation/pages'

import '@/main/main.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <h2>home</h2>,
  },
  {
    path: '/login',
    element: <Login />,
  },
])

export default function Router() {
  return <RouterProvider router={router} />
}
