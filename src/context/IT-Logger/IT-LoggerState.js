import React, {useReducer} from 'react';
import IT_LoggerConext from './IT-LoggerContext';
import IT_LoggerReducer from './IT-LoggerReducer';
import * as actionsType from '../actions/actionsType';
import dateForamt from 'dateformat';


const IT_LoggerState = (props) =>{
    const initialState = {
        logs:[],
        filteredLogs:[],
        technicians:[]
    }

    const [state, dispatch] = useReducer(IT_LoggerReducer, initialState);



    const handleSearch = (search) =>{
        dispatch({
            type:actionsType.ON_SEARCH,
            payload:search
        })
    }

    const newLog = (message, attention, technician) =>{
        const now = new Date();
        const formatedDate = dateForamt(now, "dddd, mmmm d, yyyy");
        const formatedTime = dateForamt(now, "HH:MM:ss");
        const date = `Last updated by ${technician} on ${formatedDate} at ${formatedTime}`;
        dispatch({
            type:actionsType.ON_NEW_LOG_SUBMIT,
            payload:{
                message,
                attention, 
                technician,
                formatedDate,
                formatedTime,
                date, 
                id:Math.random()
            }
        })
    }

    const setLogs = (logs) =>{
        dispatch({
            type:actionsType.SET_LOGS,
            payload:logs
        })
    }

    const setTechnicians = (technicians) =>{
        dispatch({
            type:actionsType.SET_TECHNICIANS,
            payload:technicians
        })
    }

    const deleteLog = (id) =>{
        dispatch({
            type:actionsType.DELETE_LOG,
            payload:id,
        })
    }

    const deleteTech= (id) =>{
        dispatch({
            type:actionsType.DELETE_TECH,
            payload:id,
        })
    }

    const addTechnician = (name) =>{
        dispatch({
            type:actionsType.ADD_TECHNICIAN,
            payload:name
        })
    }

    const changeLog = (message, attention, technician, logID) =>{
        const now = new Date();
        const formatedDate = dateForamt(now, "dddd, mmmm d, yyyy");
        const formatedTime = dateForamt(now, "HH:MM:ss");
        const date = `Last updated by ${technician} on ${formatedDate} at ${formatedTime}`
        dispatch({
            type:actionsType.CHANGE_LOG,
            payload:{
                message,
                attention,
                technician,
                formatedDate,
                formatedTime,
                date,
            },
            logID
        })
    }


    return <IT_LoggerConext.Provider
        value={{
            logs:state.logs,
            filteredLogs:state.filteredLogs,
            technicians:state.technicians,
            handleSearch,
            newLog,
            setLogs,
            deleteLog,
            changeLog,
            addTechnician,
            setTechnicians,
            deleteTech
        }}>
            {props.children}
    </IT_LoggerConext.Provider>

}

export default IT_LoggerState;





