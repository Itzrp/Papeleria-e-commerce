import products from "../../data/products.json";

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const operacionExitosa = true
            if (operacionExitosa) {
                resolve({success:true, message:products})
            } else{
                reject({success:false, message:"Error al obtener productos"})
            }
        }, 2000)
    })
}

const getProduct = (itemId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find(prod => prod.id === parseInt(itemId))
            if (product) {
                resolve({success:true, message:product})
            } else {
                reject({success:false, message:`El producto con el id ${itemId} no existe`})
            }
        }, 500)
    })
}

const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (categoryId === 'ofertas') {
                const productsOnSale = products.filter(prod => prod.offer === true);
                resolve({ success: true, message: productsOnSale });
            } else {
                const productsFiltered = products.filter(prod => 
                    prod.category.trim().toLowerCase() === categoryId.trim().toLowerCase()
                );
                resolve({ success: true, message: productsFiltered });
            }
        }, 500);
    });
};

export const productos = {getProducts, getProduct, getProductsByCategory}