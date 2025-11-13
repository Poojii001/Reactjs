// import { useState } from "react";
// export default function StateExample() {
//     let [num, setNum] = useState(1)

// function decrement() {
//     setNum(num-1)
// }
// function increment() {
//     setNum(num+1)
// }
// return (
//    <>
//      <h1>State Example</h1>
//     <h2>num = {num}</h2>
//     <button onClick={decrement}>Decrememt</button>
//     <button onClick={increment}>Increment</button>
//    </>
// )
// }



//2.
// import { useState } from "react";
// export default function StateExample() {
//     let [num, setNum] = useState(1)

//     return (
//         <>
//             <h1>State Example</h1>
//             <h2>num = {num}</h2>
//             <button onClick={() => num > 1 ? setNum(num - 1) : null}>Decrememt</button>
//             <button onClick={() => num > setNum(num + 1)}>Increment</button>
//         </>
//     )
// }

//3.
// import { useState } from "react";
// export default function StateExample() {
//     let [num1, setNum1] = useState(1)
//     let [num2, setNum2] = useState(1)
//     let [num3, setNum3] = useState(1)

//     return (
//         <>
//             <h1>State Example</h1>
//             <h2>num1 = {num1}</h2>
//             <button onClick={() => num1 > 1 ? setNum1(num1 - 1) : null}>Decrememt</button>
//             <button onClick={() => num1 > setNum1(num1 + 1)}>Increment</button>
//             <hr/>

//             <h2>num2 = {num2}</h2>
//             <button onClick={() => num2 > 1 ? setNum2(num2 - 1) : null}>Decrememt</button>
//             <button onClick={() => num2 > setNum2(num2 + 1)}>Increment</button>
//             <hr/>

//             <h2>num3 = {num3}</h2>
//             <button onClick={() => num3> 1 ? setNum3(num3 - 1) : null}>Decrememt</button>
//             <button onClick={() => num3 > setNum3(num3 + 1)}>Increment</button>
//             <hr/>
//         </>
//     )
// }



//4.
import { useState } from "react";
export default function StateExample() {
    let [num1, setNum1] = useState(1)
    let [num2, setNum2] = useState(1)
    let [num3, setNum3] = useState(1)


    function decremenet(option) {
        if(option === "num1")
            setNum1(num1-1)
        else if(option === "num2")
            setNum2(num2-1)
        else
            setNum3(num3-1)
    }
     function increment(option) {
        if(option === "num1")
            setNum1(num1+1)
        else if(option === "num2")
            setNum2(num2+1)
        else
            setNum3(num3+1)
    }
    return (
        <>
            <h1>State Example</h1>
            <h2>num1 = {num1}</h2>
            <button onClick={() => num1 > 1 ? decremenet('num1') : null}>Decrememt</button>
            <button onClick={() => increment('num1')}>Increment</button>
            <hr/>

            <h2>num2 = {num2}</h2>
            <button onClick={() => num2 > 2 ? decremenet('num2') : null}>Decrememt</button>
            <button onClick={() => increment('num2')}>Increment</button>
            <hr/>

            <h2>num3 = {num3}</h2>
            <button onClick={() => num3> 3 ? decremenet('num3'): null}>Decrememt</button>
            <button onClick={() => increment('num3')}>Increment</button>
            <hr/>
        </>
    )
}