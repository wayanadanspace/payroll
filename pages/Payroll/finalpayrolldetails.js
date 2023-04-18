import React from "react";
import Styles from "../../styles/ExecutedInitialPayrollRuns.module.css";
import { useEffect, useRef, useState } from 'react';
import table from "../../styles/table.module.css";

import Layout from '@/Components/layout'
const tabsData = [
    {
      label: 'Normal Payroll',
      content:
      <div className="container-fluid mt-4">
        <div className="row">
          <table className={table.commonTable}>
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
              <tr>
             
              </tr>
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
export default function finalpayrolldetails(){

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [activeTabIndex, setActiveTabIndex] = useState(0);
  
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const tabsRef = useRef([]);
  
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      function setTabPosition() {
        const currentTab = tabsRef.current[activeTabIndex];
      }
  
      setTabPosition();
      window.addEventListener('resize', setTabPosition);
  
      return () => window.removeEventListener('resize', setTabPosition);
    }, [activeTabIndex]);


return(
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
                  className="pt-2 pb-3"
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