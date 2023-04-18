import Layout from '@/Components/layout'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'

function executedInitialpayrollruns() {
  let hostURL = process.env.NEXT_PUBLIC_API_HOST_URL

  const [intialPayroll, setInitialPayroll] = useState([]);

  const getInitialPayroll = async () => {
    const { data } = await axios.get(hostURL + "Payroll/GetPreliminarySalary")
    setInitialPayroll(data);
  }
  useEffect(() => {
    getInitialPayroll();
  }, [])
  return (
    <Layout>
      <div className='row'>
        <div className='col-lg-10'></div>
        <div className='col-lg-2'>
          <Link href="/Payroll/preliminaryreport"><button>New Payroll</button></Link>
        </div>
      </div>
      <div className='row'>
        <p>Executed Initial Payroll Runs</p>
      </div>
      <div className='row'>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Year</th>
              <th>Month</th>
              <th>Period</th>
              <th>Payroll Run Type	</th>
              <th>Description	</th>
              <th>Execution Date</th>
            </tr>
          </thead>
          <tbody>
            {

              intialPayroll.map((data) => {
                return (
                  <tr key={data.id}>
                    <td>{data.endyear}</td>
                    <td>{data.month}</td>
                    <td>{data.payrolltype}</td>
                    <td>{data.ded_type}</td>
                    <td>{data.componentName}</td>
                    <td>{data.enddate}</td>
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

export default executedInitialpayrollruns