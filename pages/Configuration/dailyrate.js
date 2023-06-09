import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Styles from '../../styles/dailyrate.module.css'
import axios from 'axios'
import Swal from 'sweetalert2'
import Layout from "@/Components/layout";

function dailyrate() {

    const [dailyRate, setDailyRate] = useState([])
    let hostURL = process.env.NEXT_PUBLIC_API_HOST_URL;

    const getDailyRate = async () => {
        const { data } = await axios.get(hostURL + "HR/GetDailyrateConfigaration") //gurukiran@amazeinc.in, api call to fetch the data into the table
        setDailyRate(data)
        console.log(data)
    }
    useEffect(() => {
        getDailyRate();
    }, [])

    const handleDelete = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const res = axios.get(hostURL + `HR/DeleteDailyrateConfigaration?ID=${id}`); //gurukiran@amazeinc.in, delete api call(to delete the particular data based on its id)

                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                getDailyRate();
            }
        })

    };
    const getData = (data) => {
        sessionStorage.setItem("id", data.id);
        console.log(data.id)
    }

    const clearFormData = () => {
        sessionStorage.setItem("id", "");
    }



    return (
        <Layout>
            <br />
            <p id={Styles.p}>Daily Rate Configuration</p>

            <div className='card shadow-lg p-4 rounded-2 mt-4' id={Styles.card}>
                <div className='row'>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-4'>
                        <input type="text" placeholder='Search..' className='form-control form-control-md' />
                    </div>
                </div>
            </div>

            <div className='row mt-3'>
                <div className='col-lg-11'></div>
                <div className='col-lg-1'>

                    <Link href="/Configuration/dailyrateadd" id={Styles.addLink} > <button onClick={clearFormData.bind(this)} id={Styles.addButton}>  ADD </button></Link>

                </div>

            </div>

            <table id={Styles.table} className='table  table-striped mt-3 text-center'>
                <thead>
                    <tr className='bg-info text-white '>
                        <th>Staffid</th>
                        <th>Working_Days_Year</th>
                        <th>Working_Days_Month</th>

                        <th>Working_Hours_Day</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{
                    dailyRate.map((data) => {
                        return (
                            <tr key={data.id}>
                                <td>{data.staffid}</td>
                                <td>{data.working_Days_Year}</td>
                                <td>{data.working_Days_Month}</td>
                                <td>{data.working_Hours_Day}</td>

                                <td>
                                    <Link href="/Configuration/dailyrateadd"><button id={Styles.actionButton} className='btn btn-sm' onClick={getData.bind(this, data)}>Edit</button></Link> &nbsp;&nbsp;&nbsp;&nbsp;
                                    <button id={Styles.actionButton} onClick={() => handleDelete(data.id)} className='btn btn-sm'>Delete</button>&nbsp;&nbsp;&nbsp;&nbsp;
                                </td>
                            </tr>
                        )

                    })
                }


                </tbody>
            </table>
        </Layout >
    )
}

export default dailyrate