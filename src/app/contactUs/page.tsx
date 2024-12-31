import React from 'react';

const ContactUsPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="bg-gray-100 ">
        <div className="container mx-auto px-40 py-10">
          <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
          <p className="text-gray-600">Home / Page / <samp className='text-pink-600'>ContactUs</samp></p>
        </div>
      </header>

      {/* Contact Information Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-white  rounded-lg p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Information About Us</h2>
          <p className="text-gray-400 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis
            justo at risus vehicula interdum sed non justo.
          </p>
          <div className="text-gray-400 leading-relaxed space-y-3">
          <div className="flex items-start">
            <span className="w-3 h-3 bg-pink-500 rounded-full mt-2 mr-3"></span>
            <p>All frames constructed with hardwood solids and laminates.</p>
          </div>
          <div className="flex items-start">
            <span className="w-3 h-3 bg-blue-800 rounded-full mt-2 mr-3"></span>
            <p>
              Reinforced with double wood dowels, glue, screw-nails corner
              blocks, and machine nails.
            </p>
          </div>
          <div className="flex items-start">
            <span className="w-3 h-3 bg-green-400 rounded-full mt-2 mr-3"></span>
            <p>Arms, backs, and seats are structurally reinforced.</p>
          </div>
        </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-pink-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-pink-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Write your message here..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-pink-500 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-pink-500 text-white font-bold rounded-md hover:bg-pink-600 focus:ring focus:ring-pink-300"
            >
              Send Your Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Info</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="text-pink-500 material-icons-outlined mr-4">location_on</span>
              <p className="text-gray-600">123 Business Road, City, Country</p>
            </li>
            <li className="flex items-center">
              <span className="text-pink-500 material-icons-outlined mr-4">email</span>
              <p className="text-gray-600">contact@example.com</p>
            </li>
            <li className="flex items-center">
              <span className="text-pink-500 material-icons-outlined mr-4">phone</span>
              <p className="text-gray-600">+123 456 789</p>
            </li>
          </ul>
        </div>
      </section>

     
    </div>
  );
};

export default ContactUsPage;
