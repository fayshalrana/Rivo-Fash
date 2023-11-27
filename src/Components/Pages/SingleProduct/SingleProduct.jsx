import React from 'react'
import { NavLink, useLoaderData } from 'react-router-dom'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { CiRoute } from "react-icons/ci";
import { HiMiniCheckBadge } from "react-icons/hi2";
import Quantity from './Quantity';
import { useState } from 'react';
import PriceConverter from '../../CustomHock/PriceConverter';
import { useContext } from 'react';
import { addToCartContext } from '../../ProductContext/CartContext';


const SingleProduct = () => {
    const {addToCart, setIncrease, setDecrease, amount} = useContext(addToCartContext)
    const product = useLoaderData();
    const { name, price, img, ratings, seller, stock, ratingsCount, shipping, id } = product;


        

    return (
        <div className="container">
            <div className='grid grid-cols-2 h-screen py-24'>
                <div className="flex justify-center items-center">
                    <img style={{ width: "25rem" }} src={img} alt="" />
                </div>
                <div className="">
                    <h2 className='text-2xl font-bold'>{name}</h2>
                    <div className=" flex gap-2 items-center py-2">
                        <Rating style={{ maxWidth: 120 }} value={ratings} readOnly />
                        <span>({ratingsCount} customer reviews)</span>
                    </div>
                    <div className="">
                        <h4 className='pb-5'>MRP: <span className='font-bold'><PriceConverter price={price}></PriceConverter></span></h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nulla reiciendis mollitia aut velit porro voluptas dolore nisi sunt totam temporibus quam nostrum dolorem eaque, quidem odit repudiandae fugit iste repellat libero hic culpa. Quo consequuntur possimus officia unde, quis dolor sit. In provident harum, aut eaque cupiditate sunt quis.</p>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className="p-5 flex flex-col gap-2 items-center">
                            <div style={{ width: "3rem", height: "3rem" }} className="bg-rose-200 rounded-full flex items-center justify-center p-2">
                                <BsFillRocketTakeoffFill className='text-2xl text-purple-700'></BsFillRocketTakeoffFill>
                            </div>
                            <p className='text-sm text-purple-400 '>{shipping > 0 ?
                          <>Delivery Charge: <PriceConverter price={shipping}></PriceConverter> </>: "Free Delivery"}</p>
                        </div>
                        <div className="p-5 flex flex-col gap-2 items-center">
                            <div style={{ width: "3rem", height: "3rem" }} className="bg-rose-200 rounded-full flex items-center justify-center p-2">
                                <CiRoute className='text-2xl text-purple-700'></CiRoute>
                            </div>
                            <p className='text-sm text-purple-400 '>30 days replacement</p>
                        </div>
                        <div className="p-5 flex flex-col gap-2 items-center">
                            <div style={{ width: "3rem", height: "3rem" }} className="bg-rose-200 rounded-full flex items-center justify-center p-2">
                                <HiMiniCheckBadge className='text-2xl text-purple-700'></HiMiniCheckBadge>
                            </div>
                            <p className='text-sm text-purple-400 '>2 years warranty</p>
                        </div>
                    </div>
                    <hr />
                    <div className="flex gap-10 items-center mt-5 justify-start">
                        <div className="flex flex-col gap-3">
                            <p>Available: {stock > 0 ? <span className="text-green-600 font-semibold">In-stock</span> : <span className='text-red-600 font-semibold'>Stock-out</span>}</p>
                            <p>Brand: <span className='font-semibold'>{seller}</span></p>
                            <div>
                                <p>Quantity</p>
                            <Quantity setIncrease={setIncrease} setDecrease={setDecrease} stock={stock} amount={amount}></Quantity>
                        </div>
                        </div>
                        <NavLink to="/cart">
                        <button onClick={()=> addToCart(id, name, price, amount, product)} className='border bg-purple-700 text-white font-bold py-2 px-4 rounded-md'>Add To Cart</button>
                        </NavLink>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
