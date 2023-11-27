import React from 'react'
import { FaOpencart } from "react-icons/fa";
import Links from './Links';
import {  Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { addToCartContext } from '../../ProductContext/CartContext';
import { authContext } from '../../../../Auth/AuthProvider';
import toast from 'react-hot-toast';


const Header = () => {
    const { total_item } = useContext(addToCartContext)
    const { logUser, userLogOut } = useContext(authContext)
    const location = useNavigate();

    const handleOut = () =>{
        userLogOut()
        .then(()=>{
            toast.success("Logout your account 🙂")
            location("/login")
        })
        .catch((error)=>{
            toast.error(error.message)
        })
    }


    const logo = ""
    const menus = [
        { id: 1, name: "Home", pathName: "/" },
        { id: 2, name: "About", pathName: "/about" },
        { id: 3, name: "Products", pathName: "/products" },
        { id: 4, name: "Contact", pathName: "/contact" }
    ]
    const goCart = () => {
        location('/cart');
    }
    const goLogin = () => {
        location('/login');
    }

    return (
        <div className=' px-12 backdrop-blur-sm py-4 bg-slate-500 bg-opacity-30 fixed top-0 z-50 w-screen'>
            <div className="container flex justify-between ">
                <div className="flex items-center gap-3">
                        <Link className='flex items-center gap-3' to="/">
                    <div>
                        <img style={{ width: "3.5rem" }} src='https://fayshalrana.github.io/me/images/png/logo2.png' alt="https://fayshalrana.github.io/me/" />
                    </div>
                    <h2 className='text-2xl font-bold text-rose-500'>Rivo<span className='text-purple-900'>Fash</span></h2>
                        </Link>
                </div>
                <ul className='flex gap-5 items-center'>
                    {
                        menus.map(menu => <Links key={menu.id} menu={menu}></Links>)
                    }
                </ul>

                <div className="flex items-center gap-4 relative">
                    {logUser !== null ?
                        <button onClick={handleOut} className='border p-2 px-3 rounded-md bg-purple-600 text-white'>Log out</button> :
                        <button onClick={goLogin} className='border p-2 px-3 rounded-md bg-purple-600 text-white'>Login</button> 

                    }
                    <FaOpencart onClick={goCart} className=' cursor-pointer text-3xl text-rose-400'></FaOpencart>
                    <span className='cart_number absolute'>{total_item}</span>
                </div>
            </div>
        </div>
    )
}

export default Header
