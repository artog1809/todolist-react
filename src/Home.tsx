import React, { useEffect, useState } from 'react'
import Create from './Create'
import "./App.css"
import axios from 'axios';
import { BsCircleFill } from "react-icons/bs";
import { BsTrashFill } from "react-icons/bs";
import { BsCheckCircleFill } from 'react-icons/bs';

// Определяем тип для объекта todo
interface Todo {
    _id: number; // Измените тип в соответствии с вашей структурой данных
    task: string;
    done: boolean;
    // Добавьте другие свойства, если у ваших объектов todo есть дополнительные поля
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
            .then(result => {
                fetchTodos();
            })
            .catch(err => console.log(err));
    };

    const handleDelete = (id: number) => {
        axios.delete(`http://localhost:3001/delete/${id}`)
            .then(result => {
                fetchTodos();
            })
            .catch(err => console.log(err));
    }


    return (
        <div className='home'>
            <h2 >ToDo List</h2>
            <Create />
            {todos.length === 0 ?
                <div><h2>No Record</h2></div>
                :
                todos.map(todo => (
                    <div className='task'>
                        <div className='checkbox' onClick={() => handleEdit(todo._id)}>
                            {todo.done ?
                                <BsCheckCircleFill className='icon' />
                                : <BsCircleFill className='icon' />
                            }
                            <p className={todo.done ? "line-through" : "linenot-through"}>{todo.task}</p>
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