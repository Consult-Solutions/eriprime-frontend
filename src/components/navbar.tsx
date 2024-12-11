import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.tsx';
import { useNavigate } from 'react-router-dom';
import { useGlobalAlert } from '../contexts/AlertContext.tsx';
import AlertMessage from './alerts/alert-message.tsx';

const NavBar: React.FC = () => {
    const { user, isAuthenticated, setUser } = useAuth();
    const navigate = useNavigate();

    const { setGlobalAlert } = useGlobalAlert();
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState<'success' | 'error'>('success');

    const handleLogout = () => {
        try {
            axios.post('/auth/logout').then((response) => {
                localStorage.removeItem('accessToken');
                setUser(null);
                setGlobalAlert("You have been logged out successfully", 'success');
                navigate('/');
            }).catch((error) => {
                setAlertMessage('An error occurred. '+error.response.data.message);
                setAlertType('error');
            });
        } catch (error) {
            setAlertMessage('An error occurred. Please try again later.');
            setAlertType('error');
        }
    };

    return (
        <header className="pb-6 bg-white lg:pb-0 border-b border-gray-200">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between h-16 lg:h-20">
                    <div className="flex-shrink-0">
                        <Link to="/" title="" className="flex">
                            <img className="w-auto h-8 lg:h-10" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="" />
                        </Link>
                    </div>

                    <button type="button" className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                        <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                        </svg>
                        <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                        <Link to="/" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 flex items-cente">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>

                            </span>
                            <span className='ml-2'>
                                Home
                            </span>
                        </Link>
                        <Link to="/listings" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 flex items-cente">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>

                            </span>
                            <span className='ml-2'>Listings</span>
                        </Link>
                        <Link to="/about-us" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 flex items-cente">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                </svg>
                            </span>
                            <span className='ml-2'>About us</span>
                        </Link>
                        <Link to="/contact-us" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 flex items-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                            </span>
                            <span className='ml-2'>Contact Us</span>
                        </Link>
                        {isAuthenticated ? (<></>) : (<>
                            <Link to="/login" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 flex items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                                    </svg>
                                </span>
                                <span className='ml-2'>Login</span>
                            </Link>
                        </>)}
                    </div>

                    {isAuthenticated ? (<></>) : (<>
                        <Link to="/signup" className="inline-flex h-12 w-full items-center justify-center ml-10 rounded-full bg-[#03783d] px-6 font-medium tracking-wide text-white shadow-none outline-none transition duration-200 hover:bg-[#03783d] focus:ring sm:w-auto"> Start a free Trial </Link>
                    </> )}

                    {isAuthenticated ? (
                        <>
                            <button onClick={handleLogout} className="text-base font-medium mx-5 text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 flex items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                                    </svg>
                                </span>
                                <span className='ml-2'>Logout</span>
                            </button>
                            <Link to="/dashboard" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 flex items-center">
                                <div className="flex items-center gap-4">
                                    <img className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1733682631362-5936ee967df3?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                    <div className="font-medium dark:text-white">
                                        <div className='text-slate-700 capitalize'>{user.name}</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">{user.email}</div>
                                    </div>
                                </div>
                            </Link>
                        </>
                    ) : (<></>)}
                </nav>

                <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
                    <div className="flow-root">
                        <div className="flex flex-col px-6 -my-2 space-y-1">
                            <Link to="/" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>

                                </span>
                                <span className='ml-2'>
                                    Home
                                </span> 
                            </Link>
                            <Link to="/listings" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>

                                </span>
                                <span className='ml-2'>Listings</span> 
                            </Link>
                            <Link to="/about-us" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                    </svg>
                                </span>
                                <span className='ml-2'>About us</span> 
                            </Link>
                            <Link to="/contact-us" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                    </svg>
                                </span>
                                <span className='ml-2'>Contact Us</span> 
                            </Link>
                            <Link to="/login" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                                    </svg>
                                </span>
                                <span className='ml-2'>Login</span> 
                            </Link>
                        </div>
                    </div>

                    <div className="px-6 mt-6">
                        <Link to="/signup" className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#03783d] px-6 font-medium tracking-wide text-white shadow-md outline-none transition duration-200 hover:bg-[#03783d] focus:ring sm:w-auto"> Start a free Trial </Link>
                    </div>
                </nav>
            </div>

            {/* Alert Message */}
            <AlertMessage message={alertMessage} type={alertType} />
        </header>
    );
};

export default NavBar;
