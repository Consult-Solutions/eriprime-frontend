import React from 'react';

const CarPostingCard: React.FC = () => {
    return (
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
            <a href="/" aria-label="Article" className='relative'>
                <img src="https://images.unsplash.com/photo-1497564245203-66a1216f073a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="object-cover w-full h-64 rounded-lg" alt="" />
                <div className="inline-flex absolute top-3 left-3 px-2 py-1 text-xs font-semibold tracking-widest rounded-full text-gray-100 bg-[#03783d]/90 mt-1"> New </div>
                <div className="inline-flex absolute top-3 right-3 px-2 py-1 text-xs font-semibold tracking-widest rounded-full text-gray-100 bg-red-400 mt-1"> Sold </div>
                
                <div className="inline-flex absolute bottom-3 right-3 px-2 py-2 text-xs font-semibold tracking-widest rounded-full text-gray-100 bg-[#03783d]/90 mt-1"> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                    </svg>  
                </div>
            </a>
            <div className="py-5">
                <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                    Toyota, Crossover - 3 Jul 2020
                </p>                
                <div>
                    <a href="/" aria-label="Article" className="inline-block mb-3 mt-2 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
                        <p className="text-xl font-bold leading-5 text-slate-700">14,000,000 RWF</p>
                    </a>
                </div>

                <p className="mb-4 text-slate-700">
                    Sed ut perspiciatis unde omnis iste natus error sit sed quia.
                </p>

                <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
                <p className="text-xs font-semibold mb-3 text-gray-600 uppercase flex items-center">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                        </svg>
                    </span>
                    <span className='ml-2'>Automatic | Electric</span>
                </p>
                <div className="flex space-x-4">
                    <a href="/" aria-label="Likes" className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group">
                        <div className="mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                            </svg>
                        </div>
                        <p className="font-semibold text-sm text-slate-700">7.4K</p>
                    </a>
                    <a href="/" aria-label="Comments" className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group">
                        <div className="mr-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                            >
                                <polyline
                                    points="23 5 23 18 19 18 19 22 13 18 12 18"
                                    fill="none"
                                    strokeMiterlimit="10"
                                />
                                <polygon
                                    points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeMiterlimit="10"
                                />
                            </svg>
                        </div>
                        <p className="font-semibold text-sm text-slate-700">81</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CarPostingCard;