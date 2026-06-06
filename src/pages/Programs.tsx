import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Utensils, HeartPulse, Home as HomeIcon } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      title: "Education & Mentorship",
      icon: BookOpen,
      desc: "Providing access to local schools, after-school tutoring, and vocational training to ensure children can build independent, successful futures.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Nutrition & Feeding",
      icon: Utensils,
      desc: "Our community kitchen serves hundreds of hot, nutritious meals daily to both our residents and children still living on the streets.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Healthcare Clinic",
      icon: HeartPulse,
      desc: "Weekly medical checkups, vaccinations, and psychological counseling to address the physical and emotional trauma of street life.",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Safe Shelter",
      icon: HomeIcon,
      desc: "Dormitories that provide a safe, clean, and supervised environment where children can sleep without fear and enjoy a structured routine.",
      image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="w-full pt-8 pb-20">
      <div className="bg-slate-50 py-16 mb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4"
          >
            Our Programs
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            A holistic approach to rescuing, rehabilitating, and empowering street children.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {programs.map((prog, idx) => (
          <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
            <motion.div 
              initial={{ opacity: 0, x: idx % 2 === 1 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="lg:w-1/2"
            >
              <div className="h-16 w-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue mb-6">
                <prog.icon className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">{prog.title}</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {prog.desc}
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="lg:w-1/2 w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img src={prog.image} alt={prog.title} className="w-full h-full object-cover" />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
