import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './RoutingExample/Components/Navbar'
import Footer from './RoutingExample/Components/Footer'
import HomePage from './RoutingExample/Pages/HomePage'
import AboutPage from './RoutingExample/Pages/AboutPage'
import ProfilePage from './RoutingExample/Pages/ProfilePage'
import ContactUsPage from './RoutingExample/Pages/ContactUsPage'
import ErrorPage from './RoutingExample/Pages/ErrorPage'

export default function App() {
  return (
     <BrowserRouter>
      <Navbar/>
       <Routes>
          <Route path='' element={<HomePage/>}/>    
          <Route path='/about' element={<AboutPage/>}/>    
          <Route path='/Profile/:name?/:dsg?/:salary' element={<ProfilePage/>}/>    
          <Route path='/contact' element={<ContactUsPage/>}/>    
          <Route path='/*' element={<ErrorPage/>}/>    
       </Routes>
      <Footer/>
     </BrowserRouter>
  )
}




// Returns multiple elements inside React.Fragment Syntactic sugar format 

// import React from "react";
// export default function App() {
//   return (
//     <>
//       <h1>Hello world</h1>
//       <h2>Hello world</h2>
//       <h3>Hello world</h3>
//       <h4>Hello world</h4>
//       <h5>Hello world</h5>
//       <h6>Hello world</h6>
//     </>
    
//   )
// }
//Return Multiple Elements inside React.Fragment
// import React from "react";
// export default function App() {
//   return (
//     <React.Fragment>
//       <h1>Hello world</h1>
//       <h2>Hello world</h2>
//       <h3>Hello world</h3>
//       <h4>Hello world</h4>
//       <h5>Hello world</h5>
//       <h6>Hello world</h6>
//     </React.Fragment>
    
//   )
// }



//Return Multiple Elements in terms of an Array
// export default function App() {
//   return (
//     [
//       <h1>Hello world</h1>,
//       <h2>Hello world</h2>,
//       <h3>Hello world</h3>,
//       <h4>Hello world</h4>,
//       <h5>Hello world</h5>,
//       <h6>Hello world</h6>
//     ]
//   )
// }

//Return Multiple Elements inside div
// export default function App() {
//   return (
//     <div>

//       <h1>Hello world</h1>
//       <h2>Hello world</h2>
//       <h3>Hello world</h3>
//       <h4>Hello world</h4>
//       <h5>Hello world</h5>
//       <h6>Hello world</h6>

//     </div>
//   )
// }