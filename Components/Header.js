import React from 'react'

export default function Header() {
    return (
        <div className='flex flex-row justify-between bg-gray-200 p-2 '>

            <div className=''>LOGO</div>

            <div className='flex flex-row py-5'>
                <div className='mx-10'>h1</div>
                <div className='mx-10'>h2</div>
                <div className='mx-10'>h3</div>
                <button className='mx-2'>this button</button>
            </div>
        </div>
    )
}
