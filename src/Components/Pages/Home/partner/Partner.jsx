import React from 'react'
import Marquee from "react-fast-marquee";
import './Partner.css'
const Partner = () => {
    return (
        <div className='py-10'>
             <div className=" text-center">
                    <h2 className='text-3xl font-bold pb-4'>Our Brand partners</h2>
                    <p className='text-md tracking-widest text-purple-600'>If you want to lift yourself up, lift up someone else.</p>
                </div>
                <div className="mt-5">
                    <Marquee
                        autoFill={true}
                        pauseOnHover={true}
                        style={{ gap: "2rem" }}
                    >
                        <div className='marq_box'>
                            <img src="/download (8).png" alt="" />
                            <div className="Text_box">
                                <h3 className='name text-md font-bold text-center'>Armani</h3>
                            </div>
                        </div>
                        <div className='marq_box'>
                            <img src="/Image_Editor (1).png" alt="" />
                            <div className="Text_box">
                                <h3 className='name text-md font-bold text-center'>Armani</h3>
                            </div>
                        </div>
                        <div className='marq_box'>
                            <img src="/Image_Editor (2).png" alt="" />
                            <div className="Text_box">
                                <h3 className='name text-md font-bold text-center'>Gucci</h3>
                            </div>
                        </div>
                        <div className='marq_box'>
                            <img src="/Image_Editor (3).png" alt="" />
                            <div className="Text_box">
                                <h3 className='name text-md font-bold text-center'>Dior</h3>
                            </div>
                        </div>
                        <div className='marq_box'>
                            <img src="/Image_Editor (4).png" alt="" />
                            <div className="Text_box">
                                <h3 className='name text-md font-bold text-center'>Armani</h3>
                            </div>
                        </div>
                        <div className='marq_box'>
                            <img src="/Image_Editor.png" alt="" />
                            <div className="Text_box">
                                <h3 className='name text-md font-bold text-center'>Armani</h3>
                            </div>
                        </div>
                    </Marquee>
                </div>
        </div>
    )
}

export default Partner
