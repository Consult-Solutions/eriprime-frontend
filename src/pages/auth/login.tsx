import React, { useEffect, useState } from 'react';
import AccountAuthSideHero from '../../components/account-auth-hero.tsx';
import AlertMessage from '../../components/alerts/alert-message.tsx';
import { useGlobalAlert } from '../../contexts/AlertContext.tsx';
import { useNavigate } from 'react-router-dom';

// Utilities
import { useAuth } from '../../contexts/AuthContext.tsx';
import LoginForm from '../../components/auth/login-form.tsx';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
    const navigate = useNavigate();

    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if (isAuthenticated) navigate('/user/dashboard');
    }, [isAuthenticated, navigate]);

    const [alertMessage, setAlertMessage] = useState('');
    const { setGlobalAlert } = useGlobalAlert();
    const [alertType, setAlertType] = useState<'success' | 'error'>('success');

    const loginSuccess = (response: any) => {
        setGlobalAlert('Successfully Logged in', 'success');
        navigate('/user/dashboard');
    }

    const loginFailed = (error: any) => {
        setAlertMessage('An error occurred. '+error.response.data.message);
        setAlertType('error');
    }

    return (
        <section className="bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Hero Side section */}
                <AccountAuthSideHero />

                <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                    <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                        <LoginForm onSuccess={loginSuccess} onError={loginFailed}>
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign In to consult Solutions</h2>
                            <p className="mt-2 text-base text-gray-600">Don’t have an account? <Link to="/signup" title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Create a free account</Link></p>
                        </LoginForm>
                    </div>
                </div>
            </div>

            {/* Alert Message */}
            <AlertMessage message={alertMessage} type={alertType} />
        </section>
    );
};

export default Login;
