import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import Layout from '@/Components/layout';
import axios from 'axios';
import Swal from 'sweetalert2';
function DivDivisionMaster() {
    let [actionType, setActionType] = useState("insert")
    let hostURL = process.env.NEXT_PUBLIC_API_HOST_URL;


    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        console.log(JSON.stringify(data))
        if (actionType == "insert") {
            await axios.post(hostURL + "Master/InsertDivisionMaster", data)
            location.href = "/Masters/divisionmasterdashboard"
            Swal.fire({
                icon: 'success',
                title: 'Added Successfully',
            })
        }
        else {
            Swal.fire({
                title: 'Are you sure to update?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, update it!'
            }).then((result) => {
                if (result) {
                    axios.post(hostURL + "Master/UpdateDivisionMaster", data)
                    sessionStorage.removeItem("id")
                    Swal.fire({
                        icon: "success",
                        titleText: "Updated Successfully"
                    })
                    location.href = "/Masters/divisionmasterdashboard"
                }
            })

        }
    }

    function clearForm(existingData = null) {
        let etty = {
            "ID": existingData ? existingData.id : "",
            "Short": existingData ? existingData.short : "",
            "Description": existingData ? existingData.description : "",
        }
        reset(etty)
        setActionType(existingData ? "update" : "insert")
    }

    let ID;
    const getByID = async () => {
        const res = await axios.get(hostURL + "Master/GetDivisionMasterByID?ID=" + ID)
        clearForm(res.data[0])
    }

    useEffect(() => {
        clearForm()
        ID = sessionStorage.getItem("id")
        if (ID) {
            getByID();
        }
    }, [])


    return (
        <Layout>
            <div className="container">
                <h3 className='text-primary fs-5 mt-3'>Division Master</h3>
                <div className='card p-3 border-0 shadow-lg rounded-3 mt-4 mb-5'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row ">
                            <div className="col-lg-4">
                                <p>Short Name <i className="text-danger">*</i></p>
                                <input
                                    name="Short"
                                    className="form-control"
                                    type="text"
                                    {...register("Short", { required: true })}
                                    placeholder="Short Name"
                                />
                                <div>
                                    {errors.Short && (
                                        <span className="mt-2 text-danger">
                                            Please enter name
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <p>Description <i className="text-danger">*</i></p>
                                <textarea
                                    name="Description"
                                    className="form-control"
                                    {...register("Description", { required: true })}
                                    placeholder="Description"
                                />
                                <div>
                                    {errors.Description && (
                                        <span className="text-danger mt-2" >
                                            Please enter description
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className="row ">
                            <div className="col-lg-8"></div>
                            <div className="col-lg-2 text-end">
                                <button
                                    type="button"
                                    className="btn btn-primary AddButton" >
                                    Close
                                </button>
                            </div>
                            <div className="col-lg-2">
                                {
                                    actionType == "insert" && (
                                        <button type='submit' className="btn btn-primary AddButton">Save</button>
                                    )
                                }
                                {
                                    actionType == "update" && (
                                        <button type='submit' className="btn btn-primary AddButton">Update</button>
                                    )
                                }
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default DivDivisionMaster;

