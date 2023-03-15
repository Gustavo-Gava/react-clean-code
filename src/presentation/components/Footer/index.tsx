import { memo } from 'react'

function FooterComponent() {
  return <footer className='h-12 bg-primary' />
}

const Footer = memo(FooterComponent)
export { Footer }
