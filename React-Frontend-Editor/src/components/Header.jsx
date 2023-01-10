import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode,faColumns, faGripHorizontal, faGripVertical } from '@fortawesome/free-solid-svg-icons'
import clear from './App.jsx';
import './Header.css';

function Header(){
    const [dropdown,setDropdown]=useState('false')
    const changeClass=(e)=>{
        e.preventDefault()
        let change
        dropdown==='true'? change='false' : change='true'
        setDropdown(change)
    }
    return(
        <div className="topnav">
            <div className="heading">
                <FontAwesomeIcon icon={faCode} />
                Your_Editor
            </div>
            <div className="dropdown">
                <button className="dropbtn" onClick={changeClass}><FontAwesomeIcon icon={faColumns} /> View</button>
                <div className={dropdown==="true" ? 'dropdown-content-show' : 'dropdown-content'}>
                    <div className="dropcontent"><FontAwesomeIcon icon={faGripHorizontal} /></div>
                    <hr/>
                    <div className="dropcontent"><FontAwesomeIcon icon={faGripVertical} /></div>
                </div>
            </div>
        </div>
    )
}
export default Header;
