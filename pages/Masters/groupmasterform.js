import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Link from 'next/link';
import axios from 'axios';
import Layout from '@/Components/layout';
import Styles from '../../styles/groupMasterForm.module.css'
import Swal from 'sweetalert2'
function GroupMasterForm() {
    const [actionType, setActionType] = useState("insert");
    const { register, handleSubmit, reset, formState } = useForm();
    const { errors } = formState;
    let ID 
    let hostURL = process.env.NEXT_PUBLIC_API_HOST_URL;
    
    async function onSubmit(data) {
        if (actionType == "insert") {
            await axios.post(hostURL + "Master/InsertGroupMaster", data);   //naveen.th@amazeinc.in, Insert API for group master, to add new data
            Swal.fire('Added Successfully')
            location.href = "/Masters/groupmaster";
        }
        else {
            await axios.post(hostURL + "Master/UpdateGroupMaster", data);  //naveen.th@amazeinc.in, Update API for group master, to update existing data
            Swal.fire('Updated Successfully')
            sessionStorage.removeItem("groupMasterID");
            location.href = "/Masters/groupmaster";
        }
      }
      useEffect(() => {
        clearForm();
        ID = sessionStorage.getItem("groupMasterID");
            if(ID){
              getGroupMasterByID();
            }
      }, []);

      const getGroupMasterByID = async (id) => {
        let res = await axios.get(hostURL + "Master/GetGroupMasterByID?ID=" + ID);  //naveen.th@amazeinc.in, Get by ID API for group master, to fetch data
        clearForm(res.data[0]);
    }

    function clearForm(existingData = null) {
        let etty = {
            "ID": existingData ? existingData.id : "",  
            "Short": existingData ? existingData.short : "",
            "Description": existingData ? existingData.description : "",
        }
        reset(etty);
        setActionType(existingData ? "update" : 'insert');
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '60%'
        },
        errorMsg: {
            fontSize: '12px',
            fontWeight: '500',
            color: 'red'
        },
        inputLabel: {
            fontSize: '16px'
        }
      }; 

    return (
      <Layout>
        <div>
        <br></br>
        <p id={Styles.title}>Group Master</p>
        <div className="container-fluid mt-4">
          <div className="row shadow-lg p-2 rounded-4 p-3 ">
            <div className="row ">
              <div className="col-lg-4" >
                <label id={Styles.label}>Name<span id={Styles.asterisk}>* </span></label>
              </div>
              <div className="col-lg-4" >
                <label id={Styles.label}>Description<span id={Styles.asterisk}>* </span></label>
              </div>
            </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row ">
                  <div className="col-lg-4">
                    <input
                      name="Short"
                      className="form-control"
                      type="text"
                      {...register("Short", { required: true })}
                      placeholder="Short Name"
                    />
                    <div>
                      {errors.Short && (
                        <span style={customStyles.errorMsg}>
                          Please enter name
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <textarea
                      name="Description"
                      className="form-control"
                      {...register("Description", { required: true })}
                      placeholder="Description"
                    />
                    <div>
                      {errors.Description && (
                        <span style={customStyles.errorMsg}>
                          Please enter description
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <br></br>
                <div className="row ">
                  <div className="col-lg-6"></div>
                  <div className="col-lg-6">
                    <Link href='/Masters/groupmaster'><button
                      type="button"
                      className="btn common-edit"
                      id={Styles.btn}
                    >
                      Close
                    </button></Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {actionType == "insert" && (
                      <button type="submit" className="btn" id={Styles.btn}>
                        Save
                      </button>
                    )}
                    {actionType == "update" && (
                      <button type="submit" className="btn" id={Styles.btn}>
                        Update
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
       
      </Layout>
    );
}

export default GroupMasterForm