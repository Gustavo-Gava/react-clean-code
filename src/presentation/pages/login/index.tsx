import { Button, Footer, Input, LoginHeader } from '@/presentation/components'
import { useState } from 'react'

type FormStateProps = {
  isLoading: boolean
  emailErrorMessage: string
  passwordErrorMessage: string
}

const Login = () => {
  const [formState] = useState<FormStateProps>({
    isLoading: false,
    emailErrorMessage: '',
    passwordErrorMessage: '',
  })

  return (
    <div className='flex h-screen w-full flex-col justify-between bg-slate-100'>
      <LoginHeader />

      <form className='mx-auto flex w-full flex-col items-center justify-center gap-4 rounded bg-white p-4 text-xl shadow-md md:w-96 md:p-8'>
        <h2 className='font-bold'>Login</h2>

        <Input
          type='email'
          placeholder='Digite seu e-mail'
          status='untouched'
        />

        <Input
          type='password'
          placeholder='Digite sua senha'
          status='success'
        />

        <Button type='submit' isLoading={formState.isLoading}>
          Entrar
        </Button>

        <span className='mt-2 text-base text-primary hover:cursor-pointer hover:underline'>
          não possui conta? cadastre-se
        </span>
      </form>

      <Footer />
    </div>
  )
}

export default Login
