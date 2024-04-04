'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore, setCart } from '@/redux/store'
import { Cart } from '@/app/api/types'

export default function StoreProvider({
  children,
  cart
}: {
  children: React.ReactNode
  cart: Cart
}) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    storeRef.current.dispatch(setCart(cart))

  }

  return <Provider store={storeRef.current}>{children}</Provider>
}