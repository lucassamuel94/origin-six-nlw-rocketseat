'use client'

import { MenuIcon, XIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Logo } from '../ui/icons'

export type NavItemProps = {
  id: string,
  label: string,
  href: string
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  const navItems: NavItemProps[] = [
    {
      id: 'cbf49703-534f-45b4-a465-4ffc52681bb0',
      label: 'Início',
      href: '/'
    },
    {
      id: '0e58fe54-4170-47c3-b0ea-b1f0a66422ec',
      label: 'Sobre',
      href: '#sobre'
    },
    {
      id: '49f3361f-d529-423f-8e38-48dc21004f7a',
      label: 'Serviços',
      href: '#servicos'
    },
    {
      id: '90f2cdce-e724-4fda-a492-c2798e034093',
      label: 'Depoimentos',
      href: '#depoimentos'
    },
    {
      id: '039ef157-73ad-41ba-a024-b6f5cc90586d',
      label: 'Contato',
      href: '#contato'
    }
  ]

  return (
    <header className='border-b border-divider'>
      <nav className='container flex h-18 w-full items-center justify-between'>
        <Link href={'/'}>
          <Logo className='h-6' />
        </Link>

        <button
          onClick={toggleIsOpen}
          className='grid size-8 cursor-pointer place-items-center rounded text-brand-darker hover:bg-brand-primary/5 hover:text-brand-primary lg:hidden'>
          {!isOpen && <MenuIcon className='size-6 ' />}
          {isOpen && <XIcon className='size-6 ' />}
        </button>

        <ul className='hidden lg:flex lg:items-center lg:gap-8'>
          <span className='sr-only'>Menu Desktop</span>
          {navItems.map(item => (
            <Link
              as='li'
              key={item.id}
              href={item.href}
              className='cursor-pointer transition-colors duration-300 hover:text-brand-primary'>
              {item.label}
            </Link>
          ))}
        </ul>
      </nav>

      {isOpen && (
        <ul className='container grid gap-5 pb-6 pt-3 lg:hidden'>
          <span className='sr-only grid'>Menu Mobile</span>
          {navItems.map(item => (
            <Link
              as='li'
              key={item.id}
              href={item.href}
              className='px-1 py-2 hover:bg-gray/5'>
              {item.label}
            </Link>
          ))}
        </ul>
      )}
    </header>
  )
}
