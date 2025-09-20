export interface CounterState {
  count: number
}

export type CounterAction = { type: 'increment' | 'decrement' }

export const initialState: CounterState = { count: 0 }

export function counterReducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: Math.max(0, state.count - 1) }
    default:
      return state
  }
}
