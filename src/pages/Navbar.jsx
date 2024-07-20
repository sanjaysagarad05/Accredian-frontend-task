'use client'
import Logo from"./logo.png"
import React from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid'

import { Link } from "react-router-dom"



export default function Navbar() {
  
  return (  
    <>
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1 w-full">
      <div
        aria-hidden="true"
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        
      </div>
      <div
        aria-hidden="true"
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
       
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-gray-900">
          <strong className="font-semibold">Accredian Batch 2024 </strong>
          <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline h-0.5 w-0.5 fill-current">
            <circle r={1} cx={1} cy={1} />
          </svg>
          Navigate your ideal career path with tailored expert advice
        </p>
        <Link
          to="/"
          className="flex-none rounded-full bg-blue-500 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Contact Experts <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
      <div className="flex flex-1 justify-end">
        <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span className="sr-only">Dismiss</span>
          <XMarkIcon aria-hidden="true" className="h-5 w-5 text-gray-900" />
        </button>
      </div>
    </div>
    
    <header className="bg-white border-b-1 shadow-sm">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 ">
        <div className="flex lg:flex-1 items-center">
          <Link to="/" className="-m-1.5 p-1.5">
            
            <img alt="" src={Logo} className="h-10 w-auto pr-4" />
          </Link>
          <Link
          to="#"
          className="flex-none rounded-full  bg-blue-500 px-3.5 py-1 text-l font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Cources <span aria-hidden="true">&rarr;</span>
        </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 text-l">
          <Link to="/" className="font-semibold leading-6 text-gray-900 hover:underline decoration-gray-300 underline-offset-4">
            Refer & Earn
          </Link>
          <Link to="/" className="font-semibold leading-6 text-gray-900 hover:underline decoration-gray-300 underline-offset-4">
            Benefits
          </Link>
          <Link to="/" className="font-semibold leading-6 text-gray-900 hover:underline decoration-gray-300 underline-offset-4">
            FAQ
          </Link>
          <Link to="/" className="font-semibold leading-6 text-gray-900 hover:underline decoration-gray-300 underline-offset-4">
            Support
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        
          <Link to="/" className="flex-none rounded-full   px-3.5 py-1 text-l font-semibold text-black shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
            Sign Up 
          </Link>
          <Link
          to="/"
          className="flex-none rounded-full  bg-blue-500 px-3.5 py-1 text-l font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Login  <span aria-hidden="true">&rarr;</span>
        </Link>
        </div>
      </nav>
    </header>
    </>
  )
}
