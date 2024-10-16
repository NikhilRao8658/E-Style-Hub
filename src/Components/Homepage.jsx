
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

export default function Home() {

    let [product, setProduct] = useState([]);
    let [search, setSearch] = useState('');
    let [count, setCount] = useState(0);

    let Navigatepg = useNavigate();

    function adding() {
        setCount(++count);
    }

    function tozero() {
        setCount(0);
    }

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(result => {
                setProduct(result);
            });
    }, []);

    function searching(e) {
        setSearch(e.target.value);
    }

    return (
        <>
            <nav id='nav-bar'>
                <h1 id='shopify'>Welcome to YourStyle Hub</h1>
                <ul>
                    <Link to="/signinpage"><button className='navbtn'><li><b>Sign Up</b></li></button></Link>
                    <Link to="/loginpage"><button className='navbtn'><li><b>Log In</b></li></button></Link>
                    <button className='navbtn'><li><i className="fa-solid fa-cart-shopping"></i><b> Add to Cart: <span style={{ color: 'white', fontSize: '15px' }}>{count}</span></b></li></button>
                    <button className='navbtn' onClick={tozero}><li><i className="fa-solid fa-trash">Empty Cart</i></li></button>
                </ul>
            </nav>
            <br /><br /><br />
            <div id='topimg'>
                <h1 id='shop' style={{ fontSize: '25px', color: 'white' }}>
                    Discover YourStyle Hub - Where Fashion Meets Quality!
                </h1>
                <h4 id='fast' style={{ fontSize: '15px', color: 'white' }}>
                    Browse the trendiest collections from apparel to gadgets, all in one place with exclusive deals and quick delivery.
                </h4>
                <input type="text" placeholder='Search any products' onChange={searching} id='search-input' />
            </div>
            <br /><br /> <br />
            <div id='productbox'>
                {
                    product.filter(value => value.title.toLowerCase().includes(search)).map(data =>
                        <div id='imagecart' key={data.id}>
                            <img id='productimages' src={data.image} alt={data.title} />
                            <div id='productinfo'>
                                <p>{data.title}</p>
                                <p>Price:  ${data.price}</p> <br />
                                <button id='btn1' className='shopbtns' onClick={adding}>Add to Cart</button>
                                <button id='btn2' className='shopbtns' onClick={()=>Navigatepg("/SinglePage",{state:{data}})}> Buy Now</button>
                            </div>
                        </div>
                    )
                }
            </div>
            <Footer />


        </>
    );
}
