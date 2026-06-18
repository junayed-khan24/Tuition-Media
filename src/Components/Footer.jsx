import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPaperPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo + Description */}
          <div>
            <h2 className="text-2xl font-bold mb-3">MEDDICAL</h2>
            <p className="text-sm opacity-80">
              Leading the Way in Medical Excellence, Trusted Care.
            </p>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="font-semibold mb-3">Important Links</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li className="hover:text-gray-200 cursor-pointer">Appointment</li>
              <li className="hover:text-gray-200 cursor-pointer">Doctors</li>
              <li className="hover:text-gray-200 cursor-pointer">Services</li>
              <li className="hover:text-gray-200 cursor-pointer">About Us</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3">Contact Us</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Call: (237) 681-812-255</li>
              <li>Email: fildineeseo@gmail.com</li>
              <li>Address: 0123 Some place</li>
              <li>Site: www.hospital.com</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-3">Newslet</h3>
            <div className="flex items-center bg-white rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-3 py-2 w-full text-black outline-none"
              />
              <button className="bg-primary px-4 py-3">
                <FaPaperPlane />
              </button>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-400 my-8 opacity-30"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          <p className="text-sm opacity-80 text-center md:text-left">
            © 2021 Hospital’s name All Rights Reserved by PNTEC-LTD
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">
            <div className="p-2 bg-white text-primary rounded-full cursor-pointer hover:scale-110 transition">
              <FaLinkedinIn size={14} />
            </div>
            <div className="p-2 bg-white text-primary rounded-full cursor-pointer hover:scale-110 transition">
              <FaFacebookF size={14} />
            </div>
            <div className="p-2 bg-white text-primary rounded-full cursor-pointer hover:scale-110 transition">
              <FaInstagram size={14} />
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer; 