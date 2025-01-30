"use client";

import { Facebook, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 px-5 md:px-10">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Services Section */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Services</h6>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:underline">
                Branding
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Design
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Marketing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Advertisement
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Company</h6>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Help Center
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Legal</h6>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:underline">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Contact</h6>
          <ul className="space-y-2">
            <li>Email: contact@hirehub.com</li>
            <li>Phone: +123 456 7890</li>
            <li>Address: 123 Main St, City, Country</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-5 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} HireHub. All Rights Reserved.
        </p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <Link href="#" className="hover:text-gray-400">
            <Facebook size={20} />
          </Link>
          <Link href="#" className="hover:text-gray-400">
            <Twitter size={20} />
          </Link>
          <Link href="#" className="hover:text-gray-400">
            <Linkedin size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
