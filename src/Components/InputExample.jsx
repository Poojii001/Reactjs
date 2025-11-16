import React, {useState } from 'react'

export default function InputExample() {
    let[name,setName] = useState("")
    function getInputData(e) {
        // console.log(e)
        // console.log(e.target)
        // console.log(e.name)
        // console.log(e.id)
        // console.log(e.placeholder)
        // console.log(e.required)
        // console.log(e.minLength)
        // console.log(e.maxLength)
        // console.log(e.value)
        setName(e.target.value)
    }
    function postData() {
        alert(`Hello ${name}`)
    }
  return (
    <>
        <h1>Input Example</h1>
        <h2>Name : {name}</h2>
        <input type="text" name="name" onChange={getInputData} placeholder='Full Name'/>
        <button onClick={postData}>Submit</button>
    </>
  )
}
