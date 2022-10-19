import {useSelector, useDispatch} from "react-redux";
import {deleteTodo, updateTodo} from "../redux/slice/todo.slice";
import {useState} from "react";

const Home = () => {
    const todos = useSelector((state) => state.todo)
    const [form, setForm] = useState({title: ''})
    const [update, setUpdate] = useState(true)
    const dispatch = useDispatch()

    const handleDelete = id => {
        dispatch(deleteTodo(id))
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(updateTodo(form))
        setUpdate(true)
        setForm({title: ''})
    }

    const handleChange = e => {
        setForm({...form, title: e.target.value})
    }

    const handleUpdate = todo => {
        setUpdate(false)
        setForm(todo)
    }

    return (
        <div>
            <div>
                TODOS
            </div>
            <div>
                {todos.map(todo => (
                    <div>
                        <div>
                            {todo.id}
                        </div>
                        <div>
                            {todo.title}
                        </div>
                        <div>
                            {todo.status ? 'done' : 'not Done'}
                        </div>
                        <button onClick={() => handleDelete(todo.id)}>
                            delete
                        </button>
                        <button onClick={() => handleUpdate(todo)}>
                            update
                        </button>
                    </div>
                ))}
            </div>
            <div>
                FORM
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Title</label>
                    <input disabled={update} onChange={handleChange} name={'title'} value={form.title}/>
                    <button type={'submit'}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Home