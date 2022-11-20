import TodoItem from "./TodoItem.jsx"
import '../App.css'


export default function Todos(props){
    return(
        <>
            <h1 className={`text-center ${props.mode == 'bg-gray-900'?'text-white':'text-gray-900'} text-4xl`}>{props.todos.length==0?"No Todos to Display":"Your todos"} </h1>
        <div className="flex flex-col container mx-auto w-11/12 my-10  justify-center " id="notesdiv">
            {props.todos.map((todo)=>{
           return <TodoItem key={todo.sno} onDelete={()=>props.onDelete(todo)} todo={todo} mode={props.mode}/>

            })}
</div>
        </>
        )
}