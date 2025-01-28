import React from 'react';
import './Footer.css';
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineFacebook } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='footer_container'>
            <section className='footer_main text-white'>
                <div className='footer_single_div'>
                    <div>
                        <h1 className='text-4xl'>ShopOnline</h1>
                        <p className='mt-4'>Largest product search engine,</p>
                        <p>maximum categorized online shopping mall</p>
                        <p>and quickest home delivery system.</p>
                        <div className='flex items-center'>
                            <h3 className='text-xl'>Follow Us</h3>
                            <p className='text-2xl mx-3 hover:text-purple-700'>
                                <a href="https://www.facebook.com/ars.talukder.shadhin" target="_blank" rel="noreferrer"><AiOutlineFacebook /></a>
                            </p>
                            <p className='text-2xl hover:text-purple-700'>
                                <a href="https://www.instagram.com/ars_talukder/" target="_blank" rel="noreferrer"><FaInstagram /></a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className='footer_single_div'>
                    <div>
                        <h3 className='text-xl font-bold'>Contact us</h3>
                        <p className='mt-4'>Shyamoli </p>
                        <p>Mirpur, Dhaka</p>
                        <p className='flex'><span className='mr-1'>Email:</span> <span>shoponline@gmail.com</span></p>

                    </div>
                </div>

                <div className='footer_single_div'>
                    <div>
                        <h3 className='text-xl font-bold'>Let Us Help You</h3>
                        <p className='mt-4 hover:text-purple-600'><Link to="dashboard">Your Account</Link></p>
                        <p className='hover:text-purple-600'><Link to="dashboard/my_orders">Your Order</Link></p>

                    </div>
                </div>

            </section>

            <section className='footer_reserved'>
                <p>© {currentYear} shoponline.com | All rights reserved.</p>
            </section>
        </footer>
    );
};

export default Footer;