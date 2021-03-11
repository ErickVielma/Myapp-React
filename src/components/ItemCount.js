const ItemCount = ({stock,initial,onAdd}) => {
    return(
        <form> 
            Stock: {stock}
            <br />
            <input id='amoun' type='number' placeholder={initial} />
            <br />
            <button id='add' onClick={(e) => onAdd(e,document.getElementById('amount').value)}>Agregar al carrito</button>
        </form>
    )
}

export default ItemCount;