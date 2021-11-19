import { useState } from 'react';
import faqs from '../../data/faqs.json';

export const Accordion = () => {
    const [activeDropdownIdx, setActiveDropdownIdx] = useState<null | number>(null);
    //classname to apply to active dropdown index
    const activeClass = 'max-h-96 overflow-y-visible mb-6';
    const inactiveClass = 'max-h-0 overflow-y-hidden mb-0';
    //function to toggle dropdown
    const handleDropdownClick = (dropdownIdx: number) => {
        const indexOrNull = activeDropdownIdx === dropdownIdx ? null : dropdownIdx;
        setActiveDropdownIdx(indexOrNull);
    };
    const renderedList = faqs.map((faq, index) => (
        <div
            className='max-w-xl border-t border-bookmark-gray-blue border-opacity-25'
            key={index}
        >
            <div
                className='flex items-center justify-between py-6 cursor-pointer'
                onClick={() => handleDropdownClick(index)}
            >
                <h3 className='title text-bookmark-dark-blue text-base hover:text-bookmark-red'>
                    {faq.title}
                </h3>
                <button
                    title={`Toggle dropdown ${index}`}
                    className='focus-outline p-0'
                    onClick={() => handleDropdownClick(index)}
                >
                    <i
                        className={`fas fa-chevron-${
                            activeDropdownIdx === index ? 'up' : 'down'
                        } text-bookmark-blue`}
                    ></i>
                </button>
            </div>
            <p
                className={`${
                    activeDropdownIdx === index ? activeClass : inactiveClass
                } transition-all text-bookmark-gray-blue`}
            >
                {faq.content}
            </p>
        </div>
    ));
    return <div className='mt-24'>{renderedList}</div>;
};
