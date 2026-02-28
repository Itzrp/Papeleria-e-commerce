import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ItemListContainer } from './components/pages/ItemListContainer/ItemListContainer'
import { NavBar } from './components/NavBar/NavBar'
import { NotFound } from './components/pages/NotFound/NotFound'
import { ItemDetailContainer } from './components/pages/ItemDetailContainer/ItemDetailContainer'
import { CartContainer } from './components/pages/CartContainer/CartContainer'
import { CheckOutContainer } from './components/pages/CheckOutContainer/CheckOutContainer'
import { OrdersContainer } from './components/pages/OrdersContainer/OrdersContainer'

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:categoryId" element={<ItemListContainer/>} />
        <Route path="/search/:key" element={<ItemListContainer/>} />
        <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
        <Route path="/cart" element={<CartContainer/>} />
        <Route path="/checkout" element={<CheckOutContainer/>} />
        <Route path="/orders" element={<OrdersContainer/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App
