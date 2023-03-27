import { screen, render } from '@testing-library/react'
import { Login } from '@/presentation/pages'

const makeSut = () => {
  render(<Login />)
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
})
