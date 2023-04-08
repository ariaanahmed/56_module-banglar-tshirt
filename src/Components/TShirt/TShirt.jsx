import React from 'react';

const TShirt = ({tshirt, handleAddToCart}) => {
    const {name, price, picture} = tshirt;
    return (
        <div className='product-card' style={{border: '1px solid black', padding:'5px', textAlign: 'center'}}>
            <img style={{height: '350px', width: '100%'}} src={picture} alt="" />
            <h4>{name}</h4>
            <h5>Price: ${price}</h5>
            <button onClick={() => handleAddToCart(tshirt)}>BuyNow</button>
        </div>
    );
};

export default TShirt;