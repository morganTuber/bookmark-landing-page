import { Fragment } from 'react';

interface FeatureTabsProp {
    onClick: (newIndex: number) => void;
    currIdx: number;
}
export const FeatureTabs: React.FC<FeatureTabsProp> = ({ onClick, currIdx }) => {
    const tabList = ['Simple Bookmarking', 'Speedy Searching', 'Easy Sharing'].map(
        (item, index) => (
            <Fragment key={index}>
                <li>
                    <button
                        className={`btn shadow-none focus:ring-bookmark-blue ${
                            currIdx === index
                                ? 'active'
                                : 'text-bookmark-dark-blue hover:text-bookmark-red focus:ring-bookmark-blue'
                        } `}
                        onClick={() => onClick(index)}
                    >
                        {item}
                    </button>
                    <span className='block w-full h-px bg-bookmark-gray-blue md:hidden'></span>
                </li>
            </Fragment>
        )
    );
    return (
        <ul className='flex flex-col divide-yellow-700 items-center justify-center gap-y-6 gap-x-12 md:flex-row md:gap-y-0'>
            {tabList}
        </ul>
    );
};
