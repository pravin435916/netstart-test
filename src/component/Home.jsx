import React from 'react'
import trophy from '/assets/1.png'
import main from '/assets/2.png'
import logo from '/assets/logo.png'
function Home() {
    // bg-[#FCF8C6]
    return (
        <div className='w-full flex sm:flex-row flex-col-reverse justify-center items-center h-screen gap-4 pt-4 sm:gap-8 mt-6 sm:mt-0'>
            <div className='w-1/3 h-full border-lg flex justify-center items-center'>
                <img className='w-96 drop-shadow-lg' src={trophy} alt="" />
            </div>
            <div className='w-[85vw] md:w-2/3 flex flex-col gap-2 sm:gap-0'>
                <img className='w-72 sm:ml-4 h-auto mt-4 sm:mt-0' src={logo} alt="" />
                <span className='font-bold text-sm'> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</span>
                <ul className='ml-4 text-sm list-disc'>
                    <li> C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                    <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
                </ul>
                <img className='w-[90vw] sm:w-[56vw] my-1 ml-0 sm:ml-4' src={main} alt="" />
                <span className='text-sm'>
                    Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
                </span>
            </div>
        </div>
    )
}

export default Home