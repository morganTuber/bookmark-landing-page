import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
interface InstallCardProps {
    browserImage: string
    browserName: string
    browserMinVersion: number
    index: number
}
const variants = {
    initial: { opacity: 0, y: 50 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 },
    },
}
export const InstallCard: React.FC<InstallCardProps> = ({
    browserImage,
    browserName,
    browserMinVersion,
}) => {
    const { inView, ref } = useInView()
    const controls = useAnimation()

    useEffect(() => {
        if (inView) {
            controls.start('animate')
        } else {
            controls.start('initial')
        }
    }, [inView, controls])
    return (
        <motion.div
            ref={ref}
            initial='initial'
            animate={controls}
            variants={variants}
            className={`relative shadow-none rounded-md min-w-[20rem] p-4 text-center space-y-4 md:shadow-lg`}>
            <Image
                src={browserImage}
                alt={`${browserName} logo`}
                width={105}
                height={100}
            />
            <h1 className='title text-lg'>Add to {browserName}</h1>
            <p className='text-bookmark-gray-blue'>
                Minimum Version {browserMinVersion}
            </p>
            <button
                type='button'
                className='btn text-white bg-bookmark-blue focus:ring-bookmark-blue'>
                Add & Install Extension
            </button>
        </motion.div>
    )
}
