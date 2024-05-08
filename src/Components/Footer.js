import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-gray-100  py-8 px-8 mt-8 mb-8 mx-auto rounded-2xl">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faCopyright} className=" mr-2" />
                    <span className="text-gray-600">Talup 2023. All rights are reserved</span>
                </div>
                <div className="flex space-x-4">
                    <a href=" " className="underline">Terms & Conditions</a>
                    <a href=" " className="underline">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
