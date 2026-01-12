
import { useState } from "react";
import styles from '../components/form.module.css';
export default function Form({todos,setTodos}){

    const [todo,setTodo] = useState({name:"",done:false});
    
    function onSubmit(e){
        e.preventDefault();
        setTodos([...todos,todo]);
        setTodo({name:"",done:false});
    }
    return(
         <form className={styles.todoForm}  onSubmit={onSubmit}>
            <div className={styles.inputContainer}>
                 <input className={styles.todoInput} type ="text" value={todo.name} placeholder="Enter the input" onChange={(e)=>setTodo({name:e.target.value,done:false})}/>
                  <button className={styles.submitButton} type="submit">Add</button>
            </div>
        </form>
    )
}