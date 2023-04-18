import React from 'react'
import Layout from '@/Components/layout'
import { useForm } from 'react-hook-form'

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
                                {errors.dateRequest && (<span className='text-danger mt-2'>Select Valid Date</span>)}
                            </div>
                            <div className='col-lg-3'>
                                <p>Start Date <i className='text-danger'>*</i></p>
                                <input type='time' className='form-control' {...register('startTime', { required: true })} />
                                {errors.startTime && (<span className='text-danger mt-2'>Select Valid Start Time</span>)}
                            </div>
                            <div className='col-lg-3'>
                                <p>End Date <i className='text-danger'>*</i></p>
                                <input type='time' className='form-control' {...register('endTime', { required: true })} />
                                {errors.endTime && (<span className='text-danger mt-2'>Select Valid End Time</span>)}
                            </div>
                            <div className='col-lg-3'>
                                <p>Comments <i className='text-danger'>*</i></p>
                                <textarea rows={6} className='form-control' {...register('comments', { required: true })}></textarea>
                                {errors.comments && (<span className='text-danger mt-2'>Select Valid End Time</span>)}
                            </div>
                        </div>
                        <div className='row mt-5'>
                            <div className='col-lg-8'></div>
                            <div className='col-lg-2'>
                                <button type='submit' className='close-button'>Cancel</button>
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