import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Layout from '@/Components/layout';
function StaffSalaryComponent() {
    let hostURL = process.env.NEXT_PUBLIC_API_HOST_URL;
    const [staffSalary, setstaffSalary] = useState([])
    const getStaffSalary = async () => {

        const { data } = await axios.get(hostURL + "HR/GetAllStaffNew")

        debugger
        setstaffSalary(data)
        console.log(data)
    }
    useEffect(() => {
        getStaffSalary();
    }, [])
    const getdata = (data) => {
        sessionStorage.setItem("id", data.id);


    }

    return (
        <Layout>
            <h3 className='text-primary fs-5 mt-3'>Salary Staff Details</h3>
            <div className='card p-3 border-0 shadow-lg rounded-3 mt-4'>
                <div className='row'>
                    <div className='col-lg-1'>
                        <p>Filter By</p>
                    </div>
                    <div className='col-lg-2'>
                        <p>Position</p>
                        <select className='form-select'>
                            <option>No data</option>
                        </select>
                    </div>

                    <div className='col-lg-2'>
                        <p>Department</p>
                        <select className='form-select'>
                            <option>No Department</option>
                        </select>
                    </div>

                    <div className='col-lg-4'>
                        <p>Search</p>
                        <input type="text" className='form-control' placeholder='Search...' />
                    </div>

                    <div className='col-lg-2'></div>
                    <div className='col-lg-1 text-primary'>
                        <p>Count : {staffSalary.length}</p>
                    </div>
                </div>

            </div>
            <div className='row'>
                <div className='col-lg-8'></div>
                <div className='col-lg-2 mt-2 text-end'>
                    <Link href="/Payroll/addstaffsalaryform" id='AddButton' className='btn btn-primary'>Add</Link>

                </div>
                <div className='col-lg-2 mt-2'>
                    <button id='AddButton' className='btn btn-primary'>Upload Salary</button>
                </div>
            </div>
            <div className='row'>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>Staff Name</th>
                            <th>Position</th>
                            <th>Department</th>
                            <th>Salary</th>
                            <th>Working Days In Month	</th>
                            <th>Working Hours In Day	</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            staffSalary.map((data) => {
                                return (
                                    <tr key={data.id}>
                                        <td>{data.employeID}  </td>
                                        <td>{data.name} {data.last_Name}</td>
                                        {/* fullname */}
                                        <td>{data.role}</td>
                                        <td>{data.department_name}</td>
                                        <td>{data.baseSal}</td>
                                        <td>{data.daysinmonth}</td>
                                        <td>{data.hoursinday}</td>
                                        <td><Link href="/Payroll/addstaffsalaryform"><button onClick={getdata.bind(this, data)}>edit</button></Link></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}

export default StaffSalaryComponent