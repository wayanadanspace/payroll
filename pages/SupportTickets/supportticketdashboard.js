import React, { useState,useEffect } from "react";
import { BiFilterAlt } from "react-icons/bi";
// import Styles from "../styles/PositionMasterDash.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import table from "/styles/table.module.css";
import Link from "next/link";
import Styles from "/styles/SupportTicketDashboard.module.css"
import Layout from "@/Components/layout";
import axios from "axios";

function SupportTicketDashboard() {

  const hostURL = process.env.NEXT_PUBLIC_API_HOST_URL;
  const [SupportTicketDashboard, setSupportTicketDashboard] = useState([]);

   async function getSupportTicketDashboard(){
    // let res = await axios.get(hostURL + "");
    // setSupportTicketDashboard(res.data);

   }
   useEffect(()=>{
    getSupportTicketDashboard()
   },[1])

  //  const getData = (data) => {
  //   sessionStorage.setItem("id", data.id);
  // }

  // const clearData = () => {
  //   sessionStorage.setItem("id", "");
  // }

  function getData(data){
    sessionStorage.setItem("id", data.id);
  }

  function ClearData(){
    sessionStorage.setItem("id", " ")
  }

   async function getSupportTicketDashboardDelete(id){
  
    // let res = await axios.get(hostURL + "" +id);
    // getSupportTicketDashboard();


  }


  return (
    <Layout>
    <div>
      <br></br>
      <p id={Styles.title}>Support Tickets</p>
      <div className="container-fluid mt-4">
        <div className="row mt-4">
          <div className="col-lg-8">
            <p id={Styles.p}>SHOWING 1 RESULTS</p>
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-2">
            <Link href="/SupportTickets/supporttickets"><button
              className="btn btn-primary btn-sm  shadow-lg"
              id={Styles.addNew} onClick={ClearData.bind(this)}
            >
              {" "}
              <AiOutlinePlusCircle />
              Add
            </button></Link>
          </div>
        </div>
        <br></br>
        <div className="row">
          <table className={table.commonTable}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Application Issues</th>
                <th>Related Attachment</th>
                <th>Comments</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
             
                {
                  SupportTicketDashboard.map((data,index)=>{
                    return(
                      <tr key={index}>
                      <td>{data.date}</td>
                      <td>{data.time}</td>
                      <td>{data.applicationIssues}</td>
                      <td>{data.relatedAttachment}</td>
                      <td>{data.comments}</td>
                      <td>{data.priority}</td>
                      <td>{data.status}</td>
                      <td>
                        <Link href="/SupportTickets/supporttickets">
                          <button className="btn btn-primary" onClick={getData.bind(this,data)}>Edit</button>
                        </Link>
                        &nbsp;
                        <button className="btn btn-primary" onClick={getSupportTicketDashboardDelete(data.id)}>Delete</button>
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
    </Layout>
  );
}
export default SupportTicketDashboard;
