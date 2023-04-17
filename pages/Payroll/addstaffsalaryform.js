import React from 'react'
import { useEffect, useState } from 'react';
import Layout from '@/Components/layout';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import axios from 'axios';
import Swal from 'sweetalert2';
function addstaffsalaryform() {
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const { register, handleSubmit, reset, formState } = useForm();

   const { errors } = formState;

   // eslint-disable-next-line react-hooks/rules-of-hooks
   let [actionType, setActionType] = useState("insert");

   let hostURL = process.env.NEXT_PUBLIC_API_HOST_URL
   // eslint-disable-next-line react-hooks/rules-of-hooks


   async function onSubmit(data) {
      alert(JSON.stringify(data))
      debugger
      console.log(data);
      if (actionType == "insert") {


         await axios.post(hostURL + 'Payroll/UpdateDe_minimis_Detailsforstaff', data);
         Swal.fire({ icon: "success", text: "Data Successfully added" })
         location.href = ("/Payroll/staffsalarycomponent");

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
               axios.post(hostURL + 'Payroll/UpdateDe_minimis_Detailsforstaff', data);
               Swal.fire(
                  'Updated!',
                  'Your file has been updated.',
                  'success'
               )
            }
         })



      }

   }
   useEffect(() => {

      async function getaddsalaryByID() {

         debugger

         const id = sessionStorage.getItem("id");

         if (id) {
            const response = await axios.get(hostURL + 'HR/GetMyDetailsByStaffID?id=' + id);

            clearForm(response.data[0])

         }



      }

      getaddsalaryByID();

   }, []);
   function clearForm(staffSalary = null) {

      let details = {

         "ID": staffSalary ? staffSalary.id : "",

         "BaseSal": staffSalary ? staffSalary.baseSal : "",

         "effectivedate": staffSalary ? staffSalary.daysemployeIDinmonth : "",
         "daysinmonth": staffSalary ? staffSalary.hoursdaysinmonthinday : "",
         "hoursinday": staffSalary ? staffSalary.hoursinday : "",

      }

      reset(details);

      setActionType(staffSalary ? "update" : 'insert')

   }

   return (
      <Layout>
         <div class="col-lg-10" >
            <br />
            <form onSubmit={handleSubmit(onSubmit)}>
               <div class="container-fluid">
                  <div class="row">
                     <div class="col-md-12">
                        <div class="row">
                           <div class="col-lg-8">
                              <h3 class="Heading">Salary Details</h3>
                           </div>
                           <div class="col-lg-1"></div>
                           <div class="col-lg-2"></div>
                        </div>
                        <br />
                        <div class="card">
                           <div class="row leavereq">
                              <div class="col-md-2"><label>Staff</label></div>
                              <div class="col-md-3">
                                 <p>Basic Salary.</p>
                              </div>
                              <div class="col-md-3">
                                 <p>Effective Date</p>
                              </div>
                              <div class="col-md-2">
                                 <p>Working Days In Month</p>
                              </div>
                              <div class="col-md-2">
                                 <p>Working Hours In Day</p>
                              </div>
                           </div>
                           <div class="row leavereq">

                              <div class="col-md-2">

                                 <div tabindex="0" class="multiselect-dropdown">
                                    <div class="disabled">
                                       <span tabindex="-1" class="dropdown-btn">
                                          <span class="selected-item-container"><span class="selected-item"><span >admin s&nbsp;</span><a  >x</a></span></span>
                                          <span >
                                             <span class="dropdown-multiselect__caret"></span>
                                          </span>
                                       </span>
                                    </div>

                                 </div>

                              </div>

                              <div class="col-md-3"><input {...register('BaseSal')} type="number" id="BaseSal" name="BaseSal" placeholder="Basic Salary" class="form-control " /></div>
                              <div class="col-md-3"><input {...register('effectivedate')} type="date" id="effectivedate" name="effectivedate" placeholder="New Salary" class="form-control " /></div>
                              <div class="col-md-2"><input {...register('daysinmonth')} type="number" id="daysinmonth" name="daysinmonth" placeholder="Working Days In Month" class="form-control " /></div>
                              <div class="col-md-2"><input {...register('hoursinday')} type="number" id="hoursinday" name="hoursinday" placeholder="Working Hours In Day" class="form-control " /></div>
                           </div>
                           <div class="row">
                              <div class="col-lg-12">

                                 {actionType == "insert" && (

                                    <button type="submit" className="btn btn-primary">

                                       Save

                                    </button>

                                 )}

                                 {actionType == "update" && (

                                    <button type="submit" id='AddButton' className="btn btn-primary">

                                       Update

                                    </button>

                                 )}

                                 <div><Link href="/Payroll/staffsalarycomponent"><button class="button">Cancel</button></Link></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <br />
            </form>
         </div>
      </Layout>
   )
}

export default addstaffsalaryform