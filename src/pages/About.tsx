import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="w-full pt-8 pb-20">
      {/* Page Header */}
      <div className="bg-slate-50 py-16 mb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4"
          >
            About Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Learn about our history, our vision for the future, and the dedicated team making it happen.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                Street Children Ministries was founded with a simple but profound belief: every child deserves a safe place to sleep, a warm meal, and the opportunity to learn. 
              </p>
              <p>
                What started as a small community feeding program has grown into a comprehensive sanctuary and educational center. For over a decade, we have been working tirelessly on the front lines to identify vulnerable children living on the streets and offer them a pathway to a better life.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop" 
              alt="Volunteers helping children" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Vision, Mission, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Our Vision",
              content: "A world where no child is forced to call the streets their home, and every youth is empowered to reach their full potential.",
              color: "bg-blue-50 text-brand-blue border-blue-100"
            },
            {
              title: "Our Mission",
              content: "To rescue, rehabilitate, and educate street children through compassionate care, sustainable programs, and community partnerships.",
              color: "bg-emerald-50 text-brand-green border-emerald-100"
            },
            {
              title: "Our Values",
              content: "Compassion, Integrity, Empowerment, Diversity, and Excellence in all our operations and interactions with the children.",
              color: "bg-purple-50 text-purple-600 border-purple-100"
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 rounded-2xl border ${item.color} shadow-sm backdrop-blur-sm bg-opacity-50`}
            >
              <h3 className="text-2xl font-display font-bold mb-4">{item.title}</h3>
              <p className="text-slate-700 leading-relaxed">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
