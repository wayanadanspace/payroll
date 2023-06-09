import React, { useState, useEffect } from "react";
import Styles from "../../styles/employmentJobHistory.module.css";
import Link from "next/link";
import Layout from "@/Components/layout";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
function Otmaster() {

  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  const [actionType, setActionType] = useState("insert");

  useEffect(() => {
    async function otList() {
      const id = sessionStorage.getItem("id");
      if (id) {
        let hostURL = process.env.NEXT_PUBLIC_API_HOST_URL;
        // This API is used to fetch the dashboard data from OTRates table based on ID
        const response = await axios.get(hostURL + "Master/GetOTRatesByID?ID=" + id);
        clearForm(response.data[0])
      }
      else {
        clearForm();
      }
    }
    otList();
  }, [1]);

  function clearForm(otData = null) {
    let details = {
      "ID": otData ? otData.id : "",
      "Day": otData ? otData.day : "",
      "Normal": otData ? otData.normal : "",
      "OT": otData ? otData.ot : "",
      "ND": otData ? otData.nd : "",
      "NDOT": otData ? otData.ndot : ""
    }
    reset(details);
    setActionType(otData ? "update" : 'insert')
  }

  async function onSubmit(data) {
    let hostURL = process.env.NEXT_PUBLIC_API_HOST_URL;
    if (actionType == "insert") {
      // This API is used to insert the data to the OTRates table
      await axios.post(hostURL + "Master/InsertOTRates", data);
      Swal.fire({
        icon: "success",
        title: "Hurray..",
        text: "Data was inserted...!",
      });
    }
    else {
      // This API is used to update the data in the OTRates table
      await axios.post(hostURL + "Master/UpdateOTRates", data);
      Swal.fire({
        icon: "success",
        title: "Hurray..",
        text: "Data was updated...!",
      });
      <Link href="/Masters/otratedashboard"></Link>

    }
  }

  return (
    <Layout>
      <div>
        <p id={Styles.title}>OT Master</p>
        <div className="container-fluid">
          <div className={Styles.rowcss}>
            <div className="col-md-12">
              <div className="row">
                <div className="col-lg-2">
                </div>
                <div className="col-lg-8">
                </div>
                <div className="col-lg-2">
                </div>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={Styles.cardcss}>
                  <div className="row">
                    <div className="col-md-4">
                      <label > Day<span style={{ color: "red" }}>*</span></label>
                      <input type="text" name="day" className='form-control' {...register("Day", {
                        required: "This field is required", pattern: { value: '^[A-Za-z0-9 ]+$', message: "Please enter a valid Day" }
                      })} />
                      {errors.Day && <p className="error-message" style={{ color: "red" }}>{errors.Day.message}</p>}
                    </div>
                    <div className="col-md-4">
                      <label > Normal<span style={{ color: "red" }}>*</span></label>
                      <input type="text" name="normal" className='form-control' {...register("Normal", {
                        required: "This field is required", pattern: { value: '^[A-Za-z0-9 ]+$', message: "Please enter valid Details" }
                      })} />
                      {errors.Normal && <p className="error-message" style={{ color: "red" }}>{errors.Normal.message}</p>}
                    </div>
                    <div className="col-md-4">
                      <label > OT<span style={{ color: "red" }}>*</span></label>
                      <input type="text" name="ot" className='form-control' onkeypress='return ((event.charCode >= 48 && event.charCode <= 57) || (event.charCode == 46))' {...register("OT", {
                        required: "This field is required", pattern: {
                          value: '^[0-9 .]+$', message: "Please enter valid Details"
                        }
                      })} />
                      {errors.OT && <p className="error-message" style={{ color: "red" }}>{errors.OT.message}</p>}
                    </div>
                    <div className="col-md-4">
                      <label > ND<span style={{ color: "red" }}>*</span></label>
                      <input type="text" name="nd" className='form-control' {...register("ND", {
                        required: "This field is required", pattern: { value: '^[A-Za-z0-9 ]+$', message: "Please enter valid Details" }
                      })} />
                      {errors.ND && <p className="error-message" style={{ color: "red" }}>{errors.ND.message}</p>}
                    </div>
                    <div className="col-md-4">
                      <label > NDOT<span style={{ color: "red" }}>*</span></label>
                      <input type="text" name="ndot" className='form-control' {...register("NDOT", {
                        required: "This field is required", pattern: { value: '^[A-Za-z0-9 ]+$', message: "Please enter valid Details" }
                      })} />
                      {errors.NDOT && <p className="error-message" style={{ color: "red" }}>{errors.NDOT.message}</p>}
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-lg-7">
                    </div>
                    <div className="col-lg-2">
                      <Link href="/Masters/otratedashboard"><button id={Styles.addNew} style={{ color: 'white' }} tabindex="0">CANCEL</button></Link>
                    </div>
                    <div className="col-lg-2">
                      {
                        actionType == "insert" && (
                          <button type='submit' id={Styles.addNew} style={{ color: 'white' }} className='save-button'>Save</button>
                        )
                      }
                      {
                        actionType == "update" && (
                          <button type='submit' id={Styles.addNew} style={{ color: 'white' }} className='update-button'>Update</button>
                        )
                      }

                    </div>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
        {/* </div> */}
      </div>
    </Layout>
  );
}

export default Otmaster;
