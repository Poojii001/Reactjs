import React, { useRef, useState } from 'react'

export default function useRefExample() {
  let [name, setName] = useState("")
  let email = useRef("")
  console.log("Component is Rendered")


  function postData(){
    alert(`
        Name    :  ${name}
        Email    :  ${email}
      `)
  }
  return (
    <>
      <h1>useEffect Example</h1>
      <h1>num1 = {num1} | num2 = {num2} | num3 = {num3}</h1>
      <button onClick={() => setNum1(num1 + 1)}>Inc Num1</button>
      <button onClick={() => setNum2(num2 + 1)}>Inc Num2</button>
      <button onClick={() => setNum3(num3 + 1)}>Inc Num3</button>
    </>

  )
}
