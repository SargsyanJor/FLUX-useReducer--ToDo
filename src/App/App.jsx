import { Input } from '../Component/Input/Input'
import { useReducer } from 'react'
import { intitialState, reducer } from '../store/store'

import './Styles/App.css'

function App() {

  let [state, dispatch] = useReducer(reducer, intitialState)

  return (
    <section >
      <div className="container">
        <Input state={state} dispatch={dispatch} />
      </div>
    </section>
  )
}

export default App
