import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

describe('App component', () => {
  test('renders key static content', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { level: 1, name: /my personal portfolio/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /under construction/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: /iasonas papadopoulos/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/click on the vite and react logos/i)).toBeInTheDocument()
  })

  test('renders external links with expected hrefs', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: /vite logo/i })).toHaveAttribute(
      'href',
      'https://vite.dev',
    )
    expect(screen.getByRole('link', { name: /react logo/i })).toHaveAttribute(
      'href',
      'https://react.dev',
    )
  })

  test('increments counter when button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    const button = screen.getByRole('button', { name: /count is 0/i })
    await user.click(button)

    expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument()
  })

  test('renders code hint text', () => {
    render(<App />)
    expect(screen.getByText('src/App.jsx')).toBeInTheDocument()
  })
})
