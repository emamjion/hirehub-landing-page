"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../public/Hirehub_Logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 sm:py-10 px-5 md:px-10">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Services Section */}
        <div>
          <Image src={logo} alt="logo" width={100} />
          {/* <p className="mt-3 text-[#4b5563]">
            HireHub, A recruiting platform that brings top talents
          </p> */}
          <div className="mt-3 flex items-center gap-4">
            {/* facebook */}
            <Link href={"www.facebook.com"}>
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
            </Link>

            {/* Twitter */}
            <Link href={"www.twitter.com"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.3em"
                height="1.3em"
                fill="none"
                viewBox="0 0 1200 1227"
              >
                <path
                  fill="#000"
                  d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
                />
              </svg>
            </Link>

            {/* Linkedin */}
            <Link href={"www.linkedin.com"}>
              <svg
                width="1.3em"
                height="1.3em"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
                viewBox="0 0 256 256"
              >
                <path
                  d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
                  fill="#0A66C2"
                />
              </svg>
            </Link>
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

<svg
  xmlns="http://www.w3.org/2000/svg"
  x="0px"
  y="0px"
  width="50"
  height="50"
  viewBox="0 0 50 50"
>
  <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
</svg>;
