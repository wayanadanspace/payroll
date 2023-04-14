import Styles from "../../styles/employmentJobHistory.module.css";
import Link from "next/link";
import Layout from "@/Components/layout";
import { useEffect, useState } from 'react';
import axios from "axios";
import Swal from "sweetalert2";
export default function componentMappingDashboard() {


  const hostURL = process.env.NEXT_PUBLIC_API_HOST_URL;


  const [componentMapping, setcomponentMapping] = useState([]);

  const getcomponentMapping = async () => {
    let res = await axios.get(hostURL + "Payroll/GetComponentMapping");
    setcomponentMapping(res.data);
  }

  useEffect(() => {
    getcomponentMapping()
  }, [1])


  const getData = (data) => {
    sessionStorage.setItem("id", data.id);
  }

  const clearData = () => {
    sessionStorage.setItem("id", "");
  }


  const handleDelete = async (id) => {
    try {
      let res = await axios.get(hostURL + `Payroll/DeleteComponentMapping?id=${id}`);
      console.log(res.data);
      Swal.fire('Data deleted successfully')
      getcomponentMapping();
    } catch (error) {
      console.error(error);
      Swal.fire('failed to  delete data')
    }
  };

  return (
    <Layout>
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


              <Link href="/Settings/componentmapping"><button className="btn btn-primary btn-sm shadow-lg"
                id={Styles.addNew} onClick={clearData.bind(this)} > ADD new</button>
                {/* // onClick={() => setModalOpen(!modalOpen)}
>   */}
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
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>

                {componentMapping.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{data.payrollComponentType}</td>
                      <td>{data.code}</td>
                      <td>{data.componentName}</td>
                      <td>
                        <Link href="/Settings/componentmapping">
                          <button className={Styles.actionButton} onClick={getData.bind(this, data)} >Edit</button>
                        </Link>
                        &nbsp;

                        <button className={Styles.actionButton} onClick={() => handleDelete(data.id)}>Delete</button>
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
