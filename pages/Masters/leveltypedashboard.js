import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Layout from '@/Components/layout'
import axios from 'axios'
import Swal from 'sweetalert2';

function LevelTypeDash() {

    let [dashboard, setDashboardData] = useState([])
    let hostURL = process.env.NEXT_PUBLIC_API_HOST_URL;
    const getLevelType = async () => {
        const res = await axios.get(hostURL + "Master/GetLevelType") //getting job level type data and displayed in a table [Shashank]
        console.log(res.data)
        setDashboardData(res.data)
    }

    const getID = (data) => {
        sessionStorage.setItem("id", data.id)
    }
    const clearSessionData = () => {
        sessionStorage.setItem("id", "");
    }

    const deleteLevelType = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.get(hostURL + "Master/DeleteLevelType?ID=" + id) // deleting data based on ID [Shashank]
                Swal.fire({
                    icon: "success",
                    titleText: "Deleted Successfully"
                })
            }
            getLevelType();
        })

    }

    useEffect(() => {
        getLevelType();
    }, [])
    return (
        <Layout>
            <div className='container'>
                <h3 className='text-primary fs-5 mt-3'>Job Level Type</h3>
                <div className='card p-3 border-0 shadow-lg rounded-3 mt-4'>
                    <div className='row p-3'>
                        <div className='col-lg-1'>
                            <p>Filter By</p>
                        </div>

                        <div className='col-lg-2'>
                            <input type="date" className='form-control' placeholder='Effective Date' />
                        </div>

                        <div className='col-lg-5'>
                            <input type="text" className='form-control' placeholder='Search...' />
                        </div>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-lg-2 text-primary fs-6 fw-bold'>
                        <h6>SHOWING {dashboard.length} RESULTS</h6>
                    </div>
                    <div className='col-lg-8'></div>
                    <div className='col-lg-2 mt-2 text-end'>
                        <Link href="/Masters/leveltypeform" onClick={clearSessionData} className='btn btn-primary AddButton'>Add New</Link>
                    </div>

                    <table className='table table-hover mt-4 '>
                        <thead className='bg-info text-white '>
                            <tr>
                                <th>Leave Type</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dashboard.map((data) => {
                                    return (
                                        <tr key={data.id}>
                                            <td>{data.short}</td>
                                            <td>{data.description}</td>
                                            <td>
                                                <Link href="/Masters/leveltypeform"><button className='btn btn-primary mx-3' onClick={getID.bind(this, data)}>Edit</button></Link>
                                                <button className='btn btn-primary ' onClick={deleteLevelType.bind(this, data.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}

export default LevelTypeDash