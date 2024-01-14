import "./App.css"
import useInput from './hooks/useInput'
import axios from 'axios'

function Create() {
  const taskName = useInput('');
  const taskDescription = useInput('');
  
  const handleAdd = () => {
    axios.post('http://localhost:3001/add' , {task: taskName.value, description: taskDescription.value})
    .then(() => location.reload())
    .catch(err => console.log(err))
  } 

  return (
    <div className = "create_form">
        <input type='text' placeholder='Write you want to do' {...taskName} />
        <input type='text' placeholder="Write description of your task" {...taskDescription}/>
        <button type='button' onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create