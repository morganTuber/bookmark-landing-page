import Link from 'next/link'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { scrollToHash } from '../utils/scrollToHash'

export const Navbar = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const hamburgerRef = useRef<HTMLButtonElement>(null)
    const navLinks = ['features', 'download', 'faq', 'contact'].map(
        (item, index) => (
            <li className='focus-outline' key={index}>
                <Link href='/' passHref>
                    <a
                        className='uppercase hover:text-bookmark-red focus-outline'
                        onClick={() => scrollToHash(`#${item}`)}>
                        {item}
                    </a>
                </Link>
            </li>
        )
    )

    return (
        <header>
            <nav className='relative container flex items-center justify-between mt-6 lg:mt-24'>
                <Link href='/' passHref>
                    <a className='focus-outline'>
                        <Image
                            src='/images/logo-bookmark.svg'
                            width={150}
                            height={25}
                            alt={'Extension Logo'}
                        />
                    </a>
                </Link>
                <ul
                    className={`${
                        showMenu ? 'show-el' : 'hide-el'
                    } absolute z-20 transition-all top-16 right-4 duration-500 ease-out shadow-xl p-4 rounded-md bg-bookmark-blue text-white space-y-6 w-3/4 md:text-bookmark-dark-blue md:static md:bg-transparent md:shadow-none md:space-y-0 md:p-0 md:w-auto md:flex md:items-center md:gap-x-6 md:opacity-100 md:visible md:translate-y-0 }`}>
                    {navLinks}
                    <button
                        type='button'
                        className='btn bg-bookmark-red text-white focus:ring-bookmark-red'>
                        Login
                    </button>
                </ul>
                <button
                    title='Hide or show mobile menu'
                    ref={hamburgerRef}
                    className='visible md:hidden focus-outline'
                    onClick={() => setShowMenu(!showMenu)}>
                    <i className='fas fa-bars text-3xl'></i>
                </button>
            </nav>
        </header>
    )
}
