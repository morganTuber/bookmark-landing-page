import { useEffect, useState } from 'react';
import { scrollToHash } from '../utils/scrollToHash';

export const SideNavigation = () => {
    const tooltips = ['features', 'download', 'faq', 'contact'];
    const icons = [
        'fas fa-atlas',
        'fas fa-download',
        'fas fa-question',
        'fas fa-envelope',
    ];
    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        const onScroll = (e: Event) => {
            window.scrollY > 720 ? setVisible(true) : setVisible(false);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    const renderedList = icons.map((icon, index) => (
        <li
            key={index}
            data-tooltip={tooltips[index]}
            onClick={() => scrollToHash(`#${tooltips[index]}`)}
            className='relative tooltip cursor-pointer hover:bg-blue-100 py-2 px-4 rounded-md'
        >
            <i className={icon}></i>
        </li>
    ));
    return (
        <ul
            className={`${
                visible ? 'show-el' : 'hide-el'
            } bg-white z-50 hidden fixed top-[50%] left-10 p-2 rounded-md text-bookmark-blue md:flex flex-col gap-y-6 shadow-lg transition-all ease-out duration-[800ms]`}
        >
            {renderedList}
        </ul>
    );
};
