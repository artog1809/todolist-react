import { useEffect, useState } from 'react'
import Create from './Create'
import "./App.css"
import axios from 'axios';
import { BsTrashFill } from "react-icons/bs";

interface Todo {
    _id: number; 
    task: string;
    description: string;
    done: boolean;
}

function Home() {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = () => {
        axios.get('http://localhost:3001/get')
            .then(result => setTodos(result.data))
            .catch(err => console.log(err));
    };

    const handleEdit = (id: number) => {
        axios.put(`http://localhost:3001/update/${id}`)
            .then(() => {
                fetchTodos();
            })
            .catch(err => console.log(err));
    };

    const handleDelete = (id: number) => {
        axios.delete(`http://localhost:3001/delete/${id}`)
            .then(() => {
                fetchTodos();
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='home'>
            <h2 >TO-DO LIST</h2>
            <Create />
            {todos.length === 0 ?
                <div><h2>No Record</h2></div>
                :
                todos.map(todo => (
                    <div className='task'>
                        <div className='checkbox' onClick={() => handleEdit(todo._id)}>
                            <div className = 'task__title'>{todo.task}</div>
                            <div className= 'subtitle'>{todo.description}</div>
                        </div>
                        <div>
                            <span><BsTrashFill className='icon' onClick = {() => handleDelete(todo._id)}></BsTrashFill></span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Home