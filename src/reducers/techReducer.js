import * as types from '../actions/types'

const initialState = {
    techs: null,
    loading:false,
    error: null
}
export default (state = initialState,action) => {
     switch(action.type){
        case types.GET_TECHS:{
            return {
                ...state,
                techs:action.payload,
                loading:false
            }
        } 
        case types.ADD_TECH:{
            console.log(action,' ppppppppp')
            return{
                ...state,
                techs: [...state.techs,action.payload],
                loading:false
            }
        }
        case types.SET_LOADING:{
            return {
                ...state,
                loading:true
            }
        }
        case types.DELETE_TECH: {
            return {
                ...state,
                techs: state.techs.filter(t => t.id !== action.payload),
                loading: false
            }
        }
        case types.TECHS_ERROR:{
            console.log(action.payload,' tech error')
            return{
                ...state,
                error:action.payload,
                loading:false
            }
        }
        default:
            return state;
     }
}