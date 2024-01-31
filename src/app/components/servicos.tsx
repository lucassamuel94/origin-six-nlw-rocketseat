import ContainerSection from '@/components/ui/container-section'
import { Cosmetic, Trim, WomanHair } from '@/components/ui/icons'
import TitleSection from '@/components/ui/title-section'

type Service = {
  id: string,
  name: string,
  resume: string,
  icon: React.ReactNode
}

export default function Servicos() {
  const dataServices: Array<Service> = [
    {
      id: '',
      name: 'Terapia capilar',
      resume:
        'Terapia completa para couro cabeludo e fios, protegendo todos os tipos de cabelos, inclusive os longos e finos.',
      icon: <WomanHair className='size-20 text-brand-primary' />
    },
    {
      id: '',
      name: 'Cortes',
      resume:
        'A nossa equipe é repleta de profissionais renomados, famosos por lançarem tendências com cortes diferenciados e clássicos.',
      icon: <Trim className='size-20 text-brand-primary' />
    },
    {
      id: '',
      name: 'Tratamentos',
      resume:
        'O beautysalon conta com diversos tratamentos naturais e totalmente veganos, para qualquer tipo de cabelo.',
      icon: <Cosmetic className='size-20 text-brand-primary' />
    }
  ]
  return (
    <ContainerSection id='servicos'>
      <div className='container flex flex-col items-center'>
        <div className='max-w-[576px] space-y-4 lg:text-center'>
          <TitleSection>Serviços</TitleSection>

          <p>
            Com mais de 10 anos no mercado, o{' '}
            <span className='font-bold text-brand-primary'>Beautysalon</span> já
            conquistou clientes de inúmeros países com seus tratamentos
            exclusivos e totalmente naturais
          </p>
        </div>

        <ul className='mt-12 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-8'>
          {dataServices.map(item => (
            <li
              key={item.id}
              className='flex flex-col items-center border-b-4 border-brand-primary bg-white px-8 py-14 text-center shadow-md transition-all hover:scale-[1.02] lg:px-12'>
              <figure>{item.icon}</figure>
              <h3 className='mt-6 text-2xl'>{item.name}</h3>
              <p className='mt-3'>{item.resume}</p>
            </li>
          ))}
        </ul>
      </div>
    </ContainerSection>
  )
}
