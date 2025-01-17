/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/admin/section-title.tsx';
import { useAuth } from '../../contexts/AuthContext.tsx';
import api from '../../services/api.ts';
import AlertMessage from '../../components/alerts/alert-message.tsx';
import BaseTable from '../../components/table/base-table.tsx';
import FetchLoader from '../../components/loaders/fetching-loader.tsx';

const Subscribers: React.FC = () => {
    const [isLoading, setIsloading] = useState(false);
    const [subscribers, setSubscribers] = useState<any[]>([]);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState<'success' | 'error'>('success');

    const { token } = useAuth();

    /**
     * Fetch All Cars
     * 
     * @returns
     */
    const fetchAllSubs = async () => {
        try {
            setIsloading(true);

            api.get('/user/subscribers', {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                params: {
                    direction: 'desc',
                }
            }).then((response: any) => {
                setSubscribers(response.data.data);
                setIsloading(false);
            }).catch((error: { response: { data: { message: string; }; }; }) => {
                setAlertMessage('An error occurred. '+error.response.data.message);
                setAlertType('error');
                setIsloading(false);
            });
        } catch (error) {
            setAlertMessage('An error occurred. Something went wrong');
            setAlertType('error');
            setIsloading(false);
        }
    };

    const deleteSubscriber = (userId: string) => async () => {
        console.log(userId);
    }

    useEffect(() => {
        if (token) 
            fetchAllSubs();
        
    }, [token]);

    return (
        <div className='section'>
            {/* Section Title */}
            <div className='flex justify-between mb-5'>
                {/* Section Title */}
                <SectionTitle title='Manage subscribers' path='subscribers' />

                <div className='flex items-center'>
                    {isLoading && <div className='mr-3'> <FetchLoader /> </div>}
                </div>
            </div>

            {/* Table Data */}
            <BaseTable title='All Subscribers' data={subscribers} itemsPerPage={5} headers={[
                { key: 'No', label: 'NO' },
                { key: 'email', label: 'Email' },
                { key: 'actions', label: 'Actions' },
                ]} renderRow={(index: number, user: any) => (
                    <>
                        <td className="p-2 whitespace-nowrap">
                            <div className="font-medium text-gray-800 truncate">{index}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                            <div className="text-left">{user.email}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                            <div className='flex items-center space-x-2'>
                                <div onClick={deleteSubscriber(user._id)} className='border border-red-200 rounded-lg p-1 cursor-pointer bg-red-200'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21 5.98c-3.33-.33-6.68-.5-10.02-.5-1.98 0-3.96.1-5.94.3L3 5.98" stroke="#697689" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".34" d="m8.5 4.97.22-1.31C8.88 2.71 9 2 10.69 2h2.62c1.69 0 1.82.75 1.97 1.67l.22 1.3" stroke="#697689" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="m18.85 9.14-.65 10.07C18.09 20.78 18 22 15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14" stroke="#697689" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".34" d="M10.33 16.5h3.33M9.5 12.5h5" stroke="#697689" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                </div>
                            </div>
                        </td>
                    </>
                )} />

            {/* Alert Message */}
            <AlertMessage message={alertMessage} type={alertType} />
        </div>
    );
}

export default Subscribers;