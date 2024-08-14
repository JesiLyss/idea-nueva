// Productos de ejemplo
const productos = [
    { id: 1, nombre: "Camiseta", precio: 25 },
    { id: 2, nombre: "Pantalón", precio: 40 },
    { id: 3, nombre: "Chaqueta", precio: 60 },
];

// Función para mostrar los productos
function mostrarProductos() {
    const grid = document.querySelector('.grid');
    productos.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto');
        productoDiv.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button>Añadir al Carrito</button>
        `;
        grid.appendChild(productoDiv);
    });
}

mostrarProductos();

