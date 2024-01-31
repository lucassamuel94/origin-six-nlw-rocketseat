import ContainerSection from '@/components/ui/container-section'
import TitleSection from '@/components/ui/title-section'
import Image from 'next/image'

import pictureSobre from '@/assets/image02.jpg'

export default function Sobre() {
  return (
    <ContainerSection className='' id='sobre'>
      <div className='container space-y-16 pt-10 lg:grid lg:grid-cols-2 lg:items-start lg:space-y-0'>
        <div className='relative'>
          <Image
            src={pictureSobre}
            alt='Mulher cortando cabelo com cliente sorridente'
            className='aspect-[1/0.7] max-h-[400px] w-full scale-125 rounded object-cover object-center sm:scale-105 lg:-ml-24'
            quality={100}
          />

          <div className='absolute -left-[33%] -top-[25%] -z-10 aspect-[1/0.7] w-full max-w-[570px] rounded bg-brand-secondary sm:-top-[12%] lg:-left-1/3 lg:-top-12'></div>
        </div>
        <div className='space-y-4'>
          <TitleSection>Sobre nós</TitleSection>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sagittis arcu quis nisi luctus, id accumsan felis tristique. Proin
            quis bibendum diam. Sed consequat nisl laoreet eros ultricies
            pellentesque. Nullam in est porta, pellentesque massa vitae,
            vehicula risus.
            <br />
            <br />
            In placerat, felis vitae sodales dictum, lacus quam pretium mi, ut
            pretium urna turpis eu dui. Vestibulum id ullamcorper nibh. Donec
            luctus, nunc finibus elementum suscipit, tortor augue vulputate
            sapien, vitae feugiat enim augue sed.
            <br />
            <br />
            Quisque id aliquam elit. Suspendisse congue pharetra maximus. Duis
            rutrum velit a leo euismod dictum. Sed sodales est efficitur arcu
            tincidunt tincidunt. Curabitur fringilla, risus at feugiat feugiat,
            nisl nulla tincidunt tellus, elementum elementum lorem nisl eleifend
            dolor. Nullam eget dui at sem ullamcorper luctus.
          </p>
        </div>
      </div>
    </ContainerSection>
  )
}
