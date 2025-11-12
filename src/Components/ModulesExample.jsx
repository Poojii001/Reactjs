var name = "Nitin"
var arr = [10,20,30,40,50,60,70,80,90,100]
var emp = {
    id : 1001,
    name : "Sumit Sharma",
    dsg : "Trainer",
    salary : 189000,
    city : "Faridabad",
    state : "Haryana"
}
function display() {
    return (
        <h3>This is Display()</h3>
    )
}
class Test {
    show() {
        return (
            <h3>This is show() of Test class</h3>
        )
    }
}

var test = new Test()
function ModuleExample() {
    return (
        <>
            <h1>Module Example</h1>
            <h2>This is ModuleExample Functional Componenet</h2>
        </>
    )
}
export default ModuleExample     //default export
export { name, arr, emp, display, test } //name Export


// export var name = "Nitin"
// export var arr = [10,20,30,40,50,60,70,80,90,100]
// export var emp = {
//     id : 1001,
//     name : "Sumit Sharma",
//     dsg : "Trainer",
//     salary : "189000",
//     city : "Faridabad",
//     state : "Haryana"
// }
// export function display() {
//     return (
//         <h3>This is Display()</h3>
//     )
// }
// class Test {
//     show() {
//         return (
//             <h3>This is show() of Test class</h3>
//         )
//     }
// }

// export var test = new Test()
// export function ModuleExample() {
//     return (
//         <>
//             <h1>Module Example</h1>
//             <h2>This is Module Example Functional Componenet</h2>
//         </>
//     )
// }
