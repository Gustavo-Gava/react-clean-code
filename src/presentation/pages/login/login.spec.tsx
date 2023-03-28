import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Login } from '@/presentation/pages'
import { type Validation } from '@/presentation/protocols/validation'

class ValidationSpy implements Validation {
  errorMessage: string = ''
  fieldName: string = ''
  fieldValue: string = ''

  validate(fieldName: string, fieldValue: string) {
    this.fieldName = fieldName
    this.fieldValue = fieldValue
    return this.errorMessage
  }
}

const makeSut = () => {
  const validationSpy = new ValidationSpy()
  const sut = render(<Login validation={validationSpy} />)

  return {
    sut,
    validationSpy,
  }
}

describe('Login Component', () => {
  test('should render Login component', () => {
    makeSut()
  })

  test('should render Login component with correct initial state', () => {
    makeSut()
    const submitButton = screen.getByRole('button', { name: 'Entrar' })

    expect(submitButton).toBeInTheDocument()
  })

  test('should call Validation with correct values', async () => {
    const { validationSpy } = makeSut()

    const emailInput = screen.getByRole('textbox', { name: 'email' })
    await userEvent.type(emailInput, 'email')
    expect(validationSpy.fieldName).toEqual('email')
    expect(validationSpy.fieldValue).toEqual('email')

    const passwordInput = screen.getByTitle('password')
    await userEvent.type(passwordInput, 'password')
    expect(validationSpy.fieldName).toEqual('password')
    expect(validationSpy.fieldValue).toEqual('password')
  })

  test('should have the correct values typed by the user', async () => {
    makeSut()

    const emailInput = screen.getByRole('textbox', { name: 'email' })
    const passwordInput = screen.getByTitle('password')
    await userEvent.type(emailInput, 'email')
    await userEvent.type(passwordInput, 'password')

    expect(emailInput).toHaveValue('email')
    expect(passwordInput).toHaveValue('password')
  })
})
