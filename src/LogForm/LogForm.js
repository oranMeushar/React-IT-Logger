import React,{useState, useEffect, useRef, useContext} from 'react';
import './LogForm.css';
import IT_LoggerConext from '../context/IT-Logger/IT-LoggerContext';

const LogForm = (props) => {
    const [cssClasses, setCssClasses] = useState('LogForm');
    const itLoggerConext = useContext(IT_LoggerConext);

    const selectRef = useRef();
    const checkboxRef = useRef();
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
        if (!props.isModal.value){
            props.setMessage('');
            props.setAttention('');
            props.setTechnician(null);
            selectRef.current.value = "";
            checkboxRef.current.checked = false;
            setCssClasses('LogForm')
        }
        else{
            setCssClasses('LogForm active')
            if (props.attention === 'attention') {
                checkboxRef.current.checked = true;
            }  
        }  
        // eslint-disable-next-line        
    }, [props.isModal.value])

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.setisModal({
            ...props.isModal,
            value: false
        });
        if (!props.isEdit.value) {
            props.setResponse(`Log added by ${selectRef.current.value}`);
            itLoggerConext.newLog(props.message, props.attention, props.technician);
        }
        else{
            props.setIsEdit({
                value:false,
                logID:null
            });
            props.setResponse(`Log updated by ${selectRef.current.value}`)
            itLoggerConext.changeLog(props.message, props.attention, props.technician, props.isEdit.logID);    
        }

        setTimeout(() => {
            props.setResponse(``)
        }, 3000);
        
    }

    const handleCheckboxChange = (e) =>{
        if (e.target.checked) {
            props.setAttention('attention')
        }
        else{
            props.setAttention('');
        }
    }
    
    return (
        <div className ={cssClasses}>
            <h1>Enter System Log</h1>
            <form action="" className="LogForm-form" onSubmit={handleSubmit}>
                <label className="LogForm-form-newLog" htmlFor="newLog">
                    <input 
                        type="text"
                        ref = {inputRef}
                        name="newLog"
                        id="newLog"
                        placeholder= "&nbsp;"
                        required
                        onChange = {(e)=>props.setMessage(e.target.value)}
                        value= {props.message}
                    />
                    <span>New Log...</span>
                </label>
                
                <select ref={selectRef} name="technician" onChange={(e)=>props.setTechnician(e.target.value)} required>
                    <option value="">Select Technician</option>
                    {
                        itLoggerConext.technicians.map((technician, idx) => {
                            return <option value={technician} key={idx}>{technician}</option>
                        })
                    }
                </select>
                <label className="LogForm-form-attention" htmlFor="need-attention">
                    Need attention:    
                    <input 
                    ref = {checkboxRef}
                    type="checkbox" 
                    onChange = {handleCheckboxChange}
                    value = {props.attention}/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default LogForm;
