import React, { useState } from 'react';
import Union from '../img/Union.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const QuestionBox = () => {
    const [expanded, setExpanded] = useState(new Array(5).fill(false));

    const questions = [
        "Do you offer freelancers ?",
        "What's the guarantee that I will be satisfied with the hired talent ?",
        "Can I hire multiple talents at once ?",
        "Why should I not go to an agency directly?",
        "Who can help me pick a right skillset and duration for me ?"
    ];
    const answers = [
        "If unhappy with a project, communication with the freelancer, allow for revision, and refer to the agreement. Escalte to platform support if needed, considering meiation. Review policies, seek collaborative solutions for resolution.",
        "communication with the freelancer, allow for revision, and refer to the agreement. Escalte to platform support if needed, considering meiation. Review policies, seek collaborative solutions for resolution.",
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
        "Answer 4",
        "Answer Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."
    ];

    const toggleAnswer = (index) => {
        setExpanded(prevIndex => (prevIndex === index ? -1 : index));
    };

    return (
        <div className="flex p-6 bg-custom-E8EEE7 rounded-3xl mb-8 mt-24 ">

            <div className="w-1/2 pr-6">
                <div>
                    <div>
                        <h2 className="text-3xl font-covered text-gray-400 font-medium mb-4 ml-20 mt-8">What's on your mind</h2>
                        <h3 className="text-6xl font-manrope font-bold mb-20 ml-20">Ask Questions</h3>
                    </div>
                    <img src={Union} alt="Union" className='-ml-6' />
                </div>
            </div>

            <div className="w-1/2 pl-6 mt-28">
                <div className="flex flex-col ">
                    {questions.map((question, index) => (
                        <div key={index} className="mb-8">
                            <div className="flex justify-between items-start">
                                <p className={`text-xl font-semibold font-manrope ${question.length > 35 ? 'w-1/2' : 'w-full'}`}>{question}</p>
                                <button onClick={() => toggleAnswer(index)} className="focus:outline-none">
                                    {expanded === index ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />}
                                </button>
                            </div>
                            <hr className="my-4 border-t-2 border-gray-300" />
                            {expanded === index && (
                                <div className="text-base text-custom-617275 font-manrope">
                                    {answers[index].split('\n').map((line, i) => (
                                        <p key={i}>{line}</p>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default QuestionBox;
