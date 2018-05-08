export default function (state = false, action) {

  switch (action.type) {
    case 'SHOW_BG_IMAGE':
      return { ...state, isHome:true }
    default:
      return state
  }
}