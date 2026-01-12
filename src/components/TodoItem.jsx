import { useState } from 'react';
import styles from './todoitem.module.css';

export default function TodoItem({item,todos,setTodos}) {

    function handleDelete(e){
        setTodos(todos.filter(x=>x!==e));
    }

    function handleComplete(e){
        setTodos(todos.map(x=>x.name === e ? {...x,done:!x.done} : {...x,done:x.done}));
    }

    const completedClassName = item.done?styles.completed : "";
    return (
        <div className={styles.container}>
            <div className={styles.itemName}>
                <span onClick={()=>handleComplete(item.name)} className={completedClassName}>
                    {item.name}
                </span>
            <button onClick={()=>handleDelete(item)} className={styles.deleteButton}>Delete</button>
            <hr className={styles.line}/>
            </div>
        </div>
    )
}