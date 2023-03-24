import { render, screen } from '@testing-library/react'
import { Button } from '.'

describe('Button Component', () => {
  test('should render Button component', () => {
    render(<Button>Entrar</Button>)
  })

  test('should render loading ring if the "isLoading" property is true', () => {
    render(<Button isLoading>Entrar</Button>)

    const loadingIcon = screen.getByRole('status', { name: 'Loading' })

    expect(loadingIcon).toBeInTheDocument()
  })

  test('should disable button if "isLoading" property is true', () => {
    render(<Button isLoading>Entrar</Button>)

    const submitButton = screen.getByRole('button', { name: 'Loading' })

    expect(submitButton).toBeDisabled()
  })
})
