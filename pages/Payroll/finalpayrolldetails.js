import React, { useEffect, useRef, useState } from "react";
import Styles from "../../styles/ExecutedInitialPayrollRuns.module.css";
import table from "../../styles/table.module.css";
import Layout from '@/Components/layout'
import { useForm } from 'react-hook-form';
import axios from "axios";
import { DownloadTableExcel } from 'react-export-table-to-excel';


export default function finalpayrolldetails() {


  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { register, handleSubmit, reset, formState } = useForm();

  let hostURL = process.env.NEXT_PUBLIC_API_HOST_URL;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [finalpayrolldetail, setfinalpayrolldetail] = useState([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const tabsRef = useRef([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [Department, setDepartment] = useState([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
    }

    setTabPosition();
    window.addEventListener('resize', setTabPosition);

    return () => window.removeEventListener('resize', setTabPosition);
  }, [activeTabIndex]);
  const getfinalpayrolldetail = async () => {
    const { data } = await axios.get(hostURL + 'Payroll/GetEmployeeSalary')
    setfinalpayrolldetail(data)
    let res = await axios.get(hostURL + "Master/GetDepartmentMaster"); // This API is used for fetch the  data for Dropdown
    setDepartment(res.data);
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getfinalpayrolldetail();

  }, []);

  
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const tableRef = useRef(null);


  const tabsData = [
    {
      label: 'Normal Payroll',
      content:
        <div className="container-fluid mt-4">
          <div className="row">
            <div className="card shadow-lg p-4">
              <div className="row FilterClass fontheading">
                <div className="col-lg-1">
                  <p >Filter By</p>
                </div>
                <div className="col-lg-2"><input type="date" placeholder="PayDate" className="form-control search " /></div>
                <div className="col-lg-3"><input type="search" placeholder="Search" className="form-control search " /></div>
                <div className="col-lg-2">
                  <div className="dropdown">
                    <select id="Department" name="Staff" className="form-control" {...register("Department", { required: true })}>
                      <option value="" disabled="">
                        Select department </option>
                      {
                        Department.map((data, index) => {
                          return (
                            <option value={data.id} key={data.id}>{data.department_name}</option>
                          )
                        })
                      }
                    </select>
                  </div>
                </div>
                
                <div className="col-md-3">
                <DownloadTableExcel
                    filename="users table"
                    sheet="users"
                    currentTableRef={tableRef.current}>
                  <button type="button" className="form-control CancelBTN">Export To Excel </button>
               </DownloadTableExcel>
                </div>
              </div>
            </div>
          </div>
          <br />
          <p className="active Heading1" style={{ textAlign: "center", paddingLeft: "5px", fontSize: "19px", fontWeight: "700", color: " #3247d5" }}>Employees in selected Period</p>
          <br />
          <div className="row">
            <table ref={tableRef} className={table.commonTable}>
              <thead>
                <tr>
                  <th>Select	</th>
                  <th>Employee ID</th>
                  <th>Employee Name</th>
                  <th>Pay Date</th>
                  <th>Department</th>
                  <th>Basic Monthly Salary</th>
                  <th>Semi Monthly Salary</th>
                  <th>Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  finalpayrolldetail.map((data) => {
                    return (
                      <tr key={data.id}>
                        <td >{data.employeID}</td>

                        <td >{data.name}</td>

                        <td >{data.endDate | date}</td>

                        <td >{data.name}</td>

                        <td >{data.department_name}</td>

                        <td >{data.baseSal}</td>

                        <td > {data.deniminimis_amount}</td>

                      </tr>
                    )
                  })
                }

              </tbody>
            </table>
          </div>
        </div>,
    },
    {
      label: 'Final Payroll',
      content:
        <div className="container-fluid mt-4">
          <div className="row">
            <div class="card shadow-lg p-4">
              <div className="row FilterClass fontheading">
                <div className="col-lg-1">
                  <p >Filter By</p>
                </div>
                <div className="col-lg-3"><input type="search" placeholder="Search" className="form-control search " /></div>
                <div className="col-lg-2">
                <div className="dropdown">
                    <select id="Department" name="Staff" className="form-control" {...register("Department", { required: true })}>
                      <option value="" disabled="">
                        Select department </option>
                      {
                        Department.map((data, index) => {
                          return (
                            <option value={data.id} key={data.id}>{data.department_name}</option>
                          )
                        })
                      }
                    </select>
                  </div>
                </div>
                <div className="col-md-3">
                <DownloadTableExcel
                    filename="users table"
                    sheet="users"
                    currentTableRef={tableRef.current}>
                  <button type="button" className="form-control CancelBTN">Export To Excel </button>
               </DownloadTableExcel>
                  </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <table className={table.commonTable}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Payroll Run Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>test</td>
                  <td>2</td>
                  <td>Final Payroll</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>,
    }
  ]

 

  return (
    <Layout>
      <div className="relative">
        <br></br>
        <br></br>

        <div className="row">
          <div className="col-lg-6">
            <label id={Styles.title}>Finalization Payroll Details</label>
          </div>
          <div className="col-lg-3"></div>
          <div className="col-lg-3">
            <label id={Styles.title}>Total Payroll Runs: 1</label>
          </div>
        </div>
        <div className="flex space-x-3 border-b">
          {tabsData.map((tab, idx) => {
            return (
              <button id={Styles.tabBtn}
                key={idx}
                ref={(el) => (tabsRef.current[idx] = el)}
                classNameName="pt-2 pb-3"
                onClick={() => setActiveTabIndex(idx)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
      <div className="py-4">
        {tabsData[activeTabIndex].content}
      </div>
    </Layout>
  )
}