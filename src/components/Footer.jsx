import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <address className="not-italic">
              <p>123 Eco Street</p>
              <p>Green City, EC 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@ecocycle.com</p>
            </address>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <FaFacebook className="text-2xl hover:text-primary cursor-pointer" />
              <FaTwitter className="text-2xl hover:text-primary cursor-pointer" />
              <FaLinkedin className="text-2xl hover:text-primary cursor-pointer" />
              <FaInstagram className="text-2xl hover:text-primary cursor-pointer" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary">Careers</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2023 EcoCycle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
