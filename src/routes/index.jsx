import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from 'features/Landing'
const Router = () => {
  return (
    <Routes>
      <Route path="/" exact element={LandingPage} />
    </Routes>
  )
}

export default Router
