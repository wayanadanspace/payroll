import React from 'react'
import { useState, useEffect } from 'react'
import Layout from '@/Components/layout'
import Link from 'next/link'
import axios from 'axios'

export default function AttendanceCorrectionDashboard() {

    const hostURL = process.env.NEXT_PUBLIC_API_HOST_URL;

    const [AttendenceDashboard, setAttendenceDashboard] = useState([]);

    const getAttendenceDashboard = async () => {
        let res = await axios.get(hostURL + "HR/GetHolidays"); //This Api is useed for Get the Dashborad data band Master
        setAttendenceDashboard(res.data);
      }
    
      useEffect(() => {
        getAttendenceDashboard()
      }, [1])

      const getData = (data) => {
        sessionStorage.setItem("id", data.id);
      }
    
      const clearData = () => {
        sessionStorage.setItem("id", "");
      }


      const handleDelete = async (id) => {
        try {
          let res = await axios.get(hostURL + `HR/DeleteHolidays?id=${id}`); // this is for deleting the data for dashborad using delete api call 
          console.log(res.data);
          Swal.fire('Data deleted successfully')
          getAttendenceDashboard();
        } catch (error) {
          console.error(error);
          Swal.fire('failed to  delete data')
        }
      };



  const [pending, setPending] = useState(false)
  const [approved, setApproved] = useState(false)
  const [rejected, setRejected] = useState(false)

  const togglePending = () => {
      setPending(true)
      setRejected(false)
      setApproved(false)
  }

  const toggleApproved = () => {
      setApproved(true)
      setPending(false)
      setRejected(false)
  }

  const toggleRejected = () => {
      setRejected(true)
      setApproved(false)
  }



  return (
    <Layout>
    <div className='container'>
        <h3 className='text-primary fs-5 mt-3'>Attendance Correction  </h3>
        <div className='card p-3 border-0 shadow-lg rounded-3 mt-4'>
            <div className='row p-3'>
                <div className='col-lg-1'>
                    <p>Filter By</p>
                </div>

                <div className='col-lg-5'>
                    <input type="text" className='form-control' placeholder='Search...' />
                </div>

                <div className='col-lg-4'>
                    <Link href="/Attendence/AttendanceCorrectionform"><button className='btn btn-primary'>Add Attendance Correction  </button></Link>
                </div>
            </div>
        </div>

        <div className='row mt-3'>
            <div className='col-lg-4'>
                <div className='btn-group'>
                    <button onClick={togglePending} className='btn btn-primary '>Pending</button> 
                    <button onClick={toggleApproved} className='btn btn-primary'>Approved</button> 
                    <button onClick={toggleRejected} className='btn btn-primary'>Rejected</button> 
                </div>
            </div>
        </div>

        <div className='row mt-3'>
            <div className='col-lg-2 text-primary fs-6 fw-bold'>
                <h6>Showing Results</h6>
            </div>
            {
                pending && (
                    <table className='table table-hover'>
                        <thead className='bg-info text-white'>
                            <tr>
                                <th>Date</th>
                                <th>Start Time</th>
                                <th>End Time</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                    </table>
                )
            }

            {
                approved && (
                    <table className='table table-hover'>
                        <thead className='bg-info text-white'>
                            <tr>
                                <th>Date</th>
                                <th>Start Time</th>
                                <th>End Time</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                    </table>
                )
            }

            {
                rejected && (
                    <table className='table table-hover'>
                        <thead className='bg-info text-white'>
                            <tr>
                                <th>Date</th>
                                <th>Start Time</th>
                                <th>End Time</th>
                                <th>Reason</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                    </table>
                )
            }
        </div>
    </div>
</Layout>
  )
}

