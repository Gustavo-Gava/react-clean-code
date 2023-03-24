import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

import { FiCheckCircle, FiXCircle } from 'react-icons/fi'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  containerProps?: React.HTMLAttributes<HTMLDivElement>
  status?: 'error' | 'success' | 'untouched'
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ containerProps, className, status = 'untouched', type, ...rest }, ref) => {
    const borderColor =
      status === 'success'
        ? 'border-green-500'
        : status === 'error'
        ? 'border-primary-light'
        : 'border-gray-300'

    return (
      <div
        className={twMerge(
          `group flex w-full items-center justify-between rounded border-[1px] p-2 outline-double outline-0 outline-primary [&:has(input:focus)]:outline-1 ${borderColor}`,
          className
        )}
        role='input-wrapper'
        {...containerProps}
      >
        <input
          className='flex flex-1 rounded text-base outline-none placeholder:text-sm'
          aria-label={type}
          type={type}
          ref={ref}
          {...rest}
        />

        {status === 'success' && (
          <FiCheckCircle
            role='status'
            className='text-green-500'
            size={22}
            aria-label='success-icon'
          />
        )}

        {status === 'error' && (
          <FiXCircle
            role='status'
            title='error-icon'
            aria-label='error-icon'
            className='text-red-500'
            size={22}
          />
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
