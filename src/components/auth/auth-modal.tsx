import React, { useState } from 'react';
import FormModal from '../models/form-model.tsx';
import LoginForm from './login-form.tsx';
import { useGlobalAlert } from '../../contexts/AlertContext.tsx';
import SignupForm from './signup-form.tsx';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    callback: (reponse: any) => void;
    fallback: (error: any) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, callback, fallback }) => {
    const { setGlobalAlert } = useGlobalAlert();
    const [isLogin, setIslogin] = useState(true);

    const loginSuccess = (response: any) => {
        setGlobalAlert('Successfully Logged in', 'success');
        callback(response);
    }

    const loginFailed = (error: any) => {
        setGlobalAlert('Failed To Login', 'error');
        fallback(error);
    }

    const signupSuccess = (response: any) => {
        setGlobalAlert('Successfully account created', 'success');
        callback(response);
    }

    const signupFailed = (error: any) => {
        setGlobalAlert('An error occurred. '+error.response.data.message, 'error');
        fallback(error);
    }

    return (<>
        <FormModal isOpen={isOpen} onClose={onClose}> 
            {isLogin && <LoginForm onSuccess={loginSuccess} onError={loginFailed}> 
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign In to consult Solutions</h2>
                <p className="mt-2 text-base text-gray-600 flex">Don’t have an account? <div onClick={() => setIslogin(false)} className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline cursor-pointer ml-3">Create a free account</div></p>
            </LoginForm>}

            {!isLogin && <SignupForm onSuccess={signupSuccess} onError={signupFailed}>
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Create free Account</h2>
                <p className="mt-2 text-base text-gray-600 flex">Already Have an Account? <div onClick={() => setIslogin(true)} className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline cursor-pointer ml-3">Sign in</div></p>
            </SignupForm>}
        </FormModal>
    </>);
}

export default AuthModal;
