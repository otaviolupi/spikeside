'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
    Home,
    PackageSearch,
    BadgePercent,
    Users,
    FileCode2,
  } from "lucide-react"
  import { usePathname } from 'next/navigation'

export default function Sidebar() {
    const pathname = usePathname();
    const navlinks = [
        {
            label: "Dashboard",
            url: "/admin",
            icon: <Home className='w-[20px] h-[20px] mr-[12px]' />
        },
        {
            label: "Produtos",
            url: "/admin/products",
            icon: <PackageSearch className='w-[20px] h-[20px] mr-[12px]' />
        },
        {
            label: "Pedidos",
            url: "/admin/orders",
            icon: <BadgePercent className='w-[20px] h-[20px] mr-[12px]' />
        },
        {
            label: "Usuários",
            url: "/admin/users",
            icon: <Users className='w-[20px] h-[20px] mr-[12px]' />
        },
        {
            label: "Conteúdo",
            url: "/admin/content",
            icon: <FileCode2 className='w-[20px] h-[20px] mr-[12px]' />
        }
    ]


    return (
        <div className='flex flex-col bg-[#101822] h-screen w-[16%]'>
            <Link className='flex items-center w-full p-4' href="/">
                <Image className='w-auto h-auto border-r border-l-white' width={70} height={70} src="/logo-text.png" alt="Spike Side" />
                <Image className='w-auto h-auto mx-[18px]' src="/logo-icon.png" width={70} height={70} alt="Spike Side" />
            </Link>
            <ul className='mt-4'>
                {navlinks.map((item, index) => {
                    return (
                        <li className='w-full border-b border-b-1 border-b-[#0b1016]'>
                            <Link className={'py-3 px-5 text-white flex items-center text-[16px] text-[#f8f8f9]' + (pathname == item.url ? 'border-r border-r-4 border-r-[#ff4655]' : 'hidden')} href={item.url}>
                                {item.icon}
                                {item.label}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}