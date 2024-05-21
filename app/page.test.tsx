import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, within } from '@testing-library/react'
import Page from './page'
import { messages } from './pages'
 
describe('Page', () => {
  it('renders name', () => {
    render(<Page />)

    const name = screen.getByRole('heading', { level: 1 });
 
    expect(name).toBeInTheDocument()
    expect(name).toHaveTextContent(messages.name);
  })

  it('renders title', () => {
    render(<Page />)
 
    const title = screen.getByRole('heading', { level: 2 });
 
    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent(messages.title);
  })

  it('renders description', () => {
    render(<Page />)

    const description = screen.getByRole('paragraph');

    expect(description).toBeInTheDocument()
    expect(description).toHaveTextContent(messages.description)
  })

  it('renders profile image', () => {
    render(<Page />)
 
    const image = screen.getByRole('img');
 
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', expect.stringMatching('profile\.png'))
    expect(image).toHaveAttribute('alt', messages.alt)
    expect(image).toHaveAttribute('height', "300")
    expect(image).toHaveAttribute('width', "300")
  })
})
