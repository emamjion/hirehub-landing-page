"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../public/Hirehub_Logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 px-5 md:px-10">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Services Section */}
        <div>
          <Image src={logo} alt="logo" width={100} />
          <p className="mt-3 text-[#4b5563]">
            HireHub, A recruiting platform that brings top talents
          </p>
          <div className="mt-3 flex items-center gap-4">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 36 36"
                fill="url(#a)"
                height="1.5em"
                width="1.5em"
              >
                <defs>
                  <linearGradient x1="50%" x2="50%" y1="97.078%" y2="0%" id="a">
                    <stop offset="0%" stopColor="#0062E0" />
                    <stop offset="100%" stopColor="#19AFFF" />
                  </linearGradient>
                </defs>
                <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z" />
                <path
                  fill="#FFF"
                  d="m25 23 .8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
                />
              </svg>
            </span>
            <span>
            <svg viewBox="0 0 256 209" width="1.5em" height="1.5em" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M256 25.45c-9.42 4.177-19.542 7-30.166 8.27 10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45" fill="#55acee" /></svg>
            </span>
            <span>
              <svg
                width="1.5em"
                height="1.5em"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
                viewBox="0 0 256 256"
              >
                <path
                  d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
                  fill="#0A66C2"
                />
              </svg>
            </span>
          </div>
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
      <div className="border-t border-gray-700 mt-10 pt-5 flex flex-col md:flex-row justify-center items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} HireHub. All Rights Reserved.
        </p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <Link href="#" className="hover:text-gray-400">
            {/* <Facebook size={20} /> */}
          </Link>
          <Link href="#" className="hover:text-gray-400">
            {/* <Twitter size={20} /> */}
          </Link>
          <Link href="#" className="hover:text-gray-400">
            {/* <Linkedin size={20} /> */}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
