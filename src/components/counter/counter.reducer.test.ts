import { counterReducer, initialState } from './counter.reducer'

describe('counter.reducer', () => {
  it('increments count to 1', () => {
    const state = counterReducer(initialState, { type: 'increment' })
    expect(state.count).toBe(1)
  })

  it('increments count to 2', () => {
    const stateOne = counterReducer(initialState, { type: 'increment' })
    const stateTwo = counterReducer(stateOne, { type: 'increment' })
    expect(stateTwo.count).toBe(2)
  })

  it('decrements count but not below 0', () => {
    const state = counterReducer(initialState, { type: 'decrement' })
    expect(state.count).toBe(0)
  })

  it('decrements count to 1', () => {
    const stateOne = counterReducer(initialState, { type: 'increment' })
    const stateTwo = counterReducer(stateOne, { type: 'increment' })
    expect(stateTwo.count).toBe(2)

    const stateThree = counterReducer(stateTwo, { type: 'decrement' })
    expect(stateThree.count).toBe(1)
  })
})
