import { cn } from '@/lib/utils'

type ContainerSectionProps = {
  children: React.ReactNode,
  id?: string,
  className?: string
}

export default function ContainerSection({
  children,
  id,
  className
}: ContainerSectionProps) {
  return (
    <section id={id} className={cn('py-20 lg:py-40', className)}>
      {children}
    </section>
  )
}
