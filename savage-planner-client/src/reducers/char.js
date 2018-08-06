import{
  FETCH_CHARACTER_SUCCESS,
  FETCH_CHARACTER_ERROR

} from '../actions/char';

const initialState = {
  character: {},
  error: null
};

export function characterReducer(state=initialState, action){
  switch(action.type){
    case FETCH_CHARACTER_SUCCESS:
      return {...state,
              character: action.character};
    case FETCH_CHARACTER_ERROR:
      return {...state,
              error: action.error};
    default:
      return state;
  }
}