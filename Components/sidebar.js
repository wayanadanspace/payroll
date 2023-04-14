import Link from 'next/link'
import React, { useState } from 'react'
import SidebarStyles from './layout.module.css'

const  Sidebar=({ children }) => {
    let [displayAttendence, toggleAttendence] = useState(false)
    let [displayLoans, toggleLoans] = useState(false)
    let [displayPayroll, togglePayRoll] = useState(false)
    let [displaySettings, toggleSettings] = useState(false)
    let [displayConfiguration, toggleConfiguration] = useState(false)
    let [displayMasters, toggleMasters] = useState(false)

    const toggleAttendenceMenu = () => {
        toggleAttendence(!displayAttendence);
    };

    const toggleLoansMenu = () => {
        toggleLoans(!displayLoans);
    };

    const togglePayRollMenu = () => {
        togglePayRoll(!displayPayroll);
    };

    const toggleSettingsMenu = () => {
        toggleSettings(!displaySettings);
    };

    const toggleConfigurationMenu = () => {
        toggleConfiguration(!displayConfiguration);
    };
    const toggleMastersMenu = () => {
        toggleMasters(!displayMasters);
    };
    return (
        <div className='row' style={{ height: "90vh", overflowY: "auto"}}>
            <div className='col-lg-12'>
                <Link href="/Home/dashboard" >
                    <button className={SidebarStyles.sidemenu}>Home</button>
                </Link>

                <Link href="">
                    <button className={SidebarStyles.sidemenu}>Staff</button>
                </Link>

                <button className={SidebarStyles.sidemenu} onClick={toggleAttendenceMenu}>Attendence</button>
                {

                    displayAttendence && (
                        < div >
                            <Link href="/Attendence/attendencedetails">
                                <button className={SidebarStyles.sidesubmenu}>Attendence Details</button>
                            </Link>

                            <Link href="/Attendence/myteamovertimedetails">
                                <button className={SidebarStyles.sidesubmenu}>Overtime units upload</button>
                            </Link>
                        </div>
                    )
                }

                <button className={SidebarStyles.sidemenu} onClick={toggleLoansMenu}>Loans</button>
                {

                    displayLoans && (
                        < div >
                            <Link href="/Loans/teamloans">
                                <button className={SidebarStyles.sidesubmenu}>Loans Upload</button>
                            </Link>
                        </div>
                    )
                }

                <button className={SidebarStyles.sidemenu} onClick={togglePayRollMenu}>payroll</button>
                {

                    displayPayroll && (
                        < div >
                            <Link href="">
                                <button className={SidebarStyles.sidesubmenu}>Payroll ytd upload</button>
                            </Link>

                            <Link href="">
                                <button className={SidebarStyles.sidesubmenu}>initial payroll</button>
                            </Link>

                            <Link href="">
                                <button className={SidebarStyles.sidesubmenu}>initial payroll details</button>
                            </Link>

                            <Link href="">
                                <button className={SidebarStyles.sidesubmenu}>run final payroll</button>
                            </Link>

                            <Link href="">
                                <button className={SidebarStyles.sidesubmenu}>final payroll approval</button>
                            </Link>

                            <Link href="">
                                <button className={SidebarStyles.sidesubmenu}>final payrool details</button>
                            </Link>

                            <Link href="">
                                <button className={SidebarStyles.sidesubmenu}>bank advice list</button>
                            </Link>

                            <Link href="">
                                <button className={SidebarStyles.sidesubmenu}>staff salary</button>
                            </Link>

                            <Link href="">
                                <button className={SidebarStyles.sidesubmenu}>payroll component bulk upload</button>
                            </Link>
                        </div>
                    )
                }


                <button className={SidebarStyles.sidemenu} onClick={toggleSettingsMenu}>Settings</button>
                {

                    displaySettings && (
                        < div >
                            <Link href="">
                                <button className={SidebarStyles.sidesubmenu}>component master</button>
                            </Link>

                            <Link href="">
                                <button className={SidebarStyles.sidesubmenu}>component mapping</button>
                            </Link>

                            <Link href="">
                                <button className={SidebarStyles.sidesubmenu}>bir2316 mapping</button>
                            </Link>

                            <Link href="">
                                <button className={SidebarStyles.sidesubmenu}>payperiod setting</button>
                            </Link>
                        </div>
                    )
                }


                <button className={SidebarStyles.sidemenu} onClick={toggleConfigurationMenu}>Configuration</button>
                {

                    displayConfiguration && (
                        < div >
                            <Link href="">
                                <button className={SidebarStyles.sidesubmenu}>company</button>
                            </Link>

                            <Link href="/Configuration/annualtax">
                                <button className={SidebarStyles.sidesubmenu}>annual tax</button>
                            </Link>

                            <Link href="/Configuration/semitax">
                                <button className={SidebarStyles.sidesubmenu}>semi monthly tax</button>
                            </Link>

                            <Link href="/Configuration/sss">
                                <button className={SidebarStyles.sidesubmenu}>sss</button>
                            </Link>

                            <Link href="/Configuration/philhealth">
                                <button className={SidebarStyles.sidesubmenu}>philhealth</button>
                            </Link>

                            <Link href="/Configuration/mpf">
                                <button className={SidebarStyles.sidesubmenu}>mpf</button>
                            </Link>

                            <Link href="/Configuration/pagibig">
                                <button className={SidebarStyles.sidesubmenu}>pagibig</button>
                            </Link>

                            <Link href="">
                                <button className={SidebarStyles.sidesubmenu}>daily rate</button>
                            </Link>

                           
                        </div>

                    )
                }

                <button className={SidebarStyles.sidemenu} onClick={toggleMastersMenu}>masters</button>
                {

                    displayMasters && (
                        < div >
                            <Link href="/Masters/leavetypedashboard">
                                <button className={SidebarStyles.sidesubmenu}>leave type</button>
                            </Link>

                            <Link href="/Masters/loanmasterdashboard">
                                <button className={SidebarStyles.sidesubmenu}>loan type</button>
                            </Link>

                            <Link href="/Masters/shiftmaster">
                                <button className={SidebarStyles.sidesubmenu}>shift master</button>
                            </Link>

                            <Link href="/Masters/countrymasterdashboard/">
                                <button className={SidebarStyles.sidesubmenu}>country master</button>
                            </Link>

                            <Link href="/Masters/statemasterdashboard/">
                                <button className={SidebarStyles.sidesubmenu}>province master</button>
                            </Link>

                            <Link href="/Masters/citymasterdashboard/">
                                <button className={SidebarStyles.sidesubmenu}>City master</button>
                            </Link>

                            <Link href="/Masters/barangaymasterdashboard/">
                                <button className={SidebarStyles.sidesubmenu}>barangay master</button>
                            </Link>

                            <Link href="/Masters/departmentmasterdashboard/">
                                <button className={SidebarStyles.sidesubmenu}>department master</button>
                            </Link>

                            <Link href="/Masters/divisionmasterdashboard/">
                                <button className={SidebarStyles.sidesubmenu}>division master</button>
                            </Link>

                            <Link href="/Masters/worklocationmasterdashboard/">
                                <button className={SidebarStyles.sidesubmenu}>worklocation master</button>
                            </Link>

                            <Link href="/Masters/brandmasterdashboard">
                                <button className={SidebarStyles.sidesubmenu}>band master</button>
                            </Link>

                            <Link href="/Masters/subsidarymasterdashboard">
                                <button className={SidebarStyles.sidesubmenu}>subsidary master</button>
                            </Link>

                            <Link href="/Masters/otratedashboard">
                                <button className={SidebarStyles.sidesubmenu}>ot master</button>
                            </Link>

                            <Link href="/Masters/positionmasterdashboard">
                                <button className={SidebarStyles.sidesubmenu}>position master</button>
                            </Link>

                            <Link href="/Masters/leveltypedashboard">
                                <button className={SidebarStyles.sidesubmenu}>job level type</button>
                            </Link>

                            <Link href="/Masters/groupmaster">
                                <button className={SidebarStyles.sidesubmenu}>group master</button>
                            </Link>

                            <Link href="/Masters/subsectionmaster">
                                <button className={SidebarStyles.sidesubmenu}>sub-section master</button>
                            </Link>
                        </div>
                    )
                }

                <Link href="">
                    <button className={SidebarStyles.sidemenu}>help</button>
                </Link>

                <Link href="">
                    <button className={SidebarStyles.sidemenu}>support tickets</button>
                </Link>
            </div>
        </div >
    )
}

export default Sidebar