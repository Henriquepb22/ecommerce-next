import { createContext, useContext, useEffect, useState } from 'react'
import { getStorageItem } from 'utils/localStorage'

const CART_KEY = 'cartItems'

type CartContextData = {
  items: string[]
}

const CartContextDefaultValues = {
  items: []
}

const CartContext = createContext<CartContextData>(CartContextDefaultValues)

export type CartProviderProps = {
  children: React.ReactNode
}

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const data = getStorageItem(CART_KEY)

    if (data) {
      setCartItems(data)
    }
  }, [])

  return (
    <CartContext.Provider
      value={{
        items: cartItems
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }