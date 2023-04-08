import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import { toast } from 'react-toastify';

const Home = () => {
    const tShirts = useLoaderData()
    const [cart, setCart] = useState([])

    const handleAddToCart = (tshirt) => {
        const exists = cart.find((ts) => ts._id === tshirt._id)
        if (exists) {
            toast("Already Added");
        } else {
            const newCart = [...cart, tshirt]
            setCart(newCart);
        }
    }
    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter((ts) => ts._id !== id)
        setCart(remaining);
    }
    return (
        <div className='home-container' style={{ display: 'grid', gridTemplateColumns: '5fr 1fr', gap: '5px' }}>
            <div className="t-shirt-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '5px' }}>
                {
                    tShirts.map((tshirt) => <TShirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;