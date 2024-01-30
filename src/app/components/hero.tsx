import Image from 'next/image'

import pictureHero from '@/assets/image01.jpg'
import { Button } from '@/components/ui/button'
import Divider from '@/components/ui/divider'

export default function Hero() {
  return (
    <section className=' overflow-hidden'>
      <div className='grid gap-8 pb-16 pt-24 lg:container lg:grid-cols-2 lg:items-center lg:py-44'>
        <figure className='relative'>
          <Image
            src={pictureHero}
            alt='Mulher cortando cabelo com cliente sorridente'
            className='z-10 rounded object-cover object-center'
            quality={100}
          />

          <div className='absolute -right-6 -top-10 -z-10 h-full w-full rounded bg-brand-secondary lg:-right-24 lg:-top-16'></div>
        </figure>
        <div className='px-6 text-center lg:order-first lg:w-[396px] lg:px-0 lg:text-left'>
          <h2 className='text-3xl lg:text-4xl'>
            Saúde natural para os seus cabelos
          </h2>
          <p className='pt-4 lg:text-lg'>
            Um salão exclusivo em São Paulo, especializado em tratamentos
            naturais.
          </p>

          <Button className='mt-8 lg:mt-6' asChild>
            <a href='#'>Agendar um horário</a>
          </Button>
        </div>
      </div>

      <Divider />
    </section>
  )
}
