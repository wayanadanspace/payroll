import React from 'react'
import Image from 'next/image'
import Digilogo from '../public/DigiLogo.png';
import Notification from '../public/notification.png'
import HeaderStyles from './header.module.css'


const Header = ({ makelogout }) => {
    return (
        <div className={'row '} style={{ background: "#6610f2" }}>
            <div className='col-lg-2 m-2'>
                <Image className='img-fluid ' src={Digilogo} alt='Digi Office' width={145} height={53} />
            </div>

            <div className='col-lg-1 mt-3 text-white'>
                <h4> Clock</h4>
            </div>

            <div className='col-lg-4'></div>

            <div className='col-lg-2 text-end'>
                <Image className='img-fluid mt-3' src={Notification} alt="notificatons" width={35} height={35} />
            </div>

            <div className='col-lg-2 mt-3 text-end text-white'>
                <h4 onClick={makelogout}>logout</h4>
            </div>

        </div>
    )
}

export default Header