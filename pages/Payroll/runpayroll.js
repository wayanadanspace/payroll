import React from 'react'
import dynamic from 'next/dynamic'
import runpayroll from '../../styles/runpayroll.module.css'
import { Button, Card, Collapse } from "reactstrap";
import { useEffect, useState } from 'react';
import axios from 'axios';

function Runpayroll() {
    const [collapseOpen, setCollapseOpen] = React.useState(false);
    const [paycode, setPayCode] = useState([]);
    const [position, setPosition] = useState([]);
    const [department, setDepartment] = useState([]);
    const [dashboard, setDashboardData] = useState([]);

    useEffect(() => {
        async function getData() {
            let hostURL = process.env.NEXT_PUBLIC_API_HOST_URL;
            let res = await axios.get(hostURL + "HR/GetPayPeriodSetting");
            setPayCode(res.data);
            res = await axios.get(hostURL + "Master/GetRoleType");
            setPosition(res.data);
            res = await axios.get(hostURL + "Master/GetDepartmentMaster");
            setDepartment(res.data);
            res = await axios.get(hostURL + "Payroll/Get_Employees_For_Payroll_FromPreliminary?StartDate=2023/04/01&EndDate=2023/04/30");
            setDashboardData(res.data);
        }
        getData()
    }, [1]);


    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <div id={runpayroll.card} className="row card card1">
                <div className="row">
                    <div className="col-lg-3">
                        <p>Select Paycode </p>
                        <div className="dropdown">
                            <select id="PaycodeID" name="PaycodeID" className="form-control">
                                <option value="" disabled="">
                                    Select Paycode </option>
                                {
                                    paycode.map((data, index) => {
                                        return (
                                            <option value={data.id}>{data.payCode}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <p >Search <br ></br></p>
                        <input placeholder="Search" type="text" className="form-control "></input>
                    </div>
                    <div className='col-lg-1'></div>
                    <div className="col-lg-2 mt-3">
                        <br />
                        <Button
                            color="primary"
                            type="button"
                            id="collapseExample"
                            onClick={() => {
                                setCollapseOpen(!collapseOpen)
                            }}
                        >
                            FETCH EMPLOYEES
                        </Button>
                    </div>
                    <div className='col-lg-3'></div>
                </div>
                <div className='row'>
                    <br></br>
                    <div className="col-lg-3">
                        <p >Select Position </p>
                        <div className="dropdown">
                            <select id="Year" name="Year" className="form-control ">
                                {/* <br ></br> */}
                                <option value="Select" style={{ color: "#0C275A" }} disabled="">Select Position
                                </option>
                                {
                                    position.map((data, index) => {
                                        return (
                                            <option value={data.id}>{data.short}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <p >Select Department </p>
                        <div className="dropdown">
                            <select id="Year" name="Year" className="form-control ">
                                {/* <br ></br> */}
                                <option value="Select" style={{ color: " #0C275A" }} disabled="">Select Department
                                </option>
                                {
                                    department.map((data, index) => {
                                        return (
                                            <option value={data.id}>{data.department_name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div className="col-lg-2">
                </div>
                <div className="col-lg-2">
                </div>
                <div className="col-lg-2">
                    <br ></br>
                    <button type="button" id="btn_button" className="form-control CancelBTN" style={{ width: "70%" }}>Run Payroll
                    </button>
                </div>
            </div>
            <br ></br>
            <div className="row">
                <div className="col-lg-4">
                </div>
                <div className="col-lg-5">
                </div>
                <div className="col-lg-3">
                </div>
            </div>
            <div id="employee1" className="row row" style={{ height: "500px" }}><div className="col-lg-12">
                <Collapse isOpen={collapseOpen}>
                    <table id="downloadaplication" className="table table-bordered fonttxt" style={{ height: "300px" }}>
                        <thead className='bg-info text-white ' >
                            <tr >
                                <th >
                                    <input type="checkbox"></input>
                                </th>
                                <th >Employee Id</th>
                                <th >Employee Name</th>
                                <th >Department</th>
                                <th >Position</th>
                                <th >Email</th>
                                <th >Date Of Joining</th>
                                <th >Manager</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                dashboard.map((data, index) => {
                                    return (
                                        <tr className="text-dark" key={index}>
                                            <td>{data.employeeID}</td>
                                            <td>{data.employeeName}</td>
                                            <td>{data.department}</td>
                                            <td>{data.position}</td>
                                            <td>{data.email}</td>
                                            <td>{data.dateOfJoining}</td>
                                            <td>{data.manager}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table> </Collapse>
            </div>
                <div className="text-right">
                    <br></br>

                </div>
            </div>
            <br ></br><br ></br>
            <div id="employee" className="row rowwidth collapse" >
                <div className="col-lg-12">
                    <table id="downloadaplication" className="table table-bordered fonttxt" style={{ height: "300px" }}><thead ><tr ><th >
                        <input type="checkbox">
                        </input>
                    </th>
                        <th >Employee Id</th>
                        <th >Employee Name</th>
                        <th >Department</th>
                        <th >Position</th>
                        <th >Email</th>
                        <th >Date Of Joining</th>
                        <th >Manager</th>

                    </tr>
                    </thead>
                        <tbody >

                        </tbody>
                    </table>

                </div>
                <div className="text-right">
                    <br ></br>

                </div>
            </div>

        </div>
    )
}

export default dynamic(() => Promise.resolve(Runpayroll), { ssr: false })