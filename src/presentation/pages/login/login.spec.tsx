import { screen, render } from '@testing-library/react'
import { Login } from '@/presentation/pages'

describe('Login Component', () => {
  test('should render Login component', () => {
    render(<Login />)
  })

  test('should render Login component with correct initial state', () => {
    render(<Login />)
    const submitButton = screen.getByRole('button', { name: 'Entrar' })

    expect(submitButton).toBeInTheDocument()
  })
})
