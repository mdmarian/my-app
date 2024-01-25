import React from 'react';
import Header from './Header';
import ProductCard from '/ProductCard';
import './styles/components/ShoppingPage.css';

const shoppingpage = () => {
    const products = [
        {id: 1, title: 'Produs 1', price: 29.99, image: 'product1.jpg'},
        { id: 2, title: 'Produs 2', price: 39.99, image: 'product2.jpg' },
    
    ]

    return (
        <div>
            <h2>Produse disponibile pentru cumparare</h2>
            <div className="product-list">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default shoppingpage;