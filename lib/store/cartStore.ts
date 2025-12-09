import { Product } from "@/lib/types";
import { create } from "zustand";

interface CartState {
  cart: Product[];
  addToCart: (p: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  cart: [],
  addToCart: (product) => set({ cart: [...get().cart, product] }),
  removeFromCart: (id) =>
    set({ cart: get().cart.filter((item) => item.id !== id) }),
  clearCart: () => set({ cart: [] }),
}));
