import React from 'react';

interface StepperProps {
    steps: React.ReactNode[];
    currentStep: number;
    onNext: () => void;
    onPrevious: () => void;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep, onNext, onPrevious }) => {
    return (
        <div>
            <div className="mb-4">
                {steps[currentStep]}
            </div>
            
            <hr className="my-5 border-gray-200" />
            
            <div className="flex justify-between">
                {currentStep > 0 && (
                    <button
                        type="button"
                        onClick={onPrevious}
                        disabled={currentStep === 0}
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline flex items-center">
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9.57 5.93L3.5 12l6.07 6.07M20.5 12H3.67"></path></svg></span>
                        <span className='ml-2'>Previous</span>
                    </button>
                )}

                {currentStep < steps.length - 1 && (
                    <button
                        type="button"
                        onClick={onNext}
                        disabled={currentStep === steps.length - 1}
                        className="bg-blue-500 hover:bg-blue-700 flex items-center text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
                        <span className='mr-2'>Next</span>
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83"></path></svg></span>
                    </button>
                )}
            </div>
        </div>
    );
};

export default Stepper;