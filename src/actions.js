export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";
export const CLEAR_ITEM = "CLEAR_ITEM";
export const TOGGLE_ITEM = "TOGGLE_ITEM";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};

export function addItem(text, id) {
  return {
    type: ADD_ITEM,
    id,
    text,
  };
}

export function toggleItem(id) {
  return {
    type: TOGGLE_ITEM,
    id,
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter,
  };
}

export function removeItem(id) {
  return {
    type: REMOVE_ITEM,
    id,
  };
}

export function editItem(text, id) {
  return {
    type: EDIT_ITEM,
    id,
    text,
  };
}

export function clearItem(id) {
  return {
    type: CLEAR_ITEM,
    id,
  };
}
