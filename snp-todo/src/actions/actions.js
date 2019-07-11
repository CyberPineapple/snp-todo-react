import {
  ADD_NEW_ITEM,
  DELETE_ITEM,
  TOGGLE_ITEM,
  TOGGLE_ALL_ITEMS,
  EDIT_ITEM,
  SET_ACTIVE_FILTER,
  DELETE_COMPLETED_ITEMS
} from "../constants/actionsType";

export const addNewItem = value => {
  return {
    type: ADD_NEW_ITEM,
    payload: value
  };
};

export const deleteItem = value => {
  return {
    type: DELETE_ITEM,
    payload: value
  };
};

export const toggleItem = value => {
  return {
    type: TOGGLE_ITEM,
    payload: value
  };
};

export const toggleAllItems = value => {
  return {
    type: TOGGLE_ALL_ITEMS,
    payload: value
  };
};

export const editItem = (id, text) => {
  return {
    type: EDIT_ITEM,
    payload: {
      id: id,
      text: text
    }
  };
};

export const setActiveFilter = ({ target: { value } }) => {
  return {
    type: SET_ACTIVE_FILTER,
    payload: value
  };
};

export const deleteCompletedItems = () => {
  return {
    type: DELETE_COMPLETED_ITEMS
  };
};
