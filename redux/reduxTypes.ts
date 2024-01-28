export type StoreItemType = { id: string; units: number };
export type RootStateType = {
  items: StoreItemType[];
};

export type ReduxActionType = {
  type: string;
  payload: { itemId: string; change?: number }; // [key: string]: any
};
