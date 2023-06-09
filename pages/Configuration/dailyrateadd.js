import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Styles from '../../styles/dailyrateadd.module.css'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import axios from 'axios';
function dailyrateadd() {
    const { register, handleSubmit, reset, formState } = useForm();
    const { errors } = formState;
    let [actionType, setActionType] = useState("insert");
    let hostURL = process.env.NEXT_PUBLIC_API_HOST_URL;


    async function onSubmit(data) {
        // alert(JSON.stringify(data))
        console.log(data);
        if (actionType == "insert") {
            await axios.post(hostURL + 'HR/InsertDailyrateConfigaration', data); //gurukiran@amazeinc.in, api call to insert the data into the table
            Swal.fire({ icon: "success", text: "Data Successfully added" })
            location.href = ("/Configuration/dailyrate");

        }
        else {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Update it!'
            }).then((result) => {

                if (result.isConfirmed) {
                    axios.post(hostURL + 'HR/UpdateDailyrateConfigaration', data); //gurukiran@amazeinc.in, api call to update a particular data
                    Swal.fire(
                        'Updated!',
                        'Your file has been updated.',
                        'success'
                    )
                    location.href = ("/Configuration/dailyrate")
                }
            })



        }

    }

    function clearForm(dailyrate = null) {

        let details = {
            "ID": dailyrate ? dailyrate.id : "",
            "StaffID": dailyrate ? dailyrate.staffid : "",
            "Working_Days_Year": dailyrate ? dailyrate.working_Days_Year : "",
            "Working_Days_Month": dailyrate ? dailyrate.working_Days_Month : "",
            "Working_Hours_Day": dailyrate ? dailyrate.working_Hours_Day : "",

        }

        reset(details);
        setActionType(dailyrate ? "update" : 'insert')
    }
    useEffect(() => {
        async function getdailyrateByID() {
            debugger
            const id = sessionStorage.getItem("id");
            if (id) {

                const response = await axios.get(hostURL + 'HR/GetDailyrateConfigarationByID?id=' + id); //gurukiran@amazeinc.in, getByID api call
                clearForm(response.data[0])
            }
            else {
                clearForm();
            }
        }
        getdailyrateByID();
    }, [1]);

    return (
        <div>
            <br />
            <p id={Styles.p}>Daily Rate Configuration Form</p>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div id={Styles.card} className='card shadow-lg p-3'>

                    <div className='row'>
                        <div className='col-lg-2'>


                            <label>Staffid <span id={Styles.span}>*</span></label>
                            <input name="lowLimit" type="text"{...register('StaffID', {

                                required: "Please add a StaffID ", pattern: {

                                    value: '^[A-Za-z0-9 ]+$',

                                    message: "Please enter a valid StaffID "

                                }
                            })} className={`form-control mt-2`} />
                            {errors.StaffID && <p className="error-message" style={{ color: "red" }}>{errors.StaffID.message}</p>}

                        </div>
                        <div className='col-lg-2'>

                            <label>Working_Days_Year <span id={Styles.span}>*</span></label>
                            <input name="highLimit" type="text" {...register('Working_Days_Year', {

                                required: "Please add Working Year", pattern: {

                                    value: '^[A-Za-z0-9 ]+$',

                                    message: "Please enter a valid working Year "

                                }

                            })} className={`form-control mt-2`} />
                            {errors.Working_Days_Year && <p className="error-message" style={{ color: "red" }}>{errors.Working_Days_Year.message}</p>}

                        </div>
                        <div className='col-lg-2'>

                            <label>Working_Days_Month <span id={Styles.span}>*</span></label>
                            <input name="Philhealth" type="text" {...register('Working_Days_Month', {

                                required: "Please add Working Month", pattern: {

                                    value: '^[A-Za-z0-9 ]+$',

                                    message: "Please enter a valid working Month "

                                }
                            })} className={`form-control mt-2 `} />
                            {errors.Working_Days_Month && <p className="error-message text-danger">{errors.Working_Days_Month.message}</p>}

                        </div>
                        <div className='col-lg-2'>

                            <label>Working_Hours_Day <span id={Styles.span}>*</span></label>
                            <input name="Philhealth" type="text" {...register('Working_Hours_Day', {

                                required: "Please add Working days", pattern: {

                                    value: '^[A-Za-z0-9 ]+$',

                                    message: "Please enter a valid working day "

                                }
                            })} className={`form-control mt-2 `} />
                            {errors.Working_Hours_Day && <p className="error-message text-danger" >{errors.Working_Hours_Day.message}</p>}

                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-9'></div>
                        <div className='col-lg-2'>
                            {actionType == "insert" && (

                                <button type="submit" id={Styles.actionBtn} className="btn btn-primary">

                                    Save

                                </button>

                            )}

                            {actionType == "update" && (

                                <button type="submit" id='AddButton' className="btn btn-primary">

                                    Update

                                </button>

                            )}
                        </div>
                        <div className='col-lg-1'>
                            <Link href='/Configuration/dailyrate'><button id={Styles.Cancel}>Cancel</button></Link>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default dailyrateadd