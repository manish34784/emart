import { ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM_COUNT } from "./actionLiterals";
import { ReduxActionType, RootStateType, StoreItemType } from "./reduxTypes";

interface ItemsReducerFunc {
  (state: StoreItemType[], action: ReduxActionType): StoreItemType[];
}

function getStorageState(): RootStateType {
  if (typeof window !== "undefined") {
    const storedData = localStorage.getItem("redux-store");
    console.log("storedData: ", storedData);

    if (!storedData) return null;
    const storedState = JSON.parse(storedData) as RootStateType;
    return storedState;
  }
  return { items: [] };
}

const existingState = getStorageState();

const initItemsState: StoreItemType[] = existingState?.items || [];
export const itemsReducer: ItemsReducerFunc = (
  state = initItemsState,
  action
) => {
  // state = [ { id: "1", units: 5 }, { id: "2", units: 7 } ]
  // action: { type = "UPDATE_ITEM_COUNT" payload: { itemId: 1, change: -1 } }
  // action: { type = "REMOVE_ITEM" payload: { itemId: 1, } }

  const { type, payload } = action;
  switch (type) {
    case UPDATE_ITEM_COUNT: {
      const { itemId, change } = payload;
      const newState: StoreItemType[] = state.map((elem) => {
        if (elem.id === itemId) return { ...elem, units: elem.units + change };
        return { ...elem };
      });
      return newState;
    }
    case REMOVE_ITEM: {
      const { itemId } = payload;
      const newState: StoreItemType[] = state.filter(
        (elem) => elem.id !== itemId
      );
      return newState;
    }
    case ADD_ITEM: {
      const { itemId } = payload;
      const newState: StoreItemType[] = [...state, { id: itemId, units: 1 }];
      return newState;
    }

    default:
      return state;
  }
};
