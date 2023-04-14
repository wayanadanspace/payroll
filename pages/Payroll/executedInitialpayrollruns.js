import React from "react";
import Styles from "../../styles/ExecutedInitialPayrollRuns.module.css";
import { useEffect, useRef, useState } from 'react';
import table from "../../styles/table.module.css";

const tabsData = [
    {
      label: 'Normal Payroll',
      content:
      <div className="container-fluid mt-4">
        <div className="row">
          <table className={table.commonTable}>
            <thead>
              <tr>
                <th>Year</th>
                <th>Month</th>
                <th>Period</th>
                <th>Payroll Run Type</th>
                <th>Description</th>
                <th>Execution Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2023</td>
                <td>2</td>
                <td>1</td>
                <td>Normal</td>
                <td>Payroll For Feb 1, 2023 - Feb 15, 2023</td>
                <td>Mar 21, 2023</td>
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
export default function ExecutedInitialPayrollRuns(){

    const [activeTabIndex, setActiveTabIndex] = useState(0);
  
    const tabsRef = useRef([]);
  
    useEffect(() => {
      function setTabPosition() {
        const currentTab = tabsRef.current[activeTabIndex];
      }
  
      setTabPosition();
      window.addEventListener('resize', setTabPosition);
  
      return () => window.removeEventListener('resize', setTabPosition);
    }, [activeTabIndex]);


return(
    <div>
        <div className="relative">
            <br></br>
            <br></br>

            <div className="row">
                <div className="col-lg-6">
                    <label id={Styles.title}>Excecuted Initial Payroll Runs</label>
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
      </div>
)
}