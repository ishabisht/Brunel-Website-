import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormFieldDefination= ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    const [isNameFocused, setIsNameFocused] = useState(false);
    const [isEmailFocused, setIsEmailFocused] = useState(false);

    const validateName = (value) => {
        if (!value.trim()) {
            setNameError('Name is required');
            return false;
        } else {
            setNameError('');
            return true;
        }
    };

    const validateEmail = (value) => {
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!value.trim()) {
            setEmailError('Email is required');
            return false;
        } else if (!emailRegex.test(value)) {
            setEmailError('Enter a valid Email address');
            return false;
        } else {
            setEmailError('');
            return true;
        }
    };

    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
        validateName(value);
        updateSubmitButton(value, email);
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        validateEmail(value);
        updateSubmitButton(name, value);
    };

    const updateSubmitButton = (name, email) => {
        setIsSubmitDisabled(!(name.trim() && email.trim() && !nameError && !emailError));
    };
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isSubmitDisabled) {
            onSubmit({ name, email });
        }
        navigate('/successpage');

    };

    const handleNameFocus = () => {
        setIsNameFocused(true);
    };

    const handleNameBlur = () => {
        setIsNameFocused(false);
    };

    const handleEmailFocus = () => {
        setIsEmailFocused(true);
    };

    const handleEmailBlur = () => {
        setIsEmailFocused(false);
    };



    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Enter your name"
                    className={`w-full bg-gray-100 px-3 py-2 border rounded-full focus:outline-none ${isNameFocused ? 'border-blue-500 bg-blue-200' : nameError ? 'border-red-500' : 'border-gray-300'
                        }`}
                    value={name}
                    onChange={handleNameChange}
                    onFocus={handleNameFocus}
                    onBlur={handleNameBlur}
                />
                {nameError && <p className="text-red-500">{nameError}</p>}
            </div>
            <div className="mb-8">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className={`w-full bg-gray-100 px-3 py-2 border rounded-full focus:outline-none ${isEmailFocused ? 'border-blue-500 bg-blue-200' : emailError ? 'border-red-500' : 'border-gray-300'
                        }`}
                    value={email}
                    onChange={handleEmailChange}
                    onFocus={handleEmailFocus}
                    onBlur={handleEmailBlur}
                />
                {emailError && <p className="text-red-500">{emailError}</p>}
            </div>
            <button
                type="submit"
                className={`w-full font-bold py-2 rounded-full ${isSubmitDisabled ? 'bg-gray-300 text-white cursor-not-allowed' : 'bg-black text-white hover:bg-gray-900'
                    }`}
                disabled={isSubmitDisabled}
            >
                Submit
            </button>
        </form>
    );
};

export default FormFieldDefination;