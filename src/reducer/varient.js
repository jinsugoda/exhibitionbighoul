const SELECT_INDEX = 'SELECT_INDEX';
const AUDIO_SETTING='AUDIO_SETTING';
const SOCIAL_SHOW= 'SOCIAL_SHOW';
export const gIndex = (index) => ({
  type: SELECT_INDEX,
  index,
});
export const audioSetting=(value)=>({
  type:AUDIO_SETTING,
  value
})
export const modalShow = (value)=>({
  type:SOCIAL_SHOW,
  value
})

const initState = {
  indexValue: 0,
  audio:false,
  modal:false
};

export default function selectIndex(state = initState, action){
  switch (action.type) {
    case SELECT_INDEX:
      return {...state, indexValue: action.index};
     
      case AUDIO_SETTING:        
        return {...state, audio: action.value}
     
      case SOCIAL_SHOW:
        return{...state,modal:action.value}
     
    default:
      return state;
  }
};
