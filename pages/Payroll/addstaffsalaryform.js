import React from 'react'
import { useEffect ,useState} from 'react';
import { useForm } from 'react-hook-form';
function addstaffsalaryform() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { register, handleSubmit, reset, formState } = useForm();

const { errors } = formState;

// eslint-disable-next-line react-hooks/rules-of-hooks
let [actionType, setActionType] = useState("insert");

let hostURL = process.env.NEXT_PUBLIC_API_HOST_URL
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {

        async function getaddsalaryByID() {
        
        debugger
        
        const id = sessionStorage.getItem("id");
        
        if (id) {
        const response = await axios.get(hostURL + 'HR/GetMyDetailsByStaffID?id=' + id);
        
        clearForm(response.data[0])
        
        }
        
        else {
        
        clearForm();
        
        }
        
        }

        getaddsalaryByID();
        
        }, []);
         function clearForm(departmentMaster = null) {

            let details = {
        
            "ID": departmentMaster ? departmentMaster.id : "",
            
            "Department_name": departmentMaster ? departmentMaster.department_name : "",
            
            "Department_Desc": departmentMaster ? departmentMaster.department_Desc : "",
   
            }
   
            reset(details);
            
            setActionType(departmentMaster ? "update" : 'insert')
            
            }

    return (
        <div>
           <div class="col-lg-10" >
   <br/>
   
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
               <br/>
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
                        
                           <div  tabindex="0" class="multiselect-dropdown">
                              <div  class="disabled">
                                 <span  tabindex="-1" class="dropdown-btn">
                                   <span  class="selected-item-container"><span  class="selected-item"><span >admin s&nbsp;</span><a  >x</a></span></span>
                                    <span >
                                      <span  class="dropdown-multiselect__caret"></span>
                                    </span>
                                 </span>
                              </div>
                              
                           </div>
                     
                     </div>
                    
                     <div class="col-md-3"><input type="number" id="BaseSal" name="BaseSal" placeholder="Basic Salary" class="form-control "/></div>
                     <div class="col-md-3"><input type="date" id="effectivedate" name="effectivedate" placeholder="New Salary" class="form-control "/></div>
                     <div class="col-md-2"><input type="number" id="daysinmonth" name="daysinmonth" placeholder="Working Days In Month" class="form-control "/></div>
                     <div class="col-md-2"><input type="number" id="hoursinday" name="hoursinday" placeholder="Working Hours In Day" class="form-control "/></div>
                  </div>
                  <div class="row">
                     <div class="col-lg-12">
                       
                        <div><button class="button">Update</button></div>
                       
                        <div><button class="button">Cancel</button></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      
  <br/>
</div>
                </div>
                )
}

                export default addstaffsalaryform