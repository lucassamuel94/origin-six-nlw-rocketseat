'use client'

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { Logo } from '../ui/icons'

export default function Header() {
  return (
    <header>
      <nav className='container flex h-18 w-full items-center justify-between'>
        <Link href={'/'}>
          <Logo className='h-6' />
        </Link>

        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <MenuIcon className='size-6' />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </nav>
    </header>
  )
}
