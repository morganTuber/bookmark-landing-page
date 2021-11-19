import React from 'react';

export const Footer = () => {
    return (
        <footer className='bg-bookmark-dark-blue py-4'>
            <h1 className='text-center text-white'>&copy; Frontend Master {new Date().getFullYear()}</h1>
        </footer>
    );
};
