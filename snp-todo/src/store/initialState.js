export const initialState = {
  itemsList: JSON.parse(localStorage.getItem("list")) || [],
  activeFilter: "all"
};