import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import UsernameInput from '../../components/inputs/username-input.tsx';
import PasswordInput from '../../components/inputs/password-input.tsx';
import EmailInput from '../../components/inputs/email-input.tsx';
import OAuth from '../../components/oauth/oauth.tsx';
import AccountAuthSideHero from '../../components/account-auth-hero.tsx';
import api from '../../services/api.ts';
import LoadingButton from '../../components/buttons/loading-button.tsx';
import AlertMessage from '../../components/alerts/alert-message.tsx';
import { useGlobalAlert } from '../../contexts/AlertContext.tsx';

const Signup: React.FC = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<{ fullName?: string; email?: string; password?: string }>({});

    const [loading, setLoading] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const { setGlobalAlert } = useGlobalAlert();
    const [alertType, setAlertType] = useState<'success' | 'error'>('success');

    const navigate = useNavigate();

    const validate = () => {
        const newErrors: { fullName?: string; email?: string; password?: string } = {};
        
        if (!fullName) newErrors.fullName = 'Full name is required';
        
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email address is invalid';
        }

        if (!password) {
            newErrors.password = 'Password is required';
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

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

            api.post('/auth/signup', { name: fullName, email, password }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            }).then((response) => {
                setLoading(false);
                setGlobalAlert('Account created successfully. Please verify your email address.', 'success');
                navigate('/verify', { state: { email } });
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
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign up to Consult Solutions</h2>
                        <p className="mt-2 text-base text-gray-600">Already have an account? <Link to="/login" title="login" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Login</Link></p>

                        {/* Signup form */}
                        <div className='signup-form mt-5'>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <UsernameInput 
                                    label="Full Name"
                                    placeholder="Enter your full name"
                                    value={fullName}
                                    onChange={setFullName}
                                />
                                {errors.fullName && <span className="text-red-600 text-sm">{errors.fullName}</span>}

                                <EmailInput 
                                    label="Email Address"
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={setEmail}
                                />  
                                {errors.email && <span className="text-red-600 text-sm">{errors.email}</span>}

                                <PasswordInput 
                                    label="Password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={setPassword}
                                />
                                {errors.password && <span className="text-red-600 text-sm">{errors.password}</span>}

                                <LoadingButton 
                                    text="Sign up"
                                    isLoading={loading}
                                    type="submit"
                                    className="mt-5"
                                />
                            </form>
                        </div>

                        {/* Continue with oauth */}
                        <OAuth />
                    </div>
                </div>
            </div>

            {/* Alert Message */}
            <AlertMessage message={alertMessage} type={alertType} />
        </section>
    );
};

export default Signup;
