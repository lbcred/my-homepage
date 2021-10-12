import {useState} from 'react'
import {Link} from 'react-router-dom'

function Navigation(){
    const [ open, setOpen ] = useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    }

    if(!open){
        return (
            <div className="absolute left-1/3 m-auto text-center shadow-md bg-gray-100  rounded-b-full w-2/6 h-2" onClick={() => toggleOpen()} onMouseEnter={() => toggleOpen()}>
            </div>
        )
    }
    else{
        return (
            <div className="pb-2 pt-2 text-gray-600 absolute font-medium left-1/3 m-auto text-center shadow-md bg-gray-100 rounded-b-2xl w-2/6" onClick={() => toggleOpen()} onMouseLeave={() => toggleOpen()}>
            <p><Link to="/">Home</Link></p>
            <p><Link to="/about">About Me</Link></p>
            </div>
        )
    }
}

export default Navigation