import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-[#b2ffff] to-[#87CEEB] text-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-8">
          <div className="flex flex-col items-center">
            <FaPhone className="text-2xl text-blue-500 mb-2" />
            <span>(+00) 1234 5678</span>
          </div>
          <div className="flex flex-col items-center">
            <FaEnvelope className="text-2xl text-red-400 mb-2" />
            <span>info@email.com</span>
          </div>
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-2xl text-green-500 mb-2" />
            <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-bold mb-2">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-600">Our story</a></li>
              <li><a href="#" className="hover:text-gray-600">Awards</a></li>
              <li><a href="#" className="hover:text-gray-600">Our Team</a></li>
              <li><a href="#" className="hover:text-gray-600">Career</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-600">Our services</a></li>
              <li><a href="#" className="hover:text-gray-600">Clients</a></li>
              <li><a href="#" className="hover:text-gray-600">Contact</a></li>
              <li><a href="#" className="hover:text-gray-600">Press</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-600">Blog</a></li>
              <li><a href="#" className="hover:text-gray-600">Newsletter</a></li>
              <li><a href="#" className="hover:text-gray-600">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Subscribe</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter email address"
                className="flex-grow px-3 py-2 rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-2 text-sm">Get digital marketing updates in your mailbox</p>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mt-8">
          <a href="#" className="text-3xl text-blue-400 hover:text-blue-600"><FaTwitter /></a>
          <a href="#" className="text-3xl text-blue-700 hover:text-blue-900"><FaFacebook /></a>
          <a href="#" className="text-3xl text-pink-500 hover:text-pink-700"><FaInstagram /></a>
          <a href="#" className="text-3xl text-red-600 hover:text-red-800"><FaYoutube /></a>
        </div>

        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


