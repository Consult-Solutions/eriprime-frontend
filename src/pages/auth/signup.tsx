import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AccountAuthSideHero from '../../components/account-auth-hero.tsx';
import AlertMessage from '../../components/alerts/alert-message.tsx';
import { useGlobalAlert } from '../../contexts/AlertContext.tsx';
import { useAuth } from '../../contexts/AuthContext.tsx';
import SignupForm from '../../components/auth/signup-form.tsx';
import MetaTags from '../../components/MetaTags.tsx';

const Signup: React.FC = () => {
    const navigate = useNavigate();

    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if (isAuthenticated) navigate('/user/dashboard');
    }, [isAuthenticated, navigate]);

    const [alertMessage, setAlertMessage] = useState('');
    const { setGlobalAlert } = useGlobalAlert();
    const [alertType, setAlertType] = useState<'success' | 'error'>('success');

    const signupSuccess = (response: any) => {
        setGlobalAlert('Successfully account created', 'success');
    }

    const signupFailed = (error: any) => {
        setAlertMessage('An error occurred. ' + error.response.data.message);
        setAlertType('error');
    }

    return (<>
        <MetaTags
            title="Get Started"
            description="Create your Eriprime account to explore our extensive car listings and manage your preferences. Sign up now to find your dream car and enjoy a seamless car trading experience."
            keywords="Eriprime, signup, sign up, register, car trading, car trader, car trader africa, car trader rwanda, car trader kenya, car trader nigeria, car trader ghana, car trader south africa, car trader tanzania, car trader uganda"
            canonical={`${process.env.PUBLIC_URL}/signup`}
            ogTitle="Sign Up for Eriprime"
            ogDescription="Create your Eriprime account to explore our car listings and manage your preferences. Find your dream car today."
            ogImage={`${process.env.PUBLIC_URL}/images/logo.jpeg`}
            twitterCard="summary_large_image"
        />
        <section className="bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Hero Side section */}
                <AccountAuthSideHero />

                <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                    <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                        <SignupForm onSuccess={signupSuccess} onError={signupFailed}>
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Get Started Now</h2>
                            <p className="mt-2 text-base text-gray-600">Already Have an Account? <Link to="/login" title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Sign in</Link></p>
                        </SignupForm>
                    </div>
                </div>
            </div>

            {/* Alert Message */}
            <AlertMessage message={alertMessage} type={alertType} />
        </section>
    </>
    );
};

export default Signup;
