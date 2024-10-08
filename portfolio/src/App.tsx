import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from './Pages/Dashboard';



function App() {


  return (
      <Router>
        <Routes>
          <Route path="/" element={< Dashboard/>}>
            {/* <Route path="/master/driver" element={<Driver />} />
            <Route path="/master/vehicle" element={<Vehicle />} />
            <Route path="/master/customer" element={<Customer />} /> */}
          </Route>
        </Routes>
      </Router>
  )
}

export default App
