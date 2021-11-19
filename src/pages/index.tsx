import { Toaster } from 'react-hot-toast';
import Head from 'next/head';
import {
    Contact,
    Download,
    Faq,
    Footer,
    Navbar,
    SideNavigation,
} from '../components';
import Feature from '../components/features/Feature';
import Hero from '../components/Hero';

const index = () => {
    return (
        <>
            <Head>
                <title>Easily bookmark your favorite websites</title>
            </Head>
            <Navbar />
            <Hero />
            <Feature />
            <SideNavigation />
            <Download />
            <Faq />
            <Contact />
            <Toaster />
            <Footer />
        </>
    );
};
export default index;
