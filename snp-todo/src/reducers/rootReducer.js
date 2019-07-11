import { initialState } from "../store/initialState";
import {
  ADD_NEW_ITEM,
  DELETE_ITEM,
  TOGGLE_ITEM,
  TOGGLE_ALL_ITEMS,
  EDIT_ITEM,
  SET_ACTIVE_FILTER,
  DELETE_COMPLETED_ITEMS
} from "../constants/actionsType";

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_ITEM: {
      return { ...state, itemsList: addNewItem(state, action.payload) };
    }
    case DELETE_ITEM: {
      return { ...state, itemsList: deleteItem(state, action.payload) };
    }
    case TOGGLE_ITEM: {
      return { ...state, itemsList: toggleItem(state, action.payload) };
    }
    case TOGGLE_ALL_ITEMS: {
      return { ...state, itemsList: toggleAllItems(state, action.payload) };
    }
    case EDIT_ITEM: {
      return { ...state, itemsList: editItem(state, action.payload) };
    }
    case SET_ACTIVE_FILTER: {
      return { ...state, activeFilter: action.payload };
    }
    case DELETE_COMPLETED_ITEMS: {
      return { ...state, itemsList: deleteCompletedItems(state) };
    }
    default:
      return state;
  }
}

const editItem = (state, value) => {
  const newList = [...state.itemsList];
  for (let key in newList) {
    if (newList[key].id === value.id) {
      newList[key].text = value.text;
      break;
    }
  }
  localStorage.setItem("list", JSON.stringify(newList));
  return newList;
};

const addNewItem = (state, value) => {
  const newList = state.itemsList.concat(value);
  localStorage.setItem("list", JSON.stringify(newList));
  return newList;
};

const deleteItem = (state, value) => {
  const newList = state.itemsList.filter(v => v.id !== value);
  localStorage.setItem("list", JSON.stringify(newList));
  return newList;
};

const toggleItem = (state, value) => {
  const newList = [...state.itemsList];
  for (let key in newList) {
    if (newList[key].id === value) {
      newList[key].completed = !newList[key].completed;
      break;
    }
  }
  localStorage.setItem("list", JSON.stringify(newList));
  return newList;
};

const toggleAllItems = (state, value) => {
  let newList = [...state.itemsList];
  for (let key in newList) {
    newList[key].completed = value;
  }
  localStorage.setItem("list", JSON.stringify(newList));
  return newList;
};

const deleteCompletedItems = state => {
  const newList = state.itemsList.filter(value => !value.completed);
  localStorage.setItem("list", JSON.stringify(newList));
  return newList;
};
