import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount'
import { useState, useEffect } from "react"

//const App = () => <NavBar name="Erick Eduardo " lastname="Vielma Martinez"/>

const App = () => {

    const [currentStock, setCurrentStock] = useState(5)
    const subtractStock = (e,newStock) => {
        e.preventDefault();
        setCurrentStock((currentStock) => currentStock - newStock)
    }

    return(
        <>
        <NavBar name ="Erick Eduardo" lastname = "Vielma Martinez" />
        <ItemListContainer />
        <ItemCount stock={currentStock} initial={1} onAdd={subtractStock}/>
        </>
    )
}

export default App;
