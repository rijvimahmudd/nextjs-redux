import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { type Cart } from "@/app/api/types";
import { useAppSelector } from "./hooks";

export interface CartState {
  cart: Cart;
}

const initialState: CartState = {
  cart: {
    products: [],
  },
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<Cart>) => {
      state.cart = action.payload;
    },
  },
});

export const makeStore = () =>
  configureStore({
    reducer: {
      cart: cartSlice.reducer,
    },
  });

export const { setCart } = cartSlice.actions;

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const useCart = () =>
  useAppSelector((state: RootState) => state.cart.cart);
