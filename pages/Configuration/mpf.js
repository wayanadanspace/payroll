import React, { useState, useEffect } from "react";
import Styles from '../../styles/mpf.module.css'
import Link from "next/link";
import Layout from "@/Components/layout";
import axios from "axios";
import Swal from 'sweetalert2';


function mpf() {
    const [mpfDetails, setMpfDetails] = useState([]);

    const getMpfdetails = async () => {
        let hostURL = process.env.NEXT_PUBLIC_API_HOST_URL;
        const res = await axios.get(hostURL + "HR/GetMPFconfogaration");// This API is used to fetch the data from MPFConfogaration table
        setMpfDetails(res.data);
    }

    useEffect(() => {
        getMpfdetails()
    }, [1])

    const getData = (data) => {
        sessionStorage.setItem("id", data.id);
    }

    const clearData = () => {
        sessionStorage.setItem("id", "");
    }

    const handleDelete = async (id) => {
        try {
            let hostURL = process.env.NEXT_PUBLIC_API_HOST_URL;
            const res = await axios.get(hostURL + `HR/DeleteMPFconfogaration?ID=${id}`);// This API is used to delete the dashboard data based on ID
            console.log(res.data);
            Swal.fire({
                icon: "success",
                title: "Hurray..",
                text: "Data was Deleted...!",
            });
            getMpfdetails();
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: "error",
                title: "Oops..",
                text: "Data was Not Deleted...!",
            });
        }
    };
    return (
        <Layout>
            <div>
                <br />
                <p id={Styles.p}>MPF Configuration</p>
                <div className='card shadow-lg p-4 rounded-2 mt-4' id={Styles.card}>
                    <div className='row'>
                        <div className='col-lg-1'></div>
                        <div className='col-lg-4'>
                            <input type="text" placeholder='Search..' className='form-control form-control-md' />
                        </div>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-lg-10'></div>
                    <div className='col-lg-2'>
                        <Link href="/Configuration/mpfadd" id={Styles.addLink} > <button id={Styles.addButton} onClick={clearData.bind(this)} > ADD NEW</button></Link>
                    </div>
                </div>
                <table id={Styles.table} className='table  table-striped mt-3 text-center'>
                    <thead>
                        <tr className='bg-info text-white '>
                            <th>Taxable income low limit</th>
                            <th>Taxable income high limit</th>
                            <th>MPF_EE value</th>
                            <th>MPF_ER value</th>
                            <th>MPF_Ec value</th>
                            <th>Year</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mpfDetails.map((data, index) => {
                                return (
                                    <tr className="text-dark" key={index}>
                                        <td>{data.taxiableincomelowlimit}</td>
                                        <td>{data.taxiableincomehighlimit}</td>
                                        <td>{data.mpF_EEvalue}</td>
                                        <td>{data.mpF_ERvalue}</td>
                                        <td>{data.mpF_Ecvalue}</td>
                                        <td>{data.year}</td>
                                        <td>
                                            <Link href="/Configuration/mpfadd" style={{ marginRight: "10px" }}>
                                                <button id={Styles.actionButton} className='btn btn-sm' onClick={getData.bind(this, data)}>Edit</button>
                                            </Link>
                                            <button id={Styles.actionButton} className='btn btn-sm' onClick={() => handleDelete(data.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </Layout>
    )
}

export default mpf
