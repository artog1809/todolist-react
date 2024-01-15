import { useEffect, useState } from 'react';
import Create from './Create';
import "./App.css";
import axios from 'axios';
import { BsTrashFill } from "react-icons/bs";
import { MdDone } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";


interface Todo {
    _id: number;
    task: string;
    description: string;
    done: boolean;
}

function Home() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [filterCompleted, setFilterCompleted] = useState(false);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = () => {
        axios.get('http://localhost:3001/get')
            .then(result => setTodos(result.data))
            .catch(err => console.log(err));
    };

    const handleDelete = (id: number) => {
        axios.delete(`http://localhost:3001/delete/${id}`)
            .then(() => {
                fetchTodos();
            })
            .catch(err => console.log(err));
    };

    const handleDone = (id: number) => {
        axios.put(`http://localhost:3001/update/${id}`)
            .then(() => {
                const updatedTodos = todos.map(todo =>
                    todo._id === id ? { ...todo, done: !todo.done } : todo
                );
                setTodos(updatedTodos);
            })
            .catch(err => console.log(err));
    };

    const filteredTodos = filterCompleted ? todos.filter(todo => todo.done) : todos.filter(todo => !todo.done);

    return (
        <div className='home'>
            <div className='title'>TO-DO LIST</div>
            <Create />
            <div className='filter__btns'>
                <button className={filterCompleted ? 'filter__btn' : 'filter__btn__active'} onClick={() => setFilterCompleted(false)}>Not Completed</button>
                <button className={filterCompleted ? 'filter__btn__active' : 'filter__btn'} onClick={() => setFilterCompleted(true)}>Completed</button>
            </div>
            <div className='tasks'>
                {filteredTodos.length === 0 ?
                    <div>
                        <img className = 'img' src="public/sad.png"/>
                        <div className = "norecord">Oops! It's Empty</div>
                        <div className='norecord'>Look's like you don't have anything in your list</div>
                    </div>
                    :
                    filteredTodos.map(todo => (
                        <div className={`task ${todo.done ? 'done' : ''}`} key={todo._id}>
                            <div className='checkbox'>
                                <div className='task__title'>{todo.task}</div>
                                <div className='task__subtitle'>{todo.description}</div>
                            </div>
                            <div>
                                <span><BsTrashFill className='icon' onClick={() => handleDelete(todo._id)}></BsTrashFill></span>
                            </div>
                            <div><span>
                                {todo.done ? 
                                (<AiOutlineClose className='icon' onClick={() => handleDone(todo._id)}></AiOutlineClose>)
                                :
                                (<MdDone className='icon' onClick={() => handleDone(todo._id)}></MdDone>)}
                                </span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Home;
