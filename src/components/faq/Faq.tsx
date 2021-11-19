import { Accordion } from './Accordion'

export const Faq = () => {
    return (
        <section
            className='min-h-screen container space-y-6 py-4 center md:space-y-12'
            id='faq'>
            <h2 className='title text-center'>Frequently Asked Questions</h2>
            <p className='text-center max-w-lg mx-auto text-bookmark-gray-blue'>
                Here are some of our FAQs. If you have any other questions you’d like
                answered please feel free to email us.
            </p>
            <Accordion />
        </section>
    )
}
