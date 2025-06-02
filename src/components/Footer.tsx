import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-gradient-to-r from-amber-800 to-amber-900 text-white mt-8">
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <h3 className="text-lg font-bold mb-2">The Dead Quilter's Society</h3>
          <p className="text-amber-100 text-sm leading-relaxed">
            Celebrating the forgotten stories of extraordinary women who shaped Sedona's legacy through music, storytelling, and theatrical magic.
          </p>
        </div>
        
        <div>
          <h4 className="text-base font-semibold mb-2">Contact Information</h4>
          <div className="space-y-2">
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2 text-amber-300" />
              <div>
                <p className="text-amber-100 text-sm">booking@deadquilters.com</p>
                <p className="text-xs text-amber-200">Booking Inquiries</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2 text-amber-300" />
              <div>
                <p className="text-amber-100 text-sm">press@deadquilters.com</p>
                <p className="text-xs text-amber-200">Press & Media</p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2 text-amber-300" />
              <div>
                <p className="text-amber-100 text-sm">(928) 555-QUILT</p>
                <p className="text-xs text-amber-200">General Information</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-base font-semibold mb-2">Quick Links</h4>
          <div className="space-y-1">
            <a href="/digital-quilt" className="block text-amber-100 hover:text-white transition-colors text-sm">
              Digital Quilt
            </a>
            <a href="/bring-the-show" className="block text-amber-100 hover:text-white transition-colors text-sm">
              Our Show In Your Town
            </a>
            <div className="mt-2">
              <p className="text-xs text-amber-200">
                Follow our journey as we weave together the stories of Sedona's pioneering women.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-amber-700 mt-4 pt-4 text-center">
        <p className="text-amber-200 text-xs">
          &copy; 2024 The Dead Quilter's Society. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
