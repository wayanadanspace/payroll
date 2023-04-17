import Layout from "@/Components/layout";
import Link from "next/link";
import { useEffect, useRef, useState } from 'react';
import axios from "axios";


export default function locatordashboard() {


    const hostURL = process.env.NEXT_PUBLIC_API_HOST_URL;
    const [locator, setlocator] = useState([]);
    const [Approvedlocatorrequests, setApprovedlocatorrequests] = useState([]);
    const [RejectedlocatorRequests, setRejectedlocatorRequests] = useState([]);



    const getlocator = async () => {
        let res = await axios.get(hostURL + "Payroll/GetLocatorRequests");
        setlocator(res.data);
        res = await axios.get(hostURL + "Payroll/GetApprovedLocatorRequest");
        setApprovedlocatorrequests(res.data);
        res = await axios.get(hostURL + "Payroll/GetRejectedLocatorRequest");
        setRejectedlocatorRequests(res.data);
    }

    useEffect(() => {
        getlocator()
    }, [1])


    const clearData = () => {
        sessionStorage.setItem("id", "");
    }


    const tabsData = [
        {
            label: 'Pending',
            content:
                <div className="container-fluid mt-4">
                    <div className="row">
                        <table >
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Destination</th>
                                    <th>TimeOfDeparture</th>
                                    <th>Time of Return	</th>
                                    <th>Purpose</th>
                                    <th>No Of Hours</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {locator.map((data, index) => {
                                    return (
                                        <tr className="text-dark" key={index}>
                                            <td>{data.date}</td>
                                            <td>{data.destination}</td>
                                            <td>{data.timeOfDeparture}</td>
                                            <td>{data.timeOfReturn}</td>
                                            <td>{data.purpose}</td>
                                            <td>{data.hourDiff}</td>
                                            <td>{data.status}</td>
                                            <td><button className="btn btn-primary">Cancel</button></td>
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
                        <table >
                            <thead>
                            <tr>
                                    <th>Date</th>
                                    <th>Destination</th>
                                    <th>TimeOfDeparture</th>
                                    <th>Time of Return	</th>
                                    <th>Purpose</th>
                                    <th>No Of Hours</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Approvedlocatorrequests.map((data, index) => {
                                    return (
                                        <tr className="text-dark" key={index}>
                                            <td>{data.date}</td>
                                            <td>{data.destination}</td>
                                            <td>{data.timeOfDeparture}</td>
                                            <td>{data.timeOfReturn}</td>
                                            <td>{data.purpose}</td>
                                            <td>{data.hourDiff}</td>
                                            <td>{data.status}</td>
                                            <td><button className="btn btn-primary">Cancel</button></td>
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
                        <table >
                            <thead>
                            <tr>
                                    <th>Date</th>
                                    <th>Destination</th>
                                    <th>TimeOfDeparture</th>
                                    <th>Time of Return	</th>
                                    <th>Purpose</th>
                                    <th>No Of Hours</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {RejectedlocatorRequests.map((data, index) => {
                                    return (
                                        <tr className="text-dark" key={index}>
                                            <td>{data.date}</td>
                                            <td>{data.destination}</td>
                                            <td>{data.timeOfDeparture}</td>
                                            <td>{data.timeOfReturn}</td>
                                            <td>{data.purpose}</td>
                                            <td>{data.hourDiff}</td>
                                            <td>{data.status}</td>
                                            <td><button className="btn btn-primary">Cancel</button></td>
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
                    <Link className='Heading active' href="/Requests/myteamattendence">Company OBASIS Details</Link>
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
                                <button key={idx} ref={(el) => (tabsRef.current[idx] = el)} className="btn btn-defalt" onClick={() => setActiveTabIndex(idx)} >
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>
                </div>
                <div className="col-lg-4">
                    <Link href="/Requests/locatorrequestsform"><button onClick={clearData.bind(this)} className="btn btn-primary" >New Requests </button></Link>

                </div>
                <div className="py-4">
                    {tabsData[activeTabIndex].content}
                </div>
            </div>


        </Layout >


    );
}