import React from 'react'
import ProductList from '../Product/ProductList';
import Navbar from '../Navbar/Navbar'
import Search from '../SearchBar/Search';

const Home = () => {
    return (
        <React.Fragment>

            <Navbar />

            <div className="container">
                <Search />
                <ProductList />
            </div>
            
        </React.Fragment>
    )
}

export default Home
