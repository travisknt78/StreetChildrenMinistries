import React from 'react';
import { motion } from 'motion/react';
import { Send, Users, CalendarCheck, Megaphone } from 'lucide-react';

export default function Volunteer() {
  return (
    <div className="w-full pt-8 pb-20">
      <div className="bg-slate-50 py-16 mb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4"
          >
            Become a Volunteer
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Give your time, skills, and heart to help shape the future of a child.
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
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Why Volunteer With Us?</h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Volunteers are the backbone of Street Children Ministries. From tutoring and coaching to serving meals and organizing events, your presence brings joy and stability to kids who need it most.
            </p>

            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-brand-blue">
                    <Users className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold font-display text-slate-900 mb-2">Mentorship Program</h3>
                  <p className="text-slate-600">Spend one-on-one time tutoring, reading, or just being a positive role model in a child's life.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-brand-green">
                    <CalendarCheck className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold font-display text-slate-900 mb-2">Event Support</h3>
                  <p className="text-slate-600">Help organize weekend activities, holiday parties, and community outreach events.</p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                    <Megaphone className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold font-display text-slate-900 mb-2">Skills Based</h3>
                  <p className="text-slate-600">Offer your professional skills such as healthcare, counseling, photography, or social media management.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100"
          >
            <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">Application Form</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:bg-white transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:bg-white transition-colors" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                <input type="email" required className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:bg-white transition-colors" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:bg-white transition-colors" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Areas of Interest</label>
                <select className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:bg-white transition-colors appearance-none">
                  <option value="">Select an area of interest...</option>
                  <option value="mentorship">Mentorship & Tutoring</option>
                  <option value="events">Event Support</option>
                  <option value="kitchen">Kitchen & Feeding</option>
                  <option value="administrative">Administrative / Skills Based</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Message (Optional)</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:bg-white transition-colors resize-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-brand-blue hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-md transition-all flex justify-center items-center">
                Submit Application <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
