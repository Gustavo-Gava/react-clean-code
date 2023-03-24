import { render, screen } from '@testing-library/react'
import { Input } from '.'

describe('Input Component', () => {
  it('should render Input component', () => {
    render(<Input />)
  })

  it('should render input with correct type', () => {
    render(<Input type='email' />)
    const input = screen.getByRole('textbox', { name: 'email' })

    expect(input).toHaveAttribute('type', 'email')
  })

  it('should render error icon if error is provided', () => {
    render(<Input status='error' type='email' />)
    const errorIcon = screen.getByRole('status', { name: 'error-icon' })

    expect(errorIcon).toBeInTheDocument()
  })

  it('should render success icon if success is provided', () => {
    render(<Input status='success' type='email' />)
    const successIcon = screen.getByRole('status', { name: 'success-icon' })

    expect(successIcon).toBeInTheDocument()
  })
})
