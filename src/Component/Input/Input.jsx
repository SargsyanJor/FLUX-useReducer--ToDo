import { ToDo } from '../ToDo/ToDo'

import "./Input.css"

export const Input = ({ state, dispatch }) => {


    return (
        <div>

            <input
                placeholder="Write a task..."
                value={state.text}
                onChange={(e) => dispatch({ type: "changeText", payload: e.target.value })} />
            <button onClick={() => dispatch({ type: 'add' })}>+</button>


            <div>
                {
                    state.todos.map((todo) => <ToDo key={todo.id} todo={todo} dispatch={dispatch} />)
                }
            </div>

        </div>

    )
}
