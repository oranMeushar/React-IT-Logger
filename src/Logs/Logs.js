import React, {useContext} from 'react'
import './Logs.css';
import IT_LoggerContext from '../context/IT-Logger/IT-LoggerContext';
import Log from '../Log/Log';

const Logs = (props) => {
    const itLoggerContext = useContext(IT_LoggerContext);

    const handleDeleteLog = (log) =>{
        itLoggerContext.deleteLog(log.id);
    }

    const handleChangeLog = (e, log) =>{
        if (e.target.nodeName!== 'IMG') {
            props.setMessage(log.message);
            props.setAttention(log.attention);
            props.setisModal({
                value: true,
                child:'Home-new-log'
            });
            props.setIsEdit({
                value:true,
                logID:log.id
            });
        }
    }

    return (
        <div className="Logs">
            <h1 className="Logs-header">System Logs</h1>
            {
                itLoggerContext.filteredLogs.map((log) =>{
                    return (
                    <Log 
                    {...log} 
                    key={log.id} 
                    delete = {()=>handleDeleteLog(log)}
                    change = {(e) =>handleChangeLog(e, log)}
                    />)
                })
            }
        </div>
    )
}

export default Logs
