import React from 'react'



import pic from "../assets/images/img5.jpg"
export default function ImageExample() {
  return (
    <>
        <h1>Images Example</h1>
        <img src={pic} height={300} width={500} alt="Test"/>
        <img src={(pic)} height={300} width={500} alt="Test"/>
        <img src="/images/img1.jpg" height={300} width={500} alt="Test"/>
        <img src="/images/img2.jpg" height={300} width={500} alt="Test"/>
        <img src="/images/img4.jpeg" height={300} width={500} alt="Test"/>
    </>
  )
}
