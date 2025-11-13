export default function ArrayOfObject() {
    let data = [
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
            <h1>Array OF Objects</h1>
            <table border={2} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Dsg</th>
                        <th>Salary</th>
                        <th>City</th>
                        <th>State</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item)=>{
                            return <tr key = {item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.dsg}</td>
                                <td>{item.salary}</td>
                                <td>{item.city}</td>
                                <td>{item.state}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}