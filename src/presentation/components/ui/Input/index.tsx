import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

import { FiCheckCircle, FiXCircle } from 'react-icons/fi'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  containerProps?: React.HTMLAttributes<HTMLDivElement>
}

const isValid = true
const error = false

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ containerProps, className, ...rest }, ref) => {
    const border = isValid ? 'border-green-500' : 'border-primary-light'

    return (
      <div
        className={twMerge(
          `group flex w-full items-center justify-between rounded border-[1px] p-2 outline-double outline-0 outline-primary [&:has(input:focus)]:outline-1 ${border}`,
          className
        )}
        {...containerProps}
      >
        <input
          type='password'
          className='flex flex-1 rounded text-base outline-none placeholder:text-sm'
          ref={ref}
          {...rest}
        />

        {isValid && <FiCheckCircle className='text-green-500' size={22} />}

        {error && <FiXCircle className='text-red-500' size={22} />}
      </div>
    )
  }
)

Input.displayName = 'Input'
