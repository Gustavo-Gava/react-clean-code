import { Button, Footer, Input, LoginHeader } from '@/presentation/components'
import { type Validation } from '@/presentation/protocols/validation'
import { useState } from 'react'

type InputStatus = 'untouched' | 'success' | 'error'

type InputStateProps = {
  status: 'untouched' | 'success' | 'error'
  errorMessage: string
  value: string
}

type FormStateProps = {
  isLoading: boolean
  email: InputStateProps
  password: InputStateProps
}

type Props = {
  validation?: Validation
}

const Login = ({ validation }: Props) => {
  const [formState, setFormState] = useState<FormStateProps>({
    isLoading: false,
    email: {
      status: 'error' as InputStatus,
      errorMessage: 'Campo Obrigatório',
      value: '',
    },
    password: {
      status: 'error' as InputStatus,
      errorMessage: 'Campo Obrigatório',
      value: '',
    },
  })

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    const errorMessage = validation?.validate(name, value)
    const hasError = !(errorMessage !== null)

    // setFormState({
    //   ...formState,
    //   [name]: {
    //     status: 'success',
    //     errorMessage: '',
    //     value,
    //   },
    // })

    setFormState({
      ...formState,
      [name]: {
        status: hasError ? 'error' : 'success',
        errorMessage: errorMessage ?? '',
      },
    })
  }

  return (
    <div className='flex h-screen w-full flex-col justify-between bg-slate-100'>
      <LoginHeader />

      <form className='mx-auto flex w-full flex-col items-center justify-center gap-4 rounded bg-white p-4 text-xl shadow-md md:w-96 md:p-8'>
        <h2 className='font-bold'>Login</h2>

        <Input
          type='email'
          name='email'
          placeholder='Digite seu e-mail'
          errorMessage={formState.email.errorMessage}
          status={formState.email.status}
          onChange={onInputChange}
          value={formState.email.value}
        />

        <Input
          type='password'
          name='password'
          placeholder='Digite sua senha'
          errorMessage={formState.password.errorMessage}
          status={formState.password.status}
          onChange={onInputChange}
          value={formState.password.value}
        />

        <Button
          type='submit'
          isLoading={formState.isLoading}
          disabled={
            formState.email.status === 'error' ||
            formState.password.status === 'error'
          }
        >
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
