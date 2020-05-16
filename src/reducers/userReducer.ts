import { SET_LOADING, GET_USERS, GET_USER, ADD_USER, EDIT_USER, DELETE_USER } from '../actions/types';
import { User } from '../components/GridBody';

export interface State {
  items: User[];
  item: User;
  isLoading: boolean;
}

interface UserAction {
  type: typeof SET_LOADING | typeof GET_USERS | typeof GET_USER | typeof ADD_USER | typeof EDIT_USER | typeof DELETE_USER,
  payload: any,
}

const emptyItem: User = { name: '', username: '', email: '', city: '' };
const initialState: State = {
  items: [],
  item: emptyItem,
  isLoading: false,
}

export default function (state = initialState, action: UserAction) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }
    case GET_USERS:
      return {
        ...state,
        items: action.payload,
        item: emptyItem
      }
    case GET_USER:
      return {
        ...state,
        item: action.payload,
      }
    case ADD_USER:
      return {
        ...state,
        item: emptyItem,
        items: [...state.items, action.payload],
      }
    case EDIT_USER:
      const editedItems = state.items
        .map(e => {
          return e.id === action.payload.id
            ? e = action.payload
            : e;
        });
      return {
        ...state,
        item: emptyItem,
        items: editedItems,
      }
    case DELETE_USER:
      const remainingItems = state.items
        .filter(e => e.id !== action.payload);
      return {
        ...state,
        items: remainingItems
      }
    default:
      return state;
  }
}