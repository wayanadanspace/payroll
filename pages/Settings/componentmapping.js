
import React, { useState } from "react";
import Styles from "../../styles/employmentJobHistory.module.css";
import { useForm } from 'react-hook-form';
import leaveform from '../../styles/LeaveTypeForm.module.css'
import { yupResolver } from '@hookform/resolvers/yup';

import * as Yup from 'yup';


  function ComponentMappingForm() {
      return (
        
          <div className="container-fluid">
            <div  className="row">
              <div className="col-lg-4">
                <h3 className="Heading">Component Mapping</h3>
              </div>
              <div className="col-lg-6"></div>
              <div className="col-lg-2"></div>
            </div>
            <br />
            <div  className={leaveform.card}>
              <div className="row">
                <div className="col-lg-2">
                  <label>
                    PayrollComponentType<span style={{ color: "red" }}>*</span>
                  </label>
                  <select
                    id="PayrollComponentType"
                    name="PayrollComponentType"
                    className="form-control "
                  >
                    <option value="0" disabled="" selected="">
                      Select Payroll Component Type
                    </option>
                    <option value="Earning">Earning</option>
                    <option value="Deduction">Deduction</option>
                    <option value="Neutral">Neutral</option>
                  </select>
                </div>
                <div className="col-lg-2">
                  <label>
                    Code<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Code"
                    id="Code"
                    name="Code"
                    className="form-control "
                  />
                </div>
                <div className="col-lg-2">
                  <label>
                    Component Name<span style={{ color: "red" }}>*</span>
                  </label>
                  <select
                    id="ComponentName"
                    name="ComponentName"
                    className="form-control "
                  >
                    <option value="0" disabled="" selected="">
                      Select Component{" "}
                    </option>
                    <option value="1 Month Bonus">1 Month Bonus</option>
                    <option value="Witholding Tax Payable 2017">
                      Witholding Tax Payable 2017
                    </option>
                    <option value="Witholding Tax Refund 2017">
                      Witholding Tax Refund 2017
                    </option>
                    <option value="Witholding Tax Refund 2021">
                      Witholding Tax Refund 2021
                    </option>
                  </select>
                </div>
                <div className="col-lg-2">
                  <label>
                    Tax Flag<span style={{ color: "red" }}>*</span>
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    placeholder="Tax Flag"
                    id="TaxFlag"
                    name="TaxFlag"
                  />
                </div>
                <div className="col-lg-2">
                  <label>
                    Affects<span style={{ color: "red" }}>*</span>
                  </label>
                  <select
                    id="ComponentName"
                    name="ComponentName"
                    className="form-control "
                  >
                    <option value="0" disabled="" selected="">
                    Select Rest Da{" "}
                    </option>
                    <option value="1 Month Bonus">1 Month Bonus</option>
                    <option value="Witholding Tax Payable 2017">
                      Witholding Tax Payable 2017
                    </option>
                    <option value="Witholding Tax Refund 2017">
                      Witholding Tax Refund 2017
                    </option>
                    <option value="Witholding Tax Refund 2021">
                      Witholding Tax Refund 2021
                    </option>
                  </select>
                  {/* <div className="multiselect-dropdown">
                    <div>
                      <span tabindex="-1" className="dropdown-btn">
                        <span>Select Rest Day</span>
                        <span>
                          <span className="dropdown-multiselect__caret"></span>
                        </span>
                      </span>
                    </div>
                  </div> */}
                </div>

                <div className="col-lg-2">
                  <label>
                    90,000 Tax Exemption<span style={{ color: "red" }}>*</span>
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    placeholder="90,000 Tax Exemption"
                    id="TaxExemption"
                    name="TaxExemption"
                    className=""
                  />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-lg-2">
                  <label>Payroll Period*</label>
                  <select
                    id="PayrollPeriod"
                    name="PayrollPeriod"
                    className="form-control "
                  >
                    <option value="" disabled="" selected="">
                      Select Payroll Period
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
                <div className="col-lg-2">
                  <label>
                    Enable<span style={{ color: "red" }}>*</span>
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    id="Enable"
                    name="Enable"
                    className=""
                  />
                  &nbsp; Yes
                </div>
                <div className="col-lg-2">
                  <label>
                    Print On PaySlip<span style={{ color: "red" }}>*</span>
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    id="PrintOnPaySlip"
                    name="position"
                    className=""
                  />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-lg-4">
                  <label>
                    Formula<span style={{ color: "red" }}>*</span>
                  </label>
                  <textarea
                    type="text"
                    placeholder="Formula"
                    id="Formula"
                    name="phoneNumber"
                    className="form-control "
                  ></textarea>
                </div>
                <div className="col-lg-4">
                  <p>Type</p>
                  <div className="form-check">
                    <input
                      type="radio"
                      name="type"
                      id="type"
                      value="Recurring"
                      className="form-check-input "
                    />
                    <label for="flexRadioDefault1" className="form-check-label">
                      &nbsp; Recurring{" "}
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      name="type"
                      id="type"
                      checked=""
                      value="Fixed"
                      className="form-check-input "
                    />
                    <label for="flexRadioDefault2" className="form-check-label">
                      &nbsp; Fixed{" "}
                    </label>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-lg-10"></div>
                <div className="col-lg-1">
                  <button className="button" id={Styles.actionBtn}>Submit</button>
                </div>
                <div className="col-lg-1">
                  <button
                    routerlink="/Payroll/ComponentMappingDashboard"
                    className="button"
                    tabindex="0"
                    id={Styles.actionBtn}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
      );
  }
  
              export default ComponentMappingForm
