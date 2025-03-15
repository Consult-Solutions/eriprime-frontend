import React from 'react';
import { Link } from 'react-router-dom'

function CTA() {
  return (<>
    <section className="bg-primary rounded-3xl my-5">
        <div className="flex flex-col items-center pr-10 py-12 mx-auto xl:flex-row justify-center">
            <div className="flex justify-center xl:w-1/2 ml-5 md:ml-0">
                <img className="h-80 w-80 sm:w-[20rem] sm:h-[20rem] flex-shrink-0 object-cover rounded-full" src="https://t4.ftcdn.net/jpg/09/74/69/61/360_F_974696133_7MDMWw7WyOvBmmjEm47XanwC9TxnkWRL.jpg" alt="" />
            </div>

            <div className="ml-5 md:ml-0 mt-5 md:mt-0">
                <h2 className="text-2xl font-semibold tracking-tight text-white xl:text-4xl capitalize">
                    Connect with potential buyers & find your dream car today!
                </h2>

                <p className="block max-w-2xl mt-5 text-white">
                    Whether you're selling your car to the right audience or hunting for the perfect car, we've got you covered. Start now and make the process seamless and efficient.
                </p>

                <div className="mt-10 flex items-center">
                    <div className='hidden md:block'>
                        <Link to="/postcar" className="inline-flex h-11 w-full items-center justify-center text-sm rounded-full bg-secondary px-5 font-medium tracking-wide text-slate-700 shadow-none outline-none transition duration-200 hover:bg-secondary/80 focus:ring sm:w-auto">
                            <span className='mr-3'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15.51 2.828H8.49c-2.49 0-3.04 1.24-3.36 2.76L4 10.998h16l-1.13-5.41c-.32-1.52-.87-2.76-3.36-2.76ZM21.989 19.82c.11 1.17-.83 2.18-2.03 2.18h-1.88c-1.08 0-1.23-.46-1.42-1.03l-.2-.6c-.28-.82-.46-1.37-1.9-1.37h-5.12c-1.44 0-1.65.62-1.9 1.37l-.2.6c-.19.57-.34 1.03-1.42 1.03h-1.88c-1.2 0-2.14-1.01-2.03-2.18l.56-6.09c.14-1.5.43-2.73 3.05-2.73h12.76c2.62 0 2.91 1.23 3.05 2.73l.56 6.09ZM4 8H3M21 8h-1" stroke="#03783d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><g opacity=".4" stroke="#03783d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v2M10.5 5h3"></path></g><path opacity=".4" d="M6 15h3M15 15h3" stroke="#03783d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
                            <span className='uppercase'>Sell Car</span>
                            <span className='ml-3'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path stroke="#03783d" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M14.43 5.93L20.5 12l-6.07 6.07"></path><path stroke="#03783d" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M3.5 12h16.83" opacity=".4"></path></svg></span>
                        </Link>
                    </div>

                    <div className='hidden md:block'>
                        <Link to="/listings" className="inline-flex h-11 w-full items-center justify-center text-sm ml-10 rounded-full bg-secondary px-5 font-medium tracking-wide text-slate-700 shadow-none outline-none transition duration-200 hover:bg-secondary/80 focus:ring sm:w-auto">
                            <span className='mr-3'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="m12.66 2.518-.03.07-2.9 6.73H6.88c-.68 0-1.33.14-1.92.39l1.75-4.18.04-.1.07-.16c.02-.06.04-.12.07-.17 1.31-3.03 2.79-3.72 5.77-2.58ZM18.05 9.52c-.45-.14-.93-.2-1.41-.2H9.73l2.9-6.73.03-.07c.15.05.29.12.44.18l2.21.93c1.23.51 2.09 1.04 2.61 1.68.1.12.18.23.25.36.09.14.16.28.2.43.04.09.07.18.09.26.27.84.11 1.87-.41 3.16Z" stroke="#03783d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21.522 14.2v1.95c0 .2-.01.4-.02.6-.19 3.49-2.14 5.25-5.84 5.25h-7.8c-.24 0-.48-.02-.71-.05-3.18-.21-4.88-1.91-5.09-5.09-.03-.23-.05-.47-.05-.71V14.2c0-2.01 1.22-3.74 2.96-4.49.6-.25 1.24-.39 1.92-.39h9.76c.49 0 .97.07 1.41.2 1.99.61 3.46 2.47 3.46 4.68Z" stroke="#03783d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="m6.71 5.527-1.75 4.18A4.894 4.894 0 0 0 2 14.197v-2.93c0-2.84 2.02-5.21 4.71-5.74ZM21.519 11.268v2.93c0-2.2-1.46-4.07-3.46-4.67.52-1.3.67-2.32.42-3.17-.02-.09-.05-.18-.09-.26 1.86.96 3.13 2.93 3.13 5.17Z" stroke="#03783d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
                            <span className='uppercase'>Buy Car</span>
                            <span className='ml-3'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path stroke="#03783d" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M14.43 5.93L20.5 12l-6.07 6.07"></path><path stroke="#03783d" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M3.5 12h16.83" opacity=".4"></path></svg></span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </>)
}

export default CTA