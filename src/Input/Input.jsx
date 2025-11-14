import React from 'react'
import { useReducer } from 'react'
import { intitialState, reducer } from '../store/store'



export const Input = () => {
    let [state, dispatch] = useReducer(reducer, intitialState)

    console.log(state.todos);


    return (
        <>

            <input
                value={state.text}
                onChange={(e) => dispatch({ type: "changeText", payload: e.target.value })} />
            <button onClick={() => dispatch({ type: 'add' })}>+</button>

            <div>
                {
                    state.todos.map((todo) => (

                        <div key={todo.id}>
                            <input type="checkbox" checked={todo.isDone} onChange={() => dispatch({ type: "checkChange", id: todo.id })} />
                            <li>
                                {todo.title}
                            </li>
                            <button onClick={() => dispatch({ type: "delete", id: todo.id })}>delete</button>
                        </div>
                    ))
                }
            </div>

        </>

    )
}
