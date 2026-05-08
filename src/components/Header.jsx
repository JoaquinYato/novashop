export default function Header({
  setPage,
  cartCount,
  darkMode,
  setDarkMode
}) {

  return (

    <header className="header">

      <h1 onClick={() => setPage('home')}>
        NovaShop
      </h1>

      <nav>

        <button
          title="Inicio"
          onClick={() => setPage('home')}
        >
          🏠
        </button>

        <button
          title="Categorías"
          onClick={() =>
            setPage('categories')
          }
        >
          📂
        </button>

        <button
          title="Carrito"
          onClick={() => setPage('cart')}
        >
          🛒
          <span>{cartCount}</span>
        </button>

        <button
          title="Mi cuenta"
          onClick={() =>
            setPage('account')
          }
        >
          👤
        </button>

        <button
          title="Modo oscuro"
          onClick={() =>
            setDarkMode(!darkMode)
          }
        >
          🌙
        </button>

      </nav>

    </header>

  )
}