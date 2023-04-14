import React, { useState } from "react";
import { BiFilterAlt } from "react-icons/bi";
import Styles from "../styles/PositionMasterDash.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import table from "../styles/table.module.css";
import Link from "next/link";
function SupportTicketDashboard() {
  return (
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
              id={Styles.addNew}
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
              <tr>
                <td>Mar 19,2022</td>
                <td>10:10</td>
                <td>NA</td>
                <td>NA</td>
                <td>NA</td>
                <td>NA</td>
                <td>NA</td>
                <td>NA</td>
              </tr>
            </tbody>
          </table>
        </div>
        
      </div>
    </div>
  );
}
export default SupportTicketDashboard;
