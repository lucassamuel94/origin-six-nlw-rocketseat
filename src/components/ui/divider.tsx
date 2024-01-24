import { cn } from '@/lib/utils'

type DividerProps = {
  className?: string
}

export default function Divider({ className }: DividerProps) {
  return (
    <hr
      className={cn(
        'from-brand-secondary/0 via-brand-secondary to-brand-primary h-0.5 border-none bg-gradient-to-l via-70%',
        className
      )}
    />
  )
}
