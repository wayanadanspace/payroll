import React, { useEffect, useState } from "react";
import { BiFilterAlt } from "react-icons/bi";
import Styles from '../../styles/DivisionMasterDashboard.module.css'
import { AiOutlinePlusCircle } from "react-icons/ai";
import table from "../../styles/table.module.css";
import Link from "next/link";
import Layout from "@/Components/layout";
import axios from "axios";
import Swal from "sweetalert2";
function DivisionMasterDashboard() {

  let [divisionData, setDivisionData] = useState([])
  let hostURL = process.env.NEXT_PUBLIC_API_HOST_URL;
  const getData = async () => {
    const res = await axios.get(hostURL + "Master/GetDivisionMaster") //getting division master data and displayed in a table [Shashank]
    console.log(res);
    setDivisionData(res.data)
  }

  const deleteDivision = (id) => {
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
        axios.get(hostURL + "Master/DeleteDivisionMaster?ID=" + id) // deleting data based on ID [Shashank]
        Swal.fire({
          icon: "success",
          titleText: "Deleted Successfully"
        })
      }
      getData();
    })

  }

  const getID = (data) => {
    sessionStorage.setItem("id", data.id);
  }

  const removeID = () => {
    sessionStorage.setItem("id", "")
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <Layout>
      <div>
        <br></br>
        <p id={Styles.title}>Division Master</p>
        <div className="container-fluid mt-4">
          <div className="row shadow-lg p-2 rounded-4 p-3 ">
            <div className="col-lg-1">
              <b>
                <p className="mt-2 text-center">
                  {" "}
                  <BiFilterAlt /> Filter by:{" "}
                </p>
              </b>
            </div>
            <div className="col-lg-5">
              <input
                type="search"
                className=" mt-2 form-control"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-8">
              <p id={Styles.p}>SHOWING {divisionData.length} RESULTS</p>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-2">
              <Link href="/Masters/divdivisionmaster"> <button
                onClick={removeID}
                className="btn btn-primary btn-sm  shadow-lg"
                id={Styles.addNew}
              > <AiOutlinePlusCircle />
                Add New
              </button></Link>
            </div>
          </div>

          <div className="container-fluid mt-4">
            <div className="row">
              <table className={table.commonTable}>
                <thead>
                  <tr>
                    <th>Short Name</th>
                    <th>Description</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    divisionData.map((data) => {
                      return (
                        <tr key={data.id}>
                          <td>{data.short}</td>
                          <td>{data.description}</td>
                          <td>
                            <Link href="/Masters/divdivisionmaster"><button className='btn btn-primary mx-3' onClick={getID.bind(this, data)}>Edit</button></Link>
                            <button className='btn btn-primary ' onClick={deleteDivision.bind(this, data.id)}>Delete</button>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DivisionMasterDashboard