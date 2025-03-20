import React, { useState } from 'react';
import EmailInput from '../../components/inputs/email-input.tsx';
import AuthButton from '../buttons/auth-button.tsx';
import UsernameInput from '../../components/inputs/username-input.tsx';
import PasswordInput from '../../components/inputs/password-input.tsx';
import OAuth from '../oauth/oauth.tsx';
import api from '../../services/api.ts';

interface SignupFormProps {
    formTitle?: string;
    onSuccess: (reponse: any) => void;
    onError: (error: any) => void;
    children: React.ReactNode;
}

interface LoginData {
    fullName?: string; 
    email?: string; 
    password?: string;
}

const SignupForm: React.FC<SignupFormProps> = ({ formTitle, onSuccess, onError, children }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<LoginData>({});

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
            onError(validationErrors);
            return;
        }

        setErrors({});
        
        try {
            setLoading(true);

            api.post('/auth/signup', { name: fullName, email, password, path:  "manual_signup" }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            }).then((response) => {
                setLoading(false);
                onSuccess(response);
            }).catch((error) => {
                setLoading(false);
                onError(error)
            })
        } catch (error) {
            setLoading(false);
            onError(error)
        }
    };

    return (<>
        {children}

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

                <AuthButton 
                    text="Sign up"
                    isLoading={loading}
                    type="submit"
                    className="mt-5"
                />
            </form>
        </div>

        {/* Continue with oauth */}
        <OAuth onLoading={setLoading} callback={onSuccess} fallback={onError} />
    </>)
}

export default SignupForm;