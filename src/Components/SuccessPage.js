import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Logo from '../img/Logo.png';

const SuccessPage = () => {
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prevCountdown) => {
                if (prevCountdown === 0) {
                    window.location.href = '/';
                    return 0;
                }
                return prevCountdown - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative">
            <img src={Logo} alt="Logo" className="absolute top-0 left-0 mt-8 ml-8 h-10" />
            <div className="flex flex-col justify-center items-center h-screen ">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-5xl mb-8" />
                <h1 className="text-2xl font-covered text-green-600  mb-4">Success Submitted</h1>
                <h1 className="text-4xl font-manrope font-semibold mb-4"> Congratulations </h1>
                <p className="text-gray-400 font-manrope text-center mb-8 max-w-sm">
                    Your request has been successfully submitted to us. We will validate your information and reach out to you
                    shortly with updates
                </p>
                <p className="absolute bottom-0 mb-8 text-gray-400 font-manrope">Redirecting you to Homepage in <span className='text-black'> {countdown} Seconds</span> </p>
            </div>
        </div>
    );
};

export default SuccessPage;