import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, within } from '@testing-library/react'
import Home from './page'
 
describe('Page', () => {
  it('renders getStarted message', () => {
    render(<Home />)
 
    const getStarted = screen.getByText('Get started by editing', { exact: false });
 
    expect(getStarted).toBeInTheDocument()
    expect(getStarted).toHaveTextContent('Get started by editing');
  })
})
