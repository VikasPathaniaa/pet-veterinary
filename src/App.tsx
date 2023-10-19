import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Dashboard/Dashboard'
import ManageCategory from './components/DashboardComponent/ManageCategory/ManageCategory'
import Landing from './components/DashboardComponent/Landing/Landing'
import ManageCustomer from './components/DashboardComponent/ManageCustomer/ManageCustomer'

const App = () => {
  return (
  <>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/dashboard' element={<Layout><Landing/> </Layout>} />
    <Route path='/managefacility' element={<Layout><ManageCategory/></Layout>} />
    <Route path='/managecustomer' element={<Layout><ManageCustomer/></Layout>} />
  </Routes>
  </>
  )
}

export default App