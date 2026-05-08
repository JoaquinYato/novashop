import { useState } from 'react'

export default function Checkout({
  clearCart
}) {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')

  const buy = () => {

    if (
      name.trim() === '' ||
      email.trim() === '' ||
      address.trim() === ''
    ) {
      alert('Completa todos los datos')
      return
    }

    if (!email.includes('@')) {
      alert('Ingresa un correo válido')
      return
    }

    alert('✅ Compra realizada correctamente')

    clearCart()
  }

  return (
    <div className="page">

      <h2>Finalizar compra</h2>

      <input
        placeholder="Tu nombre"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <input
        placeholder="Tu correo"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <input
        placeholder="Dirección"
        value={address}
        onChange={(e) =>
          setAddress(e.target.value)
        }
      />

      <iframe
        title="map"
        width="100%"
        height="300"
        style={{
          border: 0,
          borderRadius: '15px',
          marginBottom: '20px'
        }}
        loading="lazy"
        allowFullScreen
        src="https://maps.google.com/maps?q=lima&t=&z=13&ie=UTF8&iwloc=&output=embed"
      />

      <button onClick={buy}>
        Confirmar compra
      </button>

    </div>
  )
}