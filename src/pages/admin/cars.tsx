import React, { useState } from 'react';
import SectionTitle from '../../components/admin/section-title.tsx';
import FormModal from '../../components/models/form-model.tsx';
import CarForm from '../../components/forms/car-form.tsx';
import ErrorBoundary from '../../utils/ErrorBoundary.tsx';

const Cars: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsloading] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const handleSubmitCar = (car: any) => {
        console.log('Submitted car:', car);
        setIsloading(true);
        // handleCloseModal();
    };

    return (
        <ErrorBoundary>
            <div className='section'>
                <div className='flex justify-between'>
                    {/* Section Title */}
                    <SectionTitle title='Manage Cars' path='cars' />

                    <div>
                        <button onClick={handleOpenModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex items-center text-sm">
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 12h12M12 18V6" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                            <span>Add New Car</span>
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="w-full bg-white border rounded-lg border-gray-200">
                    <header className="px-5 py-4 border-b border-gray-100">
                        <h2 className="font-semibold text-gray-800">Customers</h2>
                    </header>
                    <div className="p-3">
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full">
                                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                    <tr>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Name</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Email</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Spent</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-center">Country</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm divide-y divide-gray-100">
                                    <tr>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width="40" height="40" alt="Alex Shatov" /></div>
                                                <div className="font-medium text-gray-800">Alex Shatov</div>
                                            </div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left">alexshatov@gmail.com</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left font-medium text-green-500">$2,890.66</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-lg text-center">🇺🇸</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg" width="40" height="40" alt="Philip Harbach" /></div>
                                                <div className="font-medium text-gray-800">Philip Harbach</div>
                                            </div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left">philip.h@gmail.com</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left font-medium text-green-500">$2,767.04</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-lg text-center">🇩🇪</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-07.jpg" width="40" height="40" alt="Mirko Fisuk" /></div>
                                                <div className="font-medium text-gray-800">Mirko Fisuk</div>
                                            </div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left">mirkofisuk@gmail.com</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left font-medium text-green-500">$2,996.00</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-lg text-center">🇫🇷</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-08.jpg" width="40" height="40" alt="Olga Semklo" /></div>
                                                <div className="font-medium text-gray-800">Olga Semklo</div>
                                            </div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left">olga.s@cool.design</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left font-medium text-green-500">$1,220.66</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-lg text-center">🇮🇹</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-09.jpg" width="40" height="40" alt="Burak Long" /></div>
                                                <div className="font-medium text-gray-800">Burak Long</div>
                                            </div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left">longburak@gmail.com</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left font-medium text-green-500">$1,890.66</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-lg text-center">🇬🇧</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Form for Submitting Cars */}
                <FormModal isOpen={isModalOpen} onClose={handleCloseModal}>
                    <h2 className="text-xl font-semibold mb-4 text-slate-700 flex items-center">
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15.51 2.83H8.49C6 2.83 5.45 4.07 5.13 5.59L4 11h16l-1.13-5.41c-.32-1.52-.87-2.76-3.36-2.76ZM21.99 19.82c.11 1.17-.83 2.18-2.03 2.18h-1.88c-1.08 0-1.23-.46-1.42-1.03l-.2-.6c-.28-.82-.46-1.37-1.9-1.37H9.44c-1.44 0-1.65.62-1.9 1.37l-.2.6C7.15 21.54 7 22 5.92 22H4.04c-1.2 0-2.14-1.01-2.03-2.18l.56-6.09C2.71 12.23 3 11 5.62 11h12.76c2.62 0 2.91 1.23 3.05 2.73l.56 6.09ZM4 8H3M21 8h-1M12 3v2M10.5 5h3M6 15h3M15 15h3" stroke="#697689" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                        <span className='ml-2'>List Your Car in Minutes!</span>
                    </h2>
                    <p>Reach potential buyers with an eye-catching listing. Fill out the details below to get started</p>
                    <hr className="my-5 border-gray-200" />
                    
                    <CarForm onSubmit={handleSubmitCar} isLoading={isLoading} />
                </FormModal>
            </div>
        </ErrorBoundary>
    );
}

export default Cars;