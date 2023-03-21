import "../styles/title.css";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import { useState, useEffect } from "react";
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import {db} from '../firebase'

function Title() {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const q = query(collection(db, "tasks"), orderBy('created','desc'));
    onSnapshot(q, (querySnapshot) => {
      setTasks(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  }, [])

  return (
    <div className="title">
      <header>To-Do App</header>
      <div className="title__container">
        <button onClick={() => setOpenAddModal(true)}>New Task +</button>
        <div className="title">
          {tasks.map(tasks => (
            <TodoList
              id={tasks.id}
              key={tasks.id}
              completed={tasks.data.completed}
              title={tasks.data.title}
              description={tasks.data.description}
            />
          ))}
        </div>
      </div>

      {openAddModal && (
        <AddTodo onClose={() => setOpenAddModal(false)} open={openAddModal} />
      )}
    </div>
  );
}

export default Title;
