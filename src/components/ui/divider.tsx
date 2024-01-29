import { cn } from '@/lib/utils'

type DividerProps = {
  className?: string
}

export default function Divider({ className }: DividerProps) {
  return (
    <hr
      className={cn(
        'h-0.5 border-none bg-gradient-to-l from-brand-secondary/0 via-brand-secondary via-70% to-brand-primary',
        className
      )}
    />
  )
}
