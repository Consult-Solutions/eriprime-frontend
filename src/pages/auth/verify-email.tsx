import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import UsernameInput from '../../components/inputs/username-input.tsx';
import AccountAuthSideHero from '../../components/account-auth-hero.tsx';
import LoadingButton from '../../components/buttons/loading-button.tsx';
import AlertMessage from '../../components/alerts/alert-message.tsx';

// Utilities
import api from '../../services/api.ts';
import { useGlobalAlert } from '../../contexts/AlertContext.tsx';

const VerifyEmail: React.FC = () => {
    const location = useLocation();
    const email = location.state?.email || '';

    const [veririfcationCode, setVeririfcationCode] = useState('');
    const [errors, setErrors] = useState<{ veririfcationCode?: string; }>({});

    const [loading, setLoading] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const { setGlobalAlert } = useGlobalAlert();
    const [alertType, setAlertType] = useState<'success' | 'error'>('success');

    const navigate = useNavigate();

    const validate = () => {
        const newErrors: { veririfcationCode?: string; } = {};
        
        if (!veririfcationCode) newErrors.veririfcationCode = 'Verification code is required';
        if (!email) newErrors.veririfcationCode = 'Unable to pass email address';

        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const validationErrors = validate();
        
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        
        try {
            setLoading(true);

            api.post('/auth/verify/otp', { email: email, otp: veririfcationCode}, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            }).then((response) => {
                setLoading(false);
                setGlobalAlert('Account verified successfully. Please login to continue.', 'success');
                navigate('/login');
            }).catch((error) => {
                setLoading(false);
                setAlertMessage('An error occurred. '+error.response.data.message);
                setAlertType('error');
            })
        } catch (error) {
            setAlertMessage('An error occurred. Please try again.');
            setAlertType('error');
        }
    };

    return (
        <section className="bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Hero Side section */}
                <AccountAuthSideHero />

                <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                    <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Verify Your Account</h2>
                        <p className="mt-2 text-base text-gray-600">Already have an account? <Link to="/login" title="login" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Login</Link></p>

                        {/* Verify Account form */}
                        <div className='verify-account-form mt-5'>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <UsernameInput 
                                    label="Verification Code"
                                    placeholder="Enter your verification code"
                                    value={veririfcationCode}
                                    onChange={setVeririfcationCode}
                                />
                                {errors.veririfcationCode && <span className="text-red-600 text-sm">{errors.veririfcationCode}</span>}

                                <LoadingButton 
                                    text="Verify Account"
                                    isLoading={loading}
                                    type="submit"
                                    className="mt-5"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Alert Message */}
            <AlertMessage message={alertMessage} type={alertType} />
        </section>
    );
};

export default VerifyEmail;

