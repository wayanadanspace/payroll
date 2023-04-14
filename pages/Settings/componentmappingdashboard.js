import React, { useState } from "react";
import Styles from "../../styles/employmentJobHistory.module.css";
import Link from "next/link";
function componentMappingDashboard(){
    // const [modalOpen, setModalOpen] = useState(false);

    return (
          <div>
            <br></br> <p id={Styles.title}>Component Mapping</p>{" "}
            <div className="container-fluid mt-4">
              <div className="row shadow-lg p-2 rounded-4 p-3 ">
                <div className="col-lg-1">
                  <b>
                    <p className="mt-2 text-center">
                        <>
                        </>
                      {/* <BiFilterAlt />  */}
                      Filter by:
                    </p>
                  </b>
                </div>
    
                <div className="col-lg-5">
                {/* <h6>Pay Date</h6> */}
                    {/* <ReactDatePicker   className=" mt-2 form-control"></ReactDatePicker> */}
                  <input
                    type="search"
                    className=" mt-2 form-control"
                    placeholder="Search "
                  />
                </div>
              </div>
              <div className="row mt-4">
              <div className="col-lg-10"></div>
              <div className="col-lg-2">


<Link href="/Settings/componentmapping"><button
  className="btn btn-primary btn-sm shadow-lg"
  id={Styles.addNew} > ADD new</button>
  {/* // onClick={() => setModalOpen(!modalOpen)}
> */}
  {/* <AiOutlinePlusCircle /> */}

</Link>

</div>
</div>
<br />
<div className="row">
              <table className={Styles.commonTable}>
                <thead>
                  <tr>
                    <th>PayrollComponentType</th>
                    <th>Code</th>
                    <th>Component Name</th>
                    <th>Enable</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                    <td>
                      <div className="row">
                        <div className="col-lg-4">
                          <button id={Styles.actionBtn}>Edit</button>
                        </div>

                        <div className="col-lg-4">
                          <button id={Styles.actionBtn}>Delete</button>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
              </div>
              </div>
              
    );
    
}
export default componentMappingDashboard;