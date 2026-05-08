export default function Account({
  favorites = [],
  purchaseHistory = []
}) {

  return (

    <div className="account-page">

      <h1>
        👤 Mi Cuenta
      </h1>

      {/* DATOS */}

      <div className="account-box">

        <h2>
          Información personal
        </h2>

        <input
          placeholder="Nombre completo"
        />

        <input
          placeholder="Correo electrónico"
        />

        <input
          placeholder="Número de celular"
        />

        <input
          placeholder="Ubicación o dirección"
        />

      </div>

      {/* FAVORITOS */}

      <div className="account-box">

        <h2>
          ❤️ Favoritos
        </h2>

        <div className="favorite-grid">

          {favorites.length > 0 ? (

            favorites.map((item) => (

              <div
                className="favorite-item"
                key={item.id}
              >

                <img
                  src={item.image}
                  alt={item.name}
                />

                <p>
                  {item.name}
                </p>

              </div>

            ))

          ) : (

            <p>
              No tienes favoritos
            </p>

          )}

        </div>

      </div>

      {/* HISTORIAL */}

      <div className="account-box">

        <h2>
          📦 Historial de compras
        </h2>

        {purchaseHistory.length > 0 ? (

          purchaseHistory.map(
            (item, index) => (

              <div
                key={index}
                className="history-item"
              >

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div>

                  <p>
                    {item.name}
                  </p>

                  <span>
                    S/ {item.price}
                  </span>

                </div>

              </div>

            )
          )

        ) : (

          <p>
            Aún no tienes compras
          </p>

        )}

      </div>

      {/* AYUDA */}

      <div className="account-box">

        <h2>
          ☎️ Ayuda y contacto
        </h2>

        <p>
          📞 +51 999 888 777
        </p>

        <p>
          ✉️ ayuda@novashop.com
        </p>

        <p>
          Atención:
          8:00am - 8:00pm
        </p>

      </div>

    </div>

  )
}