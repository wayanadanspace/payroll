import React from 'react'
import Link from 'next/link'

function PayperiodSettingsDash() {
    return (
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
                    <Link href="/Settings/addpayperiod"  className='btn btn-primary'>Add New</Link>
                </div>

                <table className='table table-hover mt-2 '>
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
                </table>
            </div>
        </div>
    )
}

export default PayperiodSettingsDash