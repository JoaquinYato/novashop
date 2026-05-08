export default function CartItem({
  item,
  removeFromCart,
  index
}) {

  return (
    <div className="cart-item">

      <span>
        {item.name}
      </span>

      <button
        onClick={() => removeFromCart(index)}
      >
        Eliminar
      </button>

    </div>
  )
}