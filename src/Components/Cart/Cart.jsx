import React from 'react';

const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div>
            <h2>order summary {cart.length}</h2>
            {
                cart.map((tshirt, idx) => <p
                    key={idx}
                >{tshirt.name}
                <button onClick={()=> handleRemoveFromCart(tshirt._id)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;