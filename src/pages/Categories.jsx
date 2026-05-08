import { products } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Categories({
  addToCart,
  setSelectedProduct,
  setPage,
  favorites,
  toggleFavorite
}) {

  const groupedProducts = {

    Hogar: products.filter(
      (item) => item.category === 'Hogar'
    ),

    Tecnología: products.filter(
      (item) => item.category === 'Tecnología'
    ),

    Moda: products.filter(
      (item) => item.category === 'Moda'
    ),

    Belleza: products.filter(
      (item) => item.category === 'Belleza'
    )

  }

  return (

    <div className="categories-page">

      {Object.entries(groupedProducts).map(
        ([category, items]) => (

          <div
            key={category}
            className="category-section"
          >

            <h2 className="category-title">
              {category}
            </h2>

            <div className="products-grid">

              {items.map((product) => (

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
      )}

    </div>

  )
}