import "./ToDo.css"

export const ToDo = ({todo,dispatch}) => {
    return (


        <div key={todo.id}>
            <input type="checkbox" checked={todo.isDone} onChange={() => dispatch({ type: "checkChange", id: todo.id })} />
            <li className={todo.isDone ? "color" : ''}>
                {todo.title}
            </li>
            <button onClick={() => dispatch({ type: "delete", id: todo.id })}>delete</button>
        </div>

    )
}
