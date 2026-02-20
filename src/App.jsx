import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ErrorPage } from './component/ErrorPage.jsx'
import { Result } from './component/Result.jsx'
import { Flames } from './component/Flames.jsx'
import { About } from './component/About.jsx'
import { createHashRouter, RouterProvider } from 'react-router-dom'
const H = createHashRouter([{
  path: "/",
  element: <Flames />,
  errorElement : <ErrorPage />
}, {
  path: "/result",
  element: <Result />,
  errorElement: <ErrorPage />
}, {
  path: "/about",
  element: <About />,
  errorElement: <ErrorPage />
}])

const App = () => {
  return (
    <>
      <RouterProvider router={H} />
    </>
  )
}

export default App
