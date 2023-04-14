import Link from 'next/link'
import React from 'react'
import Layout from '../../Components/layout.js';

function AttendenceDetails() {
  return (
    <Layout>
    <div>
      <div className='container'>
        <div className='row mt-3'>
          <div className='col-lg-3 text-end'>
            <Link className='Heading active' href="/Attendence/attendencedetails">My Attendence Details</Link>
          </div>
          <div className='col-lg-3'>
            <Link className='Heading active' href="/Attendence/myteamattendence">Company Attendence Details</Link>
          </div>
        </div>

        <div className='card p-3 border-0 shadow-lg rounded-3 mt-4'>
          <div className='row'>
            <div className='col-lg-1'>
              <p>Filter By</p>
            </div>

            <div className='col-lg-3'>
              <p>Start Date</p>
              <input type="date" className='form-control'  />
            </div>

            <div className='col-lg-3'>
              <p>End Date</p>
              <input type="date" className='form-control'  />
            </div>

            <div className='col-lg-2'><br/><p></p>
              <button className='btn btn-primary' id='AddButton'>Download</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default AttendenceDetails