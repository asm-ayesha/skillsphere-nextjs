import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-sky-950 text-white mt-10 px-6 py-20 ">


      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8  justify-between items-center">

        {/* Contact */}
        <div className='space-y-3'>
          <h2 className="font-bold ">Contact</h2>
          <p>Email: support@skillsphere.com</p>
        </div>

        {/* Links */}
        <div className='space-y-3'>
          <h2 className="font-bold">Quick Links</h2>
          <div>
            <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          </div>
        </div>

        {/* Social */}
        <div className='space-y-3'>
          <h2 className="font-bold ">Follow Us</h2>
          <div className='flex gap-3 text-lg'>
            <FaFacebook></FaFacebook>
            <FaLinkedin></FaLinkedin>
            <FaTwitter></FaTwitter>
          </div>
        </div>

      </div>

      <p className="text-center text-gray-400 mt-15 text-sm border-t border-sky-900 pt-6">
        © 2026 SkillSphere. All rights reserved.
      </p>
      </div>

      

    </footer>
  );
};

export default Footer;



