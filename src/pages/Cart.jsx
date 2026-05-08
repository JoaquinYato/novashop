export default function Cart({
  cart,
  setCart,
  setPage
}) {

  const increaseQuantity = (index) => {

    const updatedCart = [...cart]

    updatedCart[index].quantity += 1

    setCart(updatedCart)
  }

  const decreaseQuantity = (index) => {

    const updatedCart = [...cart]

    if (
      updatedCart[index].quantity > 1
    ) {

      updatedCart[index].quantity -= 1
    }

    setCart(updatedCart)
  }

  const removeProduct = (index) => {

    const updatedCart = [...cart]

    updatedCart.splice(index, 1)

    setCart(updatedCart)
  }

  const total = cart.reduce(

    (acc, item) =>

      acc +
      item.price * item.quantity,

    0

  )

  return (

    <div className="cart-page">

      <h1>
        🛒 Mi Carrito
      </h1>

      {cart.length === 0 ? (

        <p className="empty-text">
          Tu carrito está vacío
        </p>

      ) : (

        <>
          {cart.map((item, index) => (

            <div
              key={index}
              className="cart-item"
            >

              <img src={item.image} />

              <div className="cart-info">

                <h2>{item.name}</h2>

                <p>
                  S/ {item.price}
                </p>

                <div className="quantity-box">

                  <button
                    onClick={() =>
                      decreaseQuantity(index)
                    }
                  >
                    -
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQuantity(index)
                    }
                  >
                    +
                  </button>

                </div>

              </div>

              <button
                className="delete-btn"
                onClick={() =>
                  removeProduct(index)
                }
              >
                🗑️
              </button>

            </div>

          ))}

          <div className="cart-total">

            <h2>
              Total: S/ {total}
            </h2>

            <button
              onClick={() =>
                setPage('checkout')
              }
            >
              Continuar compra
            </button>

          </div>
        </>

      )}

    </div>

  )
}