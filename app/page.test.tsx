import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, within } from '@testing-library/react'
import Home from './page'
 
describe('Page', () => {
  it('renders name', () => {
    render(<Home />)
 
    const name = screen.getByText('Sooraj Modi', { exact: true });
 
    expect(name).toBeInTheDocument()
    expect(name).toHaveTextContent('Sooraj Modi');
  })

  it('renders title', () => {
    render(<Home />)
 
    const title = screen.getByText('Software Developer', { exact: true });
 
    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent('Software Developer');
  })

  it('renders profile image', () => {
    render(<Home />)
 
    const image = screen.getByRole('img');
 
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', expect.stringMatching('profile\.png'))
    expect(image).toHaveAttribute('alt', 'Sooraj Modi profile picture')
    expect(image).toHaveAttribute('height', "300")
    expect(image).toHaveAttribute('width', "300")
  })
})
