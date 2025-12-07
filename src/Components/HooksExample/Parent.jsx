import React from 'react'
import React, { useState, useCallback} from 'react'
import Child from './Child'

export default function Parent() {
    let [num1, setNum1] = useState(1)
    let [num2, setNum2] = useState(1)
    let [num3, setNum3] = useState(1)

    let Child = useCallback(<Child/>, [num2])
    console.log("This is a parent component")
    return (

        <>
            <h1>useEffect Example</h1>
            <h1>num1 = {num1} | num2 = {num2} | num3 = {num3}</h1>
            <button onClick={() => setNum1(num1 + 1)}>Inc Num1</button>
            <button onClick={() => setNum2(num2 + 1)}>Inc Num2</button>
            <button onClick={() => setNum3(num3 + 1)}>Inc Num3</button>
            <hr/>
            {Child}
        </>
    )
}
