import { type ButtonHTMLAttributes, type ReactNode } from 'react'
import { LoadingRing } from '../LoadingRing'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  isLoading?: boolean
}

export function Button({ children, isLoading = false, ...rest }: ButtonProps) {
  return (
    <button
      className='flex h-12 w-full items-center justify-center rounded-md bg-primary p-2 text-base text-white duration-200 hover:bg-primary-light disabled:cursor-not-allowed disabled:bg-gray-300'
      disabled={isLoading || rest.disabled}
      {...rest}
    >
      {isLoading ? <LoadingRing /> : children}
    </button>
  )
}
