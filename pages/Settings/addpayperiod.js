import React from 'react'

function AddPayPeriod() {
    return (
        <div>
            <h3 className='text-primary fs-5 mt-3'>Pay Period Settings</h3>
            <div className='container-fluid'>
                <div className='row  mt-4 shadow-lg rounded-3 p-3 '>
                    <div className='col-lg-2 mt-4'>
                        <p>Pay Code<i className='text-danger'>*</i></p>
                        <input type="number" placeholder='Basic Salary' className='form-control' />
                    </div>

                    <div className='col-lg-2 mt-4'>
                        <p>Pay Period<i className='text-danger'>*</i></p>
                        <select className='form-select'>
                            <option></option>
                        </select>
                    </div>

                    <div className='col-lg-2 mt-4'>
                        <p>Attendace Coverage Start Date<i className='text-danger'>*</i></p>
                        <input type="date" className='form-control' placeholder='Effective Date' />
                    </div>

                    <div className='col-lg-2 mt-4'>
                        <p>Attendace Coverage End Date<i className='text-danger'>*</i></p>
                        <input type="date" className='form-control' placeholder='Effective Date' />
                    </div>

                    <div className='col-lg-2 mt-4'>
                        <p>Payroll Start Date<i className='text-danger'>*</i></p>
                        <input type="date" className='form-control' placeholder='Effective Date' />
                    </div>

                    <div className='col-lg-2 mt-4'>
                        <p>Payroll End Date<i className='text-danger'>*</i></p>
                        <input type="date" className='form-control' placeholder='Effective Date' />
                    </div>

                    <div className='col-lg-3 mt-4'>
                        <p>Payroll Run Type<i className='text-danger'>*</i></p>
                        <select className='form-select'>
                            <option></option>
                        </select>
                    </div>

                    <div className='col-lg-9'></div>

                    <div className='col-lg-3 mt-4'>
                        <p>Pay Date<i className='text-danger'>*</i></p>
                        <input type="date" className='form-control' placeholder='Effective Date' />
                    </div>

                    <div className='col-lg-3 mt-4'>
                        <p>Comments<i className='text-danger'>*</i></p>
                        <textarea className='form-control'></textarea>
                    </div>

                    <div className='col-lg-6'></div>

                    <div className='col-lg-10'></div>
                    <div className='col-lg-1 mt-2 text-end'>
                        <button className='btn btn-primary'>Cancel</button>
                    </div>
                    <div className='col-lg-1 mt-2'>
                        <button className='btn btn-primary'>Submit</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddPayPeriod