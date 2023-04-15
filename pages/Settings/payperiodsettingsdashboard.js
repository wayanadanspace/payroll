import React from 'react'
import Link from 'next/link'
import Layout from '@/Components/layout'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';


export default function PayperiodSettingsDash() {

    const hostURL = process.env.NEXT_PUBLIC_API_HOST_URL;

    const [payperiodSettingsDashboard, setpayperiodSettingsDashboard] = useState([]);

    const getpayperiodSettingsDashboard = async () => {
        let res = await axios.get(hostURL + "Payroll/GetPayPeriodSetting");
        setpayperiodSettingsDashboard(res.data);
    }

    useEffect(() => {
        getpayperiodSettingsDashboard()
    }, [1])

    const getData = (data) => {
        sessionStorage.setItem("id", data.id);
    }


    const clearData = () => {
        sessionStorage.setItem("id", "");
    }

    const handleDelete = async (id) => {
        let res = await axios.get(hostURL + `Payroll/DeletePayPeriodSetting?id=${id}`);
        console.log(res.data);
        Swal.fire('Data deleted successfully')
        getpayperiodSettingsDashboard();
    };

    return (
        <Layout>
            <div>
                <h3 className='text-primary fs-5 mt-3'>Pay Period Settings</h3>
                <div className='card p-3 border-0 shadow-lg rounded-3 mt-4'>
                    <div className='row'>
                        <div className='col-lg-1'>
                            <p>Filter By</p>
                        </div>

                        <div className='col-lg-4'>
                            <input type="text" className='form-control' placeholder='Search...' />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-10'></div>
                    <div className='col-lg-2 mt-2 text-end'>
                        <Link href="/Settings/payperiodsettingform" className='btn btn-primary'> <button className='btn btn-primary' onClick={clearData.bind(this)}>Add New</button> </Link>
                    </div>

                    <table className='table table-hover mt-2 ' >
                        <thead className='bg-info text-white '>
                            <tr>
                                <th>Pay Code</th>
                                <th>Pay Period</th>
                                <th>Attendance Coverage Startdate</th>
                                <th>Attendance Coverage Enddate</th>
                                <th>Payroll Start date</th>
                                <th>Payroll End date</th>
                                <th>Payroll Run Type</th>
                                <th>Comments</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payperiodSettingsDashboard.map((data, index) => {
                                return (
                                    <tr className="text-dark" key={index}>
                                        <td>{data.payCode}</td>
                                        <td>{data.payPeriod}</td>
                                        <td>{data.attendanceCoverageStartdate}</td>
                                        <td>{data.attendanceCoverageEndDate}</td>
                                        <td>{data.payrollStartDate}</td>
                                        <td>{data.payrollEndDate}</td>
                                        <td>{data.payrollRunType}</td>
                                        <td>{data.comments}</td>

                                        <td>
                                            <Link href="/Settings/payperiodsettingform">
                                                <button className="btn btn-primary" onClick={getData.bind(this, data)} >Edit</button>
                                            </Link>
                                            &nbsp;

                                            <button className="btn btn-primary" onClick={() => handleDelete(data.id)}>Delete</button>
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
    );

}

