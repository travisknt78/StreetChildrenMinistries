import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Stories() {
  const stories = [
    {
      name: "David",
      age: 14,
      image: "https://images.unsplash.com/photo-1594498653385-d5172c532c00?q=80&w=800&auto=format&fit=crop",
      quote: "Before the ministry, I slept under a market stall. Now I have a bed, I go to school, and I want to be a doctor to help other kids.",
      bg: "bg-blue-50"
    },
    {
      name: "Sarah",
      age: 11,
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb25ea35?q=80&w=800&auto=format&fit=crop",
      quote: "I love reading books here. The teachers are kind and they always make sure I have enough to eat. I feel safe.",
      bg: "bg-emerald-50"
    },
    {
      name: "Michael",
      age: 16,
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop",
      quote: "I am currently learning carpentry in the vocational program. For the first time in my life, I have hope for my future.",
      bg: "bg-purple-50"
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
            Success Stories
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Meet the resilient children whose lives have been transformed through your support.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {stories.map((story, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className={`rounded-3xl overflow-hidden shadow-lg border border-slate-100 bg-white flex flex-col h-full`}
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={story.image} 
                  alt={story.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full shadow-sm text-sm font-bold text-slate-900">
                  {story.name}, {story.age}
                </div>
              </div>
              <div className={`p-8 flex-grow ${story.bg}`}>
                <Quote className="h-10 w-10 text-slate-300 mb-4" />
                <p className="text-lg text-slate-700 italic leading-relaxed">
                  "{story.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
