import React from 'react'
import bulk from '../../styles/bulkupload.module.css'
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { DownloadTableExcel } from 'react-export-table-to-excel';
import { useRef } from 'react';
function PayrollComponentBulkUpload() {
    const tableRef = useRef(null);
    const [modalOpen, setModalOpen] = React.useState(false);
    return (
        <div>
            <br>
            </br>
            <br></br>
            <br></br>
            <div id={bulk.card} className="card">
                <div className="row">
                    <h3 className="text-primary fs-5 mt-3">Payroll Components</h3>
                </div>
                <br/>
                <div className="row FilterclassName">
                    <br ></br>
                    <div className="col-lg-1">
                        <p >Filter By:</p>
                    </div>
                    <div className="col-lg-3">
                        <p >Search</p>
                        <input type="search" placeholder="Search for Staff" className="form-control "></input>
                    </div>
                    <div className="col-lg-2">
                        <p >PayDate</p>
                        <input type="date" placeholder="PayDate" className="form-control"></input>
                    </div>
                    <div className="col-md-3">
                        <p >Component Code</p>
                        <select id="Code" name="Code" className="form-control">
                            <option value="" disabled="" selected="">Select Code</option>
                            <option value="ALW_ASSOCMNGR"> ALW_ASSOCMNGR </option>
                            <option value="OTHR_ALLOW"> OTHR_ALLOW </option>
                            <option value="ALW_SUN_PREM"> ALW_SUN_PREM </option>
                            <option value="OTND_DOUBLERD"> OTND_DOUBLERD </option>
                            <option value="NSDREG"> NSDREG </option>
                            <option value="NSD_LEGALRD"> NSD_LEGALRD </option>
                            <option value="NSD_LEGALRD"> NSD_LEGALRD </option>
                            <option value="NSD_LEGALRD_EXC8"> NSD_LEGALRD_EXC8 </option>
                            <option value="NSD_LEGALRD_EXC8_ADJ"> NSD_LEGALRD_EXC8_ADJ </option>
                            <option value="NSD_LEGALWD"> NSD_LEGALWD </option>
                            <option value="NSD_LEGALWD_EXC8"> NSD_LEGALWD_EXC8 </option>
                            <option value="NSD_REST"> NSD_REST </option>
                            <option value="NSD_REST_ADJ"> NSD_REST_ADJ </option>
                            <option value="NSD_REST_EXC8"> NSD_REST_EXC8 </option>
                            <option value="NSD_REST_EXC8_ADJ"> NSD_REST_EXC8_ADJ </option>
                            <option value="NSD_SPECIALRD"> NSD_SPECIALRD </option>
                            <option value="NSD_SPECIALRD_ADJ"> NSD_SPECIALRD_ADJ </option>
                            <option value="NSD_SPECIALRD_EXC8_ADJ"> NSD_SPECIALRD_EXC8_ADJ </option>
                            <option value="NSD_SPECIALWD"> NSD_SPECIALWD </option>
                            <option value="NSD_SPECIALWD_ADJ"> NSD_SPECIALWD_ADJ </option>
                            <option value="NSD_SPECIALWD_EXC8"> NSD_SPECIALWD_EXC8 </option>
                            <option value="NSD_SPECIALWD_EXC8_ADJ"> NSD_SPECIALWD_EXC8_ADJ </option>
                            <option value="OTND_DOUBLERD"> OTND_DOUBLERD </option>
                            <option value="OTND_DOUBLERD_ADJ"> OTND_DOUBLERD_ADJ </option>
                            <option value="OTND_DOUBLERD_EXC8"> OTND_DOUBLERD_EXC8 </option>
                            <option value="OTND_DOUBLEWD"> OTND_DOUBLEWD </option>
                            <option value="OTND_DOUBLEWD_EXC8"> OTND_DOUBLEWD_EXC8 </option>
                            <option value="OTND_LEGALRD"> OTND_LEGALRD </option>
                            <option value="OTND_LEGALRD_ADJ"> OTND_LEGALRD_ADJ </option>
                            <option value="OTND_LEGALRD_EXC8"> OTND_LEGALRD_EXC8 </option>
                            <option value="OTND_LEGALRD_EXC8_ADJ"> OTND_LEGALRD_EXC8_ADJ </option>
                            <option value="OTND_LEGALRD"> OTND_LEGALRD </option>
                            <option value="OTND_LEGALWD_ADJ"> OTND_LEGALWD_ADJ </option>
                            <option value="OTND_LEGALWD_EXC8"> OTND_LEGALWD_EXC8 </option>
                            <option value="OTND_LEGALWD_EXC8_ADJ"> OTND_LEGALWD_EXC8_ADJ </option>
                            <option value="OTND_LEGALRD"> OTND_LEGALRD </option>
                            <option value="OTND_REG_ADJ"> OTND_REG_ADJ </option>
                            <option value="OTND_REG_EXC8"> OTND_REG_EXC8 </option><option value="OTND_REST"> OTND_REST </option><option value="OTND_REST_ADJ"> OTND_REST_ADJ </option>
                            <option value="OTND_REST_EXC8"> OTND_REST_EXC8 </option>
                            <option value="OTND_REST_EXC8_ADJ"> OTND_REST_EXC8_ADJ </option>
                            <option value="OTND_SPECIALRD"> OTND_SPECIALRD </option>
                            <option value="OTND_SPECIALRD_ADJ"> OTND_SPECIALRD_ADJ </option>
                            <option value="OTND_SPECIALRD_EXC8"> OTND_SPECIALRD_EXC8 </option>
                            <option value="OTND_SPECIALRD_EXC8_ADJ"> OTND_SPECIALRD_EXC8_ADJ </option>
                            <option value="OT Night Differential Special Holiday"> OT Night Differential Special Holiday </option>
                            <option value="OTND_SPECIALWD_ADJ"> OTND_SPECIALWD_ADJ </option>
                            <option value="OTND_SPECIALWD_EXC8"> OTND_SPECIALWD_EXC8 </option>
                            <option value="OTND_SPECIALWD_EXC8_ADJ"> OTND_SPECIALWD_EXC8_ADJ </option>
                            <option value="OT_DOUBLERD"> OT_DOUBLERD </option>
                            <option value="OT_DOUBLERD_EXC8"> OT_DOUBLERD_EXC8 </option><option value="OT_DOUBLEWD"> OT_DOUBLEWD </option>
                            <option value="OT_DOUBLEWD_EXC8"> OT_DOUBLEWD_EXC8 </option>
                            <option value="OT_LEGALRD"> OT_LEGALRD </option>
                            <option value="OT_LEGALRD_ADJ"> OT_LEGALRD_ADJ </option>
                            <option value="OT_LEGALRD_EXC8"> OT_LEGALRD_EXC8 </option>
                            <option value="OT_LEGALRD_EXC8_ADJ"> OT_LEGALRD_EXC8_ADJ </option>
                            <option value="OT_LEGALWD"> OT_LEGALWD </option>
                            <option value="OT_REG"> OT_REG </option>
                            <option value="OT_REG_ADJ"> OT_REG_ADJ </option>
                            <option value="OT_REG_EXC8"> OT_REG_EXC8 </option>
                            <option value="OT_LEGALRD"> OT_LEGALRD </option>
                            <option value="OT_REST_ADJ"> OT_REST_ADJ </option>
                            <option value="OT_REST_EXC8"> OT_REST_EXC8 </option>
                            <option value="OT_REST_EXC8_ADJ"> OT_REST_EXC8_ADJ </option>
                            <option value="OT_SPECIALRD"> OT_SPECIALRD </option>
                            <option value="OT_SPECIALRD_ADJ"> OT_SPECIALRD_ADJ </option>
                            <option value="OT_SPECIALRD_EXC8"> OT_SPECIALRD_EXC8 </option>
                            <option value="OT_SPECIALRD_EXC8_ADJ"> OT_SPECIALRD_EXC8_ADJ </option>
                            <option value="OT_SPECIALWD"> OT_SPECIALWD </option>
                            <option value="OT_SPECIALWD_EXC8"> OT_SPECIALWD_EXC8 </option>
                            <option value="AL_LWOP"> AL_LWOP </option><option value="DEHDMF_EE"> DEHDMF_EE </option>
                            <option value="DEMPF_EE"> DEMPF_EE </option><option value="DEPHEALTH_EE"> DEPHEALTH_EE </option>
                            <option value="DESSS_EE"> DESSS_EE </option><option value="LWOP_ADJ"> LWOP_ADJ </option>
                            <option value="NHDMF_ER"> NHDMF_ER </option><option value="NMPF_ER"> NMPF_ER </option>
                            <option value="NPHEALTH_ER"> NPHEALTH_ER </option>
                            <option value="NPHEALTH_TTL"> NPHEALTH_TTL </option>
                            <option value="NSSS_EC"> NSSS_EC </option><option value="NSSS_ER"> NSSS_ER </option>
                            <option value="NSSS_GT"> NSSS_GT </option><option value="PHIL_BS"> PHIL_BS </option>
                            <option value="DUE_UNION"> DUE_UNION </option>
                            <option value="AL_INT_SAL_A"> AL_INT_SAL_A </option>
                            <option value="AL_INT_SAL_B"> AL_INT_SAL_B </option>
                            <option value="AL_INT_SAL_E"> AL_INT_SAL_E </option>
                            <option value="DLYRT"> DLYRT </option><option value="HRLYRT"> HRLYRT </option>
                            <option value="AL_AFI_COOP"> AL_AFI_COOP </option>
                            <option value="AL_ALI_GYM"> AL_ALI_GYM </option>
                            <option value="AL_VACCINE_A"> AL_VACCINE_A </option>
                            <option value="AR_HOTEL"> AR_HOTEL </option>
                            <option value="DED_GYM_GOLDS"> DED_GYM_GOLDS </option>
                            <option value="1099"> 1099 </option>
                            <option value="RNTAL_PARKING"> RNTAL_PARKING </option>
                            <option value="ALW_NHDMFC"> ALW_NHDMFC </option>
                            <option value="AR_BEL_GELEX"> AR_BEL_GELEX </option>
                            <option value="BON_13TH"> BON_13TH </option>
                            <option value="BON_14TH"> BON_14TH </option>
                            <option value="BON_13TH_ADJ"> BON_13TH_ADJ </option>
                            <option value="BON_ANNIV"> BON_ANNIV </option>
                            <option value="BON_PERF"> BON_PERF </option>
                            <option value="BON_SIGN"> BON_SIGN </option>
                            <option value="BPAY_ADJ"> BPAY_ADJ </option>
                            <option value="HOL_PAY"> HOL_PAY </option>
                            <option value="INCENTIVE"> INCENTIVE </option>
                            <option value="NSDREG_ADJ"> NSDREG_ADJ </option>
                            <option value="OTHER_TX"> OTHER_TX </option>
                            <option value="OTND_LEGALWD"> OTND_LEGALWD </option>
                            <option value="OTND_REG"> OTND_REG </option>
                            <option value="OTND_REG_EXC8_ADJ"> OTND_REG_EXC8_ADJ </option>
                            <option value="OTND_SPECIALWD"> OTND_SPECIALWD </option>
                            <option value="OT_ALW"> OT_ALW </option><option value="OT_ALW_ADJ"> OT_ALW_ADJ </option>
                            <option value="OT_LEGALWD_ADJ"> OT_LEGALWD_ADJ </option><option value="OT_REG_EXC8_ADJ"> OT_REG_EXC8_ADJ </option>
                            <option value="OT_REST"> OT_REST </option><option value="OT_SPECIALWD_ADJ"> OT_SPECIALWD_ADJ </option>
                            <option value="OT_SPECIALWD_EXC8_ADJ"> OT_SPECIALWD_EXC8_ADJ </option>
                            <option value="SL_ENCASH"> SL_ENCASH </option><option value="VL_TXCASH"> VL_TXCASH </option>
                            <option value="ACCNT_RECEIVABLE"> ACCNT_RECEIVABLE </option><option value="ACC_REC_1"> ACC_REC_1 </option>
                            <option value="ACC_REC_2"> ACC_REC_2 </option><option value="ACC_REC_3"> ACC_REC_3 </option>
                            <option value="ALI_DONATION"> ALI_DONATION </option><option value="ALW_DEPEXC"> ALW_DEPEXC </option>
                            <option value="AL_U_A_FEE"> AL_U_A_FEE </option><option value="AR_TEL_EX"> AR_TEL_EX </option>
                            <option value="CTR_CHILHR"> CTR_CHILHR </option><option value="CTR_CHILHR"> CTR_CHILHR </option>
                            <option value="DD_TAX"> DD_TAX </option><option value="DEHDMF_NTX_EE"> DEHDMF_NTX_EE </option>
                            <option value="OTHER_DEDUCT"> OTHER_DEDUCT </option><option value="ALW_FM"> ALW_FM </option>
                            <option value="ALW_UNI"> ALW_UNI </option><option value="OTHER_NTX"> OTHER_NTX </option><option value="VL_NTCASH"> VL_NTCASH </option>
                            <option value="AR_CNCERT"> AR_CNCERT </option><option value="CTR_LILFEET"> CTR_LILFEET </option>
                            <option value="BEN_HOSP"> BEN_HOSP </option>
                        </select>
                    </div>
                    <div className="col-md-2"><br ></br><p></p>
                      
                                            <Button className={bulk.button}
                                                color="primary"
                                                type="button"
                                                onClick={() => setModalOpen(!modalOpen)}
                                            >
                                                Upload
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
                                                            <input type="file" id={bulk.input} />
                                                            <div className='row'>
                                                                <ModalFooter>

                                                                    <Button className='mt-2' id={bulk.UploadStaffButton} color="primary" type="button">
                                                                        Upload Staff
                                                                    </Button>
                                                                </ModalFooter>
                                                            </div>
                                                        </div>
                                                        <div className='col-lg-6'>
                                                            <div>
                                                                <DownloadTableExcel
                                                                    filename="UploadLoanTemplate"
                                                                    sheet="users"
                                                                    currentTableRef={tableRef.current}
                                                                >    <a id={bulk.a} href>Template.XLSX</a>
                                                                </DownloadTableExcel>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </ModalBody>

                                            </Modal>                    </div>
                                    </div>
                                </div>
                            </div>
           
            
    )
}

export default PayrollComponentBulkUpload