import { useState } from 'react'
import React from 'react'
import './file.css'

function Form() {


  return (
    <>
    <div className='w-full  h-screen flex justify-center items-center bg-amber-700'>
      <div className='flex justify-center items-center w-100 h-110 bg-amber-100 rounded-2xl shadow-2xs transform hover:scale-101 transition duration-300 hover:shadow-amber-900 hover:shadow-2xl'>
        <div className='w-[80%] h-[80%]'>
          <h1 className='text-center mb-15 text-5xl font  hover:text-green-600 transition duration-200'>Form</h1>
          <form action="" >
        <h6 className=''>Name:</h6>
        <input type="text" className='w-full h-10 bg-blue-400  mb-5 pl-4 pr-4 outline-white rounded-2xl transform hover:scale-105 transition duration-200 '/>
        <h6 className=''>Password:</h6>
        <input type="text" className='w-full h-10 bg-blue-400 pl-4 pr-4 outline-white rounded-2xl transform hover:scale-105 transition duration-200 ' />

          </form>
        </div>
      </div>

    </div>
    </>
  )
}

export default Form
