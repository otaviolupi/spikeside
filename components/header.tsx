'use client'

import { UserNav } from '@/components/navigation'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() { 
    const navLinks = [
        {
            name: "Teste 01",
            href: "test-1"
        },
        {
            name: "Teste 02",
            href: "test-2"
        }
    ];

    return (
        <React.Fragment>
            <nav className='px-[64px] flex items-center bg-[#101822] justify-between'>
                <Link className='flex items-center' href="/">
                    <Image className='w-auto h-auto border-r border-l-white' width={70} height={70} src="/logo-text.png" alt="Spike Side" />
                    <Image className='w-auto h-auto mx-[18px]' src="/logo-icon.png" width={70} height={70} alt="Spike Side" />
                </Link>
                <UserNav navLinks={navLinks} />
                <Link className='bg-[#ff4655] text-white py-4 px-6' href="/cards">Monte seu card!</Link>
            </nav>
        </React.Fragment>   
    )
}