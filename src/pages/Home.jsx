import { useEffect, useState } from 'react'

import ProductCard from '../components/ProductCard'

export default function Home({
  products = [],
  addToCart,
  setSelectedProduct,
  setPage,
  favorites = [],
  toggleFavorite
}) {

  const offers = products.filter(
    (product) => product.onSale
  )

  const sliderImages = [

    'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1400&auto=format&fit=crop',

    'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1400&auto=format&fit=crop',

    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1400&auto=format&fit=crop',

    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1400&auto=format&fit=crop',

    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1400&auto=format&fit=crop'

  ]

  const [currentImage, setCurrentImage] =
    useState(0)

  const nextSlide = () => {

    setCurrentImage((prev) =>

      prev === sliderImages.length - 1
        ? 0
        : prev + 1

    )

  }

  const prevSlide = () => {

    setCurrentImage((prev) =>

      prev === 0
        ? sliderImages.length - 1
        : prev - 1

    )

  }

  useEffect(() => {

    const interval = setInterval(() => {

      nextSlide()

    }, 4000)

    return () => clearInterval(interval)

  }, [])

  return (

    <div>

      <div className="hero-banner">

        <div className="hero-overlay">

          <h1>
            Especial Día de la Madre 💖
          </h1>

          <p>
            Lo mejor para mamá
          </p>

        </div>

      </div>

      <div className="slider-container">

        <button
          className="slider-btn left"
          onClick={prevSlide}
        >
          ❮
        </button>

        <img
          src={sliderImages[currentImage]}
          className="slider-image"
        />

        <button
          className="slider-btn right"
          onClick={nextSlide}
        >
          ❯
        </button>

      </div>

      <h2 className="section-title">
        ✨ Ofertas para Mamá
      </h2>

      <div className="products">

        {offers.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
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

        ))}

      </div>

    </div>

  )
}