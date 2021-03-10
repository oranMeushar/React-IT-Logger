import React, {useContext, useEffect, useState} from 'react'
import IT_LoggerConext from '../context/IT-Logger/IT-LoggerContext'
import recycleImg from '../assets/recycle.png';
import './TechList.css';

const TechList = (props) => {
    const [cssClasses, setCssClasses] = useState('TechList');
    const itLoggerConext = useContext(IT_LoggerConext);

    const handleDelete = (technician, idx) => {
        
        itLoggerConext.deleteTech(idx);
    }

    useEffect(() => {
        if (props.isModal.value) {
            setCssClasses('TechList active');
        }
        else{
            setCssClasses('TechList');
        }
    },[props.isModal.value]);

    
    return (
        <div className={cssClasses}>
            <h1>Technician List</h1>
            {
                itLoggerConext.technicians.map((technician, idx) =>{
                    return(
                        <div className="TechList-tech" key={idx}>
                            <p>{technician}</p>
                            <img src={recycleImg} alt="recycleImg" onClick={()=>handleDelete(technician, idx)}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TechList
