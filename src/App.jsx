import { Input } from './Component/Input/Input'
import { useReducer } from 'react'
import { intitialState, reducer } from './store/store'

import './App.css'

function App() {

  let [state, dispatch] = useReducer(reducer, intitialState)
  
  return (
    <>
      <Input state={state} dispatch={dispatch}/>
    </>
  )
}

export default App
