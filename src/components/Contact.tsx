import { useState, FormEvent } from 'react'
import toast from 'react-hot-toast'

const EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const Contact = () => {
    const [email, setEmail] = useState<string>('')
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const isValidEmail = EMAIL_REGEX.test(email)

        isValidEmail
            ? toast.success(
                  'Thank you for subscribing.Please check your email for confirmation'
              )
            : toast.error('Invalid email address')
    }
    return (
        <section className='py-12 bg-bookmark-blue text-white' id='contact'>
            <div className='max-w-xs mx-auto space-y-6 text-center md:max-w-lg'>
                <h4 className='text-lg'>35,000 already signed</h4>
                <h3 className='title text-white'>
                    Stay up-to-date with what you are doing{' '}
                </h3>
                <form
                    onSubmit={handleSubmit}
                    className='flex flex-col justify-center items-center space-y-4 md:space-y-0 md:flex-row md:space-x-4'>
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className='w-full flex-1 px-4 py-3 bg-white text-bookmark-blue rounded-md focus:outline-white'
                        type='text'
                        placeholder='Enter your email address'
                    />
                    <button
                        className='btn w-full bg-bookmark-red focus:ring-bookmark-red md:w-auto'
                        type='submit'>
                        Contact Us
                    </button>
                </form>
            </div>
        </section>
    )
}
