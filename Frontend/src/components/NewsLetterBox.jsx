import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 15% off.</p>
      <p className='text-gray-500 mt-3'>
        Be the first to know about new collections and exclusive
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="email" name="" id="" placeholder='Enter your email' />
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsLetterBox
