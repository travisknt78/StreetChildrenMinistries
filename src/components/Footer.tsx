import React from 'react';
import { Page } from '../types';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t-4 border-brand-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand & Mission */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-brand-green" />
              <span className="ml-2 text-xl font-display font-bold text-white">
                SCM
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Dedicated to bringing hope, education, and shelter to orphaned and vulnerable street children, guiding them towards a brighter future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold font-display mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onNavigate('about')} className="hover:text-brand-green transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate('programs')} className="hover:text-brand-green transition-colors">Our Programs</button></li>
              <li><button onClick={() => onNavigate('stories')} className="hover:text-brand-green transition-colors">Success Stories</button></li>
              <li><button onClick={() => onNavigate('gallery')} className="hover:text-brand-green transition-colors">Photo Gallery</button></li>
            </ul>
          </div>

          {/* Ways to Help */}
          <div>
            <h4 className="text-white font-semibold font-display mb-4 uppercase tracking-wider text-sm">Get Involved</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onNavigate('donate')} className="hover:text-brand-green transition-colors">Make a Donation</button></li>
              <li><button onClick={() => onNavigate('volunteer')} className="hover:text-brand-green transition-colors">Become a Volunteer</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-brand-green transition-colors">Sponsor a Child</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-brand-green transition-colors">Contact Us</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold font-display mb-4 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-brand-green mr-2 flex-shrink-0" />
                <span>123 Hope Avenue, Sanctuary City, SC 45678</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-brand-green mr-2 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-brand-green mr-2 flex-shrink-0" />
                <span>hello@streetchildrenministries.org</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Street Children Ministries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
