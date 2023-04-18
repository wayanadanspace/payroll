import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Layout from '@/Components/layout';
import { DownloadTableExcel } from 'react-export-table-to-excel';
import Styles from "../../styles/initialpayrolldetails.module.css";

function initialpayrolldetails() {
    return (
        <Layout>
            <h3 className='text-primary fs-5 mt-3'>Initial Payroll Details</h3>
            <div className='card p-3 border-0 shadow-lg rounded-3 mt-4'>
                <div className='row'>
                    <div className='col-lg-1'>
                        <p>Filter By</p>
                    </div>
                    <div className='col-lg-2'>
                        <input type='date' className='form-control' />
                    </div>
                    <div className='col-lg-3'>
                        <input type="text" className='form-control' placeholder='Search...' />
                    </div>
                    <div className='col-lg-2'>
                        <select className='form-select'>
                            <option>Select Department</option>
                        </select>
                    </div>
                    <div className='col-lg-3'>
                        <DownloadTableExcel
                            filename="users table"
                            sheet="users"
                        // currentTableRef={tableRef.current}
                        >
                            <button type="button" className="form-control CancelBTN">Export To Excel </button>
                        </DownloadTableExcel>
                    </div>
                </div>
            </div><br /><br />
            <div className='row '>
                <div className='col-lg-4'>
                    {/* <button type='button' className='btn' id={Styles.tabBtn}>Normal Payroll</button> */}
                </div>
                <div className='col-lg-5'>
                    {/* <button type='button' className='btn' id={Styles.tabBtn }>Normal Payroll</button> */}
                    <h4 id={Styles.headingtext}>Employees in selected Period</h4>
                </div>
                <div className='col-lg-3'>
                    <button type='button' className='btn' id={Styles.commonBtn}>Delete</button>
                </div>

                <div className='col-lg-12'>
                    <table className='table table-bordered mt-4 text-center table-striped ' id={Styles.table}>
                        <thead>
                            <tr id={Styles.tr}>
                                <th className='text-white'>Employee ID</th>
                                <th className='text-white'>	Employee Name</th>
                                <th className='text-white'>		Pay Date </th>
                                <th className='text-white'>Employee Name</th>
                                <th className='text-white'>Department</th>
                                <th className='text-white'>Basic Monthly Salary</th>
                                <th className='text-white'>Semi Monthly Salary</th>
                                <th className='text-white'>Action</th>
                            </tr>
                        </thead>
                        <tbody >
                            {/* {
                                otDetails.map((data, index) => {
                                    return (
                                        <tr className="text-dark" key={index}>
                                            <td>{data.day}</td>
                                            <td>{data.normal}</td>
                                            <td>{data.ot}</td>
                                            <td>{data.nd}</td>
                                            <td>{data.ndot}</td>
                                            <td>
                                                <Link href="/Masters/otmaster">
                                                    <button id={Styles.actionButton} onClick={getData.bind(this, data)}>Edit</button>
                                                </Link>
                                                &nbsp; &nbsp; &nbsp;
                                                <button id={Styles.actionButton} onClick={() => handleDelete(data.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            } */}
                            <tr className="text-dark" >
                                <td>	75495</td>
                                <td>EMP 48</td>
                                <td>	Sep 15, 2022</td>
                                <td>EMP 48</td>
                                <td>Department</td>
                                <td>54800</td>
                                <td>27400</td>
                                <td>
                                    <button className='btn btn-primary'>View Component Details</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </Layout>

    )
}

export default initialpayrolldetails