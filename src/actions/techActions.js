import * as types from './types';

//get tech from server
export const getTechs = () => async dispatch =>{
    try {
        setLoading();

        const res = await fetch('/techs');
        const data = await res.json();

        dispatch({
            type: types.GET_TECHS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: types.TECHS_ERROR,
            payload: error.response.statusText
        })
    }
       
}

//add tech to server
export const addTech = tech => async dispatch =>{
    console.log(tech,'sasasasasasas')
    try {
        setLoading();

        const res = await fetch('/techs',{
            method: 'POST',
            body: JSON.stringify(tech),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        console.log(data,'dddddd')

        dispatch({
            type: types.ADD_TECH,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: types.TECHS_ERROR,
            payload: error.response.statusText
        })
    }
       
}

export const deleteTech = id => async dispatch =>{
    try {
        setLoading();
        await fetch(`/techs/${id}`,{
            method: 'DELETE'
        });

        dispatch({
            type: types.DELETE_TECH,
            payload: id
        })
    } catch (error) {
        dispatch({
            type: types.TECHS_ERROR,
            payload: error.response.statusText
        })
    }
       
}


//set loading
export const setLoading = () => {
    return {
        type: types.SET_LOADING
    }
}