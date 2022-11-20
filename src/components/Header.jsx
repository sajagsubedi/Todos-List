import '../App.css'
import Toggle from "./Toggle.jsx"
export default function Header({mode,mdtxt,toggleMode}) {
    return (

<header className={`${mode} body-font`}>
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className={`flex title-font font-medium items-center ${mode !== 'bg-gray-900'?'text-gray-900':'text-white'} mb-4 md:mb-0`}>

        <img className="rounded-full w-12 border-2 border-gray-600" src="https://source.unsplash.com/200x200/?note,todos,noteicon"/>
      <span className="ml-3 text-xl">keepYourTodo</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className={`mr-5  ${mode !== 'bg-gray-900'?'text-gray-900':'text-white'} hover:text-gray-600`}>Home</a>
      <a className={`mr-5  ${mode !== 'bg-gray-900'?'text-gray-900':'text-white'} hover:text-gray-600`}>About</a>
      <a className={`mr-5  ${mode !== 'bg-gray-900'?'text-gray-900':'text-white'} hover:text-gray-600`}>Contact</a>
    </nav>
      <Toggle mode={mode} mdtxt={mdtxt} toggleMode= {toggleMode}/>
  
  </div>
  
</header>

        )
}