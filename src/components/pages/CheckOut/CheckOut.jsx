import { useState, useContext } from "react";
import { CartContext } from "../../../context/CartContext/CartContext";
import Swal from "sweetalert2";
import './CheckOut.css'


const CheckOut = ({ onConfirm }) => {

    const ok = getComputedStyle(document.documentElement).getPropertyValue('--color-secundarioB');
    const { cart, totalPrice } = useContext(CartContext);

    const [userData, setUserData] = useState({
        name: '',
        phone: '',
        email: '',
        emailConfirm: ''
    });

    const handleInputChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (userData.email !== userData.emailConfirm) {
            return Swal.fire({
                icon: 'error',
                title: 'Los correos no coinciden',
                text: 'Por favor verifica tu email',
                confirmButtonColor: ok
            });
        }
        onConfirm(userData);
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-7">
                    <div className="card shadow-sm p-4 border-0 form-container">
                        <h2 className="mb-4">Datos de Envío 🚚</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 form-style">
                                <label className="form-label fw-bold">Nombre Completo</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    className="form-control" 
                                    placeholder="Ej: Juan Pérez" 
                                    value={userData.name}
                                    onChange={handleInputChange}
                                    required 
                                />
                            </div>
                            <div className="mb-3 form-style">
                                <label className="form-label fw-bold">Teléfono</label>
                                <input 
                                    type="tel" 
                                    name="phone"
                                    className="form-control" 
                                    placeholder="5512345678" 
                                    value={userData.phone}
                                    onChange={handleInputChange}
                                    required 
                                />
                            </div>
                            <div className="mb-3 form-style">
                                <label className="form-label fw-bold">Correo Electrónico</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    className="form-control" 
                                    placeholder="tu@email.com" 
                                    value={userData.email}
                                    onChange={handleInputChange}
                                    required 
                                />
                            </div>
                            <div className="mb-3 form-style">
                                <label className="form-label fw-bold">Confirmar Correo</label>
                                <input 
                                    type="email" 
                                    name="emailConfirm"
                                    className="form-control" 
                                    placeholder="Repite tu email" 
                                    value={userData.emailConfirm}
                                    onChange={handleInputChange}
                                    required 
                                />
                            </div>
                            
                            <button type="submit" className="btn-add-to-cart">
                                Generar Orden de Compra
                            </button>
                        </form>
                    </div>
                </div>

                <div className="col-md-5">
                    <div className="card bg-light p-4 border-0 shadow-sm resume-container">
                        <h4 className="mb-3">Resumen de Compra</h4>
                        <div className="overflow-auto items-container">
                            {cart.map(item => (
                                <div key={item.id} className="d-flex justify-content-between mb-2 item-details">
                                    <span className="text-muted">{item.name} x{item.quantity}</span>
                                    <span className="fw-bold">${item.price * item.quantity}</span>
                                </div>
                            ))}
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between fs-5 fw-bold total">
                            <span>Total a pagar:</span>
                            <span>${totalPrice()} MXN</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { CheckOut };