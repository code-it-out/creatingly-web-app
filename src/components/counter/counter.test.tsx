import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from './counter'

describe('counter', () => {
  it('increments twice to reach 2', async () => {
    render(<Counter />)

    const user = userEvent.setup()

    await user.click(screen.getByText('+'))
    await user.click(screen.getByText('+'))

    expect(screen.getByTestId('count')).toHaveTextContent('2')
  })

  it('decrement once to reach 1', async () => {
    render(<Counter />)

    const user = userEvent.setup()

    await user.click(screen.getByText('+'))
    await user.click(screen.getByText('+'))

    expect(screen.getByTestId('count')).toHaveTextContent('2')

    await user.click(screen.getByText('-'))

    expect(screen.getByTestId('count')).toHaveTextContent('1')
  })

  it('make decrement button disabled if counter is 0', async () => {
    render(<Counter />)

    const user = userEvent.setup()

    expect(screen.getByTestId('count')).toHaveTextContent('0')
    expect(screen.getByText('-')).toBeDisabled()

    await user.click(screen.getByText('+'))

    expect(screen.getByTestId('count')).toHaveTextContent('1')
    expect(screen.getByText('-')).not.toBeDisabled()

    await user.click(screen.getByText('-'))

    expect(screen.getByTestId('count')).toHaveTextContent('0')
    expect(screen.getByText('-')).toBeDisabled()
  })
})
