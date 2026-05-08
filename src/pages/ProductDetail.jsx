export default function ProductDetail({
  product,
  addToCart,
  favorites = [],
  toggleFavorite = () => {}
}) {

  if (!product) {

    return (

      <div className="empty-detail">
        Producto no encontrado
      </div>

    )
  }

  const isFavorite =
    favorites.some(
      (item) => item.id === product.id
    )

  return (

    <div className="detail-container">

      {/* IMAGEN */}

      <div className="detail-image-box">

        <button
          className="detail-favorite"
          onClick={() =>
            toggleFavorite(product)
          }
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>

        <img
          src={product.image}
          alt={product.name}
          className="detail-image"
        />

      </div>

      {/* INFO */}

      <div className="detail-info">

        <p className="detail-category">
          {product.category}
        </p>

        <h1>
          {product.name}
        </h1>

        {/* CALIFICACIÓN */}

        <div className="rating-box">

          <div className="stars">
            ⭐⭐⭐⭐⭐
          </div>

          <span>
            {product.rating} / 5
          </span>

        </div>

        {/* PRECIOS */}

        <div className="detail-prices">

          {product.onSale ? (

            <>
              <span className="detail-old">
                S/ {product.oldPrice}
              </span>

              <span className="detail-new">
                S/ {product.price}
              </span>
            </>

          ) : (

            <span className="detail-normal">
              S/ {product.price}
            </span>

          )}

        </div>

        {/* BOTÓN */}

        <button
          className="detail-cart-btn"
          onClick={() =>
            addToCart(product)
          }
        >
          🛒 Agregar al carrito
        </button>

        {/* COMENTARIOS */}

        <div className="comments-section">

          <h2>
            Opiniones de clientes
          </h2>

          {product.comments.map(
            (comment, index) => (

              <div
                key={index}
                className="comment-card"
              >

                <div className="comment-stars">
                  ⭐⭐⭐⭐⭐
                </div>

                <p>
                  {comment}
                </p>

              </div>

            )
          )}

        </div>

      </div>

    </div>

  )
}