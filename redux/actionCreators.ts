import { ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM_COUNT } from "./actionLiterals";
import { ReduxActionType } from "./reduxTypes";

interface UpdateItemCountFunc {
  (itemId: string, change: number): ReduxActionType;
}

const updateItemCount: UpdateItemCountFunc = (itemId, change) => {
  return {
    type: UPDATE_ITEM_COUNT,
    payload: { itemId, change },
  };
};

const removeItem = (itemId: string): ReduxActionType => {
  return {
    type: REMOVE_ITEM,
    payload: { itemId },
  };
};

const addItem = (itemId: string): ReduxActionType => {
  return {
    type: ADD_ITEM,
    payload: { itemId },
  };
};

export { updateItemCount, removeItem, addItem };
