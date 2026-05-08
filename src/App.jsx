import { useState } from 'react'

import Header from './components/Header'

import Home from './pages/Home'
import Categories from './pages/Categories'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Account from './pages/Account'

import { products } from './data/products'

export default function App() {

  const [page, setPage] =
    useState('home')

  const [cart, setCart] =
    useState([])

  const [selectedProduct, setSelectedProduct] =
    useState(null)

  const [darkMode, setDarkMode] =
    useState(false)

  const [favorites, setFavorites] =
    useState([])

  const [purchaseHistory, setPurchaseHistory] =
    useState([])

  const addToCart = (product) => {

    const existingProduct = cart.find(
      (item) => item.id === product.id
    )

    if (existingProduct) {

      const updatedCart = cart.map((item) =>

        item.id === product.id

          ? {
              ...item,
              quantity: item.quantity + 1
            }

          : item

      )

      setCart(updatedCart)

    } else {

      setCart([
        ...cart,
        {
          ...product,
          quantity: 1
        }
      ])
    }
  }

  const toggleFavorite = (product) => {

    const exists = favorites.some(
      (item) => item.id === product.id
    )

    if (exists) {

      setFavorites(
        favorites.filter(
          (item) => item.id !== product.id
        )
      )

    } else {

      setFavorites([
        ...favorites,
        product
      ])
    }
  }

  return (

    <div className={darkMode ? 'dark' : ''}>

      <Header
        setPage={setPage}
        cartCount={cart.length}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {page === 'home' && (

        <Home
          products={products}
          addToCart={addToCart}
          setSelectedProduct={
            setSelectedProduct
          }
          setPage={setPage}
          favorites={favorites}
          toggleFavorite={
            toggleFavorite
          }
        />

      )}

      {page === 'categories' && (

        <Categories
          products={products}
          addToCart={addToCart}
          setSelectedProduct={
            setSelectedProduct
          }
          setPage={setPage}
          favorites={favorites}
          toggleFavorite={
            toggleFavorite
          }
        />

      )}

      {page === 'product' && (

        <ProductDetail
  product={selectedProduct}
  addToCart={addToCart}
  favorites={favorites}
  toggleFavorite={toggleFavorite}
/>

      )}

      {page === 'cart' && (

        <Cart
          cart={cart}
          setCart={setCart}
          setPage={setPage}
        />

      )}

      {page === 'checkout' && (

        <Checkout
          clearCart={() => {

            setPurchaseHistory([
              ...purchaseHistory,
              ...cart
            ])

            setCart([])
          }}
        />

      )}

      {page === 'account' && (

        <Account
          favorites={favorites}
          purchaseHistory={
            purchaseHistory
          }
        />

      )}

    </div>

  )
}