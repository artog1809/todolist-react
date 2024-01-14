import React, { useState } from 'react'
import "./App.css"
import useInput from './hooks/useInput'
import axios from 'axios'

function Create() {
  const task = useInput('');
  
  const handleAdd = () => {
    axios.post('http://localhost:3001/add' , {task: task.value})
    .then(result => location.reload())
    .catch(err => console.log(err))
  } 

  return (
    <div className = "create_form">
        <input type='text' placeholder='Entet text' {...task} />
        <button type='button' onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create