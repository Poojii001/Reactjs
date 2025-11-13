import React from 'react'

export default function Child(props) {
    return (
        <>
            <h2>This is Child Component</h2>
            <h3>Name : {props.name}</h3>
            <h3>Designation : {props.dsg}</h3>
            <h3>Salary : {props.salary}</h3>
            {props.arr ? <h3>Array : {props.arr.join()}</h3> : null}
            {
                props.data ?

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
        </>
    )
}
