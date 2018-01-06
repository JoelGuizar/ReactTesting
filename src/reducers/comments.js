//usually always starts like this
import {SAVE_COMMENT} from '../actions/type'

export default function (state = [], action) {
  switch(action.type){
    case SAVE_COMMENT:
      //same as state.concat([action.payload])
      return [...state, action.payload];
  }
  return state;
}