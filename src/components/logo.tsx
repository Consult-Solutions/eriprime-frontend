import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
    return (<>
        <Link to="/" title="" className="flex items-center space-x-2">
            <img className="w-10 h-10 lg:h-12 bg-black" src="/images/logos/mini-logo.jpg" alt="Eriprime" />
            <span className='font-bold capitalize leading-10 text-xl'>Eriprime</span>
        </Link>
    </>)
}

export default Logo