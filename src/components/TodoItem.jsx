import '../App.css'

export default function TodoItem(props) {
    return(
        
        <div className={`lg:flex my-5 min-h-[100px] px-5 py-3 border border-gray-700 mx-3 rounded lg:items-center w-1/1 ${props.mode !== 'bg-gray-900'?'bg-gray-300':'bg-gray-800'} lg:justify-between`}>
<div className="min-w-fit  min-h-[60px] flex-1">
<h2 className={`text-2xl ${props.mode !== 'bg-gray-900'?'text-gray-900':'text-white'} font-bold leading-7  sm:truncate sm:text-3xl sm:tracking-tight`}>{props.todo.title}</h2>
<div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
<div className={`mt-2 flex items-center text-1xl ${props.mode !== 'bg-gray-900'?'text-gray-700':'text-gray-400'}`}>{props.todo.desc}</div> 
</div>
</div>
<span className="sm:ml-3 min-w-fit flex  items-center justify-center ">
<button onClick={props.onDelete} type="button" className="inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-1 text-sm font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
Delete
</button>
</span>
        </div>
    )
}