'use client';

import { CreditCardIcon, HomeIcon, UserIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { forwardRef, ForwardRefRenderFunction } from 'react';

interface SideBarProps {
  showNav: boolean;
}

const SideBar: ForwardRefRenderFunction<HTMLDivElement, SideBarProps> = (
  { showNav },
  ref,
) => {
  // const router = useRouter();
  // if (!router.isReady) return null;
  return (
    <div ref={ref} className="fixed w-56 h-full shadow-sm bg-white">
      <div className="flex justify-center mt-6 mb-14">
        <img className="w-32 h-auto" src="logo.svg" alt="Company" />
      </div>
      <div className="flex flex-col">
        <Link href="/account">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors `}
            // ${
            //   router.pathname === '/account'
            //     ? 'bg-orange-100 text-orange-500'
            //     : 'text-gray-400 hover: bg-orange-100 hover:text-orange-500'
            // }`}
          >
            <div className="mr-2">
              <UserIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Acount</p>
            </div>
          </div>
        </Link>
        <Link href="/billing">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors `}
            // ${
            //   router.pathname === '/billing'
            //     ? 'bg-orange-100 text-orange-500'
            //     : 'text-gray-400 hover: bg-orange-100 hover:text-orange-500'
            // }`}
          >
            <div className="mr-2">
              <CreditCardIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Billing</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

SideBar.displayName = 'SideBar';
export default forwardRef(SideBar);
