import React from 'react'

export default function Child(props) {
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
    return (
        <>
            <h2>This is Child Component</h2>
            <button onClick={() => props.updateData(data)}>Send Data</button>
        </>
    )
}
