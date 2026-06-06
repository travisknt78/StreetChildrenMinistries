import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, CreditCard, ShieldCheck } from 'lucide-react';

export default function Donate() {
  const [amount, setAmount] = useState<number | 'custom'>(50);
  const [type, setType] = useState<'monthly' | 'one-time'>('monthly');

  return (
    <div className="w-full pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 mt-8">
          {/* Information & Impact */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-5/12"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
              Give the Gift <br/>
              of <span className="text-brand-blue">Hope.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Your contribution goes directly towards providing safe shelter, nutritious meals, and quality education for children who have nowhere else to turn.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-emerald-100 p-2 rounded-full mr-4 text-brand-green mt-1">
                  <Heart className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">$25 / month</h3>
                  <p className="text-slate-600 text-sm">Provides daily meals for one child.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 text-brand-blue mt-1">
                  <BookOpenIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">$50 / month</h3>
                  <p className="text-slate-600 text-sm">Covers education, books, and uniforms.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-100 p-2 rounded-full mr-4 text-purple-600 mt-1">
                  <HomeIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">$100 / month</h3>
                  <p className="text-slate-600 text-sm">Fully sponsors a child (shelter, food, education, medical).</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex items-center text-sm text-slate-500 bg-slate-50 p-4 rounded-xl">
              <ShieldCheck className="h-6 w-6 text-brand-green mr-3 flex-shrink-0" />
              <p>Your donation is secure and encrypted. We are a registered 501(c)(3) non-profit organization.</p>
            </div>
          </motion.div>

          {/* Donation Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:w-7/12"
          >
            <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 p-8 md:p-10">
              <div className="flex bg-slate-100 p-1 rounded-xl mb-8">
                <button
                  onClick={() => setType('one-time')}
                  className={`flex-1 py-3 text-center rounded-lg text-sm font-semibold transition-all ${type === 'one-time' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  Give Once
                </button>
                <button
                  onClick={() => setType('monthly')}
                  className={`flex-1 py-3 text-center rounded-lg text-sm font-semibold transition-all ${type === 'monthly' ? 'bg-brand-blue text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  Monthly Support
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-3">Select Amount</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[25, 50, 100, 250, 500].map((val) => (
                      <button
                        key={val}
                        onClick={() => setAmount(val)}
                        className={`py-4 rounded-xl font-bold transition-all border-2 ${amount === val ? 'border-brand-green bg-emerald-50 text-brand-green' : 'border-slate-200 text-slate-600 hover:border-slate-300'}`}
                      >
                        ${val}
                      </button>
                    ))}
                    <button
                      onClick={() => setAmount('custom')}
                      className={`py-4 rounded-xl font-bold transition-all border-2 ${amount === 'custom' ? 'border-brand-green bg-emerald-50 text-brand-green' : 'border-slate-200 text-slate-600 hover:border-slate-300'}`}
                    >
                      Other
                    </button>
                  </div>
                </div>

                {amount === 'custom' && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <span className="text-slate-500 sm:text-lg">$</span>
                      </div>
                      <input
                        type="number"
                        className="block w-full pl-8 pr-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-0 focus:border-brand-blue text-lg font-bold"
                        placeholder="Enter amount"
                      />
                    </div>
                  </motion.div>
                )}

                <hr className="border-slate-100" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">First Name *</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/50" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name *</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/50" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/50" />
                </div>

                <div className="pt-4">
                  <button className="w-full bg-brand-green hover:bg-emerald-600 text-white flex items-center justify-center font-bold text-lg py-5 rounded-xl shadow-lg transition-all transform hover:-translate-y-1">
                    <CreditCard className="mr-2 h-6 w-6" />
                    Complete Donation
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Inline helper components
function BookOpenIcon(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>;
}

function HomeIcon(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
}
