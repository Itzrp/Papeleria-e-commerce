import { useState, useContext } from "react"
import { CartContext } from "../../../context/CartContext/CartContext"
import { services } from "../../../services"
import Swal from "sweetalert2"
import { CheckOut } from "../CheckOut/CheckOut"
import { Link } from "react-router-dom"

const CheckOutContainer = () => {
    const [orderId, setOrderId] = useState(null)
    const [loading, setLoading] = useState(false)
    const { cart, totalPrice, clearCartAfterPurchase } = useContext(CartContext)
    const ok = getComputedStyle(document.documentElement).getPropertyValue('--color-secundarioB');

    const handleFinalizarCompra = async (userData) => {
        setLoading(true)
        try {
            const orderData = {
                buyer: userData,
                items: cart.map(item =>({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity
                })),
                total: totalPrice()
            }

            const response = await services.firestore.orders.createOrder(orderData)
            if (response.success) {
                for (const item of cart) {
                    const nuevoStock = item.stock - item.quantity
                    await services.firestore.productos.updateProduct(item.id, { stock: nuevoStock })
                }
                const cleanId = response.message.split(": ")[1]
                setOrderId(cleanId)
                clearCartAfterPurchase()
            } else {
                throw new Error("No pudimos registrar tu pedido. Por favor intenta de nuevo en unos minutos")
            }

        } catch (error) {
            let msjError =  "Hubo un problema al procesar tu compra"
            if (error.message.includes("No pudimos registrar tu pedido")) {
                msjError = error.message
            }

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: msjError,
                confirmButtonColor: ok
            });

            return{success: false, error: error.message}

        }  finally {
            setLoading(false)
        }
    }

    if (loading) {
        return (
            <>
                <div className="status-container">
                    <h1>Generando tu orden... ⏳</h1>
                </div>
            </>
        )
    }

    if (orderId) {
        return (
            <div className="status-container">
                <h1>🎉 ¡Gracias por tu compra! 🎉</h1>
                <p className='status'>Tu pedido ha sido registrado con éxito</p>
                
                <div className="card shadow-sm mt-4 mx-auto end-purchase">
                <div className="card-body p-5 text-center">
                    <div className="mb-4">
                        <i className="bi bi-check-circle-fill text-success"></i>
                    </div>
                    <h5 className="text-muted text-uppercase small fw-bold mb-2">Número de Seguimiento</h5>
                    <div className="bg-light p-3 rounded-3 folio">
                        <span className="display-6">
                            {orderId}
                        </span>
                    </div>
                    <p className="mt-4 text-muted small">
                        Guarda este código para consultar el estado de tu pedido.
                    </p>
                </div>
            </div>
                <Link to="/">
                    <button className="btn-back">Volver al Inicio</button>
                </Link>
            </div>
        )
    }

    return (
        <CheckOut onConfirm={handleFinalizarCompra} />
    )
}

export { CheckOutContainer }