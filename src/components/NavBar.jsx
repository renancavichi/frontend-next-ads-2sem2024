'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function NavBar() {

	const pathname = usePathname()

  return (
    <nav>
        <ul className='text-neutral-200 flex gap-3'>
            <li><Link href="/" className={`${pathname === '/' && 'text-orange-600 border-b-4 border-b-orange-600' }`}>Home</Link></li>
            <li><Link href="/dashboard" className={`${pathname === '/dashboard' && 'text-orange-600 border-b-4 border-b-orange-600' }`}>Dashboard</Link></li>
            <li><Link href="/cadastro" className={`${pathname === '/cadastro' && 'text-orange-600 border-b-4 border-b-orange-600' }`}>Cadastre-se</Link></li>
        </ul>
    </nav>
  )
}
