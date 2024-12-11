import React, { useEffect, useState } from 'react';
import AccountAuthSideHero from '../../components/account-auth-hero.tsx';
import AlertMessage from '../../components/alerts/alert-message.tsx';
import { useGlobalAlert } from '../../contexts/AlertContext.tsx';
import { Link, useNavigate } from 'react-router-dom';
import EmailInput from '../../components/inputs/email-input.tsx';
import PasswordInput from '../../components/inputs/password-input.tsx';
import LoadingButton from '../../components/buttons/loading-button.tsx';
import OAuth from '../../components/oauth/oauth.tsx';

// Utilities
import api from '../../services/api.ts';
import { useAuth } from '../../contexts/AuthContext.tsx';

const Login: React.FC = () => {
    const navigate = useNavigate();

    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if (isAuthenticated) navigate('/dashboard');
    }, [isAuthenticated, navigate]);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<{ fullName?: string; email?: string; password?: string }>({});

    const [loading, setLoading] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const { setGlobalAlert } = useGlobalAlert();
    const [alertType, setAlertType] = useState<'success' | 'error'>('success');

    const validate = () => {
        const newErrors: { email?: string; password?: string } = {};
        
        if (!email) newErrors.email = 'Email is required';
        if (!password) newErrors.password = 'Password is required';

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

            api.post<{ access_token: string }>('/auth/signin', { email, password }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            }).then((response) => {
                const accessToken = response.data.access_token;
                localStorage.setItem('accessToken', accessToken);

                setGlobalAlert('Successfully Logged in', 'success');
                setLoading(false);
                
                navigate('/dashboard');
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
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign in to Consult Solutions</h2>
                        <p className="mt-2 text-base text-gray-600">Don’t have an account? <Link to="/signup" title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Create a free account</Link></p>

                        <div className='signup-form mt-5'>
                            <form onSubmit={handleSubmit} className="space-y-5">
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
                                    text="Login"
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

export default Login;
