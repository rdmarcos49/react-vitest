import { render, screen, fireEvent } from '@testing-library/react'
import { beforeEach, expect, test } from 'vitest'
import { First } from '.'

const gifts = 'cat game socks'
const giftsLength = gifts.split(' ').length
const wrappedGifts = [
  '*****N*cat*N*****',
  '******N*game*N******',
  '*******N*socks*N*******'
]

beforeEach(() => {
  render(<First />)
})

describe('First exercise', () => {
  test('Should work without crashing', () => {
    expect(screen.getByRole('article')).toBeDefined()
  })

  test('Should render as many "li" as number of gifts', () => {
    fireEvent.change(screen.getByRole('textbox'), { target: { value: gifts } })
    fireEvent.click(screen.getAllByRole('button')[0])
    expect(screen.getAllByRole('listitem').length).toBe(giftsLength)
  })

  test('Input should be empty after clean it', () => {
    fireEvent.change(screen.getByRole('textbox'), { target: { value: gifts } })
    expect(screen.getByRole('textbox').value).toBe(gifts)
    fireEvent.click(screen.getAllByRole('button')[1])
    expect(screen.getByRole('textbox').value).toBe('')
  })

  test('Should be on screen all the wrapped gifts', () => {
    fireEvent.change(screen.getByRole('textbox'), { target: { value: gifts } })
    fireEvent.click(screen.getAllByRole('button')[0])
    expect(screen.getByText(wrappedGifts[0])).toBeDefined()
    expect(screen.getByText(wrappedGifts[1])).toBeDefined()
    expect(screen.getByText(wrappedGifts[2])).toBeDefined()
  })
})
