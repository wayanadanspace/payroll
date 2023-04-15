import React, { useEffect, useState } from 'react'
import Layout from '@/Components/layout'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';

function SemiTaxForm() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    let [actionType, setActionType] = useState("insert")
    let hostURL = process.env.NEXT_PUBLIC_API_HOST_URL;
    let ID;

    const onSubmit = async (data) => {
        console.log(JSON.stringify(data))
        if (actionType == "insert") {
            await axios.post(hostURL + "HR/InsertTaxconfigarationsemimonth", data)
            location.href = "/Configuration/semitax";
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
                    axios.post(hostURL + "HR/UpdateTaxconfigarationsemimonth", data)
                    sessionStorage.removeItem("id")
                    Swal.fire({
                        icon: "success",
                        titleText: "Updated Successfully"
                    })
                    location.href = "/Configuration/semitax";

                }
            })
        }
    }

    function clearForm(existingData = null) {
        let semitax = {
            "ID": existingData ? existingData.id : "",
            "Taxlowlevellimit": existingData ? existingData.taxlowlevellimit : "",
            "Taxhighlevellimit": existingData ? existingData.taxhighlevellimit : "",
            "slab": existingData ? existingData.slab : "",
            "Percentage": existingData ? existingData.percentage : "",
            "Taxexcessamount": existingData ? existingData.taxexcessamount : "",
            "Taxdeductionamount": existingData ? existingData.taxdeductionamount : "",
            "Year": existingData ? existingData.year : "",
        }
        reset(semitax)
        setActionType(existingData ? "update" : "insert")
    }

    async function getByID() {
        const res = await axios.get(hostURL + "HR/GetTaxconfigarationsemimonthByID?ID=" + ID)
        console.log(res.data)
        clearForm(res.data[0])
    }

    useEffect(() => {
        clearForm()
        ID = sessionStorage.getItem("id")
        if (ID) {
            getByID()
        }
    }, [])
    return (
        <Layout>
            <h3 className='text-primary fs-5 mt-3'>Semi Monthly Form</h3>
            <div className='container'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='row  mt-4 shadow-lg rounded-3 p-3 '>
                        <div className='col-lg-2 mt-4'>
                            <p>Tax low level limit <i className='text-danger'>*</i></p>
                            <input {...register("Taxlowlevellimit", { required: true })} type="number" placeholder='Tax low level limit' className='form-control' />
                            {errors.Taxlowlevellimit && <p className='mt-2 text-danger'>Enter Low level Tax Limit</p>}
                        </div>

                        <div className='col-lg-2 mt-4'>
                            <p>Tax high level limit <i className='text-danger'>*</i></p>
                            <input {...register("Taxhighlevellimit", { required: true })} type="text" placeholder='Tax high level limit' className='form-control' />
                            {errors.Taxhighlevellimit && <p className='mt-2 text-danger'>Enter High Level Limit</p>}
                        </div>

                        <div className='col-lg-2 mt-4'>
                            <p>slab <i className='text-danger'>*</i></p>
                            <input {...register("slab", { required: true })} type="text" placeholder='slab' className='form-control' />
                            {errors.slab && <p className='mt-2 text-danger'>Enter slab</p>}
                        </div>

                        <div className='col-lg-2 mt-4'>
                            <p>Percentage <i className='text-danger'>*</i></p>
                            <input {...register("Percentage", { required: true })} type="text" placeholder='Percentage' className='form-control' />
                            {errors.percentage && <p className='mt-2 text-danger'>Enter Percentage</p>}
                        </div>

                        <div className='col-lg-2 mt-4'>
                            <p>Tax excess amount <i className='text-danger'>*</i></p>
                            <input {...register("Taxexcessamount", { required: true })} type="text" placeholder='Tax excess amount' className='form-control' />
                            {errors.excess && <p className='mt-2 text-danger'>Enter Excess Amount</p>}
                        </div>

                        <div className='col-lg-2 mt-4'>
                            <p>Tax deduction amount <i className='text-danger'>*</i></p>
                            <input {...register("Taxdeductionamount", { required: true })} type="text" placeholder='Tax deduction amount' className='form-control' />
                            {errors.deduction && <p className='mt-2 text-danger'>Enter Deduction Amount</p>}
                        </div>

                        <div className='col-lg-2 mt-4'>
                            <p>Year <i className='text-danger'>*</i></p>
                            <select {...register("Year", { required: true })} className='form-select'>
                                <option value="">select Year</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                                <option value="2030">2030</option>
                            </select>
                            {errors.Year && <p className='mt-2 text-danger'>Please Select Year</p>}
                        </div>

                        <div className='col-lg-6'></div>

                        <div className='col-lg-8'></div>
                        <div className='col-lg-2 mt-2 text-end'>
                            {
                                actionType == "insert" && (
                                    <button type='submit' className='btn btn-primary AddButton'>Save</button>
                                )
                            }
                            {
                                actionType == "update" && (
                                    <button type="submit" className='btn btn-primary AddButton'>Update</button>
                                )
                            }
                        </div>
                        <div className='col-lg-2 mt-2'>
                            <button className='btn btn-primary AddButton'>Cancel</button>
                        </div>

                    </div>
                </form>
            </div>
        </Layout >
    )
}

export default SemiTaxForm