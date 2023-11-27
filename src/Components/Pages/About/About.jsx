import React, { useContext } from 'react'
import { productsContext } from '../../ProductContext/ProductProvider'
import Review from './Review'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./review.css";
const About = () => {

  const {reviews} = useContext(productsContext)
  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    arrows: false
  };
  var settings_Banner = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    arrows: true
  };

  return (
    
   <>
   <div className="px-24 pt-36 pb-5 flex justify-center items-center">
    <h1 className='text-5xl font-bold text-purple-800'>About Us</h1>
   </div>
    <div className='px-24 pt-6 pb-10'>
      <Slider {...settings_Banner}>
      <div className="h-[370px] w-full rounded-md">
        <img src="https://i.ibb.co/QYSkNcK/ab.jpg" className='w-[100%]' alt="" />
      </div>
      <div className="h-[370px] w-full rounded-md">
        <img src="https://i.ibb.co/yWxRMPf/ab1.jpg" className='w-[100%]' alt="" />
      </div>
      <div className="h-[370px] w-full rounded-md">
        <img src="https://i.ibb.co/d0j1yWK/ab2.jpg" className='w-[100%]' alt="" />
      </div> 
      <div className="h-[370px] w-full rounded-md">
        <img src="https://i.ibb.co/Qf1y5vS/ab3.jpg" className='w-[100%]' alt="" />
      </div>
      </Slider>
   
      <div>
        <h3 className='text-2xl font-semibold text-black'>Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem Accusantium Doloremque Laudantium</h3>
        <p className='text-x mt-2'>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,

On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
        </p>
      </div>
    </div>

   <div className="">
   <Slider {...settings} className="px-24 py-10 ">
      {
        reviews.map(review => <Review key={review.id} rView={review}></Review>)
      }
    </Slider>
   </div>

   <div className="px-24 py-5">
    <h2 className='text-3xl font-bold capitalize pb-3'>Our team</h2>
    <hr />
    <div className="grid grid-cols-4 mt-5 gap-3">
      <div className="p-3 border bg-purple-400">
        <div className="">
          <img src="https://multikart-react-reactpixelstrap.vercel.app/assets/images/team/2.jpg" alt="" />
        </div>
        <h1 className='text-2xl font-semibold pt-3 text-white'>Hiler keol</h1>
        <p>CEo & Founder At Company</p>
      </div>
      <div className="p-3 border bg-purple-400">
        <div className="">
          <img src="https://multikart-react-reactpixelstrap.vercel.app/assets/images/team/3.jpg" alt="" />
        </div>
        <h1 className='text-2xl font-semibold pt-3 text-white'>Hiler keol</h1>
        <p>CEo & Founder At Company</p>
      </div>
      <div className="p-3 border bg-purple-400">
        <div className="">
          <img src="https://multikart-react-reactpixelstrap.vercel.app/assets/images/team/4.jpg" alt="" />
        </div>
        <h1 className='text-2xl font-semibold pt-3 text-white'>Hiler keol</h1>
        <p>CEo & Founder At Company</p>
      </div>
      <div className="p-3 border bg-purple-400">
        <div className="">
          <img src="https://multikart-react-reactpixelstrap.vercel.app/assets/images/team/1.jpg" alt="" />
        </div>
        <h1 className='text-2xl font-semibold pt-3 text-white'>Hiler keol</h1>
        <p>CEo & Founder At Company</p>
      </div>
    </div>
   </div>
   </>
    
  )
}

export default About
