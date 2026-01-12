import TodoItem  from "./TodoItem";
import styles from './todolist.module.css';

export default function TodoList({todos,setTodos}){
    const sortedTodos = todos.slice().sort((a,b)=>Number(a.done)-Number(b.done));
    const showContainer = todos.length === 0 ? "":styles.list;
    return <div className={showContainer}>
         {sortedTodos.map(item=>(<TodoItem key={item.name} item={item} todos={todos} setTodos={setTodos}/>))}
    </div>
}