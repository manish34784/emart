import { createStore, combineReducers } from "redux";
import { itemsReducer } from "./reducers";

const rootReducer = combineReducers({
  items: itemsReducer,
});
const store = createStore(rootReducer);

store.subscribe(() => {
  const latestState = store.getState();
  console.log("latestState: ", latestState);
  localStorage.setItem("redux-store", JSON.stringify(latestState));
});

export default store;
