import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              PortalDev
            </Link>
            <p className="mt-4 text-gray-500 text-sm leading-relaxed">
              Platform modern untuk membangun masa depan digital Anda dengan teknologi terbaik dan desain yang elegan.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-6">Navigasi</h3>
            <ul className="space-y-4 text-sm font-medium text-gray-500">
              <li><Link to="/" className="hover:text-blue-600 transition-colors">Beranda</Link></li>
              <li><Link to="/profile" className="hover:text-blue-600 transition-colors">Profil</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Kontak</Link></li>
              <li><Link to="/register" className="hover:text-blue-600 transition-colors">Daftar</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-6">Bantuan</h3>
            <ul className="space-y-4 text-sm font-medium text-gray-500">
              <li className="hover:text-blue-600 cursor-pointer transition-colors">Pusat Bantuan</li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors">Ketentuan Layanan</li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors">Kebijakan Privasi</li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors">FAQ</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-6">Ikuti Kami</h3>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin, Mail].map((Icon, i) => (
                <button 
                  key={i}
                  className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-all border border-gray-100"
                >
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} PortalDev Studio. Dibuat dengan ❤️ untuk komunitas.
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-400 font-medium">
            <span>Indonesia</span>
            <span>English</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
