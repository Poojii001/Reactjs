import React from 'react'
import Child from './Child'
export default function Parent() {
    var name = "Nitin"
    var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    let data = [
        { id: 1001, name: "Sumit", dsg: "Full Stack Developer", salary: 1808, city: "Faridabad", state: "Haryana" },
        { id: 101, name: "Pooja", dsg: "Full Stack Developer", salary: 108900, city: "Lucknow", state: "UP" },
        { id: 102, name: "Amit", dsg: "Mern Stack Developer", salary: 108900, city: "Lucknow", state: "UP" },
        { id: 103, name: "sara", dsg: "Frontend Developer", salary: 108900, city: "Lucknow", state: "UP" },
        { id: 104, name: "Manish", dsg: "Software Developer", salary: 108900, city: "Lucknow", state: "UP" },
        { id: 105, name: "Pavitra", dsg: "Backend Developer", salary: 108900, city: "Lucknow", state: "UP" },
        { id: 106, name: "Payal", dsg: "Java Full Stack Developer", salary: 108900, city: "Lucknow", state: "UP" },
        { id: 107, name: "Palak", dsg: "Python Developer", salary: 108900, city: "Lucknow", state: "UP" }
    ]

    return(
        <>
            <h1>Sending Data From Parent to Child Component</h1>
            <h2>This is Parent Component</h2>
            <hr/>

            <Child
            name = {name}
            dsg= "Trainer"
            salary = {108900}
            arr = {arr}
            data = {data}
            />
        </>
    )
}



