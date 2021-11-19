import { motion } from 'framer-motion'
import browsers from '../../data/browsers.json'
import { InstallCard } from './InstallCard'

const staggerChildren = {
    animate: {
        transition: {
            staggerChildren: 0.4,
        },
    },
}
export const Download = () => {
    const supportedBrowserList = browsers.map(
        ({ browserImage, browserMinVersion, browserName, index }) => (
            <InstallCard
                key={index}
                browserImage={browserImage}
                browserMinVersion={browserMinVersion}
                browserName={browserName}
                index={index}
            />
        )
    )
    return (
        <motion.section
            initial='initial'
            animate='animate'
            className='min-h-screen center mt-12 md:mt-0 space-y-6 md:space-y-8 py-4'
            id='download'>
            <h1 className='title text-center'>Download the extension</h1>
            <p className='block max-w-lg mx-auto text-center text-bookmark-gray-blue'>
                We&apos;ve got more browsers in the pipeline.Please let us know if
                you&apos;ve got a favorite you&apos;d like us prioritize{' '}
            </p>
            <motion.div
                variants={staggerChildren}
                className='flex flex-col justify-center items-center gap-x-0 gap-y-6 lg:gap-y-0 lg:gap-x-12 lg:flex-row'>
                {supportedBrowserList}
            </motion.div>
        </motion.section>
    )
}
