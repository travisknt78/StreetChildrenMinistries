import React from 'react';
import { Page } from '../types';
import { motion } from 'motion/react';
import { ArrowRight, HeartHandshake, BookOpen, Utensils, Home as HomeIcon } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" 
            alt="Children smiling together" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply" />
        </div>
        
        <motion.div 
          className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white mt-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.span variants={itemVariants} className="inline-block py-1 px-3 rounded-full bg-brand-green/20 border border-brand-green/40 text-brand-green backdrop-blur-sm text-sm font-semibold tracking-wider uppercase mb-6">
            Street Children Ministries
          </motion.span>
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
            Bringing Hope to <br /> Every Child
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-200 mb-10 max-w-2xl mx-auto font-light">
            We provide shelter, education, and love to vulnerable street children, guiding them towards a brighter, independent future.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => onNavigate('donate')}
              className="w-full sm:w-auto px-8 py-4 bg-brand-blue hover:bg-blue-700 text-white rounded-full font-semibold text-lg transition-all shadow-[0_0_20px_rgba(29,78,216,0.4)] hover:shadow-[0_0_30px_rgba(29,78,216,0.6)] transform hover:-translate-y-1 flex items-center justify-center"
            >
              Donate Now <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button 
              onClick={() => onNavigate('volunteer')}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-full font-semibold text-lg transition-all backdrop-blur-sm text-center"
            >
              Become a Volunteer
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Mission Quick Look */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Our Core Mission</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We rescue orphaned and vulnerable children from the streets, providing a safe haven, nutritious meals, essential healthcare, and quality education. Our goal is to empower them to break the cycle of poverty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: HomeIcon, title: "Safe Shelter", desc: "Providing a secure and loving home environment." },
              { icon: Utensils, title: "Nutrition", desc: "Ensured daily balanced meals to promote healthy growth." },
              { icon: BookOpen, title: "Education", desc: "Access to quality schooling and skills training." },
              { icon: HeartHandshake, title: "Healthcare", desc: "Medical attention and emotional support counseling." },
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="h-14 w-14 bg-brand-green/10 rounded-xl flex items-center justify-center mb-6 text-brand-green">
                  <pillar.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold font-display text-slate-900 mb-3">{pillar.title}</h3>
                <p className="text-slate-600">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="bg-brand-blue py-16 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-8 max-w-2xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">You can change a life today.</h2>
            <p className="text-blue-100 text-lg">Your support directly provides food, shelter, and education for a child in need. Join us in making a difference.</p>
          </div>
          <div className="flex shrink-0">
            <button 
              onClick={() => onNavigate('donate')}
              className="bg-brand-green hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg"
            >
              Sponsor a Child
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
