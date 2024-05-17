import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
      <form method='POST' action="https://getform.io/f/lajkxeeb" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='text-4xl text-[#f2f2f2] font-bold inline border-b-4 border-[#6efaff]'>Contact</p>
            <p className='text-[#f2f2f2] py-4'>Submit and Send me an Email - Joelarmani4790@gmail.com</p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='name' name='name' />
        <input className='my-4 p-2 bg[#ccd6f6]' type="email" placeholder='name' name='email' />
        <textarea className='bg-[#ccd6f6] p-2' name="Message" cols="30" rows="10" placeholder='Message'></textarea>
        <button className='text-[#f2f2f2] border-2 hover:bg-[#786eff] hover:border-[#7953be] px-4 py-3 my-8 mx-auto flex items-center'>Let's Work</button>
      </form>
    </div>
  )
}

export default Contact
