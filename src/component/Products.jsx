import React from 'react'
import product from '/assets/3.png'
function Products() {
    return (
        <div className='w-full flex flex-col py-4 justify-center items-center'>
            <span className='text-center mx-2 text-sm font-semibold' >INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</span>
            <img className='w-[95vw] sm:w-[80vw] my-4' src={product} alt="" />
            <span className='w-full text-center text-sm font-semibold'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </span>
            <span className='w-[90vw] border-t-2 border-red-500 mt-4' ></span>
            <div className='flex flex-col w-[80vw] justify-center items-center gap-2 text-sm font-semibold my-4'>
                <span className='font-bold'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</span>
                <span className='text-center'>CHEMICALS <span className='text-red-500'>|</span> PROCESS POWER WATER <span className='text-red-500'>|</span> WASTE WATER OILS <span className='text-red-500'>|</span> GAS PHARMA SUGARS <span className='text-red-500'>|</span> DISTILLERIES PAPER <span className='text-red-500'>|</span> PULP MARINE <span className='text-red-500'>|</span> DEFENCE METAL <span className='text-red-500'>|</span> MINING FOOD <span className='text-red-500'>|</span> BEVERAGE PETROCHEMICAL <span className='text-red-500'>|</span> REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE <span className='text-red-500'>|</span> RESIDENTIAL</span>
            </div>
        </div>
    )
}

export default Products