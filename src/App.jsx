import './App.css'
import React,{ useState, useEffect} from "react"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Todos from "./components/Todos.jsx"
import AddTodo from "./components/AddTodo.jsx"
import Alert from "./components/Alert.jsx"

export default function App() {
    const[mode, setMode,]=useState("bg-gray-300")
    const[mdtxt, setMdtxt]=useState("Enable dark mode")
    const removeClass=()=>{
          document.body.classList.remove("bg-gray-900");
  document.body.classList.remove("bg-white");

    }
const toggleMode=()=>{
            removeClass();
    if(mode !== 'bg-gray-900'){
        setMode('bg-gray-900')
        setMdtxt('Disable Dark Mode')
document.body.classList.add("bg-gray-900");

    }
    else{
        setMode('bg-gray-300')
        setMdtxt('Enable Dark Mode')
document.body.classList.add("bg-white");

    }
}
    let initTodo;
if(localStorage.getItem("todos")===null) {
        initTodo=[]
    } 
    else {
        initTodo= JSON.parse(localStorage.getItem("todos"))
    }
    const onDelete=(todo)=>{
        setTodos(todos.filter((e)=>{
            showAlert("Deleted","bg-red-600")
           return e!==todo
        }))
        localStorage.setItem("todos",JSON.stringify(todos))
    }
    const [todos, setTodos]=useState(initTodo)
const [alert, setAlert]=useState(null)
    const showAlert=(msg,bg)=>{
        setWarn(false)
    setAlert({
        msg:msg,
        bg:bg
             })
        setTimeout(()=>{
            setAlert(null)
        },1000)
}


    const addTodo=(tit,desc)=>{
showAlert("Todo added successfully","bg-green-400");
let sno;
        if(todos.length == 0){
            sno=1
        }
        else{sno=todos[todos.length-1].sno+1
        }

        let myTodo={
            sno:sno,
            title:tit,
            desc:desc
        }
        setTodos([...todos,myTodo])       
    }
useEffect(()=>{            localStorage.setItem("todos",JSON.stringify(todos))
},[todos])
    
    const[warn, setWarn]=useState(false)
    
    const showWarn=()=>{
        setWarn(true)
    }
    const handleClear=(inp)=>{
        if (inp) {
                setTodos([])
        setWarn(false)
showAlert("Cleared all the todos","bg-red-500")
        }
        else 
        {
                    setWarn(false)
showAlert("Cancelled Clearing all the todos","bg-red-500")

        }
    }
  return (
    <div>
    <Header mode={mode} mdtxt={mdtxt} toggleMode={toggleMode}/>
        <hr/>
        <Alert warn={warn} handleClear={handleClear} alert={alert}/>
<AddTodo  showAlert={showAlert} addTodo={addTodo}  showWarn={showWarn} mode={mode}/>
<Todos showAlert={showAlert} todos={todos} onDelete={onDelete} mode={mode}/>
        <hr/>
        <Footer/>
        </div>
  )
}
