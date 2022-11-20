import { useState } from "react"
import '../App.css'

export default function AddTodo({addTodo,showAlert,showWarn,mode}){
const [titbrcol,setTitbrcol]=useState("border-gray-700")
    const [descbrcol,setDescbrcol]=useState("border-gray-700")

const [tit,setTit]=useState("")
    const [desc,setDesc]=useState("")

const submit=(e)=>{
    if(tit.length !==0 && desc.length!==0){
    addTodo(tit,desc)
    setTit("")
    setDesc("")
        setDescbrcol(" border-green-400")
                setTitbrcol(" border-green-400")

        setTimeout(()=>{
            setDescbrcol("border-gray-700")
            setTitbrcol("border-gray-700")
        },1000)
    }
    else{
        if(tit.length ==0 && desc.length!==0){
           showAlert("Enter valid value of Title","bg-red-600")
            
                setTitbrcol(" border-red-600")

        setTimeout(()=>{
            setTitbrcol("border-gray-700")
        },1000)
        }
        else if(desc.length ==0 && tit.length !==0){
            
        setDescbrcol(" border-red-600")

        setTimeout(()=>{
            setDescbrcol("border-gray-700")
        },1000)
showAlert("Enter a valid value of Description","bg-red-600")
    }
        else{
            showAlert("Enter value of title and description","bg-red-600")
            
        setDescbrcol(" border-red-600")
                setTitbrcol(" border-red-600")

        setTimeout(()=>{
            setDescbrcol("border-gray-700")
            setTitbrcol("border-gray-700")
        },1000)
        }
}
}
    
    let inputmode=mode == 'bg-gray-900'?'bg-gray-800 bg-opacity-40 border-gray-700 text-gray-100 focus:bg-gray-900 focus:ring-indigo-900 text-gray-100':'bg-gray-300 bg-opacity-50 text-slate-900 border-gray-500 focus:bg-white focus:ring-indigo-200 ring-indigo-500'
return(
    
<div className={`mx-auto my-5 mix-h-min flex items-center justify-center flex-col ${mode !== 'bg-gray-900'?'bg-white':mode} w-10/12`}>

<input value={tit} onChange={(e)=>setTit(e.target.value)} className={` border w-full my-3  ${inputmode}rounded ${titbrcol} focus:border-indigo-500  focus:ring-2  text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`} id="title" placeholder="EnterTitle" />
<textarea value={desc} onChange={(e)=>setDesc(e.target.value)}  className={` w-full my-3  ${inputmode}  border ${descbrcol} focus:border-indigo-500 focus:ring-2  text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`} id="desc" placeholder="Enter Description" >
</textarea>

<div className="flex h-16 my-5 mx-auto" >
<button className="py-1 max-h-10 flex items-center justify-center  px-3 my-1 mx-3 bg-green-600 text-white rounded border-none" id="add" type="submit" onClick={submit} >AddTodo</button>
<button className="py-1 max-h-10 flex items-center justify-center h-auto px-3 my-1 mx-3 bg-red-700 text-white rounded border-none" id="clr" onClick={showWarn}>Clear</button>
</div>
</div>

    )
}