import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="w-full pt-8 pb-20">
      <div className="bg-slate-50 py-16 mb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Have a question or want to learn more? We'd love to hear from you.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Contact Information</h2>
            
            <div className="space-y-8 mt-10">
              <div className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="bg-blue-50 p-3 rounded-xl text-brand-blue mr-5">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold font-display text-lg text-slate-900 mb-1">Our Headquarters</h3>
                  <p className="text-slate-600">123 Hope Avenue<br/>Sanctuary City, SC 45678</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="bg-emerald-50 p-3 rounded-xl text-brand-green mr-5">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold font-display text-lg text-slate-900 mb-1">Phone Number</h3>
                  <p className="text-slate-600">Main: +1 (555) 123-4567<br/>Donations: +1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="bg-purple-50 p-3 rounded-xl text-purple-600 mr-5">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold font-display text-lg text-slate-900 mb-1">Email</h3>
                  <p className="text-slate-600">hello@streetchildrenministries.org<br/>volunteer@streetchildrenministries.org</p>
                </div>
              </div>
              
              <div className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="bg-amber-50 p-3 rounded-xl text-amber-600 mr-5">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold font-display text-lg text-slate-900 mb-1">Office Hours</h3>
                  <p className="text-slate-600">Monday - Friday: 9:00 AM - 5:00 PM<br/>Weekend: Closed (Programs operate 24/7)</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 p-8 md:p-10 rounded-3xl shadow-xl text-white outline outline-1 outline-slate-800"
          >
            <h3 className="text-2xl font-display font-bold mb-2">Send us a message</h3>
            <p className="text-slate-400 mb-8">We usually respond within 24 hours.</p>
            
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-transparent transition-colors" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-transparent transition-colors" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea rows={5} className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-transparent transition-colors resize-y"></textarea>
              </div>

              <button type="submit" className="w-full bg-brand-blue hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg transition-all border border-blue-500">
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
