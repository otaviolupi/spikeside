import React from 'react';
import Link from 'next/link';
import Image from 'next/image';



export default function footer(){

    let menu = [
        {
            title: "Privacy notice",
            href: "/term"
        },
        {
            title: "Term of service",
            href: "/term"
        },
        {
            title: "Cookie prefrence",
            href: "/term"
        }
    ];

    let social = [
        {
            name: "Twitter",
            img: "/twitter.png",
            href: "https://www.google.com/"
        },
        {
            name: "Twitter",
            img: "/youtube.png",
            href: "https://www.google.com/"
        },
        {
            name: "Twitter",
            img: "/facebook.png",
            href: "https://www.google.com/"
        },
        {
            name: "Twitter",
            img: "/instagram.png",
            href: "https://www.google.com/"
        }
    ]

    return (
        <footer className='bg-[#101822] flex py-6 px-10'>
            <div className='flex-1 flex flex-col justify-between items-center px-0 pb-2 pt-16'>
                <Image className='m-[32px 0 59px]' src="/logo-icon.png" width={70} height={70} alt="Spike Side" />
                <div className='flex items-center'>
                    {menu.map((item, index) => {
                        return <Link className='text-[18px] text-[#ECE8E1] mx-3 my-0' href={item.href} key={index}>{item.title}</Link>
                    })}
                </div>
            </div>
            <div className='flex flex-col items-center content-center'>
                {social.map((item, index) => {
                    return (
                        <Link
                            className='mx-0 my-4'
                            href={item.href}
                            key={index}
                        >
                            <Image src={item.img} width={30} height={30} alt={item.name} />
                        </Link>
                    )
                })}
            </div>
        </footer>
    )
}