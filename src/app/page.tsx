import Divider from '@/components/ui/divider'
import Hero from './components/hero'
import Servicos from './components/servicos'
import Sobre from './components/sobre'

export default function HomeApp() {
  return (
    <main>
      <Hero />
      <Sobre />
      <Divider className='rotate-180' />
      <Servicos />
      <Divider />
    </main>
  )
}
