export default function ProductCard({
  product,
  addToCart,
  setSelectedProduct,
  setPage,
  favorites = [],
  toggleFavorite = () => {}
}) {

  const isFavorite =
    favorites.some(
      (item) => item.id === product.id
    )

  return (

    <div className="card">

      <div className="favorite-btn">

        <button
          onClick={() =>
            toggleFavorite(product)
          }
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>

      </div>

      <img
        src={product.image}
        alt={product.name}
        onClick={() => {

          setSelectedProduct(product)

          setPage('product')

        }}
      />

      <div className="card-info">

        <h2>{product.name}</h2>

        <p className="category-text">
          {product.category}
        </p>

        <div className="prices">

          {product.onSale ? (

            <>
              <span className="old-price">
                S/ {product.oldPrice}
              </span>

              <span className="new-price">
                S/ {product.price}
              </span>
            </>

          ) : (

            <span className="normal-price">
              S/ {product.price}
            </span>

          )}

        </div>

        {product.onSale && (

          <p className="offer">
            🔥 Oferta especial
          </p>

        )}

        <button
          onClick={() =>
            addToCart(product)
          }
        >
          Agregar al carrito
        </button>

      </div>

    </div>

  )
}