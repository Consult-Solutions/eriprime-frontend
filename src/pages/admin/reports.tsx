import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/admin/section-title.tsx';
import api from '../../services/api.ts';
import { useAuth } from '../../contexts/AuthContext.tsx';
import FetchLoader from '../../components/loaders/fetching-loader.tsx';
import AlertMessage from '../../components/alerts/alert-message.tsx';

const Reports: React.FC = () => {
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalCars, setTotalCars] = useState(0);
    const [totalSubscribers, setTotalSubscribers] = useState(0);
    const [totalSellers, setTotalSellers] = useState(0);

    const [isLoading, setIsLoading] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState<'success' | 'error'>('success');

    const { token } = useAuth();

    const fetchAnalytics = () => {
        try {
            setIsLoading(true);

            api.get('/analytics', {
                headers: { Authorization: `Bearer ${token}` }
            }).then((response: any) => {
                setTotalUsers(response.data.data.total_users);
                setTotalCars(response.data.data.total_cars);
                setTotalSubscribers(response.data.data.total_subscribers);
                setTotalSellers(response.data.data.total_sellers);
                setIsLoading(false);
            }).catch((error: { response: { data: { message: string; }; }; }) => {
                setAlertMessage('An error occurred. '+error.response.data.message);
                setAlertType('error');
                setIsLoading(false);
            });
        } catch (error) {
            setAlertMessage('An error occurred. Something went wrong');
            setAlertType('error');
            setIsLoading(false);
        }
    }

     useEffect(() => {
        if (token) fetchAnalytics();
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    return (
        <div className='section'>
            {/* Section Title */}
            <div className='flex justify-between mb-5'>
                {/* Section Title */}
                <SectionTitle title='Reports & Insights' path='reports' />

                <div className='flex items-center'>
                    {isLoading && <div className='mr-3'> <FetchLoader /> </div>}
                </div>
            </div>

            <div className="bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    
                    <div className="mx-auto max-w-2xl lg:max-w-none">
                        <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                            <div className="flex flex-col bg-gray-200/50 p-8">
                                <dt className="text-sm font-semibold leading-6 text-gray-600">Total Users</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{ totalUsers }</dd>
                            </div>
                            <div className="flex flex-col bg-gray-200/50 p-8">
                                <dt className="text-sm font-semibold leading-6 text-gray-600">Total Cars</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{ totalCars }</dd>
                            </div>
                            <div className="flex flex-col bg-gray-200/50 p-8">
                                <dt className="text-sm font-semibold leading-6 text-gray-600">Total Subscribers</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{ totalSubscribers }</dd>
                            </div>
                            <div className="flex flex-col bg-gray-200/50 p-8">
                                <dt className="text-sm font-semibold leading-6 text-gray-600">Total Sellers</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{ totalSellers }</dd>
                            </div>
                        </dl>
                    </div>

                </div>
            </div>

            {/* Alert Message */}
            <AlertMessage message={alertMessage} type={alertType} />
        </div>
    );
}

export default Reports;