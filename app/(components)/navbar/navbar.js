import React from 'react'
import { BiSearch } from 'react-icons/fa';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
     <nav className='navbar'>
        <h1>Logo.</h1>
        <ul className='navlist'>
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/"}>About</Link></li>
            <li><Link href={"/"}>Pages</Link></li>
            <li><Link href={"/"}>Services</Link></li>
            <li><Link href={"/"}>Protfolio</Link></li>
            <li><Link href={"/"}>Blog</Link></li>
            <li><Link href={"/"}>Contact</Link></li>
        </ul>
        <div className='search'>
            <span>Search</span>
            <span><FaSearch/></span>
        </div>
        </nav> 
    </>
  )
}

export default Navbar
