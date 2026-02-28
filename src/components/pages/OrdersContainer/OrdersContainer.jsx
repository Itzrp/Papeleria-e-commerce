import { useState } from "react"
import { services } from "../../../services"
import { Slide, toast } from "react-toastify"
import { OrdersDetail } from "../OrdersDetail/OrdersDetail"
import './OrdersContainer.css'

const OrdersContainer = () => {
    const [order, setOrder] = useState(null)
    const [loading, setLoading] = useState(false)
    const [inputValue, setInputValue] = useState("")

    const handleSearch = async (e) => {
        e.preventDefault()
        const idToSearch = inputValue.trim()

        if (!idToSearch) {
            toast.warning("Por favor ingresa un ID para realizar la búsqueda", {
                position: "top-center", 
                autoClose: 2000,          
                hideProgressBar: true,    
                closeButton: false,    
                className: "toastify-warning",
                transition: Slide
            });   
            return 
        } 
        setLoading(true);
        setOrder(null);

        try {
            const response = await services.firestore.orders.getOrder(inputValue.trim());

            if (response.success) {
                setOrder(response.data);
            } else {
                toast.error("No encontramos ese número de pedido, intenta nuevamente", {
                    position: "top-center", 
                    autoClose: 2000,          
                    hideProgressBar: true,    
                    closeButton: false,    
                    className: "toastify-error",
                    transition: Slide
                }); 
            }
        } catch (error) {
            toast.error("Hubo un problema en la búsqueda", {
                position: "top-center", 
                autoClose: 2000,          
                hideProgressBar: true,    
                closeButton: false,    
                className: "toastify-error",
                transition: Slide
            }); 
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
        <div className="container mt-2 pt-4">
            <div className="mx-auto text-center mb-5 search-order-container">
                <h1>Rastrea tu Pedido 📝</h1>
                <p className="text-muted">Ingresa el ID que recibiste al finalizar tu compra</p>

                <form onSubmit={handleSearch} className="d-flex form-search-order" role="search">
                    <input className="form-control me-3 nav-search" type="search" placeholder="Ej. Km62MiRYtbgPs39pHbmm" aria-label="Search" onChange={(e) => setInputValue(e.target.value)}/>
                    <button className="btn-back" type="submit">{loading ? "Buscando..." : "Buscar"}</button>
                </form>
            </div>
            {!loading && order && <OrdersDetail order={order} />}
        </div>
        </>
    );
};
export {OrdersContainer}