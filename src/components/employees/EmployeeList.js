import { useEffect, useState } from "react"

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((data) => {
                    changeEmployee(data)
                })
        },
        []
    )



return (
    <>
    <h2>Employees</h2>
    {
        employees.map((employee) =>{
            return <p key={`employee--${employee.id}`}>{employee.name}</p>
        })
    }
    </>
)
}