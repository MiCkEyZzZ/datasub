import React from 'react'
import { useLocation } from 'react-router-dom'

import { listRoutes } from './routes'
import { Header } from './components'

function App() {
  let { pathname } = useLocation()
  const routes = listRoutes()

  return (
    <>
      {pathname.includes('/payment') ? null :  <Header />}
        {routes}
    </>
  )
}

export default App
