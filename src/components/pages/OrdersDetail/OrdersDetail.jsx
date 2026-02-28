import './OrdersDetail.css'

const OrdersDetail = ({ order }) => {
    const fecha = order.date?.toDate ? order.date.toDate().toLocaleDateString() : "Reciente";

    return (
        <div className="card mx-auto shadow-sm border-0" style={{ maxWidth: "600px", borderRadius: "15px" }}>
            <div className="card-header text-white text-center py-3 top-container">
                <h4 className="mb-0 fw-bold">Resumen de tu Pedido</h4>
                <small>ID: {order.id}</small>
            </div>

            <div className="card-body p-4 content-div">
                <div className="row mb-4">
                    <div className="col-6">
                        <p className="text-muted small mb-0">Comprador</p>
                        <h6 className="fw-bold">{order.buyer.name}</h6>
                    </div>
                    <div className="col-6 text-end">
                        <p className="text-muted small mb-0">Fecha de compra</p>
                        <h6 className="fw-bold">{fecha}</h6>
                    </div>
                </div>

                <h5 className="fw-bold border-bottom pb-2 mb-3">Productos:</h5>
                <ul className="list-group list-group-flush mb-4">
                    {order.items.map((item) => (
                        <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center px-0 bg-transparent">
                            <div className="prods-style">
                                <span className="badge bg-light text-dark border me-2">{item.quantity}</span>
                                {item.name}
                            </div>
                            <span className="fw-bold prods-style">${item.price * item.quantity}</span>
                        </li>
                    ))}
                </ul>

                <div className="p-3 rounded-3 text-end folio">
                    <span className="h4 mb-0 me-3 text-muted">Total Pagado:</span>
                    <span className="h2 mb-0 fw-bold change-color">${order.total} MXN</span>
                </div>
            </div>
        </div>
    );
};
export {OrdersDetail}