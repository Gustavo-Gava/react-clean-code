import { CheckCircle, WarningCircle } from '@phosphor-icons/react'
import { forwardRef } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  containerProps?: React.HTMLAttributes<HTMLDivElement>
}

const isValid = true
const error = false

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ containerProps, ...rest }, ref) => {
    const border = isValid ? 'border-green-500' : 'border-primary-light'

    return (
      <div
        className={`group flex w-full items-center justify-between rounded border-[1px] p-2 outline-double outline-0 outline-primary [&:has(input:focus)]:outline-1 ${border}`}
        {...containerProps}
      >
        <input
          type='password'
          className='flex flex-1 rounded text-base outline-none placeholder:text-sm'
          ref={ref}
          {...rest}
        />

        {isValid && <CheckCircle className='text-green-500' size={22} />}

        {error && <WarningCircle className='text-red-500' size={22} />}
      </div>
    )
  }
)

Input.displayName = 'Input'
