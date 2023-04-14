import React, { useState } from 'react'
import Styles from '../../styles/TeamLoans.module.css'
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { useRef } from 'react';
import Layout from '@/Components/layout';


function TeamLoans() {
    const tableRef = useRef(null);
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <Layout>
            <div>
                <br /><br />
                <p id={Styles.p}>&#x2022;  My Loan Details</p>


                <div className='card shadow-lg p-4 rounded-3' id={Styles.card}>
                    <div className='row'>

                        <div className='col-lg-1'>
                            <p>Filter By</p>
                        </div>
                        <div className='col-lg-5'>
                            <input type="text" className='form-control form-control-sm' placeholder='Search...' />
                        </div>
                        <div className='col-lg-4'>
                            <Button id={Styles.UploadLoansButton}
                                color="primary"
                                type="button"
                                onClick={() => setModalOpen(!modalOpen)}
                            >
                                UPLOAD LOANS
                            </Button>
                            <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
                                <div className=" modal-header">
                                    <h5 className=" modal-title" id="exampleModalLabel">
                                        Upload Staff                    </h5>
                                    <button
                                        aria-label="Close"
                                        className=" close"
                                        type="button"
                                        onClick={() => setModalOpen(!modalOpen)}
                                    >
                                        <span aria-hidden={true}>×</span>
                                    </button>
                                </div>
                                <ModalBody >
                                    <div className='row'>
                                        <div className='col-lg-6'>
                                            <input type="file" id={Styles.input} />
                                            <div className='row'>
                                                <ModalFooter>

                                                    <Button className='mt-2' id={Styles.UploadStaffButton} color="primary" type="button">
                                                        Upload Staff
                                                    </Button>
                                                </ModalFooter>
                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                           
                                        </div>
                                    </div>
                                </ModalBody>

                            </Modal>                    </div>
                    </div>
                </div>
                <div className='row '>

                    <table className=' table mt-3 text-center' id={Styles.table} ref={tableRef}>
                        <thead>
                            <tr id={Styles.tr}>
                                <th className='text-white'>Employee Id</th>
                                <th className='text-white'>Employee Name</th>
                                <th className='text-white'>Loan Type</th>
                                <th className='text-white'>Category</th>
                                <th className='text-white'>Loan Amount</th>
                                <th className='text-white'>Ammortization</th>
                                <th className='text-white'>Tenure</th>
                                <th className='text-white'>Comments</th>

                            </tr>
                        </thead>
                        <tbody >
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
    )
}

export default TeamLoans