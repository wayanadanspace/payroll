import React from 'react'
import Layout from '@/Components/layout'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Styles from "../../styles/Requests/locatordashboard.module.css";
import { BsCheckCircleFill } from 'react-icons/bs'
import { RxCrossCircled } from 'react-icons/rx'
import Swal from 'sweetalert2';


export default function myteamlocatordetails() {

    const hostURL = process.env.NEXT_PUBLIC_API_HOST_URL;
    const [Stafflocator, setStafflocator] = useState([]);
    const [ApprovedStafflocatorrequests, setApprovedStafflocatorrequests] = useState([]);
    const [RejectedStafflocatorRequests, setRejectedStafflocatorRequests] = useState([]);

    const getStafflocator = async () => {
        let res = await axios.get(hostURL + "Payroll/GetLocatorRequests");
        setStafflocator(res.data);
        res = await axios.get(hostURL + "Payroll/GetApprovedStaffLocatorRequests");
        setApprovedStafflocatorrequests(res.data);
        res = await axios.get(hostURL + "Payroll/GetRejectStaffLocatorRequests");
        setRejectedStafflocatorRequests(res.data);
    }

    useEffect(() => {
        getStafflocator()
    }, [1])

    const approvRequest = async (id) => {
        debugger
        await axios.get(hostURL + "Payroll/UpdateLocatorStatus" + id)
        Swal.fire(" Locator Details Approved")
        getStafflocator()
    }
    const tabsData = [
        // Hr login pending tab
        // {
        //     label: 'Pending',
        //     content:
        //         <div className="container-fluid mt-4">
        //             <div className="row">
        //                 <table className='table  table-striped mt-3 text-center' id={Styles.table} >
        //                     <thead>
        //                         <tr id={Styles.tr}>
        //                             <th>Date</th>
        //                             <th>Destination</th>
        //                             <th>TimeOfDeparture</th>
        //                             <th>Time of Return	</th>
        //                             <th>Purpose</th>
        //                             <th>No Of Hours</th>
        //                             <th>Status</th>
        //                             <th>Action</th>
        //                         </tr>
        //                     </thead>
        //                     <tbody>
        //                         {Stafflocator.map((data, index) => {
        //                             return (
        //                                 <tr className="text-dark" key={index}>
        //                                     <td>{data.date}</td>
        //                                     <td>{data.destination}</td>
        //                                     <td>{data.timeOfDeparture}</td>
        //                                     <td>{data.timeOfReturn}</td>
        //                                     <td>{data.purpose}</td>
        //                                     <td>{data.hourDiff}</td>
        //                                     <td>{data.status}</td>
        //                                     <td><button className="btn btn-primary">Cancel</button></td>
        //                                 </tr>
        //                             )
        //                         })
        //                         }
        //                     </tbody>
        //                 </table>
        //             </div>
        //         </div>,
        // },
        // Manager login tab
        {
            label: 'Pending',
            content:
                <div className="container-fluid mt-4">
                    <div className="row">
                        <table className='table  table-striped mt-3 text-center' id={Styles.table} >
                            <thead>
                                <tr id={Styles.tr}>
                                    <th>Select ALL <input type="checkbox" /></th>
                                    <th>Date</th>
                                    <th>Destination</th>
                                    <th>TimeOfDeparture</th>
                                    <th>Time of Return	</th>
                                    <th>Purpose</th>
                                    <th>No Of Hours</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Stafflocator.map((data, index) => {
                                    return (
                                        <tr className="text-dark" key={index}>
                                            <td><input type="checkbox" /></td>
                                            <td>{data.date}</td>
                                            <td>{data.destination}</td>
                                            <td>{data.timeOfDeparture}</td>
                                            <td>{data.timeOfReturn}</td>
                                            <td>{data.purpose}</td>
                                            <td>{data.hourDiff}</td>
                                            <td> <span onClick={() => approvRequest(data.id)}> <BsCheckCircleFill size={25} />
                                            </span> <RxCrossCircled size={30} /></td>

                                        </tr>
                                    )
                                })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>,
        },
        {
            label: 'APPROVED',
            content:
                <div className="container-fluid mt-4">
                    <div className="row">
                        <table className='table  table-striped mt-3 text-center' id={Styles.table}>
                            <thead>
                                <tr id={Styles.tr}>
                                    <th>Date</th>
                                    <th>Destination</th>
                                    <th>TimeOfDeparture</th>
                                    <th>Time of Return	</th>
                                    <th>Purpose</th>
                                    <th>No Of Hours</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ApprovedStafflocatorrequests.map((data, index) => {
                                    return (
                                        <tr className="text-dark" key={index}>
                                            <td>{data.date}</td>
                                            <td>{data.destination}</td>
                                            <td>{data.timeOfDeparture}</td>
                                            <td>{data.timeOfReturn}</td>
                                            <td>{data.purpose}</td>
                                            <td>{data.hourDiff}</td>
                                            <td>{data.statusID}</td>
                                        </tr>
                                    )
                                })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>,
        },
        {
            label: 'Rejected',
            content:
                <div className="container-fluid mt-4">
                    <div className="row">
                        <table className='table  table-striped mt-3 text-center' id={Styles.table}>
                            <thead>
                                <tr id={Styles.tr}>
                                    <th>Date</th>
                                    <th>Destination</th>
                                    <th>TimeOfDeparture</th>
                                    <th>Time of Return	</th>
                                    <th>Purpose</th>
                                    <th>No Of Hours</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {RejectedStafflocatorRequests.map((data, index) => {
                                    return (
                                        <tr className="text-dark" key={index}>
                                            <td>{data.date}</td>
                                            <td>{data.destination}</td>
                                            <td>{data.timeOfDeparture}</td>
                                            <td>{data.timeOfReturn}</td>
                                            <td>{data.purpose}</td>
                                            <td>{data.hourDiff}</td>
                                            <td>{data.statusID}</td>
                                        </tr>
                                    )
                                })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>,
        }
    ]
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const tabsRef = useRef([]);

    useEffect(() => {
        function setTabPosition() {
            const currentTab = tabsRef.current[activeTabIndex];
        }

        setTabPosition();
        window.addEventListener('resize', setTabPosition);

        return () => window.removeEventListener('resize', setTabPosition);
    }, [activeTabIndex]);

    return (
        <Layout>

            <div className='row mt-3'>
                <div className='col-lg-3 text-end'>
                    <Link className='Heading active' href="/Requests/locatordashboard">My OBASIS Details</Link>
                </div>
                <div className='col-lg-3'>
                    <Link className='Heading active' href="/Requests/myteamlocatordetails">Company OBASIS Details</Link>
                </div>
            </div> <br />
            <div className='card p-3 border-0 shadow-lg rounded-3 mt-4'>
                <div className='row'>
                    <div className='col-lg-1'>
                        <p>Filter By</p>
                    </div>

                    <div className='col-lg-3'>
                        <p>From Date</p>
                        <input type="date" className='form-control' />
                    </div>

                    <div className='col-lg-3'>
                        <p>To Date</p>
                        <input type="date" className='form-control' />
                    </div>

                    <div className='col-lg-4'><br /><p></p>
                        <input type="text" className='form-control' placeholder="Search For date ,or Status" />
                    </div>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-lg-8">
                    <div className="flex ">
                        {tabsData.map((tab, idx) => {
                            return (
                                <button key={idx} ref={(el) => (tabsRef.current[idx] = el)} className="btn btn-primary" style={{ marginLeft: "3px" }} onClick={() => setActiveTabIndex(idx)} >
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="py-4">
                    {tabsData[activeTabIndex].content}
                </div>
            </div>


        </Layout>
    )
}

