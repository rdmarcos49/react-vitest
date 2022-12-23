import { render, screen } from '@testing-library/react'
import { First } from '.'

const gifts = ['cat', 'game', 'socks']

describe('First exercise', () => {
  test('Should work without crashing', () => {
    render(<First gifts={gifts} />)
    // expect(screen.queryByTa)
  })

  test('Should render as many "li" as number of gifts', () => {
    render(<First gifts={gifts} />)
    expect(screen.getByRole('list')).toBe(1)
  })
})
