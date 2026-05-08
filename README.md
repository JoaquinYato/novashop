# NovaShop 🛍️

## Descripción del proyecto

NovaShop es una plataforma e-commerce desarrollada con React y Vite.  
El sistema simula una tienda virtual moderna inspirada en plataformas como Saga Falabella, permitiendo visualizar productos, agregarlos al carrito, marcar favoritos y realizar una compra simulada.

La aplicación fue desarrollada con fines académicos y está enfocada en ofrecer una experiencia sencilla, moderna e intuitiva para cualquier usuario.

---

# Tecnologías utilizadas

- React
- Vite
- JavaScript
- CSS3
- React Hooks
- React Icons

---

# Estructura del proyecto

```bash
novashop/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── ProductCard.jsx
│   │   └── Carousel.jsx
│   │
│   ├── data/
│   │   └── products.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Categories.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── Account.jsx
│   │   └── Help.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
│
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

# Requisitos previos

Antes de ejecutar el proyecto se debe tener instalado:

- Node.js
- npm
- Visual Studio Code o IntelliJ IDEA

Verificar instalación:

```bash
node -v
npm -v
```

---

# Instalación del proyecto

## 1. Clonar el repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

---

## 2. Entrar a la carpeta del proyecto

```bash
cd novashop
```

---

## 3. Instalar dependencias

```bash
npm install
```

Esto descargará automáticamente todas las librerías necesarias.

---

# Ejecución del proyecto

## Iniciar servidor local

```bash
npm run dev
```

---

# Abrir en navegador

Luego de ejecutar el comando anterior aparecerá una dirección similar a:

```bash
http://localhost:5173
```

Abrir esa dirección en el navegador.

---

# Funcionalidades principales

## Home

- Banner principal interactivo
- Carrusel automático
- Productos destacados
- Ofertas especiales
- Promociones del Día de la Madre

---

## Categorías

- Tecnología
- Moda
- Belleza
- Hogar

Cada categoría muestra productos relacionados.

---

## Favoritos

- Agregar productos a favoritos
- Eliminar favoritos
- Visualización en Mi Cuenta

---

## Carrito de compras

- Agregar productos
- Eliminar productos
- Aumentar/disminuir cantidades
- Visualización de precios
- Cálculo automático del total

---

## Compra simulada

- Formulario de datos
- Validaciones
- Confirmación visual
- Historial de compras

---

## Mi Cuenta

- Información personal
- Dirección
- Favoritos
- Historial de compras
- Ayuda y soporte

---

## Modo oscuro

- Cambio entre tema claro y oscuro
- Diseño adaptable

---

# Diseño responsive

La plataforma se adapta automáticamente a:

- Celulares
- Tablets
- Laptops
- Pantallas grandes

---

# Notas importantes

- El sistema NO procesa pagos reales.
- Todo el checkout es únicamente una simulación académica.
- Las imágenes usadas son demostrativas.
- El proyecto fue desarrollado con fines educativos.

---

# Cómo subir cambios a GitHub

## Agregar cambios

```bash
git add .
```

## Crear commit

```bash
git commit -m "Descripción de cambios"
```

## Subir cambios

```bash
git push
```

---

# Posibles mejoras futuras

- Integración con base de datos
- Inicio de sesión real
- Pasarela de pagos
- Chat en tiempo real
- Sistema de cupones
- Notificaciones automáticas
- Recomendaciones inteligentes
- Integración con Google Maps
- Panel administrativo
- Optimización de rendimiento

---

# Autor

Proyecto académico desarrollado para el curso de Interacción Humano Computador.