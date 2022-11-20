import '../App.css'

export default function Alert(props) {
    return (
        <div className="h-12 w-full">
            {props.warn?
                <div className={`w-full flex flex-col py-1 px-1 justify-center items-center h-16 bg-yellow-500`}>
    <p>Do you really want to delete all the todos</p>
                    <span className="w-full flex  justify-center">
                        <button className="px-2 my-2 mx-3 rounded border-none bg-red-600" onClick={()=>props.handleClear(true)}>Yes</button>
                                                <button className="px-2 my-2 rounded border-none bg-blue-600" onClick={()=>props.handleClear(false)}>No</button>

                        </span>
                </div>
            :
            props.alert && <div className={`w-full flex justify-center items-center h-12 ${props.alert.bg}`}>
    <p>{props.alert.msg}</p>
                </div>
            
            }
            </div>
)
}