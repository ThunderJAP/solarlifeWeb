import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-600" smooth to="/#about">
                About
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-600" smooth to="/#services">
                Services
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-600" smooth to="/#portfolio">
                Products
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-600" to="/contact#contact">
                Contact Us
            </HashLink>
            {/* <HashLink className="text-white bg-green-600 hover:bg-green-400 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/get-demo#demo">
                our products
            </HashLink> */}
        </>
    )
}

export default NavLinks;
