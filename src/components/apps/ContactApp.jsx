import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const PHONE = '918848529656';
const EMAIL = 'shabnanshabnan99@gmail.com';

const ContactApp = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent successfully!');
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <div className="p-4 font-sans text-gray-800 h-full flex flex-col">
      <h2 className="text-xl font-bold mb-6 border-b pb-2">Contact Information</h2>
      
      <div className="flex flex-col md:flex-row gap-8 flex-1">
        {/* Contact Info */}
        <div className="w-full md:w-1/3 space-y-4">

          {/* Phone */}
          <a
            href={`tel:+${PHONE}`}
            className="flex items-center gap-4 bg-gray-50 p-3 border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors cursor-pointer"
            style={{ textDecoration: 'none' }}
          >
            <div className="bg-blue-100 p-2 text-blue-600 rounded shrink-0">
              <Phone size={20} />
            </div>
            <div>
              <div className="text-xs text-gray-500 font-semibold uppercase">Phone (Tap to Call)</div>
              <div className="text-sm font-bold text-blue-700">+91 8848529656</div>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${PHONE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-gray-50 p-3 border border-gray-200 hover:bg-green-50 hover:border-green-300 transition-colors cursor-pointer"
            style={{ textDecoration: 'none' }}
          >
            <div className="bg-green-100 p-2 text-green-600 rounded shrink-0">
              <MessageCircle size={20} />
            </div>
            <div>
              <div className="text-xs text-gray-500 font-semibold uppercase">WhatsApp</div>
              <div className="text-sm font-bold text-green-700">+91 8848529656</div>
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-4 bg-gray-50 p-3 border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors cursor-pointer"
            style={{ textDecoration: 'none' }}
          >
            <div className="bg-blue-100 p-2 text-blue-600 rounded shrink-0">
              <Mail size={20} />
            </div>
            <div>
              <div className="text-xs text-gray-500 font-semibold uppercase">Email (Tap to Mail)</div>
              <div className="text-sm font-bold text-blue-700">{EMAIL}</div>
            </div>
          </a>

          {/* Location */}
          <div className="flex items-center gap-4 bg-gray-50 p-3 border border-gray-200">
            <div className="bg-blue-100 p-2 text-blue-600 rounded shrink-0">
              <MapPin size={20} />
            </div>
            <div>
              <div className="text-xs text-gray-500 font-semibold uppercase">Location</div>
              <div className="text-sm font-bold">Kerala, India</div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-2/3">
          <form onSubmit={handleSubmit} className="bg-gray-50 p-4 border border-gray-200 h-full flex flex-col">
            <h3 className="font-bold mb-4">Send a Message</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-semibold mb-1">Name</label>
                <input type="text" className="w-full border border-gray-300 px-2 py-1 text-sm focus:border-blue-500 outline-none" required />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">Email</label>
                <input type="email" className="w-full border border-gray-300 px-2 py-1 text-sm focus:border-blue-500 outline-none" required />
              </div>
            </div>
            
            <div className="flex-1 mb-4 flex flex-col min-h-[100px]">
              <label className="block text-xs font-semibold mb-1">Message</label>
              <textarea className="w-full border border-gray-300 px-2 py-1 text-sm focus:border-blue-500 outline-none flex-1 resize-none" required></textarea>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-green-600 font-bold">{status}</span>
              <button type="submit" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-bold transition-colors">
                <Send size={16} /> Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactApp;
