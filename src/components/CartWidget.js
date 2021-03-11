import { Component } from 'react';

class CartWidget extends Component {
    render() {
    return (
      <>
      <div class="item-card">
        <div class="center">
          <img src="../../public/sanitizar.jpeg" alt="Imagen de desinfección" class="image"></img>
          <h2>Servicio de Sanitización</h2>
          <p>Precio: $300</p>
          <button class="add-item">Agregar</button>
        </div>
      </div>
      </>
    );
  }
  }

  export default CartWidget;