import React from 'react';
import './Log.css';
import recycleImg from '../assets/recycle.png';

const Log = (props) => {
    
    const logContentClasses = ['Log-content'];
    if (props.attention === 'attention') {
        logContentClasses.push('red')
    }
    else{
        logContentClasses.push('blue')
    }
    
    return (
        <div className="Log" onClick={props.change}>
            <p className={logContentClasses.join(' ')}>{props.message}</p>
            <p className="Log-writer-info">
                Last updated by <span>{props.technician}</span> on {props.formatedDate}  at <span>{props.formatedTime}</span>
            </p>
            <img src={recycleImg} alt="recycleImg" onClick={props.delete}/>
        </div>
    )
}

export default Log;
