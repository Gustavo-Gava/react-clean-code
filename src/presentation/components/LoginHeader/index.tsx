import { memo } from 'react'
import { Logo } from '../ui/Logo'

function LoginHeaderComponent() {
  return (
    <header className='flex flex-col items-center gap-4 bg-primary py-10'>
      <Logo />

      <h1 className='text-white'>4Dev - Enquetes para Programadores</h1>
    </header>
  )
}

const LoginHeader = memo(LoginHeaderComponent)
export { LoginHeader }
