'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {

    const pathname = usePathname();

    const isActive = href === pathname ;

    return <Link href={href} className={`${isActive ? "bg-black text-white rounded-md p-2" : "bg-gray-200 text-black rounded-md p-2"}`}>{children}</Link> ;
};

export default NavLink;