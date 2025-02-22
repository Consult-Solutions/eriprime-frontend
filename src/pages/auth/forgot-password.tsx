import React, { useEffect, useState } from 'react';
import AccountAuthSideHero from '../../components/account-auth-hero.tsx';
import AlertMessage from '../../components/alerts/alert-message.tsx';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext.tsx';
import { useGlobalAlert } from '../../contexts/AlertContext.tsx';
import { Link } from 'react-router-dom';
import AuthButton from '../../components/buttons/auth-button.tsx';
import EmailInput from '../../components/inputs/email-input.tsx';
import api from '../../services/api.ts';

interface Data {
    email?: string;
}

const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<Data>({});

    const navigate = useNavigate();

    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if (isAuthenticated) navigate('/user/dashboard');
    }, [isAuthenticated, navigate]);

    const [alertMessage, setAlertMessage] = useState('');
    const { setGlobalAlert } = useGlobalAlert();
    const [alertType, setAlertType] = useState<'success' | 'error'>('success');

    const validate = () => {
        const newErrors: { email?: string; password?: string } = {};
        
        if (!email) newErrors.email = 'Email is required';

        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const validationErrors = validate();
        
        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        setErrors({});

        try {
            setLoading(true);

            api.post<{ access_token: string }>('/auth/signin', { email }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            }).then((response) => {
                setLoading(false);
                setGlobalAlert('Account verified successfully.', 'success');
                navigate('/reset');
            }).catch((error) => {
                setLoading(false);
                setAlertMessage('An error occurred. '+error.response.data.message);
                setAlertType('error');
            })
        } catch (error) {
            setAlertMessage('An error occurred. Please try again.');
            setAlertType('error');
        }
    }

    return (
        <section className="bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Hero Side section */}
                <AccountAuthSideHero />

                <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                    <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Reset password</h2>
                        <p className="mt-2 text-base text-gray-600">Already Have an Account? <Link to="/login" title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Login</Link></p>

                        <div className='signup-form mt-5'>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <EmailInput
                                    label="Email Address"
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={setEmail}
                                />
                                {errors.email && <span className="text-red-600 text-sm">{errors.email}</span>}

                                <AuthButton text="Verify Email" isLoading={loading} type="submit" className="mt-5" />
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

export default ForgotPassword;
