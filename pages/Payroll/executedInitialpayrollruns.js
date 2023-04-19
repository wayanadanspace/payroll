import Layout from '@/Components/layout'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import Styles from '../../styles/ExecutedInitialPayrollRuns.module.css'
function executedInitialpayrollruns() {
  let hostURL = process.env.NEXT_PUBLIC_API_HOST_URL

  const [intialPayroll, setInitialPayroll] = useState([]);

  const getInitialPayroll = async () => {
    const { data } = await axios.get(hostURL + "Payroll/GetPreliminarySalary") //gurukiran@amazeinc.in, this API is to fetch the data into the table
    setInitialPayroll(data);
  }
  useEffect(() => {
    getInitialPayroll();
  }, [])
  return (
    <Layout>
      <br />
      <div className='row'>
        <div className='col-lg-9'></div>
        <div className='col-lg-3'>
          <Link id={Styles.newPayrollLink} href="/Payroll/preliminaryreport"><button id={Styles.newPayrollBtn}>New Payroll</button></Link>
        </div>
      </div>
      <div className='row'>
        <p id={Styles.p}>Executed Initial Payroll Runs</p>
      </div>
      <div className='row'>

        <table id={Styles.table} className='table shadow-lg table-sm '>
          <thead>
            <tr className='bg-info text-white'>
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
                    <td>{data.endDate}</td>
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