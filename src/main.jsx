import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ImageExample from './Components/ImageExample'

import "./assets/css/style.css"  // for whole application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <CssExample /> */}
    <ImageExample/>
  </StrictMode>,
)


// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import Parent from './Components/SendDataPC/Parent'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Parent/>
//   </StrictMode>,
// )



// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import ArrayOfObject from './Components/ArrayOfObject'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <ArrayOfObject/>
//   </StrictMode>,
// )



// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import StateExample from './Components/StateExample'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <StateExample/>
//   </StrictMode>,
// )


// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import ModuleExample, { name, emp, arr, test, display } from './Components/ModulesExample'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//       <ModuleExample/>
//       <h3>Name : {name}</h3>
//       <h3>Array : {arr.join()}</h3>
//       <h3>Array : {arr.join("-")}</h3>
//       <h3>Employee Id : {emp.id}</h3>
//       <h3>Employee Name : {emp.name}</h3>
//       <h3>Employee Designation : {emp.dsg}</h3>
//       <h3>Employee Salary : {emp.salary}</h3>
//       <h3>Employee City : {emp.city}</h3>
//       <h3>Employee State : {emp.state}</h3>
//       {display()}
//       {test.show()}
//   </StrictMode>,
//   )








// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import Test from './Components/Test.jsx';
// import App from './App.jsx'


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App/>
//     <Test/>
//   </StrictMode>
// )
