import React from 'react'

export default function Child() {
    let [data, setData] = useState([])

    function updateData(x) {
        setData(x)
    }
    return (
        <>
            <h1>Sending Data from Child to Parent Component i.e Lifting State UP</h1>
            <h2>This Parent Component</h2>
            {
                data.length ?
                    < table border={2} cellPadding={10} cellSpacing={0}>
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
                                data.map((item) => {
                                    return <tr key={item.id}>
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
                    </table> : null
            }
            <hr/>
            <Child updateData = {updateData}/>
        </>
    )
}
