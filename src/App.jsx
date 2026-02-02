import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ItemListContainer } from './components/pages/ItemListContainer/ItemListContainer'
import { Cart } from './components/pages/Cart'
import { NavBar } from './components/NavBar/NavBar'
import { NotFound } from './components/pages/NotFound/NotFound'
import { ItemDetailContainer } from './components/pages/ItemDetailContainer/ItemDetailContainer'

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:categoryId" element={<ItemListContainer/>} />
        <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App
