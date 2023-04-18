import React, { useEffect, useState } from 'react';
import Layout from '@/Components/layout';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai'
import * as XLSX from "xlsx";
import axios from 'axios';
import Swal from 'sweetalert2';


function EmploymentJobHistory() {
  const [items, setItems] = useState([]);
  const [ModalIsOpen, setModalIsOpen] = useState(false);
  const [PayrollYTD, setPayrollYTD] = useState(false);
  const [dashboard, setDashboard] = useState([])
  const [YTDlist, setYTDlist] = useState([])


  const handleModalOpen = () => {
    setModalIsOpen(true);
  };

  const handlePayrollYTD = (data) => {
    const payrollytdlist = dashboard.filter(x => x.id === data.id);
    setYTDlist(payrollytdlist);
    setPayrollYTD(true)
  }

  let hostURL = process.env.NEXT_PUBLIC_API_HOST_URL;

  const customStyles = {
    content: {
      top: '25%',
      left: '50%',
      right: '70%',
      bottom: '38%',
      marginRight: '-40%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const payrollYTDStyle = {
    content: {
      top: '15%',
      left: '15%',
      right: '15%',
      bottom: '65%',
      // marginRight: '-40%',
      // transform: 'translate(-50%, -50%)',
    },
  };

  const addPayrollYTD = async () => {

    if (items == "") {
      Swal.fire({
        icon: "danger",
        titleText: "Invalid file",
        text: "Please Select Valid File"
      })
    }
    else {
      await axios.post(hostURL + "Payroll/InsertPayrollYTD", items)
      Swal.fire({
        icon: "success",
        text: "Uploaded Successfully"
      })
      location.href = "/Payroll/employmentjobhistory"
    }
  }

  const readExcel = async (file) => {
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
      setItems(d);
    });
  };

  const getPayroll = async () => {
    const res = await axios.get(hostURL + "Payroll/GetPayrollYTD")
    console.log(res.data)
    setDashboard(res.data)
  }

  useEffect(() => {
    getPayroll();
  }, [])

  return (
    <Layout>
      <h4 className='text-primary fs-3 m-3'>Payroll YTD Upload</h4>
      <div className='container'>
        <div className='row shadow-lg rounded-3 mt-5 p-3'>
          <div className='col-lg-1 fs-5'>
            <p>Filter By</p>
          </div>
          <div className='col-lg-6'>
            <input type='text' className='form-control' placeholder='Search for Staff ,Date of Joining or Role' />
          </div>
        </div>

        <div className='row mt-5 '>
          <div className='col-lg-3'>
            <p className='text-primary text-uppercase'>Showing Results</p>
          </div>

          <div className='col-lg-5'></div>

          <Modal isOpen={ModalIsOpen} style={customStyles}>
            <div className='container'>
              <div className='row card-header'>
                <div className='col-lg-8 mt-3'>
                  <h4>Upload Payroll YTD</h4>
                </div>
                <div className='col-lg-3'></div>
                <div className='col-lg-1 mt-3 mb-3'>
                  <button onClick={() => setModalIsOpen(false)} className='btn-primary'><AiOutlineClose /></button>
                </div>
              </div>
              <div className='row mt-3'>
                <div className='col-lg-6'>
                  <input
                    type="file"
                    accept=".xlsx"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      readExcel(file);
                    }}
                  />
                </div>
              </div>
              <div className='col-lg-4 mb-3'>
                <button type='submit' onClick={addPayrollYTD} className='btn btn-primary AddButton mt-4'>Upload Payroll YTD</button>
              </div>
            </div>
          </Modal>


          <Modal isOpen={PayrollYTD} style={payrollYTDStyle} onRequestClose={() => setPayrollYTD(false)}>

            <div className='container'>
              <div className='row'>
                <table className='table table-hover'>
                  <thead className='bg-info text-white'>
                    <tr>
                      <th>Employee ID</th>
                      <th>Employee Name</th>
                      <th>Net Taxable YTD</th>
                      <th>Taxable YTD</th>
                      <th>Taxable Bonus YTD</th>
                      <th>Non Taxable Bonus YTD</th>
                    </tr>
                  </thead>

                  <tbody>
                    {
                      YTDlist.map((YTD) => {
                        return (
                          <tr key={YTD.id}>
                            <td>{YTD.employeID}</td>
                            <td>{YTD.firstAndLastName}</td>
                            <td>{YTD.nettaxableYTD}</td>
                            <td>{YTD.taxYTD}</td>
                            <td>{YTD.taxableBonusYTD}</td>
                            <td>{YTD.nonTaxableBonusYTD}</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>

          </Modal>

          <div className='col-lg-2'>
            <button type='submit' onClick={handleModalOpen} className='btn btn-primary AddButton'>Payroll YTD</button>
          </div>
          <div className='col-lg-2'>
            <button type='submit' className='btn btn-primary AddButton'>Payroll History</button>
          </div>
        </div>

        <div className='row mt-5'>
          <table className='table table-hover'>
            <thead className='bg-info text-white '>
              <tr>
                <th>Employee ID</th>
                <th>Employee Name</th>
                <th>Department</th>
                <th>Position</th>
                <th>Email</th>
                <th>Date Of Joining</th>
                <th>Manager</th>
                <th colSpan={2} className='text-center'>Actions</th>
              </tr>
            </thead>

            <tbody>
              {
                dashboard.map((data) => {
                  return (
                    <tr key={data.id}>
                      <td>{data.employeID}</td>
                      <td>{data.name}</td>
                      <td>{data.department}</td>
                      <td></td>
                      <td>{data.emailID}</td>
                      <td>{data.joiningDate}</td>
                      <td></td>
                      <td>
                        <button className='btn btn-primary AddButton'>Payroll History</button>
                      </td>
                      <td>
                        <button onClick={handlePayrollYTD.bind(this, data)} className='btn btn-primary AddButton'>PayrollYTD</button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
export default EmploymentJobHistory;
