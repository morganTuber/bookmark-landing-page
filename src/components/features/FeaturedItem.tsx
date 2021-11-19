import Image from 'next/image';
interface FeaturedItemProps {
    title: string;
    description: string;
    image: string;
}

export const FeaturedItem: React.FC<FeaturedItemProps> = ({
    title,
    description,
    image,
}) => {
    return (
        <div className='flex flex-col items-center justify-between lg:flex-row'>
            <Image src={image} alt={title} width={538} height={360} />
            <aside className='space-y-4 md:mt-12 lg:mt-0'>
                <h1 className='title mt-6 md:mt-0'>{title}</h1>
                <p className='max-w-sm text-bookmark-gray-blue leading-8'>
                    {description}
                </p>
                <button
                    type='button'
                    className='btn bg-bookmark-blue text-white focus:ring-bookmark-blue'
                >
                    Learn More
                </button>
            </aside>
        </div>
    );
};
