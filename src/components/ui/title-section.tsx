type TitleSectionProps = {
  children: React.ReactNode
}

export default function TitleSection({ children }: TitleSectionProps) {
  return <h2 className='text-3xl lg:text-4xl'>{children}</h2>
}
