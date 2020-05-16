import { GET_USERS, ADD_USER, DELETE_USER } from '../actions/types';
import { User } from '../components/GridBody';

interface UserAction {
  type: typeof GET_USERS | typeof ADD_USER | typeof DELETE_USER,
  payload: User[],
}

const initialState: { items: User[], item: User } = {
  items: [],
  item: { name: '', username: '', email: '', city: '' },
}

export default function (state = initialState, action: UserAction) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        items: action.payload,
      }
    case ADD_USER:
      return {
        ...state,
        item: action.payload,
        items: [...state.items, action.payload],
      }
    case DELETE_USER:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state;
  }
}