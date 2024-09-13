import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './pages/Home/Home.tsx'
import Chats from './pages/Chats/Chats.tsx'
import Status from './pages/Status/Status.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Home />}>
      <Route path='chats' element={<Chats />}></Route>
      <Route path='status' element={<Status />}></Route>
      <Route path='calls' element={<Chats />}></Route>
      <Route path='community' element={<Chats />}></Route>
      <Route path='' element={<Navigate replace to={'/chats'}></Navigate>}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
