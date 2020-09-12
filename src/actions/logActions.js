import * as types from './types'

// thunk middleware
// export const getLogs = () => {
//     return async(dispatch) => {
//         setLoading();
//         const res = await fetch('/logs');
//         const data = await res.json();

//         dispatch({
//             type: types.GET_LOGS,
//             payload: data
//         })
//     }
// }

// refactored version
//get logs from server
export const getLogs = () => async dispatch =>{
    try {
        setLoading();

        const res = await fetch('/logs');
        const data = await res.json();

        dispatch({
            type: types.GET_LOGS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: types.LOGS_ERROR,
            payload: error.response.statusText
        })
    }
       
}

//add logs from server
export const addLogs = (log) => async dispatch =>{
    try {
        setLoading();

        const res = await fetch('/logs',{
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        dispatch({
            type: types.ADD_LOG,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: types.LOGS_ERROR,
            payload: error.response.statusText
        })
    }
       
}

//delete log from server
export const deleteLog = (id) => async dispatch =>{
    try {
        setLoading();

        await fetch(`/logs/${id}`,{
           method: 'DELETE'
        });

        dispatch({
            type: types.DELETE_LOG,
            payload: id
        })
    } catch (error) {
        dispatch({
            type: types.LOGS_ERROR,
            payload: error.response.statusText
        })
    }
       
}
//update log on server
export const updateLog = log => async dispatch =>{
    try {
        setLoading();

       const res = await fetch(`/logs/${log.id}`,{
           method: 'PUT',
           body: JSON.stringify(log),
           headers: {
               'Content-Type': 'application/json'
           }
        });

        const data = await res.json();

        dispatch({
            type: types.UPDATE_LOG,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: types.LOGS_ERROR,
            payload: error.response.statusText
        })
    }
       
}

//Search server logs
export const searchLogs = (text) => async dispatch =>{
    try {
        setLoading();

        const res = await fetch(`/logs?q=${text}`);
        const data = await res.json();

        dispatch({
            type: types.SEARCH_LOGS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: types.LOGS_ERROR,
            payload: error.response.statusText
        })
    }
       
}

//set current log
export const setCurrent = log => {
    return {
        type: types.SET_CURRENT,
        payload: log
    }
}

//clear current log
export const clearCurrent = () => {
    return {
        type: types.CLEAR_CURRENT
    }
}

export const setLoading = () => {
    return {
        type: types.SET_LOADING
    }
}