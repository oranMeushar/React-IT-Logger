import * as actionsType from '../actions/actionsType';


const handleNewLogSubmit = (state, action) => {
    const copy = [...state.logs];
    copy.push(action.payload);
    localStorage.setItem('logs', JSON.stringify(copy));
    return{
        ...state,
        logs:copy,
        filteredLogs:copy
    };
}

const handleSearch = (state, action) => {
    const logs = [...state.logs];
    
    const result = logs.filter((log) =>{
        return  log.message.toLowerCase().includes(action.payload.toLowerCase()) ||
                log.technician.toLowerCase().includes(action.payload.toLowerCase()) ||
                log.formatedDate.toLowerCase().includes(action.payload.toLowerCase()) ||
                log.formatedTime.toLowerCase().includes(action.payload.toLowerCase()) ||
                log.date.toLowerCase().includes(action.payload.toLowerCase()) ||
                log.attention.toLowerCase() === action.payload.toLowerCase() 
    });
    return{
        ...state,
        filteredLogs:result
    }
}

const handleSetLogs = (state, action) => {
    return{
        ...state,
        logs:action.payload,
        filteredLogs:action.payload
    }
}

const handleSetTechnician = (state, action) => {
    return{
        ...state,
        technicians:action.payload
    }
}

const handleDeleteLog = (state, action) => {
    const copy = [...state.logs];
    const result = copy.filter((log) =>{
        return  log.id !== action.payload 
    });
    localStorage.setItem('logs', JSON.stringify(result))

    return{
        ...state,
        logs:result,
        filteredLogs:result
    }
}

const handleDeleteTechnician = (state, action) => {
    const copy = [...state.technicians];
    const result = copy.filter((tech, idx) =>{
        return  idx !== action.payload 
    });
    localStorage.setItem('technicians', JSON.stringify(result));
    return{
        ...state,
        technicians:result
    }
}

const handleChangeLog = (state, action) => {
    let foundLog = state.logs.find((log) =>{
        return log.id === action.logID;
    });
    const logsCopy = [...state.logs];
    let logCopy = {
        ...foundLog,
        ...action.payload
    }
    const result = logsCopy.map((log) =>{
        if (log.id === action.logID) {
            return logCopy
        }
        else{
            return log
        }
    });

    return{
        ...state,
        logs:result,
        filteredLogs:result
    }
}

const handleAddTechnician = (state, action) =>{
    const technicians = [...state.technicians];
    technicians.push(action.payload);
    localStorage.setItem('technicians', JSON.stringify(technicians));

    return{
        ...state,
        technicians
    }
}


const reducer = (state, action) =>{
    switch (action.type) {
        case actionsType.ON_SEARCH:
            return handleSearch(state, action)
        case actionsType.ON_NEW_LOG_SUBMIT:
            return handleNewLogSubmit(state, action)
        
        case actionsType.SET_LOGS:
            return handleSetLogs(state, action)
        case actionsType.DELETE_LOG:
            return handleDeleteLog(state, action)
        case actionsType.CHANGE_LOG:
            return handleChangeLog(state, action)
        case actionsType.ADD_TECHNICIAN:
            return handleAddTechnician(state, action)
        case actionsType.SET_TECHNICIANS:
            return handleSetTechnician(state, action)                    
        case actionsType.DELETE_TECH:
            return handleDeleteTechnician(state, action)                    
        default:
            return state;
    }
}

export default reducer;