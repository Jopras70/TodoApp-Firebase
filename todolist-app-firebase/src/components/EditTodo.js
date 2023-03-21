import Modal from "./Modal";
import { useState } from "react";
import "../styles/editTodo.css";
import { doc, updateDoc } from "firebase/firestore"
import { db } from "../firebase"

function EditTodo({ open, onClose, toEditTitle, toEditDescription, id }) {
  const [title, setTitle] = useState(toEditTitle);
  const [description, setDescription] = useState(toEditDescription);

  /* function to update document in firestore */
  const handleUpdate = async(e) => {
    e.preventDefault()
    const todoDocRef = doc(db, "tasks", id)
    try{
      await updateDoc(todoDocRef, {
        title: title,
        description: description
      })
      onClose()
    } catch(err){
      alert(err)
    }
  }

  return (
    <Modal modalLable="Edit Todo" onClose={onClose} open={open}>
      <form onSubmit={handleUpdate} className="editTodo" name="updateTodo">
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value.toUpperCase())}
          value={title}
        />
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button type="submit">Edit</button>
      </form>
    </Modal>
  );
}

export default EditTodo;
