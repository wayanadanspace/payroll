import React, { useState,useEffect } from "react";
import Styles from "../../styles/TeamLoans.module.css";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { useRef } from "react";
import Layout from "@/Components/layout";
import Link from "next/link";
import axios from "axios";
import Swal from 'sweetalert2';

import * as XLSX from "xlsx";

const TeamLoans=() => {
  let hostURL = process.env.NEXT_PUBLIC_API_HOST_URL;
  const [loansData, setLoansData] = useState([]);
  const [staffData,setStaffData ] = useState([]);
  const tableRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  
  const [items, setItems] = useState([]);
  
  
  useEffect(() => {
   const roleType = sessionStorage.getItem("roleID");
    getData();
  }, []);   
  
  const getData= async()=> {
    let res = await axios.get(hostURL +"Payroll/GetEmployeeLoans");
    setLoansData(res.data);
  }

  const incomingfile = async (file) => {
    debugger;
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
    promise.then((d) => {
      debugger;
      setItems(d);
      console.log(d);
    });
  };

  const uploadLoan = async() => {
    const transformedLoans = async (items) => {
        const loans = await Promise.all(
          items.map(async (loan) => {
            const res = await axios.get(hostURL + "Payroll/GetStaffByEmployeeID?ID=" + loan.EmployeeID);
            const staffData = res.data;
            return {
              StaffID: staffData.ID,
              LoanType: loan.LoanType,
              LoanAmount: loan.LoanAmount,
              EMIAmount: loan.SemiMonthlyAmmortization,
              Period: loan.Period,
              Category: "NA",
              Comments: loan.Comments
            };
          })
        );
        return loans;
      };
if (transformedLoans.length>0) {
    await axios.post(hostURL + "Payroll/InsertEmployeeLoans", transformedLoans);
        Swal.fire(" Employe Loans Uploaded succefully!");
} else {
    Swal.fire(" Employe Loans Uploaded succefully!");
}
   }
  return (
    <Layout>
      <div>
        <br />
        <br />
        <p id={Styles.p}>&#x2022; My Loan Details</p>

        <div className="card shadow-lg p-4 rounded-3" id={Styles.card}>
          <div className="row">
            <div className="col-lg-1">
              <p>Filter By</p>
            </div>
            <div className="col-lg-5">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Search..."
              />
            </div>
            <div className="col-lg-4">
              <Button
                id={Styles.UploadLoansButton}
                color="primary"
                type="button"
                onClick={() => setModalOpen(!modalOpen)}
              >
                UPLOAD LOANS
              </Button>
              <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
                <div className=" modal-header">
                  <h5 className=" modal-title" id="exampleModalLabel">
                    Upload Loans{" "}
                  </h5>
                  <button
                    aria-label="Close"
                    className=" close"
                    type="button"
                    onClick={() => setModalOpen(!modalOpen)}
                  >
                    <span aria-hidden={true}>×</span>
                  </button>
                </div>
                <ModalBody>
                  <div className="row">
                    <div className="col-lg-8">
                      {/* <input type="file" id={Styles.input} /> */}
                      <input
                        type="file"
                        accept=".xls,.xlsx"
                        style={{ display: "inline-block" }}
                        onChange={(e) => {
                          const file = e.target.files[0];
                          incomingfile(file);
                        }}
                        placeholder="Upload file"
                      />
                    </div>
                    <div className="col-lg-4">
                      <Link href="https://103.12.1.76/ALIAPI/Images/UploadLoanTemplate.xlsx">
                        <span
                          style={{ color: "navy", textDecoration: "underline" }}
                        >
                          Template.XLSX
                        </span>
                      </Link>
                    </div>
                    <div className="row">
                      {/* <ModalFooter> */}
                      <div className="col-lg-6">
                        <Button
                          className="mt-4"
                          id={Styles.UploadStaffButton}
                          onClick={() => uploadLoan()}
                          color="primary"
                          type="button"
                        >
                          Upload Loans
                        </Button>
                      </div>
                      <div className="col-lg-6"></div>
                      {/* </ModalFooter> */}
                    </div>
                    <div className="col-lg-6"></div>
                  </div>
                </ModalBody>
              </Modal>
            </div>
          </div>
        </div>
        <div className="row ">
          <table
            className=" table mt-3 text-center"
            id={Styles.table}
            ref={tableRef}
          >
            <thead>
              <tr id={Styles.tr}>
                <th className="text-white">Employee Id</th>
                <th className="text-white">Employee Name</th>
                <th className="text-white">Loan Type</th>
                <th className="text-white">Category</th>
                <th className="text-white">Loan Amount</th>
                <th className="text-white">Ammortization</th>
                <th className="text-white">Tenure</th>
                <th className="text-white">Comments</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default TeamLoans;
