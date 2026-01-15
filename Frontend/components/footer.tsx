
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Droplets } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-primary-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:rotate-12">
                <Droplets className="text-white w-6 h-6" />
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="font-outfit font-bold text-xl text-secondary-900">A1 DRY CLEAN</span>
                <span className="font-jakarta text-[10px] uppercase tracking-[0.2em] text-primary-600 font-bold">& Solution</span>
              </div>
            </Link>
            <p className="text-secondary-600 font-jakarta text-sm leading-relaxed">
              Premium fabric care and professional cleaning solutions in Bikaner.
              Restoring the freshness of your garments since 2018.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 hover:bg-primary-500 hover:text-white transition-all duration-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="font-outfit font-bold text-secondary-900 text-lg">Our Services</h3>
            <ul className="space-y-3">
              {['Dry Cleaning', 'Steam Press', 'Curtain Cleaning', 'Shoe Cleaning', 'Sofa Cleaning'].map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-secondary-600 hover:text-primary-600 transition-colors text-sm font-jakarta">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-outfit font-bold text-secondary-900 text-lg">Company</h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'About Us', 'Contact', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <Link href={`/${link === 'Home' ? '' : link.toLowerCase().replace(' ', '-')}`} className="text-secondary-600 hover:text-primary-600 transition-colors text-sm font-jakarta">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-outfit font-bold text-secondary-900 text-lg">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-4 w-4 text-primary-600" />
                </div>
                <a href="tel:9024800972" className="text-secondary-600 hover:text-primary-600 transition-colors text-sm font-jakarta">
                  +91-9024800972
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-4 w-4 text-primary-600" />
                </div>
                <a href="mailto:asofadryclean@gmail.com" className="text-secondary-600 hover:text-primary-600 transition-colors text-sm font-jakarta break-all">
                  asofadryclean@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-4 w-4 text-primary-600" />
                </div>
                <p className="text-secondary-600 text-sm font-jakarta leading-relaxed">
                  Ramdev Pathshala Ke Samne, Kamla Colony, Bikaner, Rajasthan 334001
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-secondary-500 text-sm font-jakarta">
            <p>© {currentYear} A1 Dry Clean & Solution. All rights reserved.</p>

            <div className="flex flex-col items-center md:items-end space-y-2">
              <span className="text-xs uppercase tracking-widest text-secondary-400">Designed by</span>
              <a
                href="https://techpotli.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity grayscale hover:grayscale-0"
              >
                <img
                  src="/New_Techpotli_Logo.png"
                  alt="TechPotli"
                  className="h-8 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
