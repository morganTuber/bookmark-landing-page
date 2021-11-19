import { useState } from 'react';
import features from '../../data/features.json';
import { FeaturedItem } from './FeaturedItem';
import { FeatureTabs } from './FeatureTabs';

const Feature = () => {
    const [activeFeatureIdx, setActiveFeatureIdx] = useState(2);
    const { title, description, image } = features[activeFeatureIdx];

    const onClick = (newIndex: number) => setActiveFeatureIdx(newIndex);
    return (
        <section id='features' className='py-4 min-h-screen center'>
            <div className='container mt-6 space-y-6 lg:mt-0 lg:space-y-8'>
                <h1 className='text-center title'>Features</h1>
                <p className='max-w-md mx-auto text-center text-bookmark-gray-blue'>
                    Our aim is to make it quick and easy for you to access your
                    favourite websites. Your bookmarks sync between your devices so
                    you can access them on the go.
                </p>
                <FeatureTabs currIdx={activeFeatureIdx} onClick={onClick} />
                <span className='hidden w-full mx-auto h-px bg-bookmark-gray-blue lg:block lg:w-1/2'></span>
                <FeaturedItem
                    title={title}
                    description={description}
                    image={image}
                />
            </div>
        </section>
    );
};

export default Feature;
