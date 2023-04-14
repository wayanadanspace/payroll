import React from "react";
import Styles from "../../styles/BankAdviceList.module.css";
import { useEffect, useRef, useState } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

const tabsData = [
  {
    label: "Normal Payroll",
    content: (
      <div>
        <div className="container-fluid mt-4">
          <div className="row shadow-lg p-2 rounded-4 p-3">
            <label id={Styles.title}>Normal Payroll - Bank Advice List</label>
            <hr></hr>
            <div className="row">
              <div className="col-lg-2">
                <label>Year :</label>
              </div>
              <div className="col-lg-3">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Select Year</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                </select>
              </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="row">
              <div className="col-lg-2">
                <label>Month :</label>
              </div>
              <div className="col-lg-3">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Select Month</option>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April </option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>
              </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="row">
              <div className="col-lg-2">
                <label>Pay Period :</label>
              </div>
              <div className="col-lg-3">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Select Pay Period</option>
                  <option>1</option>
                  <option>2</option>
                </select>
              </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="row">
              <div className="col-lg-4"></div>
              <div className="col-lg-4">
                <button className="btn" id={Styles.commonBtn}>
                  Generate
                </button>
              </div>
              <div className="col-lg-4"></div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "Final Payroll",
    content: (
      <div>
        <div className="container-fluid mt-4">
          <div className="row shadow-lg p-2 rounded-4 p-3">
            <label id={Styles.title}>Final Payroll - Bank Advice List</label>
            <hr></hr>
            <div className="row">
              <div className="col-lg-2">
                <label>Year :</label>
              </div>
              <div className="col-lg-3">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Select Year</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                </select>
              </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="row">
              <div className="col-lg-2">
                <label>Month :</label>
              </div>
              <div className="col-lg-3">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Select Month</option>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April </option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>
              </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="row">
              <div className="col-lg-4"></div>
              <div className="col-lg-4">
                {/* <button className="btn" id={Styles.commonBtn}>Generate</button> */}
                <Button
                  color="primary"
                  type="button"
                  id={Styles.commonBtn}
                  onClick={() => setModalOpen(!modalOpen)}
                >
                  Generate
                </Button>
              </div>
              <div className="col-lg-4"></div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

function BankAdviceList() {
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

  return (
    <div>
      <div className="relative">
        <br></br>
        <br></br>
        <div className="flex space-x-3 border-b">
          {tabsData.map((tab, idx) => {
            return (
              <button
                id={Styles.tabBtn}
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
      <div className="py-4">{tabsData[activeTabIndex].content}</div>
    </div>
  );
}
export default BankAdviceList;
