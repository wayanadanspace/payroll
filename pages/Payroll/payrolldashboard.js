import React from "react";

import { useEffect, useRef, useState } from "react";
import Styles from '../../styles/PayrollDashboard.module.css'
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

import Index from "..";

const tabsData = [
    {

        label: "Normal Payroll",
        content: (
            <div>
                <div className="container-fluid">
                    <table className="table table-sm rounded-3 shadow-lg  text-center " id={Styles.normalPayrollTable}>
                        <thead className="text-white">
                            <tr id={Styles.tr} >
                                <th>Year</th>
                                <th>Month</th>
                                <th>Period</th>
                                <th>Payroll Run Type	</th>
                                <th>Description</th>
                                <th>Execution Date	</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2022</td>
                                <td>11</td>
                                <td>2</td>
                                <td>Normal</td>
                                <td>Payroll For Nov 16, 2022 - Nov 30, 2022	</td>
                                <td>Mar 17, 2023</td>

                                <td>Finalization Approved   </td>


                                <td>2022</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        ),
    },
    {
        label: "Final Payroll",
        content: (
            <div>


                <table className="table table-sm rounded-3 shadow-lg text-center" id={Styles.finalPayrollTable} >
                    <thead className="text-white" >
                        <tr id={Styles.tr}>
                            <th>Name</th>
                            <th >Role</th>
                            <th>Payroll Run Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td></td>
                        <td></td>
                        <td>Final Payroll</td>
                    </tbody>
                </table>
            </div>

        ),
    },
];

function PayrollDash() {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [modalOpen, setModalOpen] = React.useState(false);

    const tabsRef = useRef([]);

    useEffect(() => {
        function setTabPosition() {
            const currentTab = tabsRef.current[activeTabIndex];
        }

        setTabPosition();
        window.addEventListener("resize", setTabPosition);

        return () => window.removeEventListener("resize", setTabPosition);
    }, [activeTabIndex]);

    const [payroll, getPayroll] = useState("")


    return (
        <div>

            <div className="relative">
                <br />
                <div className="row">
                    <div className="col-lg-9"> </div>
                    <div className="col-lg-2">
                        <button className="form-control shadow-lg " id={Styles.newPayrollButton}>New Payroll</button>
                    </div>
                    <div className="col-lg-1"></div>
                </div>
                <div className="row">
                    <div className="col-lg-9"></div>
                    <div className="col-lg-2">
                        <p className="mt-3" id={Styles.p}>Total Payroll Runs: 1</p>
                    </div>
                    <div className="col-lg-1"></div>
                </div>


                <p id={Styles.p}>Executed Payroll Runs For Approval</p>
                <div className="flex space-x-3 border-b">
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-2 ">  {tabsData.map((tab, idx) => {
                            return (

                                <button
                                    id={Styles.tabBtn}
                                    key={idx}
                                    ref={(el) => (tabsRef.current[idx] = el)}
                                    className="pt-2 pb-3 "
                                    onClick={() => setActiveTabIndex(idx)}
                                >
                                    {tab.label}
                                </button>
                            );
                        })}
                        </div>
                        <div className="col-lg-9"></div>
                    </div>

                </div>
            </div>
            <div className="py-4">{tabsData[activeTabIndex].content}</div>
        </div>
    );
}
export default PayrollDash;
