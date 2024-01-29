import Link from 'next/link'
import {
  FacebookIcon,
  InstagramIcon,
  LogoLight,
  YoutubeIcon
} from '../ui/icons'

export default function Footer() {
  return (
    <footer className=' bg-brand-primary text-white'>
      <div className='container flex flex-col gap-8 py-16 lg:flex-row lg:justify-between'>
        <div>
          <Link href={'/'}>
            <LogoLight className='h-8 lg:h-10 ' />
          </Link>

          <p className='mt-6'>©2021 Beautysalon.</p>
          <p className='mt-3'>Todos os direitos reservados.</p>
        </div>

        <ul className='inline-flex items-center gap-8'>
          <li>
            <InstagramIcon className='size-6' />
          </li>
          <li>
            <FacebookIcon className='size-6' />
          </li>
          <li>
            <YoutubeIcon className='size-6' />
          </li>
        </ul>
      </div>
    </footer>
  )
}
