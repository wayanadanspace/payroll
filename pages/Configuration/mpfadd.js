import React, { useState, useEffect } from "react";
import Link from 'next/link'
import Styles from '../../styles/mpfadd.module.css';
import Layout from '@/Components/layout';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';

function mpfadd() {
    const { register, handleSubmit, reset, formState } = useForm();
    const { errors } = formState;
    const [actionType, setActionType] = useState("insert");

    useEffect(() => {
        async function getMpfList() {
            debugger
            const id = sessionStorage.getItem("id");
            if (id) {
                let hostURL = process.env.NEXT_PUBLIC_API_HOST_URL;
                const response = await axios.get(hostURL + "HR/GetMPFconfogarationByID?ID=" + id);
                clearForm(response.data[0])
            }
            else {
                clearForm();
            }
        }
        getMpfList();
    }, [1]);

    function clearForm(mpfData = null) {
        debugger
        let details = {
            "ID": mpfData ? mpfData.id : "",
            "Taxiableincomelowlimit": mpfData ? mpfData.taxiableincomelowlimit : "",
            "Taxiableincomehighlimit": mpfData ? mpfData.taxiableincomehighlimit : "",
            "MPF_EEvalue": mpfData ? mpfData.mpF_EEvalue : "",
            "MPF_ERvalue": mpfData ? mpfData.mpF_ERvalue : "",
            "MPF_Ecvalue": mpfData ? mpfData.mpF_Ecvalue : "",
            "Year": mpfData ? mpfData.year : ""
        }
        reset(details);
        setActionType(mpfData ? "update" : 'insert')
    }

    async function onSubmit(data) {
        console.log(data)
        let hostURL = process.env.NEXT_PUBLIC_API_HOST_URL;
        if (actionType == "insert") {
            await axios.post(hostURL + "HR/InsertMPFconfogaration", data);
            Swal.fire({
                icon: "success",
                title: "Hurray..",
                text: "Data was inserted...!",
            });
        }
        else {
            debugger;
            await axios.post(hostURL + "HR/UpdateMPFconfogaration", data);
            Swal.fire({
                icon: "success",
                title: "Hurray..",
                text: "Data was updated...!",
            });
        }
    }

    return (
        <Layout>
            <div>
                <br />
                <p id={Styles.p}>MPF Configuration Form</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div id={Styles.card} className='card shadow-lg p-3'>
                        <div className='row'>
                            <div className='col-lg-3'>
                                <label>Taxable income low limit <span id={Styles.span}>*</span></label>
                                <input type="tel" placeholder="Enter Low limit" name="Taxiableincomelowlimit" id="Taxiableincomelowlimit" className="form-control " {...register("Taxiableincomelowlimit", { required: "This field is required", pattern: { value: '^[0-9 .]+$', message: "Please enter a valid Detail" } })} />
                                {errors.Taxiableincomelowlimit && <p className="error-message" style={{ color: "red" }}>{errors.Taxiableincomelowlimit.message}</p>}
                            </div>
                            <div className='col-lg-3'>
                                <label>Taxable income high limit <span id={Styles.span}>*</span></label>
                                <input type="tel" placeholder="Enter High limit" name="Taxiableincomehighlimit" id="Taxiableincomehighlimit" className="form-control " {...register("Taxiableincomehighlimit", { required: "This field is required", pattern: { value: '^[0-9 .]+$', message: "Please enter a valid Detail" } })} />
                                {errors.Taxiableincomehighlimit && <p className="error-message" style={{ color: "red" }}>{errors.Taxiableincomehighlimit.message}</p>}
                            </div>
                            <div className='col-lg-2'>
                                <label>MPF EE value <span id={Styles.span}>*</span></label>
                                <input type="tel" placeholder="Enter MPF EE value" name="MPF_EEvalue" id="MPF_EEvalue" className="form-control " {...register("MPF_EEvalue", { required: "This field is required", pattern: { value: '^[0-9 .]+$', message: "Please enter a valid Detail" } })} />
                                {errors.MPF_EEvalue && <p className="error-message" style={{ color: "red" }}>{errors.MPF_EEvalue.message}</p>}
                            </div>
                            <div className='col-lg-2'>
                                <label>MPF ER value<span id={Styles.span}>*</span></label>
                                <input type="text" placeholder="Enter MPF ER value" name="MPF_ERvalue" id="MPF_ERvalue" className="form-control " {...register("MPF_ERvalue", { required: "This field is required", pattern: { value: '^[0-9 .]+$', message: "Please enter a valid Detail" } })} />
                                {errors.MPF_ERvalue && <p className="error-message" style={{ color: "red" }}>{errors.MPF_ERvalue.message}</p>}
                            </div>
                            <div className='col-lg-2'>
                                <label>MPF EC value <span id={Styles.span}>*</span></label>
                                <input type="text" placeholder="Enter MPF EC value" name="MPF_Ecvalue" id="MPF_Ecvalue" className="form-control " {...register("MPF_Ecvalue", { required: "This field is required", pattern: { value: '^[0-9 .]+$', message: "Please enter a valid Detail" } })} />
                                {errors.MPF_Ecvalue && <p className="error-message" style={{ color: "red" }}>{errors.MPF_Ecvalue.message}</p>}
                            </div>
                            <div className='col-lg-2'>
                                <label>Year<span id={Styles.span}>*</span></label>
                                <select className="form-control" {...register("Year", { required: true })}>
                                    <option >Select year</option>
                                    <option>2023</option>
                                    <option>2024</option>
                                    <option>2025</option>
                                    <option>2026</option>
                                    <option >2027</option>
                                    <option>2028</option>
                                </select>
                                {errors.Year && <p className="error-message" style={{ color: "red" }}>{errors.Year.message}</p>}
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-10'></div>
                            <div className='col-lg-1'>
                                <Link href='/Configuration/mpf'><button id={Styles.Cancel}>Cancel</button></Link>
                            </div>
                            <div className='col-lg-1'>
                                {
                                    actionType == "insert" && (
                                        <button type='submit' id={Styles.Save} >Save</button>
                                    )
                                }
                                {
                                    actionType == "update" && (
                                        <button type='submit' id={Styles.Save} >Update</button>
                                    )
                                }
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default mpfadd