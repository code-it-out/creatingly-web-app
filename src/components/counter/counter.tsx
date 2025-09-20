import { useReducer } from 'react'
import { counterReducer, initialState, type CounterAction } from './counter.reducer'

export default function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialState)

  const handleClick = (action: CounterAction) => dispatch(action)

  return (
    <section className="flex flex-col items-center gap-4 p-6 max-w-sm mx-auto bg-white">
      <h1 className="text-2xl font-bold">Counter</h1>
      <p data-testid="count" className="text-5xl font-mono font-extrabold">
        {state.count}
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => handleClick({ type: 'decrement' })}
          className="w-10 h-10 bg-rose-600 hover:bg-rose-700 text-white disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500"
          disabled={!state.count}
        >
          -
        </button>
        <button
          onClick={() => handleClick({ type: 'increment' })}
          className="w-10 h-10 bg-green-600 hover:bg-green-700 text-white"
        >
          +
        </button>
      </div>
    </section>
  )
}
