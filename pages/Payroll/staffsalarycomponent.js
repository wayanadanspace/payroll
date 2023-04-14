import Link from 'next/link'
import React from 'react'
function StaffSalaryComponent() {
    return (
        <div>
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
                        <p>Count :</p>
                    </div>
                </div>

            </div>
            <div className='row'>
                <div className='col-lg-8'></div>
                <div className='col-lg-2 mt-2 text-end'>
                    <Link href="AddSalaryDetails" id='AddButton' className='btn btn-primary'>Add</Link>
                    <Link href="/AddSalaryDetails" id='AddButton' className='btn btn-primary'>Add</Link>
                </div>
                <div className='col-lg-2 mt-2'>
                    <button id='AddButton' className='btn btn-primary'>Upload Salary</button>
                </div>
            </div>
        </div>
    )
}

export default StaffSalaryComponent