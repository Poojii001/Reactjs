import React, { useState, useEffect } from 'react'

export default function UseEffectExample() {
  let [num1, setNum1] = useState(1)
  let [num2, setNum2] = useState(1)
  let [num3, setNum3] = useState(1)

  //useEffect without dependency , called setup function every time when component is rendered.
  useEffect(()=>{
    console.log("useEffect without dependency is called")
  })

  //useEffect with empty dependency array , called setup function one one time ,when component is mounted.
  useEffect(()=> {
    console.log("useEffect with empty dependency array is called")
  },[])

  //useEffect with  dependency, called setup function every time ,when dependecy is changed.
  useEffect(()=> {
    console.log("useEffect with empty dependency array is called")
  },[num2])
  return (
      <>
        <h1>useEffect Example</h1>
        <h1>num1 = {num1} | num2 = {num2} | num3 = {num3}</h1>
        <button onClick = {()=>setNum1(num1+1)}>Inc Num1</button>
        <button onClick = {()=>setNum2(num2+1)}>Inc Num2</button>
        <button onClick = {()=>setNum3(num3+1)}>Inc Num3</button>
      </>
  )
}

