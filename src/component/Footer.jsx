import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
function Footer() {
    return (
        <div className='w-full sm:m-2 m-0 bg-red-500 flex  justify-center p-10 overflow-hidden text-white'>
            <div className='w-[70vw]  flex sm:flex-row flex-col justify-between gap-4'>
                <div className='flex items-center gap-2'>
                    <span className='text-xl sm:text-3xl'><FaPhoneAlt /></span>
                    <span>Toll Free 1800 200 1234</span>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='text-xl sm:text-3xl'><FaFacebook /></span>
                    <span> <a href="www.facebook.com/cripumps" target='_blank'>www.facebook.com/cripumps</a></span>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='text-xl sm:text-3xl'><FaGlobe /></span>
                    <span> <a href="www.crigroups.com" target='_blank'>www.crigroups.com</a></span>
                </div>
            </div>
        </div>
    )
}

export default Footer