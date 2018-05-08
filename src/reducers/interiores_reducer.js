export default function (state = {}, action) {

  switch (action.type) {
    case 'GET_INTERIORES':
      return { ...state, interiores: action.payload }   
    default:
      return state
  }
}