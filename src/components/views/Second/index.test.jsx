import { render, screen, fireEvent } from '@testing-library/react'
import { beforeEach, expect, test } from 'vitest'
import { Second } from '.'

beforeEach(() => {
  render(<Second />)
})

describe('Second exercise', () => {
  test('Should work without crashing', () => {
    expect(screen.getByRole('article')).toBeDefined()
  })
})
