import React from 'react';

const Contact = () => {
  return (
    <section className="text-gray-300 bg-transparent body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-500 via-gray-300 to-gray-600 mb-12 text-center">
          Contact Us
        </h1>
        <div className="flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-[#111827] rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe 
               width="100%" 
                 height="100%" 
                        title="map" 
                       className="absolute inset-0 map-iframe"  
                          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" 
></iframe>
            <div className="bg-[#111827] relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
                <p className="mt-1 text-gray-400">123 Main Street, Your City, Country</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
                <a className="text-gray-400 leading-relaxed">example@email.com</a>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
                <p className="leading-relaxed text-gray-400">123-456-7890</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-white text-lg mb-1 font-medium title-font">Feedback</h2>
            <p className="leading-relaxed mb-5 text-gray-400">We'd love to hear from you! Drop us a message.</p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-gray-300 focus:ring-2 focus:ring-gray-300 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-gray-500 focus:ring-2 focus:ring-gray-600 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
              <textarea 
                id="message" 
                name="message" 
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-gray-500 focus:ring-2 focus:ring-gray-600 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white bg-gradient-to-r from-gray-500 to-gray-700 border-0 py-2 px-6 focus:outline-none hover:from-gray-400 hover:to-gray-600 rounded text-lg">
              Send
            </button>
            <p className="text-xs text-gray-400 text-opacity-90 mt-3">We respect your privacy. Your information is safe with us.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
