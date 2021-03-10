import React, {useState, useEffect, useContext, useRef} from 'react';
import IT_LoggerConext from '../context/IT-Logger/IT-LoggerContext';
import './TechForm.css';


const TechForm = (props) => {

    const [name, setName] = useState('');
    const [cssClasses, setCssClasses] = useState('TechForm');
    const inputRef = useRef();

    const itLoggerConext = useContext(IT_LoggerConext);
    const handleChange = (e) =>{
        setName(e.target.value);
    } 


    const handleSubmit = (e) =>{
        e.preventDefault();
        props.setResponse(`${name} was added as a new tech`);
        

        props.setisModal({
            ...props.isModal,
            value: false
        });
        setTimeout(() => {
            props.setResponse(``)
        }, 3000);
        itLoggerConext.addTechnician(name);
        setName('');
    } 

    useEffect(() => {
        inputRef.current.focus();
        if (props.isModal.value) {
            setCssClasses('TechForm active');
        }
        else{
            setCssClasses('TechForm');
        }
    },[props.isModal.value]);

    return (
        <form className={cssClasses} onSubmit={handleSubmit}>
            <h1>New Technician</h1>
            <label htmlFor="TechForm-name">
                <input 
                ref = {inputRef}
                id="TechForm-name" 
                className="TechForm-name" 
                type="text" 
                value={name} 
                placeholder = "&nbsp;"
                onChange={handleChange}/>
                <span>Technician Name</span>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default TechForm;
