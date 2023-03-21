import Modal from "./Modal"
import {useState} from 'react'
import '../styles/addTodo.css'
import {db} from '../firebase.js'
import {collection, addDoc, Timestamp} from 'firebase/firestore'

function AddTodo({onClose, open}) {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async(e) => {
    e.preventDefault()
    
    try{
      await addDoc(collection(db,"tasks"),{
        title: title,
        description: description,
        completed: false,
        created: Timestamp.now()
      })
  
      onClose()
    } catch(err) {
      alert(err)
    }
  }

  return (
    <Modal modalLable='Add Todo' onClose={onClose} open={open}>
      <form onSubmit={handleSubmit} className='addTodo' name='addTodo'>
        <input 
          type='text' 
          name='title' 
          onChange={(e) => setTitle(e.target.value.toUpperCase())} 
          value={title}
          placeholder='Enter title'/>
        <textarea 
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Enter task decription'
          value={description}></textarea>
        <button type='submit'>Done</button>
      </form> 
    </Modal>
  )
}

export default AddTodo
