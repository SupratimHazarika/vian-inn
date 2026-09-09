import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-none text-sm font-medium tracking-wide transition-colors disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-teal text-white hover:bg-teal-dark',
        outline: 'border border-teal text-teal hover:bg-teal hover:text-white',
        cream: 'bg-cream text-ink hover:bg-white',
        ghost: 'text-ink hover:text-teal',
      },
      size: {
        default: 'h-11 px-6',
        lg: 'h-12 px-8',
        sm: 'h-9 px-4 text-xs uppercase tracking-[0.16em]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
