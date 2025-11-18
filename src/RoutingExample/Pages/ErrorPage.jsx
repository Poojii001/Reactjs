import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function ErrorPage() {
  let [num, setNum] = useState(5)
  let navigate = useNavigate()

  useEffect(() => {
    let time = setTimeout(() => {
      if (num === 0)
        navigate("/")
      setNum(num - 1)
    }, 1000);
    return () => clearTimeout(time)
  }, [num])

  return (
    <>
      <h1>404! Page not found</h1>
      <h2>Redirect to the HomePage in {num} seconds</h2>
    </>
  )
}
