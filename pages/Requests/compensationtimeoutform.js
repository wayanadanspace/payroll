import React from 'react'
import Layout from '@/Components/layout'
import { useForm } from 'react-hook-form'
import Link from 'next/link';

function compensationtimeoutform() {

    const { register, handleSubmit, reset, formState: { errors }, } = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
    }
    return (
        <Layout>
            <div className='container'>
                <h3 className='text-primary fs-5 mt-3 fw-bold'>Add Compensation</h3>
                <div className='card p-3 border-0 shadow-lg '>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='row'>
                            <div className='col-lg-3'>
                                <p>Date Request <i className='text-danger'>*</i></p>
                                <input type='date' className='form-control' {...register('dateRequest', { required: true })} />
                                {errors.dateRequest && (<p className='text-danger mt-2'>Select Valid Date</p>)}
                            </div>
                            <div className='col-lg-3'>
                                <p>Start Date <i className='text-danger'>*</i></p>
                                <input type='time' className='form-control' {...register('startTime', { required: true })} />
                                {errors.startTime && (<p className='text-danger mt-2'>Select Valid Start Time</p>)}
                            </div>
                            <div className='col-lg-3'>
                                <p>End Date <i className='text-danger'>*</i></p>
                                <input type='time' className='form-control' {...register('endTime', { required: true })} />
                                {errors.endTime && (<p className='text-danger mt-2'>Select Valid End Time</p>)}
                            </div>
                            <div className='col-lg-3'>
                                <p>Comments <i className='text-danger'>*</i></p>
                                <textarea rows={6} className='form-control' {...register('comments', { required: true })}></textarea>
                                {errors.comments && (<p className='text-danger mt-2'>Please Enter Comments</p>)}
                            </div>
                        </div>
                        <div className='row mt-5'>
                            <div className='col-lg-8'></div>
                            <div className='col-lg-2'>
                                <Link href="/Requests/compensationtimeout"><button className='close-button'>Cancel</button></Link>
                            </div>
                            <div className='col-lg-2'>
                                <button type='submit' className=' submit-button'>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default compensationtimeoutform