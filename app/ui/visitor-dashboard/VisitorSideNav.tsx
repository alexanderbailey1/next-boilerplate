"use client"

import Link from 'next/link';
import NavLinks from '@/app/ui/visitor-dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import {useSession} from "next-auth/react"
import React, { useState } from 'react';

export default function VisitorSideNav() {
  const [isOpen, setIsOpen] = useState(true);

  
  const handleClick = () => {
      setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleClick} className="group inline-flex w-12 h-12 text-slate-800 bg-white text-center items-center justify-center rounded shadow-[0_1px_0_theme(colors.slate.950/.04),0_1px_2px_theme(colors.slate.950/.12),inset_0_-2px_0_theme(colors.slate.950/.04)] hover:shadow-[0_1px_0_theme(colors.slate.950/.04),0_4px_8px_theme(colors.slate.950/.12),inset_0_-2px_0_theme(colors.slate.950/.04)] transition">
        <span className="sr-only">Menu</span>
        <svg className="w-6 h-6 fill-current pointer-events-none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <rect className={`origin-center -translate-y-[5px] translate-x-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] ${isOpen ? '':'translate-x-0'} ${isOpen ? '':'translate-y-0'} ${isOpen ? '':'rotate-[315deg]'}`} y="7" width="9" height="2" rx="1"></rect>
            <rect className={`origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] ${isOpen ? '':'rotate-45'}`} y="7" width="16" height="2" rx="1"></rect>
            <rect className={`origin-center translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] ${isOpen ? '':'translate-y-0'} ${isOpen ? '':'-rotate-[225deg]'}`} y="7" width="9" height="2" rx="1"></rect>
        </svg>
      </button>
      <div className={`flex items-center flex-col px-3 py-4 md:px-2 ${isOpen ? 
        'hidden' : ''
        }`}>
          <div>
            <AcmeLogo />
          </div>
        <div className="flex grow flex-col justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
          <NavLinks />
          <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        </div>
      </div>
    </div>
  );
}
