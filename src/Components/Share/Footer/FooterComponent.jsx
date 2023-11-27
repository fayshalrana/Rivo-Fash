
'use client';

import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

function FooterComponent() {
  return (
    <Footer className='bg-purple-400 py-10 rounded-none'>
      <div className="w-full container">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="https://fayshalrana.github.io/me/"
              src="https://fayshalrana.github.io/me/images/png/logo2.png"
              alt="logo"
              name="RivoFash"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" className='text-purple-950'/>
              <Footer.LinkGroup col>
                <Footer.Link href="#" className=' text-black'>Flowbite</Footer.Link>
                <Footer.Link href="#" className=' text-black'>Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" className='text-purple-950'/>
              <Footer.LinkGroup col>
                <Footer.Link href="#" className=' text-black'>Github</Footer.Link>
                <Footer.Link href="#" className=' text-black'>Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className='text-purple-950'/>
              <Footer.LinkGroup col>
                <Footer.Link href="#" className=' text-black'>Privacy Policy</Footer.Link>
                <Footer.Link href="#" className=' text-black'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" className='text-black' by="Fayshal Rana" year={new Date().getFullYear()} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} className='text-purple-600'/>
            <Footer.Icon href="#" icon={BsInstagram} className='text-purple-600'/>
            <Footer.Icon href="#" icon={BsTwitter} className='text-purple-600'/>
            <Footer.Icon href="#" icon={BsGithub} className='text-purple-600'/>
            <Footer.Icon href="#" icon={BsDribbble} className='text-purple-600'/>
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterComponent;
