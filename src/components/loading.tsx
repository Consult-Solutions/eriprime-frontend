import React from 'react'

function Loading() {
    return (<div className='bg-white w-full h-full flex items-center justify-center fixed top-0 left-0 z-50'>
        <div className="flex items-center space-x-2">
            <img className="w-10 h-12 sm:w-12 sm:h-14 lg:w-14 lg:h-16 bg-black" src="/images/logos/mini-logo.jpg" alt="Eriprime" />
            <span className='font-bold capitalize leading-10 text-2xl sm:text-3xl lg:text-4xl'>Eriprime</span>
        </div>
    </div>)
}

export default Loading