import React, { useState } from 'react';
import Styles from "../../styles/employmentJobHistory.module.css";
import ReactDatePicker from '../reactdatepicker.js'
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
function EmploymentJobHistory() {
    // const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalOpen, setModalOpen] = React.useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div>
        <br></br> <p id={Styles.title}>Payroll YTD Upload</p>{" "}
        <div className="container-fluid mt-4">
          <div className="row shadow-lg p-2 rounded-4 p-3 ">
            <div className="col-lg-1">
              <b>
                <p className="mt-2 text-center">
                    <>
                    </>
                  {/* <BiFilterAlt />  */}
                  Filter by:
                </p>
              </b>
            </div>

            <div className="col-lg-5">
            {/* <h6>Pay Date</h6> */}
                {/* <ReactDatePicker   className=" mt-2 form-control"></ReactDatePicker> */}
              <input
                type="search"
                className=" mt-2 form-control"
                placeholder="Search for staff, Role or Date of Joining"
              />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-8">
              <p id={Styles.p}>SHOWING  RESULTS</p>
            </div>
            <div className="col-lg-2">


              <button
                className="btn btn-primary btn-sm shadow-lg"
                id={Styles.addNew}
                onClick={() => setModalOpen(!modalOpen)}
              >
                {/* <AiOutlinePlusCircle /> */}
                Payroll YTD
              </button>

            </div>
            <div className="col-lg-1">
              <button
                className="btn btn-primary btn-sm shadow-lg"
                id={Styles.addNew}
              >
                {/* <AiOutlinePlusCircle /> */}
                Payroll History
              </button>
            </div>
    <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
        <div className=" modal-header">
          <h5 className=" modal-title" id="exampleModalLabel">
          Upload Payroll YTD
          </h5>
          <button
            aria-label="Close"
            className=" close"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            <span aria-hidden={true}></span>
          </button>
        </div>
        <ModalBody>
        <div className="row">
                        <div className="col-lg-4">
                        <input type="file" name="chooseFile" id="" />
                        </div>

                        <div className="col-lg-4">
                         
                        </div>
                      </div>
<br />
            <div className="row">
            <button id={Styles.actionBtn}>Upload Payroll YTD</button>
            </div>
        </ModalBody>
        <ModalFooter>
          {/* <Button
            color="secondary"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            Close
          </Button> */}
          <Button color="primary" type="button">
            Save changes
          </Button>
        </ModalFooter>
      </Modal>
          </div>

          {/* <div className="container-fluid mt-4"> */}
            <div className="row">
              <table className={Styles.commonTable}>
                <thead>
                  <tr>
                    <th>Employee Id</th>
                    <th>Employee Name</th>
                    <th>Department</th>
                    <th>Position</th>
                    <th>Email</th>
                    <th>Date Of Joining</th>
                    <th>Manager</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                    <td>
                      <div className="row">
                        <div className="col-lg-4">
                          <button id={Styles.actionBtn}>Payroll History</button>
                        </div>

                        <div className="col-lg-4">
                          <button id={Styles.actionBtn}>Payroll YTD</button>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          {/* </div> */}
         
        </div>
      </div>
    </div>
  );
}
export default EmploymentJobHistory;
