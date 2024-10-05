import React from 'react';
import '../../src/index.css'

export default function Footer() {
    return (
        <footer id='footer-section'>
            <div id='footer-container'>
                <div className='footer-column'>
                    <h3>Discover</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Our Story</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className='footer-column'>
                    <h3>Popular Categories</h3>
                    <ul>
                        <li>Men's Fashion</li>
                        <li>Women's Fashion</li>
                        <li>Electronics</li>
                    </ul>
                </div>
                <div className='footer-column'>
                    <h3>Customer Service</h3>
                    <ul>
                        <li>Contact Us</li>
                        <li>Shipping Policy</li>
                        <li>Returns & Refunds</li>
                    </ul>
                </div>
                <div className='footer-column'>
                    <h3>Follow Us</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </div>
            <div id='footer-bottom'>
                <p>&copy; 2024 YourStyle Hub. All rights reserved.</p>
            </div>
        </footer>
    );
}
