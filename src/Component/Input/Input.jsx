import { ToDo } from '../ToDo/ToDo'

import "./Input.css"

export const Input = ({ state, dispatch }) => {


    return (


        <div className='section'>

            <div className="sectionInput">
                <input
                    className='addInput'
                    placeholder="Write a task..."
                    value={state.text}
                    onChange={(e) =>  dispatch({ type: "changeText", payload: e.target.value })} />
                <button 
                className='addBTN'
                 onClick={() => dispatch({ type: 'add' })}>+</button>
            </div>


            <div className='sectionTodos'>
                {
                    state.todos.map((todo) => <ToDo key={todo.id} todo={todo} dispatch={dispatch} />)
                }
            </div>

        </div>

    )
}
