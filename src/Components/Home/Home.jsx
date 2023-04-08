import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const totalProduct = useLoaderData()
    return (
        <div>
            HOme {totalProduct.length}
        </div>
    );
};

export default Home;