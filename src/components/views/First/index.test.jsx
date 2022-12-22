import { render, screen } from '@testing-library/react'
import { First } from '.'

describe('First exercise', () => {
  test('Should work without crashing', () => {
    render(<First />)
    expect(screen.getByText('First!')).toBeDefined()
  })
})
