import Image from 'next/image'
import { motion } from 'framer-motion'

const staggerChildren = {
    animate: {
        transition: {
            staggerChildren: 0.4,
        },
    },
}
const variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
}
const imageVariant = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
}
const Hero = () => {
    return (
        <section className='relative min-h-[70vh] overflow-x-hidden'>
            <motion.main
                initial='initial'
                animate='animate'
                className='container flex flex-col-reverse items-center justify-between mt-12 lg:mt-24 lg:flex-row'>
                <motion.div
                    variants={staggerChildren}
                    className='space-y-8 text-center lg:text-left'>
                    <motion.h1 variants={variants} className='title'>
                        A Simple Bookmark Manager
                    </motion.h1>
                    <motion.p
                        variants={variants}
                        className='leading-8 text-bookmark-gray-blue w-full md:w-1/2 md:mx-auto lg:mx-0'>
                        A clean and simple interface to organize your favorite
                        websites.Open a new browser tab and see your sites load
                        instantly.Try it for free
                    </motion.p>
                    <motion.div className='space-x-4'>
                        <motion.button
                            variants={variants}
                            type='button'
                            className='btn bg-bookmark-blue text-white focus:ring-bookmark-blue'>
                            Get it on Chrome
                        </motion.button>
                        <motion.button
                            variants={variants}
                            type='button'
                            className='btn bg-[#F7F7F7] text-black focus:ring-bookmark-gray-blue'>
                            Get it on Firefox
                        </motion.button>
                    </motion.div>
                </motion.div>
                <motion.aside variants={imageVariant} className='z-10'>
                    <Image
                        src='/images/illustration-hero.svg'
                        width={580}
                        height={386}
                        alt='Featured tab illustration'></Image>
                </motion.aside>
            </motion.main>
            <div className='hidden md:block absolute top-24 right-0 w-1/3 h-48 rounded-l-full bg-bookmark-blue' />
        </section>
    )
}

export default Hero
