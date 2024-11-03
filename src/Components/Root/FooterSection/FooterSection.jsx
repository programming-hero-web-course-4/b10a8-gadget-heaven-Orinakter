import React from 'react';

const FooterSection = () => {
    return (
       
            <footer className="bg-gray-100 py-10 ">
        <div className="container mx-auto text-center">
          {/* Main Title and Description */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold">Gadget Heaven</h2>
            <p className="text-gray-600 mt-3">Leading the way in cutting-edge technology and innovation.</p>
          </div>
          <br />
          <hr />
  
          {/* Footer Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
            {/* Services */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#support" className="hover:text-gray-800">Product Support</a></li>
                <li><a href="#tracking" className="hover:text-gray-800">Order Tracking</a></li>
                <li><a href="#shipping" className="hover:text-gray-800">Shipping & Delivery</a></li>
                <li><a href="#returns" className="hover:text-gray-800">Returns</a></li>
              </ul>
            </div>
  
            {/* Company */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#about" className="hover:text-gray-800">About Us</a></li>
                <li><a href="#careers" className="hover:text-gray-800">Careers</a></li>
                <li><a href="#contact" className="hover:text-gray-800">Contact</a></li>
              </ul>
            </div>
  
            {/* Legal */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#terms" className="hover:text-gray-800">Terms of Service</a></li>
                <li><a href="#privacy" className="hover:text-gray-800">Privacy Policy</a></li>
                <li><a href="#cookie" className="hover:text-gray-800">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
       
    );
};

export default FooterSection;