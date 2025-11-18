import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
   <>
    <ul>
        <li><NavLink to="">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/profile/Pooja%20Pal/Trainer/134000">Profile</NavLink></li>
        <li><NavLink to="/contact?name=Pooja%20Pal&email=poojapal@gmail.com&phone=9506580566">Contact</NavLink></li>
        {/* <li><NavLink to="/Error">Error</NavLink></li> */}
    </ul>
   </>
  )
}


// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Navbar() {
//   return (
//    <>
//     <ul>
//         <li><Link to="">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/profile">Profile</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//     </ul>
//    </>
//   )
// }
