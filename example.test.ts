import { expect, test, vi,describe } from 'vitest'
import { testFn } from './utils'

describe('functions', () => {
  test('test', () => {
    const callback = vi.fn()
    testFn(12, callback)
    expect(callback).toHaveBeenCalled()
  })
})
