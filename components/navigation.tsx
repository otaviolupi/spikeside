'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'


export function UserNav({ navLinks }) {

  const pathname = usePathname()

  return (
    <div className='flex-1 px-8'>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href)
 
        return (
          <Link
            className={isActive ? 'text-blue' : 'text-black'}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        )
      })}
    </div>
  )
}
 