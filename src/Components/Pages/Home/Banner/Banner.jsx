import React from 'react'

const Banner = () => {
    return (
        <section
            className="relative bg-white overflow-hidden"
        >
            <div
                className="relative mx-auto px-12 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-12"
            >
                <div className="container flex items-center">
                    <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="text-3xl font-extrabold sm:text-5xl text-rose-400">
                            Let us find your

                            <strong className="block font-extrabold text-purple-600">
                                Forever item.
                            </strong>
                        </h1>

                        <p className="mt-4 max-w-lg sm:text-xl/relaxed text-black">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
                            tenetur fuga ducimus numquam ea!
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <a
                                href="/products"
                                className="block w-full rounded bg-purple-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                            >
                                Shop Now
                            </a>
                        </div>
                    </div>
                    <div className="">
                        <img src="./bg-img.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
