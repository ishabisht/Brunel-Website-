import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import Logo from '../img/Logo.png';
import FormFieldDefination from './FormFieldDefination';

const RegistrationForm = () => {
    const handleSubmit = ({ name, email }) => {
        console.log('Name:', name);
        console.log('Email:', email);
    };

    return (
        <div className="relative">
            <img src={Logo} alt="Logo" className="absolute top-0 left-0 mt-8 ml-8 h-10" />
            <FontAwesomeIcon
                icon={faCircleXmark}
                className="absolute top-0 right-0 mt-8 mr-8 cursor-pointer h-10 text-gray-400"
                onClick={() => {
                    window.location.href = '/';
                }}
            />
            <div className="flex justify-center items-center h-screen">
                <div className="bg-white  p-6 w-96">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-covered  text-green-600  mt-8 mb-4 md:mb-6 ">
                            Registration Form
                        </h1>
                        <p className="text-4xl font-manrope font-semibold mb-16">
                            Start Your Success <br /> Journey here!
                        </p>
                    </div>
                    <FormFieldDefination onSubmit={handleSubmit} />
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;
