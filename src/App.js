import React,{useState} from 'react'
import Cart from './components/Cart/Cart'
import Clothes from './components/Clothes/Clothes'
import Header from './components/Layout/Header'

const App = () => {
    const [showCart, setShowCart] = useState(false)

    const showCartHandler=()=>{
        setShowCart(true)
    }

    const hideCartHandler = () =>{
        setShowCart(false)
    }

    return (
        <React.Fragment>
            { showCart && <Cart onCloseCart={hideCartHandler}/>}
            <Header onShowCart={showCartHandler}/>
        <main >
            <Clothes/>
        </main>
        </React.Fragment>
            
        
    )
}

export default App
